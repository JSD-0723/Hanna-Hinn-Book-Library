"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBooks = exports.getBooks = void 0;
const book_js_1 = __importDefault(require("../models/book.js"));
// GET /books --> Get All books
function getBooks(req, res) {
    book_js_1.default.fetchAll((books) => {
        res.json(books);
    });
}
exports.getBooks = getBooks;
// GET /search?search="str" --> Get books that match the search
function searchBooks(req, res) {
    try {
        const searchQuery = req.query.search;
        if (!searchQuery) {
            throw new Error("Search query is missing");
        }
        book_js_1.default.fetchAll((books) => {
            const filteredBooks = books.filter((book) => {
                return book.name.toLowerCase().includes(searchQuery.toLowerCase());
            });
            res.json(filteredBooks);
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.searchBooks = searchBooks;
//# sourceMappingURL=books.js.map