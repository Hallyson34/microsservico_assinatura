import { ClassValidatorErrorResponse } from 'src/app/class-validator/error.response';

import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { PlanResponseDTO } from '../dto/response/plan.response.dto';

export function DeletePlanByIdSwagger(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      description: 'Deleta um registro pelo seu ID',
      tags: ['Delete', 'Registro', 'Id'],
    }),
    ApiOkResponse({ description: 'OK.', type: [PlanResponseDTO] }),
    ApiBadRequestResponse({
      description: 'Something wrong with parameters.',
      content: {
        'application/json': {
          examples: {
            'Parâmetro ID não informado': {
              value: ClassValidatorErrorResponse.create(
                'ID não pode ser vazio!',
              ),
            },
            'O parâmetro ID precisa ser um número': {
              value: ClassValidatorErrorResponse.create(
                'ID precisa ser do tipo number',
              ),
            },
          },
        },
      },
    }),
  );
}
