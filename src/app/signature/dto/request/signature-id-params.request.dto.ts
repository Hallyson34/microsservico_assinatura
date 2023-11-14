import { IsNotEmpty, IsNumberString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class SignatureIdParamsRequestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  id: number;
}
