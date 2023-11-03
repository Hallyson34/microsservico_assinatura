import { Module } from '@nestjs/common';

import { PlanMockRepository } from '../repository/plan.mock.repository';
import { CreatePlanService } from './create-plan/create-plan.service';
import { DeletePlanByIdService } from './delete-plan-by-id/delete-plan-by-id.service';
import { FindAllPlanService } from './find-all-plan/find-all-plan.service';
import { FindPlanByIdService } from './find-plan-by-id/find-plan-by-id.service';
import { PlanController } from './plan.controller';
import { UpdatePlanService } from './update-plan/update-plan.service';

@Module({
  controllers: [PlanController],
  providers: [
    CreatePlanService,
    UpdatePlanService,
    FindAllPlanService,
    FindPlanByIdService,
    DeletePlanByIdService,
    {
      provide: 'PlanMockRepository',
      useClass: PlanMockRepository,
    },
  ],
})
export class PlanModule {}
