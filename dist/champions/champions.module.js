"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChampionsModule = void 0;
const common_1 = require("@nestjs/common");
const champions_service_1 = require("./champions.service");
const champions_controller_1 = require("./champions.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("../auth/jwt.strategy");
let ChampionsModule = class ChampionsModule {
};
ChampionsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, passport_1.PassportModule.register({ defaultStrategy: 'jwt' })],
        controllers: [champions_controller_1.ChampionsController],
        providers: [champions_service_1.ChampionsService, jwt_strategy_1.JwtStrategy],
    })
], ChampionsModule);
exports.ChampionsModule = ChampionsModule;
//# sourceMappingURL=champions.module.js.map