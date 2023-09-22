import express, { Express } from "express";

import {
  checkBookData,
  checkBookId,
  checkPutBookData,
} from "../middlewares/bookValidationMiddlewares.js";

import {
  getIndex,
  getBook,
  putUpdateBook,
  postIndex,
  deleteBook,
} from "../controllers/books.js";

const router: Express = express.Router();

router.get("", getIndex);

router.post("", checkBookData, postIndex);

router.get("/:bookId", checkBookId, getBook);

// Put method validations ☹️
router.put("/:bookId", checkBookId, checkPutBookData, putUpdateBook);

router.delete("/:bookId", checkBookId, deleteBook);

// router.get("/search", searchBooks);

// router.post("/rent", rentBook);

export default router;
