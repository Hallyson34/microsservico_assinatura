import { ClassValidatorErrorResponse } from 'src/app/class-validator/error.response';

import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { PlanResponseDTO } from '../dto/response/plan.response.dto';

export function CreatePlanSwagger(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      description: 'Create a new Plan with attributes name and value.',
      tags: ['Create', 'Plan', 'Name', 'Value'],
    }),
    ApiOkResponse({ description: 'OK.', type: [PlanResponseDTO] }),
    ApiBadRequestResponse({
      description: 'Something wrong with parameters.',
      content: {
        'application/json': {
          examples: {
            'Parameter name empty': {
              value: ClassValidatorErrorResponse.create(
                'name should not be empty',
              ),
            },
            'Parameter name must be a string': {
              value: ClassValidatorErrorResponse.create(
                'name must be a string',
              ),
            },
            'Parameterd value empty': {
              value: ClassValidatorErrorResponse.create(
                'value should not be empty',
              ),
            },
            'Parameter description empty': {
              value: ClassValidatorErrorResponse.create(
                'description should not be empty',
              ),
            },
            'Parameter description must be a string': {
              value: ClassValidatorErrorResponse.create(
                'description must be a string',
              ),
            },
            'Parameter value must be a number': {
              value: ClassValidatorErrorResponse.create(
                'value must be a number conforming to the specified constraints',
              ),
            },
          },
        },
      },
    }),
  );
}
