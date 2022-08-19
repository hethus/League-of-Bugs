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
exports.ChampionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const handle_error_unique_util_1 = require("../utils/handle-error-unique.util");
let ChampionsService = class ChampionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.champion
            .create({ data: dto })
            .catch(handle_error_unique_util_1.handleErrorConstraintUnique);
    }
    async findAll(query) {
        const champions = await this.prisma.champion
            .findMany({ where: query })
            .catch(() => {
            throw new common_1.UnprocessableEntityException('Invalid query');
        });
        if (champions.length === 0) {
            throw new common_1.NotFoundException('No champions found');
        }
        return champions;
    }
    async verifyIdAndReturnChampion(id) {
        const champion = await this.prisma.champion.findUnique({
            where: { id },
        });
        if (!champion) {
            throw new common_1.NotFoundException(`Champion id '${id}' not found`);
        }
        return champion;
    }
    findOne(id) {
        return this.verifyIdAndReturnChampion(id);
    }
    async update(id, dto) {
        await this.verifyIdAndReturnChampion(id);
        return this.prisma.champion
            .update({ where: { id }, data: dto })
            .catch(handle_error_unique_util_1.handleErrorConstraintUnique);
    }
    async remove(id) {
        await this.verifyIdAndReturnChampion(id);
        return this.prisma.champion.delete({ where: { id } });
    }
};
ChampionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChampionsService);
exports.ChampionsService = ChampionsService;
//# sourceMappingURL=champions.service.js.map