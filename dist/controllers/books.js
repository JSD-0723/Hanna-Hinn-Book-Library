"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.putUpdateBook = exports.getBook = exports.postIndex = exports.getIndex = void 0;
const book_js_1 = __importDefault(require("../models/book.js"));
// GET /books --> Get All books
function getIndex(req, res) {
    book_js_1.default.findAll()
        .then((books) => {
        res.status(200).json({ message: "Operation Success", data: books });
    })
        .catch((error) => {
        res.status(500).json({ error: error.message });
    });
}
exports.getIndex = getIndex;
// POST /books --> create a new book
function postIndex(req, res) {
    const name = req.body.name;
    const author = req.body.author;
    const isbn = req.body.isbn;
    book_js_1.default.create({
        name: name,
        author: author,
        isbn: isbn,
    })
        .then(() => {
        console.log("Successfully Added Book!");
        res.status(201).json({ message: "Book added successfully" });
    })
        .catch((error) => {
        res.status(500).json({ error: error.message });
    });
}
exports.postIndex = postIndex;
// GET /books/:bookId --> Get a book by id
function getBook(req, res) {
    const bookId = req.params.bookId;
    book_js_1.default.findByPk(bookId)
        .then((book) => {
        if (book) {
            res.status(200).json({ message: "Operation Success", data: book });
        }
        else {
            res.status(404).json({ message: "Book not found" });
        }
    })
        .catch((error) => {
        res.status(500).json({ error: error.message });
    });
}
exports.getBook = getBook;
// PUT /books/:bookId --> Update Book by id
function putUpdateBook(req, res) {
    const bookId = req.params.bookId;
    const updatedName = req.body.name;
    const updatedAuthor = req.body.author;
    const updatedIsbn = req.body.isbn;
    book_js_1.default.findByPk(bookId)
        .then((book) => {
        book.name = updatedName;
        book.author = updatedAuthor;
        book.isbn = updatedIsbn;
        return book.save();
    })
        .then(() => {
        console.log("Successfully updated Book!");
        res.status(200).json({ message: "Book updated successfully" });
    })
        .catch((error) => {
        res.status(500).json({ error: error.message });
    });
}
exports.putUpdateBook = putUpdateBook;
// DELETE /books/:bookId --> Delete Book by id
function deleteBook(req, res) {
    const bookId = req.params.bookId;
    book_js_1.default.findByPk(bookId)
        .then((book) => {
        return book.destroy();
    })
        .then(() => {
        console.log("Delete product successfully");
        return res.status(200).json({ message: "Book Deleted successfully" });
    })
        .catch((error) => {
        res.status(500).json({ error: error.message });
    });
}
exports.deleteBook = deleteBook;
// POST /rent-book --> Rent a Book
// export function rentBook(req: Request, res: Response) {
//   try {
//     const bookName: string = req.body.name;
//     if (!bookName) {
//       throw new Error("Book name missing for rent");
//     }
//     Book.findAll().then((books) => {
//       let foundBook: boolean = false;
//       books.forEach((book) => {
//         if (book.name.toLowerCase() === bookName.toLowerCase()) {
//           book.rented = true;
//           foundBook = true;
//         }
//       });
//       if (foundBook) {
//         res.status(200).send("Book Rented Successfully");
//       } else {
//         res.status(404).send("Desired book not found");
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }
// GET /search?search="str" --> Get books that match the search
// export function searchBooks(req: Request, res: Response) {
//   try {
//     const searchQuery: string = req.query.search;
//     if (!searchQuery) {
//       throw new Error("Search query is missing");
//     }
//     Book.fetchAll((books) => {
//       const filteredBooks = books.filter((book) => {
//         return book.name.toLowerCase().includes(searchQuery.toLowerCase());
//       });
//       res.json(filteredBooks);
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }
//# sourceMappingURL=books.js.map