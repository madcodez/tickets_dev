"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Created"] = "created";
    OrderStatus["Complete"] = "complete";
    OrderStatus["AwaitingPayment"] = "awaiting:payment";
    OrderStatus["Cancelled"] = "cancelled";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
