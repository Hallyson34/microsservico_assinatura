import { ClassValidatorErrorResponse } from 'src/app/class-validator/error.response';

import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { SignatureResponseDTO } from '../dto/response/signature.response.dto';

export function CreateSignatureSwagger(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      description:
        'Create a new Signature, if exists an active, sum the remaining months to the new signature.',
      tags: ['Create', 'Signature'],
    }),
    ApiOkResponse({ description: 'OK.', type: [SignatureResponseDTO] }),
    ApiBadRequestResponse({
      description: 'Something wrong with parameters.',
      content: {
        'application/json': {
          examples: {
            'Some Parameter empty': {
              value: ClassValidatorErrorResponse.create(
                '[parameter] should not be empty',
              ),
            },
            'Some Parameter must be a number': {
              value: ClassValidatorErrorResponse.create(
                '[parameter] must be a number conforming to the specified constraints',
              ),
            },
          },
        },
      },
    }),
  );
}
