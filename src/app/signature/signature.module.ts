import { Module } from '@nestjs/common';
import { SignatureController } from './signature.controller';
import { SignatureService } from './signature.service';
import { SignatureMockRepository } from '../repository/signature.mock.repository';
import { PlanModule } from '../plan/plan.module';

@Module({
  imports: [PlanModule],
  controllers: [SignatureController],
  providers: [
    SignatureService,
    {
      provide: 'SignatureMockRepository',
      useClass: SignatureMockRepository,
    },
  ],
})
export class SignatureModule {}
