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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcryptjs");
const handle_error_unique_util_1 = require("../utils/handle-error-unique.util");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
        this.userSelect = {
            id: true,
            name: true,
            email: true,
            cpf: true,
            isAdmin: true,
            bugPoint: true,
            createdAt: true,
            updatedAt: true,
        };
    }
    async create(dto) {
        const hashedPassword = await bcrypt.hash(dto.password, 8);
        const data = {
            name: dto.name,
            email: dto.email,
            password: hashedPassword,
            cpf: dto.cpf,
            isAdmin: dto.isAdmin,
            bugPoint: dto.bugPoint,
        };
        return this.prisma.user
            .create({ data, select: this.userSelect })
            .catch(handle_error_unique_util_1.handleErrorConstraintUnique);
    }
    findAll() {
        return this.prisma.user.findMany({
            select: Object.assign(Object.assign({}, this.userSelect), { favorites: true, purchasedBPs: true, purchasedChampions: true }),
        });
    }
    async verifyIdAndReturnUser(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: Object.assign(Object.assign({}, this.userSelect), { favorites: true, purchasedBPs: true, purchasedChampions: true }),
        });
        if (!user) {
            throw new common_1.NotFoundException(`User id '${id}' not found`);
        }
        return user;
    }
    async update(id, dto) {
        await this.verifyIdAndReturnUser(id);
        if (dto.password) {
            const hashedPassword = await bcrypt.hash(dto.password, 8);
            dto.password = hashedPassword;
        }
        return this.prisma.user
            .update({ where: { id }, data: dto, select: this.userSelect })
            .catch(handle_error_unique_util_1.handleErrorConstraintUnique);
    }
    async remove(id) {
        await this.verifyIdAndReturnUser(id);
        return this.prisma.user.delete({
            where: { id },
            select: this.userSelect,
        });
    }
    findOne(id) {
        return this.verifyIdAndReturnUser(id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map