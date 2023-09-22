import express, { Express } from "express";
import bodyParser from "body-parser";

import bookRoutes from "./routes/book.routes.js";
import sequelize from "./util/database.js";
import { get404 } from "./controllers/error.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/books", bookRoutes);

app.use(get404);

app.use(errorMiddleware);

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
