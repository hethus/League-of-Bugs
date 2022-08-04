import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';

export class PurchaseBpsDto {
  @IsUUID()
  @ApiProperty({
    description: 'The id of the user who want to purchase the bugpoints',
    example: 'a71a24b0-8a40-4b76-b895-0fb5f722abe6',
  })
  userId: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The amount of the bugpoints to purchase',
    example: 4800,
  })
  bugPointValue: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The quantity of Gift Cards to purchase',
    example: 1,
  })
  quantity: number;
}
