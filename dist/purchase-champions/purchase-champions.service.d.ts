import { PrismaService } from 'src/prisma/prisma.service';
import { PurchaseChampionDto } from './dto/purchase-champions.dto';
import { PurchaseChampion } from './entities/purchase-champions.entity';
export declare class PurchaseChampionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    purchaseChampions(dto: PurchaseChampionDto): Promise<PurchaseChampion | void>;
    verifyId(id: string): Promise<void | never>;
    reversalPurchaseChampion(id: string): Promise<import(".prisma/client").PurchaseChampion>;
    getUserPurchasesChampion(id: string): Promise<PurchaseChampion[]>;
    getUsersWhoPurchasedChampion(id: string): Promise<PurchaseChampion[]>;
}
