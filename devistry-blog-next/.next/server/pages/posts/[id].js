"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostPage),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-it */ \"markdown-it\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/jonaswolfram/Sites/_Tutorials/STRAPI/devistry-blog-nextjs/devistry-blog-next/pages/posts/[id].js\";\n\n\n\n\nfunction PostPage({\n  post\n}) {\n  const md = new (markdown_it__WEBPACK_IMPORTED_MODULE_2___default())();\n  const htmlContent = md.render(post.content);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"article\", {\n    className: \"blogContentPage\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"header\", {\n      className: \"blogContentPage__header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        className: \"blogContentPage__h1\",\n        children: post.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n        className: \"blogContentPage__h3\",\n        children: post.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n      className: \"blogContentPage__section\",\n      dangerouslySetInnerHTML: {\n        __html: htmlContent\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, this);\n}\nasync function getStaticProps({\n  params\n}) {\n  const postsRes = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`http://localhost:1337/posts/${params.id}`);\n  return {\n    props: {\n      post: postsRes.data\n    }\n  };\n}\nasync function getStaticPaths() {\n  const postsRes = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:1337/posts\");\n  const paths = await postsRes.data.map(post => {\n    return {\n      params: {\n        id: post.id.toString()\n      }\n    };\n  });\n  return {\n    paths,\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTRyxRQUFULENBQWtCO0FBQUVDLEVBQUFBO0FBQUYsQ0FBbEIsRUFBNEI7QUFDdkMsUUFBTUMsRUFBRSxHQUFHLElBQUlILG9EQUFKLEVBQVg7QUFDQSxRQUFNSSxXQUFXLEdBQUdELEVBQUUsQ0FBQ0UsTUFBSCxDQUFVSCxJQUFJLENBQUNJLE9BQWYsQ0FBcEI7QUFFQSxzQkFDSTtBQUFTLGFBQVMsRUFBQyxpQkFBbkI7QUFBQSw0QkFDSTtBQUFRLGVBQVMsRUFBQyx5QkFBbEI7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMscUJBQWQ7QUFBQSxrQkFBcUNKLElBQUksQ0FBQ0s7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSSxpQkFBUyxFQUFDLHFCQUFkO0FBQUEsa0JBQXFDTCxJQUFJLENBQUNNO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtRO0FBQVMsZUFBUyxFQUFDLDBCQUFuQjtBQUE4Qyw2QkFBdUIsRUFBRTtBQUFDQyxRQUFBQSxNQUFNLEVBQUVMO0FBQVQ7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7QUFHTSxlQUFlTSxjQUFmLENBQThCO0FBQUVDLEVBQUFBO0FBQUYsQ0FBOUIsRUFBMEM7QUFDN0MsUUFBTUMsUUFBUSxHQUFHLE1BQU1iLGdEQUFBLENBQVcsK0JBQThCWSxNQUFNLENBQUNHLEVBQUcsRUFBbkQsQ0FBdkI7QUFFQSxTQUFPO0FBQ0hDLElBQUFBLEtBQUssRUFBRTtBQUNIYixNQUFBQSxJQUFJLEVBQUVVLFFBQVEsQ0FBQ0k7QUFEWjtBQURKLEdBQVA7QUFLSDtBQUVNLGVBQWVDLGNBQWYsR0FBZ0M7QUFFbkMsUUFBTUwsUUFBUSxHQUFHLE1BQU1iLGdEQUFBLENBQVUsNkJBQVYsQ0FBdkI7QUFFQSxRQUFNbUIsS0FBSyxHQUFHLE1BQU1OLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRyxHQUFkLENBQW1CakIsSUFBRCxJQUFVO0FBQzVDLFdBQU87QUFBRVMsTUFBQUEsTUFBTSxFQUFFO0FBQUVHLFFBQUFBLEVBQUUsRUFBRVosSUFBSSxDQUFDWSxFQUFMLENBQVFNLFFBQVI7QUFBTjtBQUFWLEtBQVA7QUFDSCxHQUZtQixDQUFwQjtBQUlBLFNBQU87QUFDSEYsSUFBQUEsS0FERztBQUVIRyxJQUFBQSxRQUFRLEVBQUU7QUFGUCxHQUFQO0FBSUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZpc3RyeS1ibG9nLW5leHQvLi9wYWdlcy9wb3N0cy9baWRdLmpzP2M4NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gJ21hcmtkb3duLWl0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFBhZ2UoeyBwb3N0IH0pIHtcbiAgICBjb25zdCBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG4gICAgY29uc3QgaHRtbENvbnRlbnQgPSBtZC5yZW5kZXIocG9zdC5jb250ZW50KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImJsb2dDb250ZW50UGFnZVwiPlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJibG9nQ29udGVudFBhZ2VfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJibG9nQ29udGVudFBhZ2VfX2gxXCI+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYmxvZ0NvbnRlbnRQYWdlX19oM1wiPntwb3N0LmRlc2NyaXB0aW9ufTwvaDM+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9nQ29udGVudFBhZ2VfX3NlY3Rpb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaHRtbENvbnRlbnR9fT48L3NlY3Rpb24+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgICBjb25zdCBwb3N0c1JlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L3Bvc3RzLyR7cGFyYW1zLmlkfWApO1xuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb3N0OiBwb3N0c1Jlcy5kYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcblxuICAgIGNvbnN0IHBvc3RzUmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L3Bvc3RzXCIpO1xuXG4gICAgY29uc3QgcGF0aHMgPSBhd2FpdCBwb3N0c1Jlcy5kYXRhLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICByZXR1cm4geyBwYXJhbXM6IHsgaWQ6IHBvc3QuaWQudG9TdHJpbmcoKSB9IH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIH07XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJNYXJrZG93bkl0IiwiUG9zdFBhZ2UiLCJwb3N0IiwibWQiLCJodG1sQ29udGVudCIsInJlbmRlciIsImNvbnRlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX19odG1sIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJwb3N0c1JlcyIsImdldCIsImlkIiwicHJvcHMiLCJkYXRhIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsIm1hcCIsInRvU3RyaW5nIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("markdown-it");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].js"));
module.exports = __webpack_exports__;

})();