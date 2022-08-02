import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateBugpointDto {
  @IsNotEmpty()
  @IsInt()
  @ApiProperty({
    description: 'The price of the bugpoint',
    example: 4800,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'The image url of the bugpoint',
    example: 'https://www.example.com/image.png',
  })
  imageUrl: string;
}
