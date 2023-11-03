import { Inject, Injectable } from '@nestjs/common';

import { PlanMockRepository } from '../../repository/plan.mock.repository';
import { PlanResponseDTO } from '../dto/response/plan.response.dto';

@Injectable()
export class CreatePlanService {
  constructor(
    @Inject('PlanMockRepository')
    private readonly planMockRepository: PlanMockRepository,
  ) {}

  async execute(name: string, value: number): Promise<PlanResponseDTO> {
    return await this.planMockRepository.create(name, value);
  }
}
