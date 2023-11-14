import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PlanService } from './plan.service';
import { CreatePlanRequestDTO } from './dto/request/create-plan.request.dto';
import { PlanIdParamsRequestDTO } from './dto/request/plan-id-params.request.dto';
import { UpdatePlanRequestDTO } from './dto/request/update-plan.request.dto';
import { PlanResponseDTO } from './dto/response/plan.response.dto';
import { CreatePlanSwagger } from './swagger/create-plan.swagger';
import { UpdatePlanSwagger } from './swagger/update-plan.swagger';
import { FindPlanByIdSwagger } from './swagger/find-plan-by-id.swagger';
import { FindAllPlanSwagger } from './swagger/find-all-plan.swagger';
import { DeletePlanByIdSwagger } from './swagger/delete-plan-by-id.swagger';

@ApiTags('plan')
@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Post('create')
  @CreatePlanSwagger()
  async createPlan(
    @Body() requestDTO: CreatePlanRequestDTO,
  ): Promise<PlanResponseDTO> {
    return await this.planService.cratePlan(
      requestDTO.name,
      requestDTO.value,
      requestDTO.description,
    );
  }

  @Put('update/:id')
  @UpdatePlanSwagger()
  async updatePlan(
    @Param() params: PlanIdParamsRequestDTO,
    @Body() requestDTO: UpdatePlanRequestDTO,
  ): Promise<PlanResponseDTO> {
    return await this.planService.updatePlan(
      params.id,
      requestDTO.name,
      requestDTO.value,
      requestDTO.description,
    );
  }

  @Get('find-by-id/:id')
  @FindPlanByIdSwagger()
  async findById(
    @Param() params: PlanIdParamsRequestDTO,
  ): Promise<PlanResponseDTO> {
    return await this.planService.findPlanById(params.id);
  }

  @Get('find-all')
  @FindAllPlanSwagger()
  async findAll(): Promise<PlanResponseDTO[]> {
    return await this.planService.findAllPlan();
  }

  @Delete('delete/:id')
  @DeletePlanByIdSwagger()
  async deleteById(
    @Param() params: PlanIdParamsRequestDTO,
  ): Promise<PlanResponseDTO> {
    return await this.planService.deletePlan(params.id);
  }
}
