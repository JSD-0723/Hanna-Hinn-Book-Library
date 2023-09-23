import express, { Express } from "express";
import bodyParser from "body-parser";

import serverConfig from "./config/server.config.js";

import bookRoutes from "./routes/book.routes.js";
import sequelize from "./util/database.js";
import { get404 } from "./controllers/error.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

// Initializing the Express Application
const app: Express = express();

// Defining the bodyParser middleWare on the whole application
app.use(bodyParser.urlencoded({ extended: true }));

// "/books" routes
app.use("/books", bookRoutes);

// Page not found when the route is not found
app.use(get404);

// Error handling middleware
app.use(errorMiddleware);

sequelize
  .sync()
  .then(() => {
    app.listen(serverConfig.PORT, serverConfig.HOST);
    console.log(
      `Server Listening on ${serverConfig.HOST}:${serverConfig.PORT}`
    );
  })
  .catch((err) => {
    console.log(err);
  });
