"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.set('trust proxy', 1);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('League of Bugs')
        .setDescription('League of Bugs (LoB) é um projeto desenvolvido para o modulo 4 da Blue com base no jogo League of Legends!')
        .addTag('status')
        .addTag('auth')
        .addTag('users')
        .addTag('favorites')
        .addTag('purchase bugpoints')
        .addTag('purchase champions')
        .addTag('champions')
        .addTag('classes (adm)')
        .addTag('bugpoints (adm)')
        .addBearerAuth()
        .setVersion('1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(process.env.PORT || 8000);
}
bootstrap();
//# sourceMappingURL=main.js.map