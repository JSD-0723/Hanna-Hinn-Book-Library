import path from "path";
import express from "express";

import { getBooks, searchBooks } from "../controllers/books.js";

const router = express.Router();

router.get("/books", getBooks);

router.get("/search", searchBooks);

export default router;
