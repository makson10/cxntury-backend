import { Task } from '../entities/task.entity';

export const taskProviders = [
  {
    provide: 'TASK_REPOSITORY',
    useValue: Task,
  },
];
