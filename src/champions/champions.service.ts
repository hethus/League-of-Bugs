import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Champion } from './entities/champion.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';

@Injectable()
export class ChampionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateChampionDto): Promise<Champion | void> {
    return this.prisma.champion
      .create({ data: dto })
      .catch(this.handleErrorConstraintUnique);
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

  handleErrorConstraintUnique(error: Error): never {
    const splittedMessage = error.message.split('`');

    const errorMessage = `Input '${
      splittedMessage[splittedMessage.length - 2]
    }' is not respecting the UNIQUE constraint`;

    throw new UnprocessableEntityException(errorMessage);
  }

  findOne(id: string): Promise<Champion> {
    return this.verifyIdAndReturnUser(id);
  }

  async update(id: string, dto: UpdateChampionDto): Promise<Champion | void> {
    await this.verifyIdAndReturnUser(id);

    return this.prisma.champion
      .update({ where: { id }, data: dto })
      .catch(this.handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnUser(id);

    return this.prisma.champion.delete({ where: { id } });
  }
}
