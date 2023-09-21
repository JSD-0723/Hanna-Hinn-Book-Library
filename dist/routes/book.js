"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_js_1 = require("../controllers/books.js");
const router = express_1.default.Router();
router.get("", books_js_1.getIndex);
router.post("", books_js_1.postIndex);
router.get("/:bookId", books_js_1.getBook);
router.put("/:bookId", books_js_1.putUpdateBook);
router.delete("/:bookId", books_js_1.deleteBook);
// router.get(searchBooks);
// router.post(rentBook);
exports.default = router;
//# sourceMappingURL=book.js.map