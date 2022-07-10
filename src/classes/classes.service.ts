import { Injectable, NotFoundException } from '@nestjs/common';
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

  async verifyIdAndReturnClasse(id: string): Promise<Classe> {
    const classe: Classe = await this.prisma.user.findUnique({ where: { id } });

    if (!classe) {
      throw new NotFoundException(`id '${id}' not found`);
    }
    return classe;
  }

  findOne(id: string): Promise<Classe> {
    return this.verifyIdAndReturnClasse(id);
  }

  async update(id: string, dto: UpdateClassDto): Promise<Classe> {
    await this.verifyIdAndReturnClasse(id);

    return this.prisma.classe
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnClasse(id);

    return this.prisma.classe.delete({ where: { id }, select: { name: true } });
  }
}
