import { PrismaService } from 'src/prisma/prisma.service';
import { PurchaseBpsDto } from './dto/purchase-bugpoints.dto';
import { PurchaseBp } from './entities/purchase-bugpoints.entity';
export declare class PurchaseBpsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    purchaseBps(dto: PurchaseBpsDto): Promise<PurchaseBp | void>;
    verifyId(id: string): Promise<void | never>;
    getUserPurchasesBp(id: string): Promise<PurchaseBp[]>;
    getUsersWhoPurchasedBp(id: string): Promise<PurchaseBp[]>;
}
