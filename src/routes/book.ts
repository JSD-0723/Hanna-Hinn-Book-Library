import express from "express";

import { getBooks, searchBooks, rentBook } from "../controllers/books.js";

const router = express.Router();

router.get("/books", getBooks);

router.get("/search", searchBooks);

router.post("/rent-book", rentBook);

export default router;
