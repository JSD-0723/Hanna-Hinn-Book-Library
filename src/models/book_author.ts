import Sequelize from "sequelize";
import sequelize from "../util/database";

class BookAuthor extends Sequelize.Model {
  declare id: number;
}

BookAuthor.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize: sequelize,
  }
);

export default BookAuthor;
