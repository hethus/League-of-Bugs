"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const champions_module_1 = require("./champions/champions.module");
const classes_module_1 = require("./classes/classes.module");
const favorites_module_1 = require("./favorites/favorites.module");
const bugpoints_module_1 = require("./bugpoints/bugpoints.module");
const purchase_bps_module_1 = require("./purchase-bps/purchase-bps.module");
const purchase_champions_module_1 = require("./purchase-champions/purchase-champions.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            champions_module_1.ChampionsModule,
            classes_module_1.ClassesModule,
            favorites_module_1.FavoritesModule,
            bugpoints_module_1.BugpointsModule,
            purchase_bps_module_1.PurchaseBpsModule,
            purchase_champions_module_1.PurchaseChampionsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map