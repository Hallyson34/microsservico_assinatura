import { IsNotEmpty, IsNumberString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class IdParamsRequestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  id: number;
}
