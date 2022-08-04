import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Bugpoint } from 'src/bugpoints/entities/bugpoint.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/users/entity/users.entity';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { PurchaseBpsDto } from './dto/purchase-bugpoints.dto';
import { PurchaseBp } from './entities/purchase-bugpoints.entity';

@Injectable()
export class PurchaseBpsService {
  constructor(private readonly prisma: PrismaService) {}

  async purchaseBps(dto: PurchaseBpsDto): Promise<PurchaseBp | void> {
    const data: Prisma.PurchaseBPCreateInput = {
      user: {
        connect: {
          id: dto.userId,
        },
      },
      bugPoint: {
        connect: {
          value: dto.bugPointValue,
        },
      },
      quantity: dto.quantity,
    };

    const user: User = await this.prisma.user.findUnique({
      where: { id: dto.userId },
    });

    if (!user) {
      throw new NotFoundException(`user id '${dto.userId}' not found`);
    }

    const bugPoint = await this.prisma.bugPoint.findUnique({
      where: { value: dto.bugPointValue },
    });

    if (!bugPoint) {
      throw new NotFoundException(
        `Bugpoint of '${dto.bugPointValue}' not found`,
      );
    }

    const userBuyed = dto.quantity * bugPoint.value + user.bugPoint;

    await this.prisma.user.update({
      where: { id: dto.userId },
      data: {
        bugPoint: +userBuyed,
      },
    });

    return this.prisma.purchaseBP
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

  async getUserPurchasesBp(id: string): Promise<PurchaseBp[]> {
    await this.verifyId(id);

    return this.prisma.purchaseBP.findMany({
      where: { user: { id } },
    });
  }

  async getUsersWhoPurchasedBp(id: string): Promise<PurchaseBp[]> {
    const bugPoint: Bugpoint = await this.prisma.bugPoint.findUnique({
      where: { id },
    });

    if (!bugPoint) {
      throw new NotFoundException(`BugPoint id '${id}' not found`);
    }

    return this.prisma.purchaseBP.findMany({
      where: { bugPoint: { id } },
    });
  }
}
