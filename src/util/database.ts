const Sequelize = require("sequelize");

const sequelize = new Sequelize("book", "root", "Admin123=", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
