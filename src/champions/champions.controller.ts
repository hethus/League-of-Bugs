import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ChampionsService } from './champions.service';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';
import { Champion } from './entities/champion.entity';

@ApiTags('Champions')
@Controller('champions')
export class ChampionsController {
  constructor(private readonly championsService: ChampionsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new champion',
  })
  create(@Body() dto: CreateChampionDto): Promise<Champion | void> {
    return this.championsService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Find all champions',
  })
  findAll(): Promise<Champion[]> {
    return this.championsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find champion by id',
  })
  findOne(@Param('id') id: string): Promise<Champion> {
    return this.championsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update champion',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateChampionDto,
  ): Promise<Champion | void> {
    return this.championsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete champion by id',
  })
  remove(@Param('id') id: string) {
    return this.championsService.remove(id);
  }
}
