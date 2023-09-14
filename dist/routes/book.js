"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_js_1 = require("../controllers/books.js");
const router = express_1.default.Router();
router.get("/books", books_js_1.getBooks);
router.get("/search", books_js_1.searchBooks);
exports.default = router;
//# sourceMappingURL=book.js.map