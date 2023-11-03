import { ClassValidatorErrorResponse } from 'src/app/class-validator/error.response';

import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { PlanResponseDTO } from '../dto/response/plan.response.dto';

export function FindPlanByIdSwagger(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      description: 'Find an Plan by your id.',
      tags: ['Find', 'Plan', 'Id'],
    }),
    ApiOkResponse({ description: 'OK.', type: [PlanResponseDTO] }),
    ApiBadRequestResponse({
      description: 'Something wrong with parameters.',
      content: {
        'application/json': {
          examples: {
            'Parameter id empty': {
              value: ClassValidatorErrorResponse.create(
                'id should not be empty',
              ),
            },
            'Parameter id type must be a number': {
              value: ClassValidatorErrorResponse.create(
                'id must be a number string',
              ),
            },
          },
        },
      },
    }),
  );
}
