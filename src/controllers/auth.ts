import { Request, Response } from "express";
import { validationResult, Result, ValidationError } from "express-validator";

import { User } from "../models";
import { userRegister, userLogin } from "../services/authenticationServices";

import checkValidationResult from "../util/checkValidationError";

export const postRegister = (req: Request, res: Response) => {
  console.log("Register Route");
  const errors: Result<ValidationError> = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json(checkError);
  }

  const newUser = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password,
  });

  userRegister(newUser).then((message) => {
    res.json(message);
  });
};

export const postLogin = (req: Request, res: Response) => {
  console.log("Login Route");
  const errors: Result<ValidationError> = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json(checkError);
  }

  userLogin(req.body.email, req.body.password).then((result) => {
    res.status(result.status).json(result.response);
  });
};

export const getProtected = (req, res) => {
  return res.status(200).json({
    success: true,
    user: {
      id: req.user.id,
      email: req.user.email,
    },
  });
};
