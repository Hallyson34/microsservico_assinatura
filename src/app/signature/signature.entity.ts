import { SignatureStatusEnum } from '../enum/signature-status.enum';

export class SignatureEntity {
  id: number;
  plan_id: number;
  user_id: number;
  period: number;
  due_day: number;
  status: SignatureStatusEnum;
  due_date: Date;
  created_date: Date;

  static create(
    id: number,
    plan_id: number,
    user_id: number,
    period: number,
    due_day: number,
  ) {
    const entity = new SignatureEntity();
    entity.id = id;
    entity.plan_id = plan_id;
    entity.user_id = user_id;
    entity.period = period;
    entity.due_day = due_day;
    entity.status = SignatureStatusEnum.ACTIVE;
    entity.created_date = new Date();
    entity.due_date = this.calculateDueDate(due_day, period);
    return entity;
  }

  static calculateDueDate(due_day: number, period: number): Date {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + period, due_day + 2);
  }
}
