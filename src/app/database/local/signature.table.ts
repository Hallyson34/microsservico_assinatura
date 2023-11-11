import { SignatureEntity } from '../../../app/signature/signature.entity';

export class SignatureTable {
  private nextId: number = 0;
  private data: SignatureEntity[] = [];

  public create(signatureEntity: SignatureEntity): SignatureEntity {
    this.data.push(signatureEntity);
    this.nextId++;
    return signatureEntity;
  }

  public update(signatureEntity: SignatureEntity): SignatureEntity {
    const indexToUpdate = this.data.findIndex(
      (signature) => signature.id === signatureEntity.id,
    );
    this.data[indexToUpdate] = signatureEntity;
    return signatureEntity;
  }

  public deleteById(id: number): SignatureEntity {
    const idToRemove = this.data.findIndex((plan) => plan.id === id);
    return this.data.splice(idToRemove, 1)[0];
  }

  public findById(id: number): SignatureEntity {
    return this.data[id];
  }

  public findAll(): SignatureEntity[] {
    return this.data;
  }

  public getNextId(): number {
    return this.nextId;
  }
}
