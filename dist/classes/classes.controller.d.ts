import { Classe } from './entities/classe.entity';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-classe.dto';
import { UpdateClassDto } from './dto/update-classe.dto';
export declare class ClassesController {
    private readonly classesService;
    constructor(classesService: ClassesService);
    create(dto: CreateClassDto): Promise<Classe>;
    findAll(): Promise<Classe[]>;
    findOne(id: string): Promise<Classe>;
    update(id: string, dto: UpdateClassDto): Promise<Classe>;
    remove(id: string): Promise<{
        name: string;
    }>;
}
