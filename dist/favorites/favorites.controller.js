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
exports.FavoritesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const favorite_champion_dto_1 = require("./dto/favorite-champion.dto");
const favorites_service_1 = require("./favorites.service");
const passport_1 = require("@nestjs/passport");
let FavoritesController = class FavoritesController {
    constructor(favoritesService) {
        this.favoritesService = favoritesService;
    }
    favoriteChampion(dto) {
        return this.favoritesService.favoriteChampion(dto);
    }
    unfavoriteChampion(id) {
        return this.favoritesService.unfavoriteChampion(id);
    }
    getUserFavorites(id) {
        return this.favoritesService.getUserFavorites(id);
    }
    getUsersWhoFavoritedChampion(id) {
        return this.favoritesService.getUsersWhoFavoritedChampion(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Favorite a champion for a user',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [favorite_champion_dto_1.FavoriteChampionDto]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "favoriteChampion", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Unfavorite a champion for a user',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavoritesController.prototype, "unfavoriteChampion", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all favorites for a user',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "getUserFavorites", null);
__decorate([
    (0, common_1.Get)('champion/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all users who have favorited a champion',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "getUsersWhoFavoritedChampion", null);
FavoritesController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, swagger_1.ApiTags)('favorites'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('favorites'),
    __metadata("design:paramtypes", [favorites_service_1.FavoritesService])
], FavoritesController);
exports.FavoritesController = FavoritesController;
//# sourceMappingURL=favorites.controller.js.map