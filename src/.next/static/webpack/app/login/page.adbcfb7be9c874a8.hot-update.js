"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/components/formInput/FormInput.tsx":
/*!************************************************!*\
  !*** ./app/components/formInput/FormInput.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _formInput_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formInput.module.css */ \"(app-pages-browser)/./app/components/formInput/formInput.module.css\");\n/* harmony import */ var _formInput_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_formInput_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FormInput = (props)=>{\n    var _props_placeholder;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_formInput_module_css__WEBPACK_IMPORTED_MODULE_1___default().formInputWrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: (_formInput_module_css__WEBPACK_IMPORTED_MODULE_1___default().formLabel),\n                htmlFor: props.label,\n                children: props.label\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\luanm\\\\OneDrive\\\\Desktop\\\\all-folders\\\\mind-app\\\\src\\\\app\\\\components\\\\formInput\\\\FormInput.tsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_formInput_module_css__WEBPACK_IMPORTED_MODULE_1___default().formInput),\n                type: props.type,\n                placeholder: (_props_placeholder = props.placeholder) !== null && _props_placeholder !== void 0 ? _props_placeholder : \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\luanm\\\\OneDrive\\\\Desktop\\\\all-folders\\\\mind-app\\\\src\\\\app\\\\components\\\\formInput\\\\FormInput.tsx\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\luanm\\\\OneDrive\\\\Desktop\\\\all-folders\\\\mind-app\\\\src\\\\app\\\\components\\\\formInput\\\\FormInput.tsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n};\n_c = FormInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormInput);\nvar _c;\n$RefreshReg$(_c, \"FormInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Zvcm1JbnB1dC9Gb3JtSW5wdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDO0FBUTVDLE1BQU1DLFlBQVksQ0FBQ0M7UUFTRkE7SUFSaEIscUJBQ0MsOERBQUNDO1FBQUlDLFdBQVdKLCtFQUF1Qjs7MEJBQ3RDLDhEQUFDTTtnQkFBTUYsV0FBV0osd0VBQWdCO2dCQUFFUSxTQUFTTixNQUFNSSxLQUFLOzBCQUN0REosTUFBTUksS0FBSzs7Ozs7OzBCQUViLDhEQUFDRztnQkFDQUwsV0FBV0osd0VBQWdCO2dCQUMzQlcsTUFBTVQsTUFBTVMsSUFBSTtnQkFDaEJDLGFBQWFWLENBQUFBLHFCQUFBQSxNQUFNVSxXQUFXLGNBQWpCVixnQ0FBQUEscUJBQXFCOzs7Ozs7Ozs7Ozs7QUFJdEM7S0FiTUQ7QUFlTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9mb3JtSW5wdXQvRm9ybUlucHV0LnRzeD8wNGFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb3JtSW5wdXQubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgRm9ybUlucHV0UHJvcHMge1xyXG5cdGxhYmVsPzogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRwbGFjZWhvbGRlcj86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgRm9ybUlucHV0ID0gKHByb3BzOiBGb3JtSW5wdXRQcm9wcykgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JbnB1dFdyYXBwZXJ9PlxyXG5cdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUxhYmVsfSBodG1sRm9yPXtwcm9wcy5sYWJlbCB9PlxyXG5cdFx0XHRcdHtwcm9wcy5sYWJlbH1cclxuXHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0PGlucHV0XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlucHV0fVxyXG5cdFx0XHRcdHR5cGU9e3Byb3BzLnR5cGV9XHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyID8/ICcnfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1JbnB1dDtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkZvcm1JbnB1dCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybUlucHV0V3JhcHBlciIsImxhYmVsIiwiZm9ybUxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiZm9ybUlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/formInput/FormInput.tsx\n"));

/***/ })

});