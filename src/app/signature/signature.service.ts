import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { SignatureStatusEnum } from '../enum/signature-status.enum';
import { SignatureMockRepository } from '../repository/signature.mock.repository';
import { SignatureResponseDTO } from '../signature/dto/response/signature.response.dto';
import { SignatureEntity } from './signature.entity';

@Injectable()
export class SignatureService {
  constructor(
    @Inject('SignatureMockRepository')
    private readonly signatureMockRepository: SignatureMockRepository,
  ) {}

  async createSignature(
    plan_id: number,
    user_id: number,
    period: number,
    due_day: number,
  ): Promise<SignatureResponseDTO> {
    const activeSignature =
      await this.signatureMockRepository.findActiveByUserId(user_id);

    if (activeSignature) {
      await this.signatureMockRepository.deactivate(activeSignature);
      period += this.calculateRemainingMonths(activeSignature.due_date);
    }

    return await this.signatureMockRepository.create(
      plan_id,
      user_id,
      period,
      due_day,
    );
  }

  async updateSignatureDueDay(
    signatureId: number,
    newDueDay: number,
  ): Promise<SignatureResponseDTO> {
    const signature = await this.signatureMockRepository.findById(signatureId);

    if (!signature) {
      throw new BadRequestException(
        'The ID passed has no equivalent entity in database.',
      );
    } else {
      signature.due_day = newDueDay;
      signature.due_date.setDate(newDueDay);
    }
    return await this.signatureMockRepository.updateDueDay(signature);
  }

  async deactivateSignature(id: number): Promise<SignatureResponseDTO> {
    const signature = await this.signatureMockRepository.findById(id);

    if (!signature) {
      throw new BadRequestException(
        'The ID passed has no equivalent entity in database.',
      );
    } else {
      signature.status = SignatureStatusEnum.INACTIVE;
    }

    return await this.signatureMockRepository.deactivate(signature);
  }

  async findSignatureById(id: number): Promise<SignatureResponseDTO> {
    return await this.signatureMockRepository.findById(id);
  }

  async findAllSignatureByUserId(
    userId: number,
  ): Promise<SignatureResponseDTO[]> {
    await this.verifyExpireSignature(userId);
    return await this.signatureMockRepository.findAllByUserId(userId);
  }

  async findActiveByUserId(userId: number): Promise<SignatureResponseDTO> {
    await this.verifyExpireSignature(userId);
    return await this.signatureMockRepository.findActiveByUserId(userId);
  }

  private calculateRemainingMonths(due_date: Date): number {
    const now: Date = new Date();
    const monthsDifference: number = now.getMonth() - due_date.getMonth();
    if (monthsDifference > 0) {
      return monthsDifference;
    }
    return 0;
  }

  private async verifyExpireSignature(userId: number): Promise<void> {
    const activeSignature: SignatureEntity =
      await this.signatureMockRepository.findActiveByUserId(userId);

    const now = new Date();
    if (activeSignature && now > activeSignature.due_date) {
      await this.deactivateSignature(activeSignature.id);
    }
  }
}
