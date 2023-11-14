import { ClassValidatorErrorResponse } from 'src/app/class-validator/error.response';

import { BadRequestException, applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { SignatureResponseDTO } from '../dto/response/signature.response.dto';

export function DeactivateSignatureByIdSwagger(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      description: 'Deactivate a existing signature by your own id.',
      tags: ['Deactivate', 'Existing', 'Signature', 'Id'],
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
