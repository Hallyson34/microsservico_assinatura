import { SignatureEntity } from '../signature/signature.entity';
import SignatureRepositoryInterface from '../signature/signature.repository';

export class SignatureMockRepository implements SignatureRepositoryInterface {
  create(
    plan_id: number,
    user_id: number,
    period: number,
    due_day: number,
  ): Promise<SignatureEntity> {
    throw new Error(
      `Method not implemented. ${plan_id + user_id + period + due_day}`,
    );
  }
  updateDueDay(
    signatureId: number,
    newDueDay: number,
  ): Promise<SignatureEntity> {
    throw new Error(`Method not implemented. ${signatureId + newDueDay}`);
  }
  deactivateById(id: number): Promise<SignatureEntity> {
    throw new Error(`Method not implemented. ${id}`);
  }
  findById(id: number): Promise<SignatureEntity> {
    throw new Error(`Method not implemented. ${id}`);
  }
  findAllByUserId(userId: number): Promise<SignatureEntity[]> {
    throw new Error(`Method not implemented. ${userId}`);
  }
}
