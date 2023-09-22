"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkValidationResult = (errors) => {
    if (!errors.isEmpty()) {
        return { message: errors.array()[0].msg };
    }
    return;
};
exports.default = checkValidationResult;
//# sourceMappingURL=checkValidationError.js.map