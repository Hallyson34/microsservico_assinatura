import { ClassValidatorErrorResponse } from 'src/app/class-validator/error.response';

import { BadRequestException, applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { PlanResponseDTO } from '../dto/response/plan.response.dto';

export function UpdatePlanSwagger(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      description: 'Update a existing Plan with new attributes name or value.',
      tags: ['Update', 'Plan', 'Name', 'Value'],
    }),
    ApiOkResponse({ description: 'OK.', type: [PlanResponseDTO] }),
    ApiBadRequestResponse({
      description: 'Something wrong with parameters.',
      content: {
        'application/json': {
          examples: {
            'No corresponding entity by Id': {
              value: new BadRequestException(
                'The ID passed has no equivalent entity in database.',
              ),
            },
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
            'Parameter name empty': {
              value: ClassValidatorErrorResponse.create(
                'name should not be empty',
              ),
            },
            'Parameterd value empty': {
              value: ClassValidatorErrorResponse.create(
                'value should not be empty',
              ),
            },
            'Parameter value must be a number': {
              value: ClassValidatorErrorResponse.create(
                'value must be a number conforming to the specified constraints',
              ),
            },
            'Parameter name must be a string': {
              value: ClassValidatorErrorResponse.create(
                'name must be a string',
              ),
            },
          },
        },
      },
    }),
  );
}
