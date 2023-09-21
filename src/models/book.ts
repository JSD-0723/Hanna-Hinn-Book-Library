import Sequelize from "sequelize";
import sequelize from "../util/database";

const Book = sequelize.define("book", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isbn: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
  },
});

export default Book;
