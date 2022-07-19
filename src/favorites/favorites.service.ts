import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Champion } from 'src/champions/entities/champion.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/users/entity/users.entity';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { FavoriteChampionDto } from './dto/favorite-champion.dto';
import { Favorite } from './entities/favorite.entity';

@Injectable()
export class FavoritesService {
  constructor(private readonly prisma: PrismaService) {}

  async favoriteChampion(dto: FavoriteChampionDto): Promise<Favorite | void> {
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

    await this.verifyId(dto.userId);

    const champion: Champion = await this.prisma.champion.findUnique({
      where: { name: dto.championName },
    });

    if (!champion) {
      throw new NotFoundException(
        `champion name '${dto.championName}' not found`,
      );
    }

    //criar verificação se a pessoa não tem o champ comprado, se n tiver, n pode favoritar

    return this.prisma.favorite
      .create({ data })
      .catch(handleErrorConstraintUnique);
  }

  async unfavoriteChampion(id: string) {
    const favorite: Favorite = await this.prisma.favorite.findUnique({
      where: { id },
    });

    if (!favorite) {
      throw new NotFoundException(`id '${id}' not found`);
    }

    return this.prisma.favorite.delete({ where: { id } });
  }

  async getUserFavorites(id: string): Promise<Favorite[]> {
    await this.verifyId(id);

    return this.prisma.favorite.findMany({
      where: { userId: id },
    });
  }

  async getUsersWhoFavoritedChampion(id: string): Promise<Favorite[]> {
    const champion: Champion = await this.prisma.champion.findUnique({
      where: { id },
    });

    if (!champion) {
      throw new NotFoundException(`champion id '${id}' not found`);
    }

    return this.prisma.favorite.findMany({
      where: { champion: { id } },
    });
  }

  async verifyId(id: string): Promise<void | never> {
    const user: User = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`id '${id}' not found`);
    }
  }
}
