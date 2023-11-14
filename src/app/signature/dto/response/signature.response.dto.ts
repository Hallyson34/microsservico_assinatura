import { ApiProperty } from '@nestjs/swagger';
import { SignatureStatusEnum } from '../../../../app/enum/signature-status.enum';

export class SignatureResponseDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  plan_id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  period: number;

  @ApiProperty()
  due_day: number;

  @ApiProperty()
  status: SignatureStatusEnum;

  @ApiProperty()
  due_date: Date;

  @ApiProperty()
  created_date: Date;
}
