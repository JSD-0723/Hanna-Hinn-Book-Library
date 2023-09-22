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

// ??????????????? (Search about it)
// Check if we can change it to interface or something else
export type TBook = {
  id: Number;
  name: string;
  author: string;
  isbn: number;
};

export default Book;
