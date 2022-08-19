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
exports.CreateChampionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateChampionDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'The name of the champion',
        example: 'Aatrox',
    }),
    __metadata("design:type", String)
], CreateChampionDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPositive)(),
    (0, swagger_1.ApiProperty)({
        description: 'The price of the champion',
        example: 4800,
    }),
    __metadata("design:type", Number)
], CreateChampionDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'The title of the champion',
        example: 'The Darkin Blade',
    }),
    __metadata("design:type", String)
], CreateChampionDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'The description of the champion',
        example: 'Aatrox is a legendary warrior known for his Furion, thestaff of life.',
    }),
    __metadata("design:type", String)
], CreateChampionDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, swagger_1.ApiProperty)({
        description: 'The image of the champion',
        example: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    }),
    __metadata("design:type", String)
], CreateChampionDto.prototype, "imageUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'The difficulty of the champion',
        example: 'Medium',
    }),
    __metadata("design:type", String)
], CreateChampionDto.prototype, "difficulty", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, swagger_1.ApiProperty)({
        description: 'The URL of some video about the champion',
        example: 'https://www.youtube.com/watch?v=soQ9bukwAPs&ab_channel=LeagueofLegendsBR',
    }),
    __metadata("design:type", String)
], CreateChampionDto.prototype, "youTubeUrl", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, swagger_1.ApiProperty)({
        description: 'The classe of the champion',
        example: 'a71a24b0-8a40-4b76-b895-0fb5f722abe6',
    }),
    __metadata("design:type", String)
], CreateChampionDto.prototype, "classeId", void 0);
exports.CreateChampionDto = CreateChampionDto;
//# sourceMappingURL=create-champion.dto.js.map