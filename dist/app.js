"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const book_js_1 = __importDefault(require("./routes/book.js"));
const database_1 = __importDefault(require("./util/database"));
const error_js_1 = require("./controllers/error.js");
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/books", book_js_1.default);
app.use(error_js_1.get404);
app.use(error_js_1.errorHandler);
database_1.default
    .sync()
    .then(() => {
    app.listen(3000);
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=app.js.map