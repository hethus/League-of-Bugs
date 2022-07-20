import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Champion } from 'src/champions/entities/champion.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/users/entity/users.entity';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { PurchaseChampionDto } from './dto/purchase-champions.dto';
import { PurchaseChampion } from './entities/purchase-champions.entity';

@Injectable()
export class PurchaseChampionsService {
  constructor(private readonly prisma: PrismaService) {}

  async purchaseChampions(
    dto: PurchaseChampionDto,
  ): Promise<PurchaseChampion | void> {
    const data: Prisma.PurchaseChampionCreateInput = {
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

    const user: User = await this.prisma.user.findUnique({
      where: { id: dto.userId },
      select: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        isAdmin: true,
        bugPoint: true,
        createdAt: true,
        updatedAt: true,
        favorites: true,
        purchasedBPs: true,
        purchasedChampions: true,
      },
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

    const purchaseChampion = user.purchasedChampions;

    for (const item of purchaseChampion) {
      if (item.championName === dto.championName) {
        throw new NotAcceptableException(`You already purchased this champion`);
      }
    }

    const price = user.bugPoint - champion.price;

    await this.prisma.user.update({
      where: { id: dto.userId },
      data: {
        bugPoint: +price,
      },
    });

    return this.prisma.purchaseChampion
      .create({ data })
      .catch(handleErrorConstraintUnique);
  }

  async verifyId(id: string): Promise<void | never> {
    const user: User = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`user id '${id}' not found`);
    }
  }

  async reversalPurchaseChampion(id: string) {
    const purchaseChampion: PurchaseChampion =
      await this.prisma.purchaseChampion.findUnique({
        where: { id },
      });

    if (!purchaseChampion) {
      throw new NotFoundException(`Champion id '${id}' not found`);
    }

    const purchasedAt = purchaseChampion.purchasedAt;

    const date = new Date();

    const diff = Math.abs(date.getTime() - purchasedAt.getTime());

    const diffMonths = Math.ceil(diff / (1000 * 3600 * 24 * 30));

    if (diffMonths > 3) {
      throw new NotFoundException(
        `You can't reverse the purchase of this champion more than 3 months ago`,
      );
    }

    const user: User = await this.prisma.user.findUnique({
      where: { id: purchaseChampion.userId },
    });

    if (!user) {
      throw new NotFoundException(`user id '${id}' not found`);
    }

    const champion: Champion = await this.prisma.champion.findUnique({
      where: { name: purchaseChampion.championName },
    });

    const bugPoint = user.bugPoint + champion.price;

    await this.prisma.user.update({
      where: { id: purchaseChampion.userId },
      data: {
        bugPoint: +bugPoint,
      },
    });

    return this.prisma.purchaseChampion.delete({ where: { id } });
  }

  async getUserPurchasesChampion(id: string): Promise<PurchaseChampion[]> {
    await this.verifyId(id);

    return this.prisma.purchaseChampion.findMany({
      where: { user: { id } },
    });
  }

  async getUsersWhoPurchasedChampion(id: string): Promise<PurchaseChampion[]> {
    const champion: Champion = await this.prisma.champion.findUnique({
      where: { id },
    });

    if (!champion) {
      throw new NotFoundException(`champion id '${id}' not found`);
    }

    return this.prisma.purchaseChampion.findMany({
      where: { champion: { id } },
    });
  }
}
