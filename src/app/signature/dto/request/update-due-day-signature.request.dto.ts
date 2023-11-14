import { IsNotEmpty, IsNumber } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateDueDaySignatureRequestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  due_day: number;
}
