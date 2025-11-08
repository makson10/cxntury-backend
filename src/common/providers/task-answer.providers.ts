import { TaskAnswer } from '../entities/task-answer.entity';

export const taskAnswerProviders = [
  {
    provide: 'TASK_ANSWER_REPOSITORY',
    useValue: TaskAnswer,
  },
];
