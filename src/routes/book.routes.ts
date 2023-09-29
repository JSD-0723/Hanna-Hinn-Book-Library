import express, { Express } from "express";

import {
  checkBookData,
  checkBookId,
  checkPutBookData,
} from "../middlewares/bookValidation";

import {
  getIndex,
  getBook,
  putUpdateBook,
  postIndex,
  deleteBook,
  searchBooks,
} from "../controllers/books";

const router: Express = express.Router();

router.get("", getIndex);

router.post("", checkBookData, postIndex);

router.get("/search", searchBooks);

router.get("/:bookId", checkBookId, getBook);

router.put("/:bookId", checkBookId, checkPutBookData, putUpdateBook);

router.delete("/:bookId", checkBookId, deleteBook);

// router.post("/rent", rentBook);

export default router;
