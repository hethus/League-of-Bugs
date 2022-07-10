import { Injectable } from '@nestjs/common';
import { Classe } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';

@Injectable()
export class ClassesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateClassDto): Promise<Classe> {
    return this.prisma.classe
      .create({ data: dto })
      .catch(handleErrorConstraintUnique);
  }

  findAll(): Promise<Classe[]> {
    return this.prisma.classe.findMany();
  }

  findOne(id: string): Promise<Classe> {
    return this.prisma.classe.findUnique({ where: { id } });
  }

  async update(id: string, dto: UpdateClassDto): Promise<Classe> {
    return this.prisma.classe
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  remove(id: string) {
    return this.prisma.classe.delete({ where: { id }, select: { name: true } });
  }
}
