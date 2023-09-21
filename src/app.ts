import express, { Express } from "express";
import bodyParser from "body-parser";

import bookRoutes from "./routes/book.js";
import sequelize from "./util/database";
import { get404, errorHandler } from "./controllers/error.js";

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/books", bookRoutes);

app.use(get404);

app.use(errorHandler);

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
