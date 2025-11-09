import { TaskOption } from '../entities/task-option.entity';

export const taskOptionProviders = [
  {
    provide: 'TASK_OPTION_REPOSITORY',
    useValue: TaskOption,
  },
];
