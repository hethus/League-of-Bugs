import { Injectable, NotFoundException } from '@nestjs/common';
import { Champion } from './entities/champion.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';

@Injectable()
export class ChampionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateChampionDto): Promise<Champion | void> {
    return this.prisma.champion
      .create({ data: dto })
      .catch(handleErrorConstraintUnique);
  }

  findAll(): Promise<Champion[]> {
    return this.prisma.champion.findMany();
  }

  async verifyIdAndReturnUser(id: string): Promise<Champion> {
    const champion: Champion = await this.prisma.champion.findUnique({
      where: { id },
    });

    if (!champion) {
      throw new NotFoundException(`id '${id}' not found`);
    }
    return champion;
  }

  findOne(id: string): Promise<Champion> {
    return this.verifyIdAndReturnUser(id);
  }

  async update(id: string, dto: UpdateChampionDto): Promise<Champion | void> {
    await this.verifyIdAndReturnUser(id);

    return this.prisma.champion
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnUser(id);

    return this.prisma.champion.delete({ where: { id } });
  }
}
