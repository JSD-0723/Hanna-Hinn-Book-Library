const Sequelize = require("sequelize");
import dbConfig from "../config/db.config";

// Sequelize Configuration
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  dialect: dbConfig.dialect,
  host: dbConfig.HOST,
});

// Check if Sequelize connection is established
sequelize
  .authenticate()
  .then(() => {
    console.log("DB Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
