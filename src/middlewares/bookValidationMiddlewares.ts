import { body, param } from "express-validator";

export const checkBookData = [
  body("name", "Please enter a valid name.").exists().isString().notEmpty(),
  body("author", "Please enter a valid Author.").exists().isString().notEmpty(),
  body("isbn", "Please enter a valid isbn number.").exists().isNumeric(),
];

export const checkBookId = [
  param("bookId", "Please enter a valid Book Id in the params")
    .exists()
    .isNumeric(),
];

export const checkPutBookData = [
  body("name", "Please enter a valid name.").optional().isString().notEmpty(),
  body("author", "Please enter a valid Author.")
    .optional()
    .isString()
    .notEmpty(),
  body("isbn", "Please enter a valid isbn number.").optional().isNumeric(),
];

/* 
  ToDo: Add a custom validation middleware for the req.body for 
  when the request body is empty when we have optional values 
  like in the put method (using the express-validator library)
*/
