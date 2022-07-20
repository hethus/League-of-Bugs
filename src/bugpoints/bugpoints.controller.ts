import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BugpointsService } from './bugpoints.service';
import { CreateBugpointDto } from './dto/create-bugpoint.dto';
import { UpdateBugpointDto } from './dto/update-bugpoint.dto';
import { Bugpoint } from './entities/bugpoint.entity';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@ApiTags('bugpoints (adm)')
@ApiBearerAuth()
@Controller('bugpoints')
export class BugpointsController {
  constructor(private readonly bugpointsService: BugpointsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new Gift Card of Bug Points',
  })
  create(@Body() dto: CreateBugpointDto): Promise<Bugpoint | void> {
    return this.bugpointsService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Find all Gift Cards of Bug Points',
  })
  findAll(): Promise<Bugpoint[]> {
    return this.bugpointsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find Gift Card of Bug Points by id',
  })
  findOne(@Param('id') id: string): Promise<Bugpoint> {
    return this.bugpointsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update Gift Card of Bug Points',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateBugpointDto,
  ): Promise<Bugpoint | void> {
    return this.bugpointsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete Gift Card of Bug Points by id',
  })
  remove(@Param('id') id: string) {
    return this.bugpointsService.remove(id);
  }
}
