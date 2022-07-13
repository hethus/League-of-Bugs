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
import { Classe } from './entities/classe.entity';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-classe.dto';
import { UpdateClassDto } from './dto/update-classe.dto';

@ApiTags('classes')
@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new classe',
  })
  create(@Body() dto: CreateClassDto): Promise<Classe> {
    return this.classesService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all classes',
  })
  findAll(): Promise<Classe[]> {
    return this.classesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a classe by id',
  })
  findOne(@Param('id') id: string): Promise<Classe> {
    return this.classesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a classe',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateClassDto,
  ): Promise<Classe> {
    return this.classesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a classe',
  })
  remove(@Param('id') id: string) {
    return this.classesService.remove(id);
  }
}
