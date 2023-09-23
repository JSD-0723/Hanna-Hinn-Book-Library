"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkValidationResult = (errors) => {
    if (!errors.isEmpty()) {
        let errorsMessage = "";
        errors.array().forEach((err) => (errorsMessage += err.message + " , "));
        console.log(`Error Exists when checking validation: ${errorsMessage}`);
        return { message: errors.array()[0].msg };
    }
    return;
};
exports.default = checkValidationResult;
//# sourceMappingURL=checkValidationError.js.map