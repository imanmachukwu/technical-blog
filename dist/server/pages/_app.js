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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _prismicio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../prismicio */ \"./src/prismicio.js\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @prismicio/react */ \"@prismicio/react\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prismicio_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @prismicio/next */ \"@prismicio/next\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_prismicio_next__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var geist_font_sans__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! geist/font/sans */ \"./node_modules/geist/dist/sans.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio__WEBPACK_IMPORTED_MODULE_4__]);\n_prismicio__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n // Adjust path as needed\n\n\n\n// Dynamically import the Preloader component with SSR disabled\nconst DynamicPreloader = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"src_pages_components_Preloader_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/Preloader */ \"./src/pages/components/Preloader.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"pages/_app.js -> \" + \"./components/Preloader\"\n        ]\n    },\n    ssr: false\n});\nfunction App({ Component, pageProps, navigation, preloader }) {\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    const onLoadComplete = ()=>{\n        setLoading(false);\n    };\n    const renderNavigation = ()=>{\n        if (!isClient) return null;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: geist_font_sans__WEBPACK_IMPORTED_MODULE_7__.GeistSans.className,\n            children: [\n                \"Imanmachukwu\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: navigation?.data?.slices?.map((slice)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: slice.primary?.link && slice.primary?.label && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_react__WEBPACK_IMPORTED_MODULE_5__.PrismicLink, {\n                                field: slice.primary.link,\n                                linkResolver: _prismicio__WEBPACK_IMPORTED_MODULE_4__.linkResolver,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_react__WEBPACK_IMPORTED_MODULE_5__.PrismicRichText, {\n                                    field: slice.primary.label\n                                }, void 0, false, {\n                                    fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                                lineNumber: 35,\n                                columnNumber: 17\n                            }, this)\n                        }, slice.id, false, {\n                            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isClient && loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DynamicPreloader, {\n            page: preloader,\n            onLoadComplete: onLoadComplete\n        }, void 0, false, {\n            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                renderNavigation(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_next__WEBPACK_IMPORTED_MODULE_6__.PrismicPreview, {\n                    repositoryName: _prismicio__WEBPACK_IMPORTED_MODULE_4__.repositoryName,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: geist_font_sans__WEBPACK_IMPORTED_MODULE_7__.GeistSans.className,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                            lineNumber: 55,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\nApp.getInitialProps = async ({ Component, ctx })=>{\n    const client = (0,_prismicio__WEBPACK_IMPORTED_MODULE_4__.createClient)();\n    let navigation = null;\n    let preloader = null;\n    let pageProps = {};\n    try {\n        navigation = await client.getByUID(\"navigation\", \"header\");\n    } catch (error) {\n        console.error(\"Error fetching navigation:\", error);\n    }\n    try {\n        preloader = await client.getSingle(\"preloader\");\n    } catch (error) {\n        console.error(\"Error fetching preloader page:\", error);\n    }\n    if (Component.getInitialProps) {\n        try {\n            pageProps = await Component.getInitialProps(ctx);\n        } catch (error) {\n            console.error(\"Error in Component.getInitialProps:\", error);\n        }\n    }\n    return {\n        pageProps,\n        navigation,\n        preloader\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ2M7QUFDVDtBQUN1QyxDQUFDLHdCQUF3QjtBQUNuQztBQUNmO0FBQ0w7QUFFNUMsK0RBQStEO0FBQy9ELE1BQU1VLG1CQUFtQlIsbURBQU9BLENBQUMsSUFBTSxtTUFBTzs7Ozs7O0lBQzVDUyxLQUFLOztBQUdQLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFO0lBQzFELE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDbUIsVUFBVUMsWUFBWSxHQUFHcEIsK0NBQVFBLENBQUM7SUFFekNDLGdEQUFTQSxDQUFDO1FBQ1JtQixZQUFZO0lBQ2QsR0FBRyxFQUFFO0lBRUwsTUFBTUMsaUJBQWlCO1FBQ3JCSCxXQUFXO0lBQ2I7SUFFQSxNQUFNSSxtQkFBbUI7UUFDdkIsSUFBSSxDQUFDSCxVQUFVLE9BQU87UUFDdEIscUJBQ0UsOERBQUNJO1lBQUlDLFdBQVdmLHNEQUFTQSxDQUFDZSxTQUFTOztnQkFBRTs4QkFFbkMsOERBQUNDOzhCQUNFVixZQUFZVyxNQUFNQyxRQUFRQyxJQUFJLENBQUNDLHNCQUM5Qiw4REFBQ0M7c0NBQ0VELE1BQU1FLE9BQU8sRUFBRUMsUUFBUUgsTUFBTUUsT0FBTyxFQUFFRSx1QkFDckMsOERBQUMzQix5REFBV0E7Z0NBQUM0QixPQUFPTCxNQUFNRSxPQUFPLENBQUNDLElBQUk7Z0NBQUUzQixjQUFjQSxvREFBWUE7MENBQ2hFLDRFQUFDRSw2REFBZUE7b0NBQUMyQixPQUFPTCxNQUFNRSxPQUFPLENBQUNFLEtBQUs7Ozs7Ozs7Ozs7OzJCQUh4Q0osTUFBTU0sRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztJQVczQjtJQUVBLHFCQUNFO2tCQUNHaEIsWUFBWUYsd0JBQ1gsOERBQUNQO1lBQWlCMEIsTUFBTXBCO1lBQVdLLGdCQUFnQkE7Ozs7O2lDQUVuRDs7Z0JBQ0dDOzhCQUNELDhEQUFDZCwyREFBY0E7b0JBQUNKLGdCQUFnQkEsc0RBQWNBOzhCQUM1Qyw0RUFBQ2lDO3dCQUFLYixXQUFXZixzREFBU0EsQ0FBQ2UsU0FBUztrQ0FDbEMsNEVBQUNYOzRCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEM7QUFFQUYsSUFBSTBCLGVBQWUsR0FBRyxPQUFPLEVBQUV6QixTQUFTLEVBQUUwQixHQUFHLEVBQUU7SUFDN0MsTUFBTUMsU0FBU3JDLHdEQUFZQTtJQUMzQixJQUFJWSxhQUFhO0lBQ2pCLElBQUlDLFlBQVk7SUFDaEIsSUFBSUYsWUFBWSxDQUFDO0lBRWpCLElBQUk7UUFDRkMsYUFBYSxNQUFNeUIsT0FBT0MsUUFBUSxDQUFDLGNBQWM7SUFDbkQsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO0lBQzlDO0lBRUEsSUFBSTtRQUNGMUIsWUFBWSxNQUFNd0IsT0FBT0ksU0FBUyxDQUFDO0lBQ3JDLEVBQUUsT0FBT0YsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsa0NBQWtDQTtJQUNsRDtJQUVBLElBQUk3QixVQUFVeUIsZUFBZSxFQUFFO1FBQzdCLElBQUk7WUFDRnhCLFlBQVksTUFBTUQsVUFBVXlCLGVBQWUsQ0FBQ0M7UUFDOUMsRUFBRSxPQUFPRyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx1Q0FBdUNBO1FBQ3ZEO0lBQ0Y7SUFFQSxPQUFPO1FBQUU1QjtRQUFXQztRQUFZQztJQUFVO0FBQzVDO0FBRUEsaUVBQWVKLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tdGVtcGxhdGUtMS8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCByZXBvc2l0b3J5TmFtZSwgbGlua1Jlc29sdmVyIH0gZnJvbSAnLi4vcHJpc21pY2lvJzsgLy8gQWRqdXN0IHBhdGggYXMgbmVlZGVkXG5pbXBvcnQgeyBQcmlzbWljTGluaywgUHJpc21pY1JpY2hUZXh0IH0gZnJvbSAnQHByaXNtaWNpby9yZWFjdCc7XG5pbXBvcnQgeyBQcmlzbWljUHJldmlldyB9IGZyb20gJ0BwcmlzbWljaW8vbmV4dCc7XG5pbXBvcnQgeyBHZWlzdFNhbnMgfSBmcm9tIFwiZ2Vpc3QvZm9udC9zYW5zXCI7XG5cbi8vIER5bmFtaWNhbGx5IGltcG9ydCB0aGUgUHJlbG9hZGVyIGNvbXBvbmVudCB3aXRoIFNTUiBkaXNhYmxlZFxuY29uc3QgRHluYW1pY1ByZWxvYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvUHJlbG9hZGVyJyksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgbmF2aWdhdGlvbiwgcHJlbG9hZGVyIH0pIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc0NsaWVudCwgc2V0SXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDbGllbnQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkxvYWRDb21wbGV0ZSA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgIGlmICghaXNDbGllbnQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT17R2Vpc3RTYW5zLmNsYXNzTmFtZX0+XG4gICAgICAgIEltYW5tYWNodWt3dVxuICAgICAgICA8dWw+XG4gICAgICAgICAge25hdmlnYXRpb24/LmRhdGE/LnNsaWNlcz8ubWFwKChzbGljZSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17c2xpY2UuaWR9PlxuICAgICAgICAgICAgICB7c2xpY2UucHJpbWFyeT8ubGluayAmJiBzbGljZS5wcmltYXJ5Py5sYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgPFByaXNtaWNMaW5rIGZpZWxkPXtzbGljZS5wcmltYXJ5Lmxpbmt9IGxpbmtSZXNvbHZlcj17bGlua1Jlc29sdmVyfT5cbiAgICAgICAgICAgICAgICAgIDxQcmlzbWljUmljaFRleHQgZmllbGQ9e3NsaWNlLnByaW1hcnkubGFiZWx9IC8+XG4gICAgICAgICAgICAgICAgPC9QcmlzbWljTGluaz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0NsaWVudCAmJiBsb2FkaW5nID8gKFxuICAgICAgICA8RHluYW1pY1ByZWxvYWRlciBwYWdlPXtwcmVsb2FkZXJ9IG9uTG9hZENvbXBsZXRlPXtvbkxvYWRDb21wbGV0ZX0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge3JlbmRlck5hdmlnYXRpb24oKX1cbiAgICAgICAgICA8UHJpc21pY1ByZXZpZXcgcmVwb3NpdG9yeU5hbWU9e3JlcG9zaXRvcnlOYW1lfT5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17R2Vpc3RTYW5zLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8L1ByaXNtaWNQcmV2aWV3PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9KSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCgpO1xuICBsZXQgbmF2aWdhdGlvbiA9IG51bGw7XG4gIGxldCBwcmVsb2FkZXIgPSBudWxsO1xuICBsZXQgcGFnZVByb3BzID0ge307XG5cbiAgdHJ5IHtcbiAgICBuYXZpZ2F0aW9uID0gYXdhaXQgY2xpZW50LmdldEJ5VUlEKCduYXZpZ2F0aW9uJywgJ2hlYWRlcicpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG5hdmlnYXRpb246JywgZXJyb3IpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBwcmVsb2FkZXIgPSBhd2FpdCBjbGllbnQuZ2V0U2luZ2xlKCdwcmVsb2FkZXInKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcmVsb2FkZXIgcGFnZTonLCBlcnJvcik7XG4gIH1cblxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIHRyeSB7XG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHBhZ2VQcm9wcywgbmF2aWdhdGlvbiwgcHJlbG9hZGVyIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZHluYW1pYyIsImNyZWF0ZUNsaWVudCIsInJlcG9zaXRvcnlOYW1lIiwibGlua1Jlc29sdmVyIiwiUHJpc21pY0xpbmsiLCJQcmlzbWljUmljaFRleHQiLCJQcmlzbWljUHJldmlldyIsIkdlaXN0U2FucyIsIkR5bmFtaWNQcmVsb2FkZXIiLCJzc3IiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJuYXZpZ2F0aW9uIiwicHJlbG9hZGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0NsaWVudCIsInNldElzQ2xpZW50Iiwib25Mb2FkQ29tcGxldGUiLCJyZW5kZXJOYXZpZ2F0aW9uIiwibmF2IiwiY2xhc3NOYW1lIiwidWwiLCJkYXRhIiwic2xpY2VzIiwibWFwIiwic2xpY2UiLCJsaSIsInByaW1hcnkiLCJsaW5rIiwibGFiZWwiLCJmaWVsZCIsImlkIiwicGFnZSIsIm1haW4iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJjbGllbnQiLCJnZXRCeVVJRCIsImVycm9yIiwiY29uc29sZSIsImdldFNpbmdsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

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

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

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

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/geist"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();