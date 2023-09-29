import { body, param } from "express-validator";

export const checkBookData = [
  body("name", "Please enter a valid name.").exists().isString().notEmpty(),
  body("authorId", "Please enter a valid Author Id.")
    .exists()
    .isNumeric()
    .notEmpty(),
  body("isbn", "Please enter a valid isbn number.")
    .exists()
    .isNumeric()
    .notEmpty(),
  body("categoryId", "Please enter a valid category id")
    .exists()
    .isNumeric()
    .notEmpty(),
];

export const checkBookId = [
  param("bookId", "Please enter a valid Book Id in the params")
    .exists()
    .isNumeric(),
];

export const checkPutBookData = [
  body("name", "Please enter a valid name.").optional().isString().notEmpty(),
  body("authorId", "Please enter a valid Author Id.")
    .optional()
    .isNumeric()
    .notEmpty(),
  body("isbn", "Please enter a valid isbn number.")
    .optional()
    .isNumeric()
    .notEmpty(),
  body("categoryId", "Please enter a valid category id")
    .optional()
    .isNumeric()
    .notEmpty(),
];
