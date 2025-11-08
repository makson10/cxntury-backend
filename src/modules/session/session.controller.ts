import { Controller, Get } from '@nestjs/common';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get()
  async getSession() {
    const session = await this.sessionService.createSession();
    return { token: session.token };
  }
}
