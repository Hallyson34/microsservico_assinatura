import { Injectable, Inject } from '@nestjs/common';
import { PlanResponseDTO } from '../dto/response/plan.response.dto';
import { PlanMockRepository } from 'src/app/repository/plan.mock.repository';

@Injectable()
export class FindAllPlanService {
    constructor(
        @Inject('PlanMockRepository')
        private readonly planMockRepository: PlanMockRepository,
      ) {}
    
      async execute(): Promise<PlanResponseDTO[]> {
        return await this.planMockRepository.findAll();
      }
}
