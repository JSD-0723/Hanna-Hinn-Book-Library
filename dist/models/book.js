"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(path_1.default.dirname(require.main.filename), "data", "data.json");
const getBooksFromFile = (cb) => {
    fs_1.default.readFile(filePath, (error, data) => {
        if (error) {
            cb([]);
        }
        else {
            cb(JSON.parse(data.toString()));
        }
    });
};
class Book {
    constructor(name, author, isbn, rented = false) {
        this.name = name;
        this.author = author;
        this.isbn = isbn;
        this.rented = rented;
    }
    save() {
        getBooksFromFile((books) => {
            books.push(this);
            fs_1.default.writeFile(filePath, JSON.stringify(books), (err) => {
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        getBooksFromFile(cb);
    }
}
exports.default = Book;
//# sourceMappingURL=book.js.map