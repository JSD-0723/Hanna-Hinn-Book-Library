import Sequelize from "sequelize";
import sequelize from "../util/database";

class Category extends Sequelize.Model {
  declare id: number;
  declare type: string;
}

Category.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
  }
);

export default Category;
