import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsPositive,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @ApiProperty({
    description: 'User name',
    example: 'John Doe',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'User email',
    example: 'email@email.com',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  @ApiProperty({
    description:
      'User password (min 8 chars, max 20 chars, at least one number, one uppercase letter and one lowercase letter)',
    example: 'Password123',
  })
  password: string;

  @IsString()
  @MinLength(11)
  @MaxLength(11)
  @ApiProperty({
    description: 'User CPF (only numbers)',
    example: '12345678901',
  })
  cpf: string;

  @IsBoolean()
  @ApiProperty({
    description: 'User is admin?',
    example: true,
  })
  isAdmin: boolean;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'User BugPoints',
    example: 0,
  })
  bugPoint: number;
}
