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
exports.BugpointsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const handle_error_unique_util_1 = require("../utils/handle-error-unique.util");
let BugpointsService = class BugpointsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        if (dto.value <= 0 || Number.isInteger(!dto.value)) {
            throw new common_1.NotAcceptableException('value must be a positive integer');
        }
        if (dto.money <= 0 || Number.isInteger(!dto.money)) {
            throw new common_1.NotAcceptableException('money must be a positive integer');
        }
        return this.prisma.bugPoint
            .create({ data: dto })
            .catch(handle_error_unique_util_1.handleErrorConstraintUnique);
    }
    findAll() {
        return this.prisma.bugPoint.findMany();
    }
    async verifyIdAndReturnBugpoint(id) {
        const bugpoint = await this.prisma.bugPoint.findUnique({
            where: { id },
        });
        if (!bugpoint) {
            throw new common_1.NotFoundException(`BugPoint id '${id}' not found`);
        }
        return bugpoint;
    }
    findOne(id) {
        return this.verifyIdAndReturnBugpoint(id);
    }
    async update(id, dto) {
        await this.verifyIdAndReturnBugpoint(id);
        if (dto.value <= 0 || Number.isInteger(!dto.value)) {
            throw new common_1.NotAcceptableException('value must be a positive integer');
        }
        if (dto.money <= 0 || Number.isInteger(!dto.money)) {
            throw new common_1.NotAcceptableException('money must be a positive integer');
        }
        return this.prisma.bugPoint
            .update({ where: { id }, data: dto })
            .catch(handle_error_unique_util_1.handleErrorConstraintUnique);
    }
    async remove(id) {
        await this.verifyIdAndReturnBugpoint(id);
        return this.prisma.bugPoint.delete({ where: { id } });
    }
};
BugpointsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BugpointsService);
exports.BugpointsService = BugpointsService;
//# sourceMappingURL=bugpoints.service.js.map