import { Module } from '@nestjs/common';

import { PlanMockRepository } from '../repository/plan.mock.repository';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';

@Module({
  controllers: [PlanController],
  providers: [
    PlanService,
    {
      provide: 'PlanMockRepository',
      useClass: PlanMockRepository,
    },
  ],
})
export class PlanModule {}
