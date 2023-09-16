import express, { Express } from "express";
import bodyParser from "body-parser";

import bookRoutes from "./routes/book.js";
import { get404, errorHandler } from "./controllers/error.js";

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bookRoutes);

app.use(get404);

app.use(errorHandler);

app.listen(3000);
