import { body } from "express-validator";

export const registerValidations = [
  body("fname", "Please enter a valid firs name.")
    .exists()
    .isString()
    .notEmpty(),
  body("lname", "Please enter a valid second name.")
    .exists()
    .isString()
    .notEmpty(),
  body("email", "Please enter a valid email.").exists().isEmail().notEmpty(),
  body("password", "Please enter a valid password.")
    .exists()
    .isString()
    .notEmpty(),
];

export const loginValidations = [
  body("email", "Please enter a valid email.").exists().isEmail().notEmpty(),
  body("password", "Please enter a valid password.")
    .exists()
    .isString()
    .notEmpty(),
];
