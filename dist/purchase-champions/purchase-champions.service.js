"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseChampionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const handle_error_unique_util_1 = require("../utils/handle-error-unique.util");
let PurchaseChampionsService = class PurchaseChampionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async purchaseChampions(dto) {
        const data = {
            user: {
                connect: {
                    id: dto.userId,
                },
            },
            champion: {
                connect: {
                    name: dto.championName,
                },
            },
        };
        const user = await this.prisma.user.findUnique({
            where: { id: dto.userId },
            select: {
                id: true,
                name: true,
                email: true,
                cpf: true,
                isAdmin: true,
                bugPoint: true,
                createdAt: true,
                updatedAt: true,
                favorites: true,
                purchasedBPs: true,
                purchasedChampions: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(`user id '${dto.userId}' not found`);
        }
        const champion = await this.prisma.champion.findUnique({
            where: { name: dto.championName },
        });
        if (!champion) {
            throw new common_1.NotFoundException(`champion name '${dto.championName}' not found`);
        }
        const purchaseChampion = user.purchasedChampions;
        for (const item of purchaseChampion) {
            if (item.championName === dto.championName) {
                throw new common_1.NotAcceptableException(`You already purchased this champion`);
            }
        }
        const price = user.bugPoint - champion.price;
        if (price < 0) {
            throw new common_1.NotAcceptableException(`You don't have enough bug points to purchase this champion`);
        }
        await this.prisma.user.update({
            where: { id: dto.userId },
            data: {
                bugPoint: +price,
            },
        });
        return this.prisma.purchaseChampion
            .create({ data })
            .catch(handle_error_unique_util_1.handleErrorConstraintUnique);
    }
    async verifyId(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException(`user id '${id}' not found`);
        }
    }
    async reversalPurchaseChampion(id) {
        const purchaseChampion = await this.prisma.purchaseChampion.findUnique({
            where: { id },
        });
        if (!purchaseChampion) {
            throw new common_1.NotFoundException(`Champion id '${id}' not found`);
        }
        const purchasedAt = purchaseChampion.purchasedAt;
        const date = new Date();
        const diff = Math.abs(date.getTime() - purchasedAt.getTime());
        const diffMonths = Math.ceil(diff / (1000 * 3600 * 24 * 30));
        if (diffMonths > 3) {
            throw new common_1.NotFoundException(`You can't reverse the purchase of this champion more than 3 months ago`);
        }
        const user = await this.prisma.user.findUnique({
            where: { id: purchaseChampion.userId },
        });
        if (!user) {
            throw new common_1.NotFoundException(`user id '${id}' not found`);
        }
        const champion = await this.prisma.champion.findUnique({
            where: { name: purchaseChampion.championName },
        });
        const bugPoint = user.bugPoint + champion.price;
        await this.prisma.user.update({
            where: { id: purchaseChampion.userId },
            data: {
                bugPoint: +bugPoint,
            },
        });
        return this.prisma.purchaseChampion.delete({ where: { id } });
    }
    async getUserPurchasesChampion(id) {
        await this.verifyId(id);
        return this.prisma.purchaseChampion.findMany({
            where: { user: { id } },
        });
    }
    async getUsersWhoPurchasedChampion(id) {
        const champion = await this.prisma.champion.findUnique({
            where: { id },
        });
        if (!champion) {
            throw new common_1.NotFoundException(`champion id '${id}' not found`);
        }
        return this.prisma.purchaseChampion.findMany({
            where: { champion: { id } },
        });
    }
};
PurchaseChampionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PurchaseChampionsService);
exports.PurchaseChampionsService = PurchaseChampionsService;
//# sourceMappingURL=purchase-champions.service.js.map