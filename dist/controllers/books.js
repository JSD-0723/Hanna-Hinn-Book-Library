"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBooks = exports.rentBook = exports.getBooks = void 0;
const book_js_1 = __importDefault(require("../models/book.js"));
// GET /books --> Get All books
function getBooks(req, res) {
    book_js_1.default.fetchAll((books) => {
        res.json(books);
    });
}
exports.getBooks = getBooks;
// POST /rent --> Rent a Book
function rentBook(req, res) {
    try {
        const bookName = req.body.name;
        if (!bookName) {
            throw new Error("Book name missing for rent");
        }
        book_js_1.default.fetchAll((books) => {
            let foundBook = false;
            books.forEach((book) => {
                if (book.name.toLowerCase() === bookName.toLowerCase()) {
                    book.rented = true;
                    foundBook = true;
                }
            });
            if (foundBook) {
                res.status(200).send("Book Rented Successfully");
            }
            else {
                res.status(404).send("Desired book not found");
            }
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.rentBook = rentBook;
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