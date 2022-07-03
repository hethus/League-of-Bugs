import { Injectable } from '@nestjs/common';
import { Champion } from './entities/champion.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';

@Injectable()
export class ChampionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateChampionDto) {
    return 'This action adds a new champion';
  }

  findAll(): Promise<Champion[]> {
    return this.prisma.champion.findMany();
  }

  findOne(id: string): Promise<Champion> {
    return this.prisma.champion.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateChampionDto) {
    return `This action updates a #${id} champion`;
  }

  remove(id: string) {
    return `This action removes a #${id} champion`;
  }
}
