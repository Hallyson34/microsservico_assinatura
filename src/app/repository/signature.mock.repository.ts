import { SignatureEntity } from '../signature/signature.entity';
import SignatureRepositoryInterface from '../signature/signature.repository';
import { LocalDatabase } from '../database/local/localDatabase';

export class SignatureMockRepository implements SignatureRepositoryInterface {
  constructor(private localDatabase = LocalDatabase.createConnection()) {}

  async create(
    plan_id: number,
    user_id: number,
    period: number,
    due_day: number,
  ): Promise<SignatureEntity> {
    const id = this.localDatabase.signature.getNextId();
    const entity: SignatureEntity = SignatureEntity.create(
      id,
      plan_id,
      user_id,
      period,
      due_day,
    );
    return this.localDatabase.signature.create(entity);
  }
  async updateDueDay(
    signatureEntity: SignatureEntity,
  ): Promise<SignatureEntity> {
    return this.localDatabase.signature.update(signatureEntity);
  }
  async deactivate(signatureEntity: SignatureEntity): Promise<SignatureEntity> {
    return this.localDatabase.signature.update(signatureEntity);
  }
  async findById(id: number): Promise<SignatureEntity> {
    return this.localDatabase.signature.findById(id);
  }
  async findAllByUserId(userId: number): Promise<SignatureEntity[]> {
    return this.localDatabase.signature.findAllByUserId(userId);
  }
  async findActiveByUserId(userId: number): Promise<SignatureEntity> {
    return this.localDatabase.signature.findActiveByUserId(userId);
  }
}
