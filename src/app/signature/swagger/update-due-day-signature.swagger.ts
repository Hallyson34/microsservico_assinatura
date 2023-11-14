import { ClassValidatorErrorResponse } from 'src/app/class-validator/error.response';

import { BadRequestException, applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { SignatureResponseDTO } from '../dto/response/signature.response.dto';

export function UpdateDueDaySignatureSwagger(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      description: 'Update a due day of existing signature by id.',
      tags: ['Update', 'Due', 'Day', 'Existing', 'Signature'],
    }),
    ApiOkResponse({ description: 'OK.', type: [SignatureResponseDTO] }),
    ApiBadRequestResponse({
      description: 'Something wrong with parameters.',
      content: {
        'application/json': {
          examples: {
            'Parameter ID empty': {
              value: ClassValidatorErrorResponse.create(
                'id should not be empty',
              ),
            },
            'Parameter id type must be a number': {
              value: ClassValidatorErrorResponse.create(
                'id must be a number string',
              ),
            },
            'Parameter due_day empty': {
              value: ClassValidatorErrorResponse.create(
                'due_day should not be empty',
              ),
            },
            'Parameter due_day must be a number': {
              value: ClassValidatorErrorResponse.create(
                'due_day must be a number conforming to the specified constraints',
              ),
            },
            'No corresponding entity by Id': {
              value: new BadRequestException(
                'The ID passed has no equivalent entity in database.',
              ),
            },
          },
        },
      },
    }),
  );
}
