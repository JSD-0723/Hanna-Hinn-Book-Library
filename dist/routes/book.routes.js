"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookValidationMiddlewares_js_1 = require("../middlewares/bookValidationMiddlewares.js");
const books_js_1 = require("../controllers/books.js");
const router = express_1.default.Router();
router.get("", books_js_1.getIndex);
router.post("", bookValidationMiddlewares_js_1.checkBookData, books_js_1.postIndex);
router.get("/:bookId", bookValidationMiddlewares_js_1.checkBookId, books_js_1.getBook);
// Put method validations ☹️
router.put("/:bookId", bookValidationMiddlewares_js_1.checkBookId, bookValidationMiddlewares_js_1.checkPutBookData, books_js_1.putUpdateBook);
router.delete("/:bookId", bookValidationMiddlewares_js_1.checkBookId, books_js_1.deleteBook);
// router.get("/search", searchBooks);
// router.post("/rent", rentBook);
exports.default = router;
//# sourceMappingURL=book.routes.js.map