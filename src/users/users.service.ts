import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateUserDto): Promise<User> {
    const hashedPassword = bcrypt.hashSync(dto.password, 8);

    const data: CreateUserDto = {
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      cpf: dto.cpf,
      isAdmin: dto.isAdmin,
    };

    return this.prisma.user.create({ data });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
      select: { name: true, email: true },
    });
  }
}
