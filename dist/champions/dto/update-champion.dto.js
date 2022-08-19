"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChampionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_champion_dto_1 = require("./create-champion.dto");
class UpdateChampionDto extends (0, swagger_1.PartialType)(create_champion_dto_1.CreateChampionDto) {
}
exports.UpdateChampionDto = UpdateChampionDto;
//# sourceMappingURL=update-champion.dto.js.map