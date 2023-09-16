import { Request, Response } from "express";

import Book from "../models/book.js";

// GET /books --> Get All books
export function getBooks(req: Request, res: Response) {
  Book.fetchAll((books) => {
    res.json(books);
  });
}

// POST /rent-book --> Rent a Book
export function rentBook(req: Request, res: Response) {
  try {
    const bookName: string = req.body.name;
    if (!bookName) {
      throw new Error("Book name missing for rent");
    }
    Book.fetchAll((books) => {
      let foundBook: boolean = false;
      books.forEach((book: Book) => {
        if (book.name.toLowerCase() === bookName.toLowerCase()) {
          book.rented = true;
          foundBook = true;
        }
      });
      if (foundBook) {
        res.status(200).send("Book Rented Successfully");
      } else {
        res.status(404).send("Desired book not found");
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// GET /search?search="str" --> Get books that match the search
export function searchBooks(req: Request, res: Response) {
  try {
    const searchQuery: string = req.query.search;
    if (!searchQuery) {
      throw new Error("Search query is missing");
    }
    Book.fetchAll((books: Book[]) => {
      const filteredBooks: Book[] = books.filter((book: Book) => {
        return book.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      res.json(filteredBooks);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
