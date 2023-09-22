import { Result, ValidationError } from "express-validator";

const checkValidationResult = (errors: Result<ValidationError>) => {
  if (!errors.isEmpty()) {
    return { message: errors.array()[0].msg };
  }
  return;
};

export default checkValidationResult;
