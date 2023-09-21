"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const sequelize = new Sequelize("book", "root", "Admin123=", {
    dialect: "mysql",
    host: "localhost",
});
exports.default = sequelize;
//# sourceMappingURL=database.js.map