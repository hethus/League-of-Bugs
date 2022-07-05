import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateChampionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the champion',
    example: 'Aatrox',
  })
  name: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'The price of the champion',
    example: 4800,
  })
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The title of the champion',
    example: 'the Darkin Blade',
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The description of the champion',
    example:
      'Aatrox is a legendary warrior known for his Furion, thestaff of life.',
  })
  description: string;

  @IsUrl()
  @ApiProperty({
    description: 'The image of the champion',
    example:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
  })
  imageUrl: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The difficulty of the champion',
    example: 'medium',
  })
  difficulty: string;

  @IsUrl()
  @ApiProperty({
    description: 'the URL of some video about the champion',
    example:
      'https://www.youtube.com/watch?v=soQ9bukwAPs&ab_channel=LeagueofLegendsBR',
  })
  youTubeUrl: string;
}
