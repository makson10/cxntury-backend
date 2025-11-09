import { Inject, Injectable } from '@nestjs/common';
import { Session } from '@/common/database/entities/session.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SessionService {
  constructor(
    @Inject('SESSION_REPOSITORY')
    private sessionRepository: typeof Session,
  ) {}

  async createSession(): Promise<Session> {
    const token = uuidv4();
    return this.sessionRepository.create({ token });
  }

  async findByToken(token: string): Promise<Session | null> {
    return this.sessionRepository.findOne({ where: { token } });
  }
}
