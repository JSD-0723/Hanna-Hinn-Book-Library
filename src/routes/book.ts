import express, { Express } from "express";

import { getBooks, searchBooks, rentBook } from "../controllers/books.js";

const router: Express = express.Router();

router.get("/books", getBooks);

router.get("/search", searchBooks);

router.post("/rent-book", rentBook);

export default router;
