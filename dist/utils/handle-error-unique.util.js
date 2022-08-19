"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorConstraintUnique = void 0;
const common_1 = require("@nestjs/common");
const handleErrorConstraintUnique = (error) => {
    const splittedMessage = error.message.split('`');
    const errorMessage = `Input '${splittedMessage[splittedMessage.length - 2]}' is not respecting the UNIQUE constraint`;
    throw new common_1.UnprocessableEntityException(errorMessage);
};
exports.handleErrorConstraintUnique = handleErrorConstraintUnique;
//# sourceMappingURL=handle-error-unique.util.js.map