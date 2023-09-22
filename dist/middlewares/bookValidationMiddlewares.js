"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBookId = exports.checkBookData = void 0;
const express_validator_1 = require("express-validator");
exports.checkBookData = [
    (0, express_validator_1.body)("name", "Please enter a valid name.").exists().isString().notEmpty(),
    (0, express_validator_1.body)("author", "Please enter a valid Author.").exists().isString().notEmpty(),
    (0, express_validator_1.body)("isbn", "Please enter a valid isbn number.").isNumeric(),
];
exports.checkBookId = [
    (0, express_validator_1.param)("bookId", "Please enter a valid Book Id in the params")
        .exists()
        .isNumeric(),
];
//# sourceMappingURL=bookValidationMiddlewares.js.map