import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { UpdateUserDto } from './dto/update-user.dto';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';

@Injectable()
export class UsersService {
  private userSelect = {
    id: true,
    name: true,
    email: true,
    cpf: true,
    isAdmin: true,
    bugPoint: true,
    createdAt: true,
    updatedAt: true,
  };
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto): Promise<User | void> {
    const hashedPassword = await bcrypt.hash(dto.password, 8);

    const data: CreateUserDto = {
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      cpf: dto.cpf,
      isAdmin: dto.isAdmin,
      bugPoint: dto.bugPoint,
    };

    return this.prisma.user
      .create({ data, select: this.userSelect })
      .catch(handleErrorConstraintUnique);
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      select: {
        ...this.userSelect,
        favorites: true,
        purchasedBPs: true,
        purchasedChampions: true,
      },
    });
  }

  async verifyIdAndReturnUser(id: string): Promise<User> {
    const user: User = await this.prisma.user.findUnique({
      where: { id },
      select: {
        ...this.userSelect,
        favorites: true,
        purchasedBPs: true,
        purchasedChampions: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User id '${id}' not found`);
    }
    return user;
  }

  async update(id: string, dto: UpdateUserDto): Promise<User | void> {
    await this.verifyIdAndReturnUser(id);

    return this.prisma.user
      .update({ where: { id }, data: dto, select: this.userSelect })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnUser(id);

    return this.prisma.user.delete({
      where: { id },
      select: this.userSelect,
    });
  }

  findOne(id: string): Promise<User> {
    return this.verifyIdAndReturnUser(id);
  }
}
