import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClassDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the class',
    example: 'Mage',
  })
  name: string;
}
