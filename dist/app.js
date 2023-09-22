"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const book_routes_js_1 = __importDefault(require("./routes/book.routes.js"));
const database_js_1 = __importDefault(require("./util/database.js"));
const error_js_1 = require("./controllers/error.js");
const errorMiddleware_js_1 = require("./middlewares/errorMiddleware.js");
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/books", book_routes_js_1.default);
app.use(error_js_1.get404);
app.use(errorMiddleware_js_1.errorMiddleware);
database_js_1.default
    .sync()
    .then(() => {
    app.listen(3000);
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=app.js.map