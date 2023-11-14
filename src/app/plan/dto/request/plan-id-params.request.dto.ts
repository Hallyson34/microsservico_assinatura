import { IsNotEmpty, IsNumberString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class PlanIdParamsRequestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  id: number;
}
