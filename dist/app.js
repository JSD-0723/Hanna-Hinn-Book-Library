"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const server_config_js_1 = __importDefault(require("./config/server.config.js"));
const book_routes_js_1 = __importDefault(require("./routes/book.routes.js"));
const database_js_1 = __importDefault(require("./util/database.js"));
const error_js_1 = require("./controllers/error.js");
const errorMiddleware_js_1 = require("./middlewares/errorMiddleware.js");
// Initializing the Express Application
const app = (0, express_1.default)();
// Defining the bodyParser middleWare on the whole application
app.use(body_parser_1.default.urlencoded({ extended: true }));
// "/books" routes
app.use("/books", book_routes_js_1.default);
// Page not found when the route is not found
app.use(error_js_1.get404);
// Error handling middleware
app.use(errorMiddleware_js_1.errorMiddleware);
database_js_1.default
    .sync()
    .then(() => {
    app.listen(server_config_js_1.default.PORT, server_config_js_1.default.HOST);
    console.log(`Server Listening on ${server_config_js_1.default.HOST}:${server_config_js_1.default.PORT}`);
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=app.js.map