import express, { Express } from "express";
import passport from "passport";

import {
  checkBookData,
  checkBookId,
  checkPutBookData,
} from "../middlewares/bookValidation";
import { authenticateJWT } from "../middlewares/authentication";
import {
  getIndex,
  getBook,
  putUpdateBook,
  postIndex,
  deleteBook,
  searchBooks,
} from "../controllers/books";

const router: Express = express.Router();

// Book Routes

router.get("", getIndex);

router.post(
  "",
  passport.authenticate("jwt", { session: false }),
  checkBookData,
  postIndex
);

router.get("/search", searchBooks);

router.get("/:bookId", checkBookId, getBook);

router.put(
  "/:bookId",
  passport.authenticate("jwt", { session: false }),
  checkBookId,
  // checkPutBookData,
  putUpdateBook
);

router.delete(
  "/:bookId",
  passport.authenticate("jwt", { session: false }),
  checkBookId,
  deleteBook
);

// router.post("/rent", rentBook);

export default router;
