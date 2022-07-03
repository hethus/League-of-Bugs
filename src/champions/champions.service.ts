import { Injectable } from '@nestjs/common';
import { Champion } from './entities/champion.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';

@Injectable()
export class ChampionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateChampionDto): Promise<Champion> {
    return this.prisma.champion.create({ data: dto });
  }

  findAll(): Promise<Champion[]> {
    return this.prisma.champion.findMany();
  }

  findOne(id: string): Promise<Champion> {
    return this.prisma.champion.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateChampionDto): Promise<Champion> {
    return this.prisma.champion.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.champion.delete({ where: { id } });
  }
}
