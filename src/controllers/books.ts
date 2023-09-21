import { Request, Response } from "express";

import Book from "../models/book.js";

// GET /books --> Get All books
export function getIndex(req: Request, res: Response) {
  Book.findAll()
    .then((books) => {
      res.status(200).json({ message: "Operation Success", data: books });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}

// POST /books --> create a new book
export function postIndex(req: Request, res: Response) {
  const name: String = req.body.name;
  const author: String = req.body.author;
  const isbn: Number = req.body.isbn;

  Book.create({
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

// GET /books/:bookId --> Get a book by id
export function getBook(req: Request, res: Response) {
  const bookId: Number = req.params.bookId;
  Book.findByPk(bookId)
    .then((book) => {
      if (book) {
        res.status(200).json({ message: "Operation Success", data: book });
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}

// PUT /books/:bookId --> Update Book by id
export function putUpdateBook(req: Request, res: Response) {
  const bookId: Number = req.params.bookId;
  const updatedName: String = req.body.name;
  const updatedAuthor: String = req.body.author;
  const updatedIsbn: Number = req.body.isbn;
  Book.findByPk(bookId)
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

// DELETE /books/:bookId --> Delete Book by id
export function deleteBook(req: Request, res: Response) {
  const bookId: Number = req.params.bookId;
  Book.findByPk(bookId)
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
