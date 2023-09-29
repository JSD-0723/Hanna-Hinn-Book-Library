import { Request, Response } from "express";
import { validationResult, Result, ValidationError } from "express-validator";

import {
  fetchAllBooksData,
  createBook,
  fetchBookById,
  deleteBookById,
} from "../services/bookService";
import checkValidationResult from "../util/checkValidationError";

// GET /books --> Get All books
export function getIndex(req: Request, res: Response) {
  fetchAllBooksData().then((books) => {
    res.json({ result: books });
  });
}

// POST /books --> create a new book
export function postIndex(req: Request, res: Response) {
  const name: String = req.body.name; // book
  const authorId: Number = req.body.authorId; // author name
  const isbn: Number = req.body.isbn; // isbn
  const categoryId: Number = req.body.categoryId; // category name
  const errors: Result<ValidationError> = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json(checkError);
  }

  createBook(name, authorId, isbn, categoryId).then((message) => {
    res.json(message);
  });
}

// GET /books/:bookId --> Get a book by id
export function getBook(req: Request, res: Response) {
  const bookId: number = req.params.bookId;
  const errors: Result<ValidationError> = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json(checkError);
  }

  fetchBookById(bookId).then((result) => {
    return res.json(result);
  });
}

// PUT /books/:bookId --> Update Book by id
export function putUpdateBook(req: Request, res: Response) {
  const updatedBook = req.body;
  const bookId: number = req.params.bookId;
  const errors: Result<ValidationError> = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json(checkError);
  }

  if (!updatedBook || Object.keys(req.body).length === 0) {
    console.log("Request body is not Valid: ", updatedBook);
    return res.status(422).json({ message: "Request Body is not Valid" });
  }

  // Book.findByPk(bookId)
  //   .then((book) => {
  //     if (!book) {
  //       console.log("Request Book does not exists");
  //       return res.status(404).json({ message: "Book not found!" });
  //     } else {
  //       Book.update(updatedBook, { where: { id: bookId } }).then(() => {
  //         console.log("Successfully updated Book!");
  //         res.status(200).json({ message: "Book updated successfully" });
  //       });
  //     }
  //   })
  //   .catch((error: Error) => {
  //     console.log("Failure Updating Book: ", error.message);
  //     res.status(500).json({ error: error.message || "Error updating Book!" });
  //   });
}

// DELETE /books/:bookId --> Delete Book by id
export function deleteBook(req: Request, res: Response) {
  const bookId: number = req.params.bookId;

  const errors: Result<ValidationError> = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json(checkError);
  }

  deleteBookById(bookId).then((result) => {
    return res.json(result);
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
export function searchBooks(req: Request, res: Response) {
  try {
    const searchQuery: string = req.query.search;
    if (!searchQuery) {
      throw new Error("Search query is missing");
    }
    // Book.findAll()
    //   .then((books) => {
    //     const filteredBooks = books.filter((book) => {
    //       return book.name.toLowerCase().includes(searchQuery.toLowerCase());
    //     });
    //     console.log(`Successfully Searched ${searchQuery}: `, filteredBooks);
    //     res
    //       .status(200)
    //       .json({ message: "Operation Success", data: filteredBooks });
    //   })
    //   .catch((error: Error) => {
    //     console.log("Failure Searching Books: ", error.message);
    //     res
    //       .status(500)
    //       .json({ error: error.message || "Error Fetching All Books" });
    //   });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
