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
exports.PurchaseBpsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PurchaseBpsDto {
}
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({
        description: 'The id of the user who want to purchase the bugpoints',
        example: 'a71a24b0-8a40-4b76-b895-0fb5f722abe6',
    }),
    __metadata("design:type", String)
], PurchaseBpsDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'The amount of the bugpoints to purchase',
        example: 4800,
    }),
    __metadata("design:type", Number)
], PurchaseBpsDto.prototype, "bugPointValue", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'The quantity of Gift Cards to purchase',
        example: 1,
    }),
    __metadata("design:type", Number)
], PurchaseBpsDto.prototype, "quantity", void 0);
exports.PurchaseBpsDto = PurchaseBpsDto;
//# sourceMappingURL=purchase-bugpoints.dto.js.map