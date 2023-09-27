import Sequelize from "sequelize";
import sequelize from "../util/database";

class Book extends Sequelize.Model {
  declare id: number;
  declare name: string;
  declare isbn: string;
}

Book.init(
  {
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
    isbn: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
  }
);

// ??????????????? (Search about it)
// // Check if we can change it to interface or something else
// export interface TBook {
//   id: Number;
//   name: string;
//   author: string;
//   isbn: number;
// }

export default Book;
