import { applyDecorators } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { PlanResponseDTO } from '../dto/response/plan.response.dto';

export function FindAllPlanSwagger(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      description: 'Busca todos os registros existentes',
      tags: ['Read','Find', 'Registro'],
    }),
    ApiOkResponse({ description: 'OK.', type: [PlanResponseDTO] })
  );
}
