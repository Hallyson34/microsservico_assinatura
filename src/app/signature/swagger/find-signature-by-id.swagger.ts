import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

import { SignatureResponseDTO } from '../dto/response/signature.response.dto';

export function FindSignatureByIdSwagger(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      description: 'Busca os dados da assinatura informada',
      tags: ['Read', 'Find', 'Registro'],
    }),
    ApiOkResponse({ description: 'OK.', type: [SignatureResponseDTO] }),
  );
}
