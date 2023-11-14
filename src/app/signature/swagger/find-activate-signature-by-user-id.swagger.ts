import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

import { SignatureResponseDTO } from '../dto/response/signature.response.dto';

export function FindActivateSignatureByUserIdSwagger(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      description: 'Busca as assinaturas ativas do usuário informado',
      tags: ['Read', 'Find', 'Registro','User'],
    }),
    ApiOkResponse({ description: 'OK.', type: [SignatureResponseDTO] }),
  );
}
