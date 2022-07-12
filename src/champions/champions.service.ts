import { Injectable, NotFoundException } from '@nestjs/common';
import { Champion } from './entities/champion.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { FavoriteChampionDto } from '../favorites/dto/favorite.dto';
import { User } from 'src/users/entity/users.entity';
import { Favorite } from 'src/favorites/entities/favorite.entity';
import { Prisma } from '@prisma/client';

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

  async favorite(dto: FavoriteChampionDto): Promise<Favorite | void> {
    const champ: Champion = await this.prisma.champion.findUnique({
      where: { name: dto.championName },
    });

    if (!champ) {
      throw new NotFoundException(`champion '${dto.championName}' not found`);
    }

    const user: User = await this.prisma.user.findUnique({
      where: { id: dto.userId },
    });

    if (!user) {
      throw new NotFoundException(`user id '${dto.userId}' not found`);
    }

    const champion: Champion = await this.prisma.champion.findUnique({
      where: { name: dto.championName },
    });

    if (!champion) {
      throw new NotFoundException(
        `champion name '${dto.championName}' not found`,
      );
    }

    //criar verificação se a pessoa não tem o champ comprado, se n tiver, n pode favoritar

    const data: Prisma.FavoriteCreateInput = {
      user: {
        connect: {
          id: dto.userId,
        },
      },
      champion: {
        connect: {
          name: dto.championName,
        },
      },
    };

    return this.prisma.favorite.create({ data });
  }

  async unfav(id: string) {
    await this.verifyIdAndReturnUser(id);

    return this.prisma.favorite.delete({
      where: { id },
    });
  }

  async findUsersLiked(id: string) {
    const champ: Champion = await this.verifyIdAndReturnUser(id);

    return this.prisma.favorite.findMany({
      where: { championName: champ.name },
      select: {
        championName: true,
        user: { select: { id: true, name: true, email: true } },
      },
    });
  }
}
