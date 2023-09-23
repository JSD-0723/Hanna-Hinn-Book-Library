"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db_config_js_1 = __importDefault(require("../config/db.config.js"));
const sequelize = new Sequelize(db_config_js_1.default.DB, db_config_js_1.default.USER, db_config_js_1.default.PASSWORD, {
    dialect: db_config_js_1.default.dialect,
    host: db_config_js_1.default.HOST,
});
exports.default = sequelize;
//# sourceMappingURL=database.js.map