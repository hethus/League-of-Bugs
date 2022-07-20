import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
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

  async findAll(query: Partial<Champion>): Promise<Champion[]> {
    const champions: Champion[] = await this.prisma.champion
      .findMany({ where: query })
      .catch(() => {
        throw new UnprocessableEntityException('Invalid query');
      });

    if (champions.length === 0) {
      throw new NotFoundException('No champions found with this query');
    }

    return champions;
  }

  async verifyIdAndReturnChampion(id: string): Promise<Champion> {
    const champion: Champion = await this.prisma.champion.findUnique({
      where: { id },
    });

    if (!champion) {
      throw new NotFoundException(`Champion id '${id}' not found`);
    }

    return champion;
  }

  findOne(id: string): Promise<Champion> {
    return this.verifyIdAndReturnChampion(id);
  }

  async update(id: string, dto: UpdateChampionDto): Promise<Champion | void> {
    await this.verifyIdAndReturnChampion(id);

    return this.prisma.champion
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnChampion(id);

    return this.prisma.champion.delete({ where: { id } });
  }
}
