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
exports.PurchaseBpsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const purchase_bugpoints_dto_1 = require("./dto/purchase-bugpoints.dto");
const purchase_bps_service_1 = require("./purchase-bps.service");
const passport_1 = require("@nestjs/passport");
let PurchaseBpsController = class PurchaseBpsController {
    constructor(purchaseBpsService) {
        this.purchaseBpsService = purchaseBpsService;
    }
    purchaseBps(dto) {
        return this.purchaseBpsService.purchaseBps(dto);
    }
    getUserPurchasesBp(id) {
        return this.purchaseBpsService.getUserPurchasesBp(id);
    }
    getUsersWhoPurchasedBp(id) {
        return this.purchaseBpsService.getUsersWhoPurchasedBp(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Purchase bugpoints for a user',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [purchase_bugpoints_dto_1.PurchaseBpsDto]),
    __metadata("design:returntype", Promise)
], PurchaseBpsController.prototype, "purchaseBps", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all purchases for a user',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseBpsController.prototype, "getUserPurchasesBp", null);
__decorate([
    (0, common_1.Get)('adm/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all users who purchased a Gift Card',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseBpsController.prototype, "getUsersWhoPurchasedBp", null);
PurchaseBpsController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, swagger_1.ApiTags)('purchase bugpoints'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('purchase/bugpoints'),
    __metadata("design:paramtypes", [purchase_bps_service_1.PurchaseBpsService])
], PurchaseBpsController);
exports.PurchaseBpsController = PurchaseBpsController;
//# sourceMappingURL=purchase-bps.controller.js.map