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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseChampionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const purchase_champions_dto_1 = require("./dto/purchase-champions.dto");
const purchase_champions_service_1 = require("./purchase-champions.service");
const passport_1 = require("@nestjs/passport");
let PurchaseChampionsController = class PurchaseChampionsController {
    constructor(purchaseChampionsService) {
        this.purchaseChampionsService = purchaseChampionsService;
    }
    purchaseChampions(dto) {
        return this.purchaseChampionsService.purchaseChampions(dto);
    }
    reversalPurchaseChampion(id) {
        return this.purchaseChampionsService.reversalPurchaseChampion(id);
    }
    getUserPurchasesChampion(id) {
        return this.purchaseChampionsService.getUserPurchasesChampion(id);
    }
    getUsersWhoPurchasedChampion(id) {
        return this.purchaseChampionsService.getUsersWhoPurchasedChampion(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Purchase champions for a user',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [purchase_champions_dto_1.PurchaseChampionDto]),
    __metadata("design:returntype", Promise)
], PurchaseChampionsController.prototype, "purchaseChampions", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Reverse a purchase of a champion for a user',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PurchaseChampionsController.prototype, "reversalPurchaseChampion", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all purchases for a user',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseChampionsController.prototype, "getUserPurchasesChampion", null);
__decorate([
    (0, common_1.Get)('adm/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all users who have purchased a champion',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseChampionsController.prototype, "getUsersWhoPurchasedChampion", null);
PurchaseChampionsController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, swagger_1.ApiTags)('purchase champions'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('purchase/champions'),
    __metadata("design:paramtypes", [purchase_champions_service_1.PurchaseChampionsService])
], PurchaseChampionsController);
exports.PurchaseChampionsController = PurchaseChampionsController;
//# sourceMappingURL=purchase-champions.controller.js.map