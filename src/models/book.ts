import fs from "fs";
import path from "path";

const filePath: string = path.join(
  path.dirname(require.main.filename),
  "data",
  "data.json"
);

const getBooksFromFile = (cb: { (books: Book[]): void }): void => {
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
  rented: boolean;

  constructor(
    name: string,
    author: string,
    isbn: number,
    rented: boolean = false
  ) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
    this.rented = rented;
  }

  save() {
    getBooksFromFile((books: Book[]) => {
      books.push(this);
      fs.writeFile(filePath, JSON.stringify(books), (err: Error) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb: { (books: Book[]): void }) {
    getBooksFromFile(cb);
  }
}

export default Book;
