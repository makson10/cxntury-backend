import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { SubmitAnswerDto } from './dto/submit-answer.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post(':taskId/answer')
  async submitAnswer(
    @Param('taskId') taskId: string,
    @Body() submitAnswerDto: SubmitAnswerDto,
    @Headers('authorization') authorization: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new UnauthorizedException('Bearer token required');
    }

    const token = authorization.replace('Bearer ', '');
    return this.tasksService.submitAnswer(
      parseInt(taskId, 10),
      submitAnswerDto.optionId,
      token,
    );
  }
}
