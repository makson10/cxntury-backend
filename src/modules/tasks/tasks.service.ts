import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Task } from '@/common/database/entities/task.entity';
import { TaskOption } from '@/common/database/entities/task-option.entity';
import { TaskAnswer } from '@/common/database/entities/task-answer.entity';
import { Session } from '@/common/database/entities/session.entity';

@Injectable()
export class TasksService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: typeof Task,

    @Inject('TASK_OPTION_REPOSITORY')
    private taskOptionRepository: typeof TaskOption,

    @Inject('TASK_ANSWER_REPOSITORY')
    private taskAnswerRepository: typeof TaskAnswer,

    @Inject('SESSION_REPOSITORY')
    private sessionRepository: typeof Session,
  ) {}

  async getAllTasks() {
    return this.taskRepository.findAll({
      include: [
        {
          model: TaskOption,
          as: 'options',
          attributes: ['id', 'text', 'isCorrect'],
        },
      ],
      attributes: ['id', 'instruction'],
    });
  }

  async submitAnswer(taskId: number, optionId: number, token: string) {
    const session = await this.sessionRepository.findOne({ where: { token } });
    if (!session) {
      throw new UnauthorizedException('Invalid session token');
    }

    const task = await this.taskRepository.findByPk(taskId);
    if (!task) {
      throw new NotFoundException('Task not found');
    }

    const option = await this.taskOptionRepository.findOne({
      where: { id: optionId, taskId },
    });
    if (!option) {
      throw new NotFoundException('Option not found for this task');
    }

    const existingAnswer = await this.taskAnswerRepository.findOne({
      where: { taskId, sessionId: session.id },
    });

    if (existingAnswer) {
      await existingAnswer.update({ optionId });
    } else {
      await this.taskAnswerRepository.create({
        taskId,
        optionId,
        sessionId: session.id,
      });
    }

    return {
      correct: option.isCorrect,
    };
  }
}
