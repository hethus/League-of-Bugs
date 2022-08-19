import { ChampionsService } from './champions.service';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';
import { Champion } from './entities/champion.entity';
export declare class ChampionsController {
    private readonly championsService;
    constructor(championsService: ChampionsService);
    create(dto: CreateChampionDto): Promise<Champion | void>;
    findAll(query: any): Promise<Champion[]>;
    findOne(id: string): Promise<Champion>;
    update(id: string, dto: UpdateChampionDto): Promise<Champion | void>;
    remove(id: string): Promise<import(".prisma/client").Champion>;
}
