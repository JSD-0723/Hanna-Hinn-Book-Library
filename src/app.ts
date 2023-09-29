import express, { Express } from "express";
import bodyParser from "body-parser";
import passport from "passport";

import serverConfig from "./config/server.config";

import bookRoutes from "./routes/book.routes";
import authRoutes from "./routes/auth.routes";
import sequelize from "./util/database";
import { get404 } from "./controllers/error";
import { errorMiddleware } from "./middlewares/error";
import {
  User,
  Book,
  Category,
  RentedBook,
  BookAuthor,
  Author,
} from "./models/index";

// Initializing the Express Application
const app: Express = express();

// Defining the bodyParser middleWare on the whole application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport MiddleWares
app.use(passport.initialize());
import "./config/passportAuth.config";

// "/books" routes
app.use("/books", bookRoutes);
app.use("", authRoutes);

// Page not found when the route is not found
app.use(get404);

// Error handling middleware
app.use(errorMiddleware);

//defining Database Associations'
// M - M between Author and Book
Book.belongsToMany(Author, { through: BookAuthor });
Author.belongsToMany(Book, { through: BookAuthor });
// 1 - M between Category and Book
Category.hasMany(Book);
Book.belongsTo(Category);
// M - M between User and Book
Book.belongsToMany(User, { through: RentedBook });
User.belongsToMany(Book, { through: RentedBook });

sequelize
  // .sync({ force: true })
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
