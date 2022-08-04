import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsUrl } from 'class-validator';

export class CreateBugpointDto {
  @IsNotEmpty()
  @IsInt()
  @ApiProperty({
    description: 'The amount of the bugpoint',
    example: 4800,
  })
  value: number;

  @IsUrl()
  @ApiProperty({
    description: 'The image url of the bugpoint',
    example: 'https://www.example.com/image.png',
  })
  imageUrl: string;

  @IsNotEmpty()
  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })
  @ApiProperty({
    description: 'The price of the bugpoint',
    example: 15.55,
  })
  money: number;
}
