import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { CreateBugpointDto } from './dto/create-bugpoint.dto';
import { UpdateBugpointDto } from './dto/update-bugpoint.dto';
import { Bugpoint } from './entities/bugpoint.entity';

@Injectable()
export class BugpointsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateBugpointDto): Promise<Bugpoint | void> {
    if (dto.value <= 0 || Number.isInteger(!dto.value)) {
      throw new NotAcceptableException('value must be a positive integer');
    }

    if (dto.money <= 0 || Number.isInteger(!dto.money)) {
      throw new NotAcceptableException('money must be a positive integer');
    }

    return this.prisma.bugPoint
      .create({ data: dto })
      .catch(handleErrorConstraintUnique);
  }

  findAll(): Promise<Bugpoint[]> {
    return this.prisma.bugPoint.findMany();
  }

  async verifyIdAndReturnBugpoint(id: string): Promise<Bugpoint> {
    const bugpoint: Bugpoint = await this.prisma.bugPoint.findUnique({
      where: { id },
    });

    if (!bugpoint) {
      throw new NotFoundException(`BugPoint id '${id}' not found`);
    }

    return bugpoint;
  }

  findOne(id: string): Promise<Bugpoint> {
    return this.verifyIdAndReturnBugpoint(id);
  }

  async update(id: string, dto: UpdateBugpointDto): Promise<Bugpoint | void> {
    await this.verifyIdAndReturnBugpoint(id);

    if (dto.value <= 0 || Number.isInteger(!dto.value)) {
      throw new NotAcceptableException('value must be a positive integer');
    }

    if (dto.money <= 0 || Number.isInteger(!dto.money)) {
      throw new NotAcceptableException('money must be a positive integer');
    }

    return this.prisma.bugPoint
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnBugpoint(id);

    return this.prisma.bugPoint.delete({ where: { id } });
  }
}
