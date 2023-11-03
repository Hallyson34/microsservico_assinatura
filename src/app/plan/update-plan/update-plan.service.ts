import { PlanMockRepository } from 'src/app/repository/plan.mock.repository';

import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { PlanResponseDTO } from '../dto/response/plan.response.dto';

@Injectable()
export class UpdatePlanService {
  constructor(
    @Inject('PlanMockRepository')
    private readonly planMockRepository: PlanMockRepository,
  ) {}

  async execute(
    id: number,
    name: string,
    value: number,
  ): Promise<PlanResponseDTO> {
    const existingEntity = await this.planMockRepository.findById(id);

    if (!existingEntity) {
      throw new BadRequestException(
        'The ID passed has no equivalent entity in database.',
      );
    } else {
      existingEntity.name = name ? name : existingEntity.name;
      existingEntity.value = value ? value : existingEntity.value;
    }

    return await this.planMockRepository.update(existingEntity);
  }
}
