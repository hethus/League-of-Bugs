import { PurchaseBpsDto } from './dto/purchase-bugpoints.dto';
import { PurchaseBp } from './entities/purchase-bugpoints.entity';
import { PurchaseBpsService } from './purchase-bps.service';
export declare class PurchaseBpsController {
    private readonly purchaseBpsService;
    constructor(purchaseBpsService: PurchaseBpsService);
    purchaseBps(dto: PurchaseBpsDto): Promise<PurchaseBp | void>;
    getUserPurchasesBp(id: string): Promise<PurchaseBp[]>;
    getUsersWhoPurchasedBp(id: string): Promise<PurchaseBp[]>;
}
