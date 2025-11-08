import { Inject, Injectable } from '@nestjs/common';
import { Session } from '@/common/entities/session.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SessionService {
  constructor(
    @Inject('SESSION_REPOSITORY')
    private sessionModel: typeof Session,
  ) {}

  async createSession(): Promise<Session> {
    const token = uuidv4();
    return this.sessionModel.create({ token });
  }

  async findByToken(token: string): Promise<Session | null> {
    return this.sessionModel.findOne({ where: { token } });
  }
}
