import { ApiProperty } from '@nestjs/swagger';

export class PlanResponseDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  value: number;
}
