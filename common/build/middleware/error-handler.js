"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var custom_error_1 = require("../error/custom-error");
var errorHandler = function (err, req, res, next) {
    if (err instanceof custom_error_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeError() });
    }
    console.error(err);
    res.status(400).send([{ message: "Something went wrong" }]);
};
exports.errorHandler = errorHandler;
