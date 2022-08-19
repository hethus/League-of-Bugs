import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClassDto } from './dto/create-classe.dto';
import { UpdateClassDto } from './dto/update-classe.dto';
import { Classe } from './entities/classe.entity';
export declare class ClassesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateClassDto): Promise<Classe>;
    findAll(): Promise<Classe[]>;
    verifyIdAndReturnClasse(id: string): Promise<Classe>;
    findOne(id: string): Promise<Classe>;
    update(id: string, dto: UpdateClassDto): Promise<Classe>;
    remove(id: string): Promise<{
        name: string;
    }>;
}
