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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prismicio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../prismicio */ \"./src/prismicio.js\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prismicio/react */ \"@prismicio/react\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prismicio_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @prismicio/next */ \"@prismicio/next\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prismicio_next__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio__WEBPACK_IMPORTED_MODULE_3__]);\n_prismicio__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n // Adjust path as needed\n\n\nfunction App({ Component, pageProps, navigation, error }) {\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    const renderNavigation = ()=>{\n        if (!isClient) return null;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: navigation?.data?.slices?.map((slice)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: slice.primary?.link && slice.primary?.label && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_react__WEBPACK_IMPORTED_MODULE_4__.PrismicLink, {\n                            field: slice.primary.link,\n                            linkResolver: _prismicio__WEBPACK_IMPORTED_MODULE_3__.linkResolver,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_react__WEBPACK_IMPORTED_MODULE_4__.PrismicRichText, {\n                                field: slice.primary.label\n                            }, void 0, false, {\n                                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                                lineNumber: 23,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, this)\n                    }, slice.id, false, {\n                        fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            renderNavigation(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_next__WEBPACK_IMPORTED_MODULE_5__.PrismicPreview, {\n                repositoryName: _prismicio__WEBPACK_IMPORTED_MODULE_3__.repositoryName,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nasync function getStaticProps() {\n    const client = (0,_prismicio__WEBPACK_IMPORTED_MODULE_3__.createClient)();\n    let navigation = null;\n    try {\n        navigation = await client.getByUID(\"navigation\", \"header\");\n    } catch (error) {\n        console.error(\"Error fetching navigation:\", error);\n    }\n    return {\n        props: {\n            navigation\n        },\n        revalidate: 60 * 60\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNjO0FBQzhCLENBQUMsd0JBQXdCO0FBQ25DO0FBQ2Y7QUFFakQsU0FBU1EsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQUU7SUFDdEQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDO0lBRXpDQyxnREFBU0EsQ0FBQztRQUNSYSxZQUFZO0lBQ2QsR0FBRyxFQUFFO0lBRUwsTUFBTUMsbUJBQW1CO1FBQ3ZCLElBQUksQ0FBQ0YsVUFBVSxPQUFPO1FBQ3RCLHFCQUNFLDhEQUFDRztzQkFDQyw0RUFBQ0M7MEJBQ0VOLFlBQVlPLE1BQU1DLFFBQVFDLElBQUksQ0FBQ0Msc0JBQzlCLDhEQUFDQztrQ0FDRUQsTUFBTUUsT0FBTyxFQUFFQyxRQUFRSCxNQUFNRSxPQUFPLEVBQUVFLHVCQUNyQyw4REFBQ3BCLHlEQUFXQTs0QkFBQ3FCLE9BQU9MLE1BQU1FLE9BQU8sQ0FBQ0MsSUFBSTs0QkFBRXBCLGNBQWNBLG9EQUFZQTtzQ0FDaEUsNEVBQUNFLDZEQUFlQTtnQ0FBQ29CLE9BQU9MLE1BQU1FLE9BQU8sQ0FBQ0UsS0FBSzs7Ozs7Ozs7Ozs7dUJBSHhDSixNQUFNTSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7SUFXM0I7SUFFQSxxQkFDRTs7WUFDR1o7MEJBQ0QsOERBQUNSLDJEQUFjQTtnQkFBQ0osZ0JBQWdCQSxzREFBY0E7MEJBQzVDLDRFQUFDTTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRU8sZUFBZWtCO0lBQ3BCLE1BQU1DLFNBQVMzQix3REFBWUE7SUFDM0IsSUFBSVMsYUFBYTtJQUVqQixJQUFJO1FBQ0ZBLGFBQWEsTUFBTWtCLE9BQU9DLFFBQVEsQ0FBQyxjQUFjO0lBQ25ELEVBQUUsT0FBT2xCLE9BQU87UUFDZG1CLFFBQVFuQixLQUFLLENBQUMsOEJBQThCQTtJQUM5QztJQUVBLE9BQU87UUFDTG9CLE9BQU87WUFDTHJCO1FBQ0Y7UUFDQXNCLFlBQVksS0FBSztJQUNuQjtBQUNGO0FBRUEsaUVBQWV6QixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXRlbXBsYXRlLTEvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCByZXBvc2l0b3J5TmFtZSwgbGlua1Jlc29sdmVyIH0gZnJvbSAnLi4vcHJpc21pY2lvJzsgLy8gQWRqdXN0IHBhdGggYXMgbmVlZGVkXG5pbXBvcnQgeyBQcmlzbWljTGluaywgUHJpc21pY1JpY2hUZXh0IH0gZnJvbSAnQHByaXNtaWNpby9yZWFjdCc7XG5pbXBvcnQgeyBQcmlzbWljUHJldmlldyB9IGZyb20gJ0BwcmlzbWljaW8vbmV4dCc7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBuYXZpZ2F0aW9uLCBlcnJvciB9KSB7XG4gIGNvbnN0IFtpc0NsaWVudCwgc2V0SXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDbGllbnQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgIGlmICghaXNDbGllbnQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge25hdmlnYXRpb24/LmRhdGE/LnNsaWNlcz8ubWFwKChzbGljZSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17c2xpY2UuaWR9PlxuICAgICAgICAgICAgICB7c2xpY2UucHJpbWFyeT8ubGluayAmJiBzbGljZS5wcmltYXJ5Py5sYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgPFByaXNtaWNMaW5rIGZpZWxkPXtzbGljZS5wcmltYXJ5Lmxpbmt9IGxpbmtSZXNvbHZlcj17bGlua1Jlc29sdmVyfT5cbiAgICAgICAgICAgICAgICAgIDxQcmlzbWljUmljaFRleHQgZmllbGQ9e3NsaWNlLnByaW1hcnkubGFiZWx9IC8+XG4gICAgICAgICAgICAgICAgPC9QcmlzbWljTGluaz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZW5kZXJOYXZpZ2F0aW9uKCl9XG4gICAgICA8UHJpc21pY1ByZXZpZXcgcmVwb3NpdG9yeU5hbWU9e3JlcG9zaXRvcnlOYW1lfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9QcmlzbWljUHJldmlldz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoKTtcbiAgbGV0IG5hdmlnYXRpb24gPSBudWxsO1xuXG4gIHRyeSB7XG4gICAgbmF2aWdhdGlvbiA9IGF3YWl0IGNsaWVudC5nZXRCeVVJRCgnbmF2aWdhdGlvbicsICdoZWFkZXInKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBuYXZpZ2F0aW9uOicsIGVycm9yKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG5hdmlnYXRpb24sXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwLCAvLyBSZXZhbGlkYXRlIGV2ZXJ5IGhvdXJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUNsaWVudCIsInJlcG9zaXRvcnlOYW1lIiwibGlua1Jlc29sdmVyIiwiUHJpc21pY0xpbmsiLCJQcmlzbWljUmljaFRleHQiLCJQcmlzbWljUHJldmlldyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm5hdmlnYXRpb24iLCJlcnJvciIsImlzQ2xpZW50Iiwic2V0SXNDbGllbnQiLCJyZW5kZXJOYXZpZ2F0aW9uIiwibmF2IiwidWwiLCJkYXRhIiwic2xpY2VzIiwibWFwIiwic2xpY2UiLCJsaSIsInByaW1hcnkiLCJsaW5rIiwibGFiZWwiLCJmaWVsZCIsImlkIiwiZ2V0U3RhdGljUHJvcHMiLCJjbGllbnQiLCJnZXRCeVVJRCIsImNvbnNvbGUiLCJwcm9wcyIsInJldmFsaWRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/prismicio.js":
/*!**************************!*\
  !*** ./src/prismicio.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient),\n/* harmony export */   linkResolver: () => (/* binding */ linkResolver),\n/* harmony export */   repositoryName: () => (/* binding */ repositoryName)\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prismicio/next */ \"@prismicio/next\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prismicio_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slicemachine_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slicemachine.config.json */ \"./slicemachine.config.json\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio_client__WEBPACK_IMPORTED_MODULE_0__]);\n_prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst repositoryName = process.env.PRISMIC_REPOSITORY_NAME;\n/**\n * A list of Route Resolver objects that define how a document's `url` field is resolved.\n *\n * {@link https://prismic.io/docs/route-resolver#route-resolver}\n *\n * @type {prismic.ClientConfig[\"routes\"]}\n */ const routes = [\n    {\n        type: \"Index\",\n        path: \"/\"\n    },\n    {\n        type: \"colophon\",\n        path: \"/colophon\"\n    },\n    {\n        type: \"project\",\n        path: \"/project/:uid\"\n    }\n];\n/**\n * Creates a Prismic client for the project's repository. The client is used to\n * query content from the Prismic API.\n *\n * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.\n */ const createClient = (config = {})=>{\n    const client = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.createClient(process.env.PRISMIC_REPOSITORY_NAME, {\n        routes,\n        ...config,\n        accessToken: process.env.PRISMIC_ACCESS_TOKEN,\n        timeoutInMs: 30000\n    });\n    (0,_prismicio_next__WEBPACK_IMPORTED_MODULE_1__.enableAutoPreviews)({\n        client,\n        previewData: config.previewData,\n        req: config.req\n    });\n    return client;\n};\nfunction linkResolver(doc) {\n    switch(doc.type){\n        case \"Index\":\n            return \"/\";\n        case \"colophon\":\n            return \"/colophon\";\n        case \"project\":\n            return `/project/${doc.uid}`;\n        default:\n            return \"/\";\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJpc21pY2lvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDTztBQUNIO0FBRzFDLE1BQU1HLGlCQUNYQyxRQUFRQyxHQUFHLENBQUNDLHVCQUF1QixDQUFDO0FBRXRDOzs7Ozs7Q0FNQyxHQUVELE1BQU1DLFNBQVM7SUFDYjtRQUNFQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRDtBQUVEOzs7OztDQUtDLEdBQ00sTUFBTUMsZUFBZSxDQUFDUixTQUFTLENBQUMsQ0FBQztJQUN0QyxNQUFNUyxTQUFTWCwyREFBb0IsQ0FBQ0ksUUFBUUMsR0FBRyxDQUFDQyx1QkFBdUIsRUFBRTtRQUN2RUM7UUFDQSxHQUFHTCxNQUFNO1FBQ1RVLGFBQWFSLFFBQVFDLEdBQUcsQ0FBQ1Esb0JBQW9CO1FBQzdDQyxhQUFhO0lBQ2Y7SUFFQWIsbUVBQWtCQSxDQUFDO1FBQ2pCVTtRQUNBSSxhQUFhYixPQUFPYSxXQUFXO1FBQy9CQyxLQUFLZCxPQUFPYyxHQUFHO0lBQ2pCO0lBRUEsT0FBT0w7QUFDVCxFQUFFO0FBRUssU0FBU00sYUFBYUMsR0FBRztJQUM5QixPQUFRQSxJQUFJVixJQUFJO1FBQ1osS0FBSztZQUNELE9BQU87UUFDWCxLQUFLO1lBQ0QsT0FBTztRQUNYLEtBQUs7WUFDRCxPQUFPLENBQUMsU0FBUyxFQUFFVSxJQUFJQyxHQUFHLENBQUMsQ0FBQztRQUNoQztZQUNJLE9BQU87SUFDZjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXRlbXBsYXRlLTEvLi9zcmMvcHJpc21pY2lvLmpzPzY3NTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcHJpc21pYyBmcm9tIFwiQHByaXNtaWNpby9jbGllbnRcIjtcbmltcG9ydCB7IGVuYWJsZUF1dG9QcmV2aWV3cyB9IGZyb20gJ0BwcmlzbWljaW8vbmV4dCdcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL3NsaWNlbWFjaGluZS5jb25maWcuanNvblwiO1xuXG5cbmV4cG9ydCBjb25zdCByZXBvc2l0b3J5TmFtZSA9XG4gIHByb2Nlc3MuZW52LlBSSVNNSUNfUkVQT1NJVE9SWV9OQU1FO1xuXG4vKipcbiAqIEEgbGlzdCBvZiBSb3V0ZSBSZXNvbHZlciBvYmplY3RzIHRoYXQgZGVmaW5lIGhvdyBhIGRvY3VtZW50J3MgYHVybGAgZmllbGQgaXMgcmVzb2x2ZWQuXG4gKlxuICoge0BsaW5rIGh0dHBzOi8vcHJpc21pYy5pby9kb2NzL3JvdXRlLXJlc29sdmVyI3JvdXRlLXJlc29sdmVyfVxuICpcbiAqIEB0eXBlIHtwcmlzbWljLkNsaWVudENvbmZpZ1tcInJvdXRlc1wiXX1cbiAqL1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHtcbiAgICB0eXBlOiAnSW5kZXgnLFxuICAgIHBhdGg6ICcvJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdjb2xvcGhvbicsXG4gICAgcGF0aDogJy9jb2xvcGhvbicsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAncHJvamVjdCcsXG4gICAgcGF0aDogJy9wcm9qZWN0Lzp1aWQnLFxuICB9LFxuXTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgUHJpc21pYyBjbGllbnQgZm9yIHRoZSBwcm9qZWN0J3MgcmVwb3NpdG9yeS4gVGhlIGNsaWVudCBpcyB1c2VkIHRvXG4gKiBxdWVyeSBjb250ZW50IGZyb20gdGhlIFByaXNtaWMgQVBJLlxuICpcbiAqIEBwYXJhbSB7cHJpc21pY05leHQuQ3JlYXRlQ2xpZW50Q29uZmlnfSBjb25maWcgLSBDb25maWd1cmF0aW9uIGZvciB0aGUgUHJpc21pYyBjbGllbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVDbGllbnQgPSAoY29uZmlnID0ge30pID0+IHtcbiAgY29uc3QgY2xpZW50ID0gcHJpc21pYy5jcmVhdGVDbGllbnQocHJvY2Vzcy5lbnYuUFJJU01JQ19SRVBPU0lUT1JZX05BTUUsIHtcbiAgICByb3V0ZXMsXG4gICAgLi4uY29uZmlnLFxuICAgIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5QUklTTUlDX0FDQ0VTU19UT0tFTixcbiAgICB0aW1lb3V0SW5NczogMzAwMDAsXG4gIH0pXG5cbiAgZW5hYmxlQXV0b1ByZXZpZXdzKHtcbiAgICBjbGllbnQsXG4gICAgcHJldmlld0RhdGE6IGNvbmZpZy5wcmV2aWV3RGF0YSxcbiAgICByZXE6IGNvbmZpZy5yZXEsXG4gIH0pO1xuXG4gIHJldHVybiBjbGllbnQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua1Jlc29sdmVyKGRvYykge1xuICBzd2l0Y2ggKGRvYy50eXBlKSB7XG4gICAgICBjYXNlICdJbmRleCc6XG4gICAgICAgICAgcmV0dXJuICcvJ1xuICAgICAgY2FzZSAnY29sb3Bob24nOlxuICAgICAgICAgIHJldHVybiAnL2NvbG9waG9uJ1xuICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgcmV0dXJuIGAvcHJvamVjdC8ke2RvYy51aWR9YFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJy8nXG4gIH1cbn0iXSwibmFtZXMiOlsicHJpc21pYyIsImVuYWJsZUF1dG9QcmV2aWV3cyIsImNvbmZpZyIsInJlcG9zaXRvcnlOYW1lIiwicHJvY2VzcyIsImVudiIsIlBSSVNNSUNfUkVQT1NJVE9SWV9OQU1FIiwicm91dGVzIiwidHlwZSIsInBhdGgiLCJjcmVhdGVDbGllbnQiLCJjbGllbnQiLCJhY2Nlc3NUb2tlbiIsIlBSSVNNSUNfQUNDRVNTX1RPS0VOIiwidGltZW91dEluTXMiLCJwcmV2aWV3RGF0YSIsInJlcSIsImxpbmtSZXNvbHZlciIsImRvYyIsInVpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/prismicio.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@prismicio/next":
/*!**********************************!*\
  !*** external "@prismicio/next" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/next");

/***/ }),

/***/ "@prismicio/react":
/*!***********************************!*\
  !*** external "@prismicio/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@prismicio/client");;

/***/ }),

/***/ "./slicemachine.config.json":
/*!**********************************!*\
  !*** ./slicemachine.config.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"repositoryName":"imanma","adapter":"@slicemachine/adapter-next","libraries":["./src/slices"],"localSliceSimulatorURL":"http://localhost:3000/slice-simulator"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();