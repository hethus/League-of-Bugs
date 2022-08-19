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
exports.ClassesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const handle_error_unique_util_1 = require("../utils/handle-error-unique.util");
let ClassesService = class ClassesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.classe
            .create({ data: dto })
            .catch(handle_error_unique_util_1.handleErrorConstraintUnique);
    }
    findAll() {
        return this.prisma.classe.findMany();
    }
    async verifyIdAndReturnClasse(id) {
        const classe = await this.prisma.classe.findUnique({
            where: { id },
        });
        if (!classe) {
            throw new common_1.NotFoundException(`Classe id '${id}' not found`);
        }
        return classe;
    }
    findOne(id) {
        return this.verifyIdAndReturnClasse(id);
    }
    async update(id, dto) {
        await this.verifyIdAndReturnClasse(id);
        return this.prisma.classe
            .update({ where: { id }, data: dto })
            .catch(handle_error_unique_util_1.handleErrorConstraintUnique);
    }
    async remove(id) {
        await this.verifyIdAndReturnClasse(id);
        return this.prisma.classe.delete({ where: { id }, select: { name: true } });
    }
};
ClassesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClassesService);
exports.ClassesService = ClassesService;
//# sourceMappingURL=classes.service.js.map