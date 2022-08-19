"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClassDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_classe_dto_1 = require("./create-classe.dto");
class UpdateClassDto extends (0, swagger_1.PartialType)(create_classe_dto_1.CreateClassDto) {
}
exports.UpdateClassDto = UpdateClassDto;
//# sourceMappingURL=update-classe.dto.js.map