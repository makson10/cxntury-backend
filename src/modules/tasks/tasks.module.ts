import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { SessionModule } from '../session/session.module';
import { DatabaseModule } from '../database/database.module';
import { sessionProviders } from '@/common/providers/session.providers';
import { taskProviders } from '@/common/providers/task.providers';
import { taskAnswerProviders } from '@/common/providers/task-answer.providers';
import { taskOptionProviders } from '@/common/providers/task-option.providers';

@Module({
  imports: [DatabaseModule, SessionModule],
  controllers: [TasksController],
  providers: [
    TasksService,
    ...sessionProviders,
    ...taskProviders,
    ...taskAnswerProviders,
    ...taskOptionProviders,
  ],
})
export class TasksModule {}
