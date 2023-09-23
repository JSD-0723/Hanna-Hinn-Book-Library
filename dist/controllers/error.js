"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get404 = void 0;
const get404 = (req, res) => {
    const requestedUrl = req.url;
    console.log(`${requestedUrl} returned 404 (Not Found)!`);
    res.status(404).send("404 Not Found");
};
exports.get404 = get404;
//# sourceMappingURL=error.js.map