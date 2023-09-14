"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const book_js_1 = __importDefault(require("./routes/book.js"));
const error_js_1 = require("./controllers/error.js");
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(book_js_1.default);
app.use(error_js_1.get404);
app.use(error_js_1.errorHandler);
app.listen(3000);
//# sourceMappingURL=app.js.map