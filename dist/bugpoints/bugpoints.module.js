"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BugpointsModule = void 0;
const common_1 = require("@nestjs/common");
const bugpoints_service_1 = require("./bugpoints.service");
const bugpoints_controller_1 = require("./bugpoints.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("../auth/jwt.strategy");
let BugpointsModule = class BugpointsModule {
};
BugpointsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, passport_1.PassportModule.register({ defaultStrategy: 'jwt' })],
        controllers: [bugpoints_controller_1.BugpointsController],
        providers: [bugpoints_service_1.BugpointsService, jwt_strategy_1.JwtAdmStrategy],
    })
], BugpointsModule);
exports.BugpointsModule = BugpointsModule;
//# sourceMappingURL=bugpoints.module.js.map