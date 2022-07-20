import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateBugpointDto {
  @IsNotEmpty()
  @IsInt()
  @ApiProperty({
    description: 'The price of the bugpoint',
    example: 4800,
  })
  price: number;
}
