import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateSignatureRequestDTO } from './dto/request/create-signature.request.dto';
import { SignatureIdParamsRequestDTO } from './dto/request/signature-id-params.request.dto';
import { SignatureResponseDTO } from './dto/response/signature.response.dto';
import { SignatureService } from './signature.service';
import { CreateSignatureSwagger } from './swagger/create-signature.swagger';
import { FindSignatureByIdSwagger } from './swagger/find-signature-by-id.swagger';
import { FindSignaturesByUserIdSwagger } from './swagger/find-signature-by-user-id.swagger';
import { FindActivateSignatureByUserIdSwagger } from './swagger/find-activate-signature-by-user-id.swagger';
import { UpdateDueDaySignatureRequestDTO } from './dto/request/update-due-day-signature.request.dto';
import { UpdateDueDaySignatureSwagger } from './swagger/update-due-day-signature.swagger';
import { DeactivateSignatureByIdSwagger } from './swagger/deactivate-signature-by-id.swagger';

@ApiBearerAuth('JWT')
@ApiTags('signature')
@Controller('signature')
export class SignatureController {
  constructor(private readonly signatureService: SignatureService) {}

  @Post('create')
  @CreateSignatureSwagger()
  async createSignature(
    @Body() requestDTO: CreateSignatureRequestDTO,
  ): Promise<SignatureResponseDTO> {
    return await this.signatureService.createSignature(
      requestDTO.plan_id,
      requestDTO.user_id,
      requestDTO.period,
      requestDTO.due_day,
    );
  }

  @Put('update-due-day/:id')
  @UpdateDueDaySignatureSwagger()
  async updateDueDay(
    @Param() params: SignatureIdParamsRequestDTO,
    @Body() requestDTO: UpdateDueDaySignatureRequestDTO,
  ): Promise<SignatureResponseDTO> {
    return await this.signatureService.updateSignatureDueDay(
      params.id,
      requestDTO.due_day,
    );
  }

  @Get('find-by-id/:id')
  @FindSignatureByIdSwagger()
  async findById(
    @Param() params: SignatureIdParamsRequestDTO,
  ): Promise<SignatureResponseDTO> {
    return await this.signatureService.findSignatureById(params.id);
  }

  @Get('find-by-user-id/:id')
  @FindSignaturesByUserIdSwagger()
  async findByUserId(
    @Param() params: SignatureIdParamsRequestDTO,
  ): Promise<SignatureResponseDTO[]> {
    return await this.signatureService.findAllSignatureByUserId(params.id);
  }

  @Get('find-activate-by-user-id/:id')
  @FindActivateSignatureByUserIdSwagger()
  async findActivateByUserId(
    @Param() params: SignatureIdParamsRequestDTO,
  ): Promise<SignatureResponseDTO> {
    return await this.signatureService.findActiveByUserId(params.id);
  }

  @Delete('deactivate/:id')
  @DeactivateSignatureByIdSwagger()
  async deactivateById(
    @Param() params: SignatureIdParamsRequestDTO,
  ): Promise<SignatureResponseDTO> {
    return await this.signatureService.deactivateSignature(params.id);
  }
}
