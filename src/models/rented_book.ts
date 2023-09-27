import Sequelize from "sequelize";
import sequelize from "../util/database";

class RentedBook extends Sequelize.Model {
  declare id: number;
  declare startDate: Date;
  declare endDate: Date;
}

RentedBook.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    duration: {
      type: Sequelize.VIRTUAL,
      get() {
        // needs more modifications based on requirements and how the date is stored ???
        const diffInTime = this.startDate.getTime() - this.endDate.getTime();
        const diffInDays = diffInTime / (1000 * 3600 * 24);
        return diffInDays || 0;
      },
      set() {
        console.log("Do not try to set the 'Duration' property!");
        throw new Error("Do not try to set the 'Duration' property!");
      },
    },
  },
  {
    sequelize: sequelize,
  }
);

export default RentedBook;
