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
exports.FavoritesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const handle_error_unique_util_1 = require("../utils/handle-error-unique.util");
let FavoritesService = class FavoritesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async favoriteChampion(dto) {
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
        const champion = await this.prisma.champion.findUnique({
            where: { name: dto.championName },
        });
        if (!champion) {
            throw new common_1.NotFoundException(`champion name '${dto.championName}' not found`);
        }
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
                purchasedChampions: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User id '${dto.userId}' not found`);
        }
        const listVerify = user.purchasedChampions.findIndex((item) => item.championName == dto.championName);
        if (listVerify == -1 || listVerify == undefined) {
            throw new common_1.NotAcceptableException(`You can't favorite champions that you haven't purchased`);
        }
        return this.prisma.favorite
            .create({ data })
            .catch(handle_error_unique_util_1.handleErrorConstraintUnique);
    }
    async unfavoriteChampion(id) {
        const favorite = await this.prisma.favorite.findUnique({
            where: { id },
        });
        if (!favorite) {
            throw new common_1.NotFoundException(`Favorite id '${id}' not found`);
        }
        return this.prisma.favorite.delete({ where: { id } });
    }
    async getUserFavorites(id) {
        await this.verifyId(id);
        return this.prisma.favorite.findMany({
            where: { userId: id },
        });
    }
    async getUsersWhoFavoritedChampion(id) {
        const champion = await this.prisma.champion.findUnique({
            where: { id },
        });
        if (!champion) {
            throw new common_1.NotFoundException(`champion id '${id}' not found`);
        }
        return this.prisma.favorite.findMany({
            where: { champion: { id } },
        });
    }
    async verifyId(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User id '${id}' not found`);
        }
    }
};
FavoritesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FavoritesService);
exports.FavoritesService = FavoritesService;
//# sourceMappingURL=favorites.service.js.map