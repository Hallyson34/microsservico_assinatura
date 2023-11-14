import { IsNotEmpty, IsNumber } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateSignatureRequestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  plan_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  period: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  due_day: number;
}
