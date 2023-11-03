import { Injectable, Inject } from '@nestjs/common';
import { PlanMockRepository } from 'src/app/repository/plan.mock.repository';
import { PlanResponseDTO } from '../dto/response/plan.response.dto';


@Injectable()
export class DeletePlanByIdService {
    constructor(
        @Inject('PlanMockRepository')
        private readonly planMockRepository: PlanMockRepository,
        ) {}

  async execute(id: number): Promise<PlanResponseDTO> {
    return await this.planMockRepository.deleteById(id);
  }}
