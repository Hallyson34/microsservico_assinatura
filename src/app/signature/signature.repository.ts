import { SignatureEntity } from './signature.entity';

export default interface SignatureRepositoryInterface {
  create(
    plan_id: number,
    user_id: number,
    period: number,
    due_day: number,
  ): Promise<SignatureEntity>;
  updateDueDay(
    signatureId: number,
    newDueDay: number,
  ): Promise<SignatureEntity>;
  deactivateById(id: number): Promise<SignatureEntity>;
  findById(id: number): Promise<SignatureEntity>;
  findAllByUserId(userId: number): Promise<SignatureEntity[]>;
}
