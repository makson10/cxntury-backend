import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Task } from './task.entity';
import { TaskOption } from './task-option.entity';
import { Session } from './session.entity';

@Table({
  tableName: 'task_answers',
  timestamps: true,
})
export class TaskAnswer extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => Task)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'task_id',
  })
  declare taskId: number;

  @ForeignKey(() => TaskOption)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'option_id',
  })
  declare optionId: number;

  @ForeignKey(() => Session)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'session_id',
  })
  declare sessionId: number;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    field: 'created_at',
  })
  declare createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    field: 'updated_at',
  })
  declare updatedAt: Date;

  @BelongsTo(() => Task)
  declare task: Task;

  @BelongsTo(() => TaskOption)
  declare option: TaskOption;

  @BelongsTo(() => Session)
  declare session: Session;
}
