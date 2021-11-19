"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_mine_myapps_microservices_ticket_app_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_mine_myapps_microservices_ticket_app_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_mine_myapps_microservices_ticket_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_mine_myapps_microservices_ticket_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_mine_myapps_microservices_ticket_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/build-client */ "./api/build-client.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\mine\\myapps\\microservices\\ticket_app\\client\\pages\\_app.js",
    _this = undefined;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_mine_myapps_microservices_ticket_app_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var AppComponent = function AppComponent(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      currentUser = _ref.currentUser;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_5__.default, {
      currentUser: currentUser
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = AppComponent;

AppComponent.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,D_mine_myapps_microservices_ticket_app_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_mine_myapps_microservices_ticket_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(context) {
    var client, _yield$client$get, data, pageProps;

    return D_mine_myapps_microservices_ticket_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_4__.default)(context.ctx);
            _context.next = 3;
            return client.get("/api/users/currentuser");

          case 3:
            _yield$client$get = _context.sent;
            data = _yield$client$get.data;
            pageProps = "";

            if (!context.Component.getInitialProps) {
              _context.next = 10;
              break;
            }

            _context.next = 9;
            return context.Component.getInitialProps(context.ctx, client, data.currentUser);

          case 9:
            pageProps = _context.sent;

          case 10:
            return _context.abrupt("return", _objectSpread(_objectSpread({}, data), {}, {
              pageProps: pageProps
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (AppComponent);

var _c;

$RefreshReg$(_c, "AppComponent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hNDNmNmZjNTlkNWUyZDIzM2M3My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBMkM7QUFBQSxNQUF4Q0MsU0FBd0MsUUFBeENBLFNBQXdDO0FBQUEsTUFBN0JDLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDOUQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyx1REFBRDtBQUFRLGlCQUFXLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FQRDs7S0FBTUY7O0FBUU5BLFlBQVksQ0FBQ0ksZUFBYjtBQUFBLDRTQUErQixpQkFBT0MsT0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCQyxZQUFBQSxNQUR1QixHQUNkUiwwREFBVyxDQUFDTyxPQUFPLENBQUNFLEdBQVQsQ0FERztBQUFBO0FBQUEsbUJBRU5ELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLHdCQUFYLENBRk07O0FBQUE7QUFBQTtBQUVyQkMsWUFBQUEsSUFGcUIscUJBRXJCQSxJQUZxQjtBQUd6QlAsWUFBQUEsU0FIeUIsR0FHYixFQUhhOztBQUFBLGlCQUl6QkcsT0FBTyxDQUFDSixTQUFSLENBQWtCRyxlQUpPO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBS1RDLE9BQU8sQ0FBQ0osU0FBUixDQUFrQkcsZUFBbEIsQ0FDaEJDLE9BQU8sQ0FBQ0UsR0FEUSxFQUVoQkQsTUFGZ0IsRUFHaEJHLElBQUksQ0FBQ04sV0FIVyxDQUxTOztBQUFBO0FBSzNCRCxZQUFBQSxTQUwyQjs7QUFBQTtBQUFBLDZFQVdqQk8sSUFYaUI7QUFXWFAsY0FBQUEsU0FBUyxFQUFUQTtBQVhXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQS9COztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWNBLCtEQUFlRixZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcclxuaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gXCIuLi9hcGkvYnVpbGQtY2xpZW50XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmNvbnN0IEFwcENvbXBvbmVudCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSAvPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5BcHBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChjb250ZXh0LmN0eCk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KFwiL2FwaS91c2Vycy9jdXJyZW50dXNlclwiKTtcclxuICBsZXQgcGFnZVByb3BzID0gXCJcIjtcclxuICBpZiAoY29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKVxyXG4gICAgcGFnZVByb3BzID0gYXdhaXQgY29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKFxyXG4gICAgICBjb250ZXh0LmN0eCxcclxuICAgICAgY2xpZW50LFxyXG4gICAgICBkYXRhLmN1cnJlbnRVc2VyXHJcbiAgICApO1xyXG5cclxuICByZXR1cm4geyAuLi5kYXRhLCBwYWdlUHJvcHMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcENvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbImJ1aWxkQ2xpZW50IiwiSGVhZGVyIiwiQXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudFVzZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiY2xpZW50IiwiY3R4IiwiZ2V0IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=