import { PartialType } from '@nestjs/swagger';
import { CreateBugpointDto } from './create-bugpoint.dto';

export class UpdateBugpointDto extends PartialType(CreateBugpointDto) {}
