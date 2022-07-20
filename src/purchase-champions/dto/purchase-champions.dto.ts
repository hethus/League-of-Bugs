import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class PurchaseChampionDto {
  @IsUUID()
  @ApiProperty({
    description: 'The id of the user who want to purchase the champion',
    example: 'a71a24b0-8a40-4b76-b895-0fb5f722abe6',
  })
  userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the champion to purchase',
    example: 'Aatrox',
  })
  championName: string;
}
