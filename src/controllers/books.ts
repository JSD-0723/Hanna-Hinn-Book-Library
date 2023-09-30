import { Request, Response } from "express";
import { validationResult, Result, ValidationError } from "express-validator";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

import { User, Book } from "../models";
import { jwtKey } from "../config/secretKeys.config";

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

// todo: check another way to add the startDate and endDate to the Rent_Book table
// POST /rent/:bookId
export const postRentBook = (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtKey,
  };
  const jwtStrategy = new JwtStrategy(opts, (jwt_payload) => {
    User.findOne({ where: { id: jwt_payload.id } })
      .then((user: any) => {
        if (user) {
          console.log("Valid JWT Payload");
          Book.findByPk(bookId).then((book) => {
            if (!book) {
              return res.status(404).json({
                success: false,
                message: "Request Book Not Found",
              });
            } else {
              user.addBook(book);
              return res.json({
                success: true,
                message: "Book Rented successfully",
                user: user,
                book: book,
              });
            }
          });
        } else {
          console.log("inValid JWT Payload");
          return res.status(401).message({
            success: false,
            message: "UnAuthorized User",
          });
        }
      })
      .catch((err) => {
        console.log("Error occurred while checking JWT payload", err.message);
        return res.status(401).message({
          success: false,
          message: "Something went wrong",
          error: err,
        });
      });
  });
};

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
