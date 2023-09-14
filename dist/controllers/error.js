"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.get404 = void 0;
const get404 = (req, res, next) => {
    res.status(404).send("404 Not Found");
};
exports.get404 = get404;
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: `Something Went Wrong: ${err.message}` });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.js.map