import express, { Express } from "express";

import {
  getIndex,
  getBook,
  putUpdateBook,
  postIndex,
  deleteBook,
} from "../controllers/books.js";

const router: Express = express.Router();

router.get("", getIndex);

router.post("", postIndex);

router.get("/:bookId", getBook);

router.put("/:bookId", putUpdateBook);

router.delete("/:bookId", deleteBook);

// router.get(searchBooks);

// router.post(rentBook);

export default router;
