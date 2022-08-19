"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBugpointDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_bugpoint_dto_1 = require("./create-bugpoint.dto");
class UpdateBugpointDto extends (0, swagger_1.PartialType)(create_bugpoint_dto_1.CreateBugpointDto) {
}
exports.UpdateBugpointDto = UpdateBugpointDto;
//# sourceMappingURL=update-bugpoint.dto.js.map