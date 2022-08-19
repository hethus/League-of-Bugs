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
exports.PurchaseBpsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const handle_error_unique_util_1 = require("../utils/handle-error-unique.util");
let PurchaseBpsService = class PurchaseBpsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async purchaseBps(dto) {
        const data = {
            user: {
                connect: {
                    id: dto.userId,
                },
            },
            bugPoint: {
                connect: {
                    value: dto.bugPointValue,
                },
            },
            quantity: dto.quantity,
        };
        const user = await this.prisma.user.findUnique({
            where: { id: dto.userId },
        });
        if (!user) {
            throw new common_1.NotFoundException(`user id '${dto.userId}' not found`);
        }
        const bugPoint = await this.prisma.bugPoint.findUnique({
            where: { value: dto.bugPointValue },
        });
        if (!bugPoint) {
            throw new common_1.NotFoundException(`Bugpoint of '${dto.bugPointValue}' not found`);
        }
        const userBuyed = dto.quantity * bugPoint.value + user.bugPoint;
        await this.prisma.user.update({
            where: { id: dto.userId },
            data: {
                bugPoint: +userBuyed,
            },
        });
        return this.prisma.purchaseBP
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
    async getUserPurchasesBp(id) {
        await this.verifyId(id);
        return this.prisma.purchaseBP.findMany({
            where: { user: { id } },
        });
    }
    async getUsersWhoPurchasedBp(id) {
        const bugPoint = await this.prisma.bugPoint.findUnique({
            where: { id },
        });
        if (!bugPoint) {
            throw new common_1.NotFoundException(`BugPoint id '${id}' not found`);
        }
        return this.prisma.purchaseBP.findMany({
            where: { bugPoint: { id } },
        });
    }
};
PurchaseBpsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PurchaseBpsService);
exports.PurchaseBpsService = PurchaseBpsService;
//# sourceMappingURL=purchase-bps.service.js.map