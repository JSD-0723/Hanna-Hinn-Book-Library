import Sequelize from "sequelize";
import sequelize from "../util/database";

class Author extends Sequelize.Model {
  declare id: number;
  declare fname: string;
  declare lname: string;
}

Author.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    fname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fullName: {
      type: Sequelize.VIRTUAL,
      get() {
        return `${this.fname} ${this.lname}`;
      },
      set() {
        console.log("Do not try to set the 'Full Name' property!");
        throw new Error("Do not try to set the 'Full Name' property!");
      },
    },
  },
  {
    sequelize: sequelize,
  }
);

export default Author;
