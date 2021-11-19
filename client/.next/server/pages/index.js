"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const buildClient = ({
  req
}) => {
  if (true) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
      baseURL: "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: req.headers
    });
  } else {}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildClient);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/build-client */ "./api/build-client.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\mine\\myapps\\microservices\\ticket_app\\client\\pages\\index.js";



const Landing = ({
  currentUser
}) => {
  return currentUser ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
    children: "You are signed in"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
    children: "You are NOT signed in"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

Landing.getInitialProps = async (context, client, currentUser) => {
  return {
    currentUser
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFhO0FBQy9CLFlBQW1DO0FBQ2pDLFdBQU9GLG1EQUFBLENBQWE7QUFDbEJJLE1BQUFBLE9BQU8sRUFDTCxpRUFGZ0I7QUFHbEJDLE1BQUFBLE9BQU8sRUFBRUgsR0FBRyxDQUFDRztBQUhLLEtBQWIsQ0FBUDtBQUtELEdBTkQsTUFNTyxFQUVOO0FBQ0YsQ0FWRDs7QUFXQSxpRUFBZUosV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7OztBQUVBLE1BQU1NLE9BQU8sR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFxQjtBQUNuQyxTQUFPQSxXQUFXLGdCQUNoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQixnQkFHaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUtELENBTkQ7O0FBUUFELE9BQU8sQ0FBQ0UsZUFBUixHQUEwQixPQUFPQyxPQUFQLEVBQWdCQyxNQUFoQixFQUF3QkgsV0FBeEIsS0FBd0M7QUFDaEUsU0FBTztBQUFFQSxJQUFBQTtBQUFGLEdBQVA7QUFDRCxDQUZEOztBQUdBLGlFQUFlRCxPQUFmOzs7Ozs7Ozs7O0FDYkE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2FwaS9idWlsZC1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBidWlsZENsaWVudCA9ICh7IHJlcSB9KSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOlxyXG4gICAgICAgIFwiaHR0cDovL2luZ3Jlc3MtbmdpbngtY29udHJvbGxlci5pbmdyZXNzLW5naW54LnN2Yy5jbHVzdGVyLmxvY2FsXCIsXHJcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoeyBiYXNlVXJsOiBcIi9cIiB9KTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQ2xpZW50O1xyXG4iLCJpbXBvcnQgYnVpbGRDbGllbnQgZnJvbSBcIi4uL2FwaS9idWlsZC1jbGllbnRcIjtcclxuXHJcbmNvbnN0IExhbmRpbmcgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgcmV0dXJuIGN1cnJlbnRVc2VyID8gKFxyXG4gICAgPGgxPllvdSBhcmUgc2lnbmVkIGluPC9oMT5cclxuICApIDogKFxyXG4gICAgPGgxPllvdSBhcmUgTk9UIHNpZ25lZCBpbjwvaDE+XHJcbiAgKTtcclxufTtcclxuXHJcbkxhbmRpbmcuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQsIGNsaWVudCwgY3VycmVudFVzZXIpID0+IHtcclxuICByZXR1cm4geyBjdXJyZW50VXNlciB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImF4aW9zIiwiYnVpbGRDbGllbnQiLCJyZXEiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImJhc2VVcmwiLCJMYW5kaW5nIiwiY3VycmVudFVzZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==