import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreatePlanService } from './create-plan/create-plan.service';
import { CreatePlanRequestDTO } from './dto/request/create-plan.request.dto';
import { IdParamsRequestDTO } from './dto/request/id-params.request.dto';
import { UpdatePlanRequestDTO } from './dto/request/update-plan.request.dto';
import { PlanResponseDTO } from './dto/response/plan.response.dto';
import { FindPlanByIdService } from './find-plan-by-id/find-plan-by-id.service';
import { CreatePlanSwagger } from './swagger/create-plan.swagger';
import { UpdatePlanService } from './update-plan/update-plan.service';
import { UpdatePlanSwagger } from './swagger/update-plan.swagger';
import { FindPlanByIdSwagger } from './swagger/find-plan-by-id.swagger';
import { FindAllPlanSwagger } from './swagger/find-all-plan.swagger';
import { FindAllPlanService } from './find-all-plan/find-all-plan.service';
import { DeletePlanByIdSwagger } from './swagger/delete-plan-by-id.swagger';
import { DeletePlanByIdService } from './delete-plan-by-id/delete-plan-by-id.service';

@ApiTags('plan')
@Controller('plan')
export class PlanController {
  constructor(
    private readonly createPlanService: CreatePlanService,
    private readonly updatePlanService: UpdatePlanService,
    private readonly findPlanByIdService: FindPlanByIdService,
    private readonly findAllPlanService: FindAllPlanService,
    private readonly deletePlanByIdService: DeletePlanByIdService,
  ) {}

  @Post('create')
  @CreatePlanSwagger()
  async createPlan(
    @Body() requestDTO: CreatePlanRequestDTO,
  ): Promise<PlanResponseDTO> {
    return await this.createPlanService.execute(
      requestDTO.name,
      requestDTO.value,
    );
  }

  @Put('update/:id')
  @UpdatePlanSwagger()
  async updatePlan(
    @Param() params: IdParamsRequestDTO,
    @Body() requestDTO: UpdatePlanRequestDTO,
  ): Promise<PlanResponseDTO> {
    return await this.updatePlanService.execute(
      params.id,
      requestDTO.name,
      requestDTO.value,
    );
  }

  @Get('find-by-id/:id')
  @FindPlanByIdSwagger()
  async findById(
    @Param() params: IdParamsRequestDTO,
  ): Promise<PlanResponseDTO> {
    return await this.findPlanByIdService.execute(params.id);
  }

  @Get('find-all')
  @FindAllPlanSwagger()
  async findAll(): Promise<PlanResponseDTO[]> {
    return await this.findAllPlanService.execute();
  }

  @Delete('delete/:id')
  @DeletePlanByIdSwagger()
  async deleteById(@Param() params: IdParamsRequestDTO): Promise<PlanResponseDTO> {
    return await this.deletePlanByIdService.execute(params.id);
  }
}
