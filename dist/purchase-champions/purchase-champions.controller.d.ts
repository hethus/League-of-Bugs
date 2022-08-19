import { PurchaseChampionDto } from './dto/purchase-champions.dto';
import { PurchaseChampion } from './entities/purchase-champions.entity';
import { PurchaseChampionsService } from './purchase-champions.service';
export declare class PurchaseChampionsController {
    private readonly purchaseChampionsService;
    constructor(purchaseChampionsService: PurchaseChampionsService);
    purchaseChampions(dto: PurchaseChampionDto): Promise<PurchaseChampion | void>;
    reversalPurchaseChampion(id: string): Promise<import(".prisma/client").PurchaseChampion>;
    getUserPurchasesChampion(id: string): Promise<PurchaseChampion[]>;
    getUsersWhoPurchasedChampion(id: string): Promise<PurchaseChampion[]>;
}
