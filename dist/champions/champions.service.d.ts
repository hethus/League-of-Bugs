import { Champion } from './entities/champion.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';
export declare class ChampionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateChampionDto): Promise<Champion | void>;
    findAll(query: Partial<Champion>): Promise<Champion[]>;
    verifyIdAndReturnChampion(id: string): Promise<Champion>;
    findOne(id: string): Promise<Champion>;
    update(id: string, dto: UpdateChampionDto): Promise<Champion | void>;
    remove(id: string): Promise<import(".prisma/client").Champion>;
}
