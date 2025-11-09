import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { DatabaseModule } from '@/common/database/database.module';
import { sessionProviders } from '@/common/database/providers/session.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SessionController],
  providers: [SessionService, ...sessionProviders],
  exports: [SessionService],
})
export class SessionModule {}
