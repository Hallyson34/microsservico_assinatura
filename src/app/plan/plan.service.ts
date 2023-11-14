import { Inject, Injectable, BadRequestException } from '@nestjs/common';

import { PlanMockRepository } from '../repository/plan.mock.repository';
import { PlanResponseDTO } from './dto/response/plan.response.dto';

@Injectable()
export class PlanService {
  constructor(
    @Inject('PlanMockRepository')
    private readonly planMockRepository: PlanMockRepository,
  ) {}

  async cratePlan(
    name: string,
    value: number,
    description: string,
  ): Promise<PlanResponseDTO> {
    return await this.planMockRepository.create(name, value, description);
  }
  async deletePlan(id: number): Promise<PlanResponseDTO> {
    return await this.planMockRepository.deleteById(id);
  }
  async findAllPlan(): Promise<PlanResponseDTO[]> {
    return await this.planMockRepository.findAll();
  }
  async findPlanById(id: number): Promise<PlanResponseDTO> {
    return await this.planMockRepository.findById(id);
  }
  async updatePlan(
    id: number,
    name: string,
    value: number,
    description: string,
  ): Promise<PlanResponseDTO> {
    const existingEntity = await this.planMockRepository.findById(id);

    if (!existingEntity) {
      throw new BadRequestException(
        'The ID passed has no equivalent entity in database.',
      );
    } else {
      existingEntity.name = name ? name : existingEntity.name;
      existingEntity.value = value ? value : existingEntity.value;
      existingEntity.description = description
        ? description
        : existingEntity.description;
    }

    return await this.planMockRepository.update(existingEntity);
  }
}
