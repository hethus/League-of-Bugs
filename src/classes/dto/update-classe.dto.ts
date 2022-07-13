import { PartialType } from '@nestjs/swagger';
import { CreateClassDto } from './create-classe.dto';

export class UpdateClassDto extends PartialType(CreateClassDto) {}
