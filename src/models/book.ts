import fs from "fs";
import path from "path";

const filePath: string = path.join(
  path.dirname(require.main.filename),
  "data",
  "data.json"
);

const getBooksFromFile = (cb) => {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      cb([]);
    } else {
      cb(JSON.parse(data.toString()));
    }
  });
};

class Book {
  name: string;
  author: string;
  isbn: number;

  constructor(name: string, author: string, isbn: number) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
  }

  save() {
    getBooksFromFile((books) => {
      books.push(this);
      fs.writeFile(filePath, JSON.stringify(books), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getBooksFromFile(cb);
  }
}

export default Book;
