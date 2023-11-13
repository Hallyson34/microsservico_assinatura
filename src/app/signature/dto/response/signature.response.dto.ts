import { ApiProperty } from '@nestjs/swagger';

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
}
