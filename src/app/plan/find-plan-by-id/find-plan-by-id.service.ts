import { PlanMockRepository } from 'src/app/repository/plan.mock.repository';

import { Inject, Injectable } from '@nestjs/common';

import { PlanResponseDTO } from '../dto/response/plan.response.dto';

@Injectable()
export class FindPlanByIdService {
  constructor(
    @Inject('PlanMockRepository')
    private readonly planMockRepository: PlanMockRepository,
  ) {}

  async execute(id: number): Promise<PlanResponseDTO> {
    return await this.planMockRepository.findById(id);
  }
}
