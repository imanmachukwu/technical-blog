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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _prismicio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../prismicio */ \"./src/prismicio.js\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @prismicio/react */ \"@prismicio/react\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prismicio_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @prismicio/next */ \"@prismicio/next\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_prismicio_next__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var geist_font_sans__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! geist/font/sans */ \"./node_modules/geist/dist/sans.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio__WEBPACK_IMPORTED_MODULE_4__]);\n_prismicio__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n // Adjust path as needed\n\n\n\n// Dynamically import the Preloader component with SSR disabled\nconst DynamicPreloader = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"src_pages_components_Preloader_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/Preloader */ \"./src/pages/components/Preloader.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"pages/_app.js -> \" + \"./components/Preloader\"\n        ]\n    },\n    ssr: false\n});\nfunction App({ Component, pageProps, navigation, preloader }) {\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    const onLoadComplete = ()=>{\n        setLoading(false);\n    };\n    const renderNavigation = ()=>{\n        if (!isClient) return null;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: navigation?.data?.slices?.map((slice)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: slice.primary?.link && slice.primary?.label && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_react__WEBPACK_IMPORTED_MODULE_5__.PrismicLink, {\n                            field: slice.primary.link,\n                            linkResolver: _prismicio__WEBPACK_IMPORTED_MODULE_4__.linkResolver,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_react__WEBPACK_IMPORTED_MODULE_5__.PrismicRichText, {\n                                field: slice.primary.label\n                            }, void 0, false, {\n                                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                                lineNumber: 35,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, this)\n                    }, slice.id, false, {\n                        fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isClient && loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DynamicPreloader, {\n            page: preloader,\n            onLoadComplete: onLoadComplete\n        }, void 0, false, {\n            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                renderNavigation(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_next__WEBPACK_IMPORTED_MODULE_6__.PrismicPreview, {\n                    repositoryName: _prismicio__WEBPACK_IMPORTED_MODULE_4__.repositoryName,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: geist_font_sans__WEBPACK_IMPORTED_MODULE_7__.GeistSans.className,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\nApp.getInitialProps = async ({ Component, ctx })=>{\n    const client = (0,_prismicio__WEBPACK_IMPORTED_MODULE_4__.createClient)();\n    let navigation = null;\n    let preloader = null;\n    let pageProps = {};\n    try {\n        navigation = await client.getByUID(\"navigation\", \"header\");\n    } catch (error) {\n        console.error(\"Error fetching navigation:\", error);\n    }\n    try {\n        preloader = await client.getSingle(\"preloader\");\n    } catch (error) {\n        console.error(\"Error fetching preloader page:\", error);\n    }\n    if (Component.getInitialProps) {\n        try {\n            pageProps = await Component.getInitialProps(ctx);\n        } catch (error) {\n            console.error(\"Error in Component.getInitialProps:\", error);\n        }\n    }\n    return {\n        pageProps,\n        navigation,\n        preloader\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ2M7QUFDVDtBQUN1QyxDQUFDLHdCQUF3QjtBQUNuQztBQUNmO0FBQ0w7QUFFNUMsK0RBQStEO0FBQy9ELE1BQU1VLG1CQUFtQlIsbURBQU9BLENBQUMsSUFBTSxtTUFBTzs7Ozs7O0lBQzVDUyxLQUFLOztBQUdQLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFO0lBQzFELE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDbUIsVUFBVUMsWUFBWSxHQUFHcEIsK0NBQVFBLENBQUM7SUFFekNDLGdEQUFTQSxDQUFDO1FBQ1JtQixZQUFZO0lBQ2QsR0FBRyxFQUFFO0lBRUwsTUFBTUMsaUJBQWlCO1FBQ3JCSCxXQUFXO0lBQ2I7SUFFQSxNQUFNSSxtQkFBbUI7UUFDdkIsSUFBSSxDQUFDSCxVQUFVLE9BQU87UUFDdEIscUJBQ0UsOERBQUNJO3NCQUNDLDRFQUFDQzswQkFDRVQsWUFBWVUsTUFBTUMsUUFBUUMsSUFBSSxDQUFDQyxzQkFDOUIsOERBQUNDO2tDQUNFRCxNQUFNRSxPQUFPLEVBQUVDLFFBQVFILE1BQU1FLE9BQU8sRUFBRUUsdUJBQ3JDLDhEQUFDMUIseURBQVdBOzRCQUFDMkIsT0FBT0wsTUFBTUUsT0FBTyxDQUFDQyxJQUFJOzRCQUFFMUIsY0FBY0Esb0RBQVlBO3NDQUNoRSw0RUFBQ0UsNkRBQWVBO2dDQUFDMEIsT0FBT0wsTUFBTUUsT0FBTyxDQUFDRSxLQUFLOzs7Ozs7Ozs7Ozt1QkFIeENKLE1BQU1NLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztJQVczQjtJQUVBLHFCQUNFO2tCQUNHZixZQUFZRix3QkFDWCw4REFBQ1A7WUFBaUJ5QixNQUFNbkI7WUFBV0ssZ0JBQWdCQTs7Ozs7aUNBRW5EOztnQkFDR0M7OEJBQ0QsOERBQUNkLDJEQUFjQTtvQkFBQ0osZ0JBQWdCQSxzREFBY0E7OEJBQzVDLDRFQUFDZ0M7d0JBQUtDLFdBQVc1QixzREFBU0EsQ0FBQzRCLFNBQVM7a0NBQ2xDLDRFQUFDeEI7NEJBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU90QztBQUVBRixJQUFJMEIsZUFBZSxHQUFHLE9BQU8sRUFBRXpCLFNBQVMsRUFBRTBCLEdBQUcsRUFBRTtJQUM3QyxNQUFNQyxTQUFTckMsd0RBQVlBO0lBQzNCLElBQUlZLGFBQWE7SUFDakIsSUFBSUMsWUFBWTtJQUNoQixJQUFJRixZQUFZLENBQUM7SUFFakIsSUFBSTtRQUNGQyxhQUFhLE1BQU15QixPQUFPQyxRQUFRLENBQUMsY0FBYztJQUNuRCxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7SUFDOUM7SUFFQSxJQUFJO1FBQ0YxQixZQUFZLE1BQU13QixPQUFPSSxTQUFTLENBQUM7SUFDckMsRUFBRSxPQUFPRixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxrQ0FBa0NBO0lBQ2xEO0lBRUEsSUFBSTdCLFVBQVV5QixlQUFlLEVBQUU7UUFDN0IsSUFBSTtZQUNGeEIsWUFBWSxNQUFNRCxVQUFVeUIsZUFBZSxDQUFDQztRQUM5QyxFQUFFLE9BQU9HLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHVDQUF1Q0E7UUFDdkQ7SUFDRjtJQUVBLE9BQU87UUFBRTVCO1FBQVdDO1FBQVlDO0lBQVU7QUFDNUM7QUFFQSxpRUFBZUosR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby10ZW1wbGF0ZS0xLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQsIHJlcG9zaXRvcnlOYW1lLCBsaW5rUmVzb2x2ZXIgfSBmcm9tICcuLi9wcmlzbWljaW8nOyAvLyBBZGp1c3QgcGF0aCBhcyBuZWVkZWRcbmltcG9ydCB7IFByaXNtaWNMaW5rLCBQcmlzbWljUmljaFRleHQgfSBmcm9tICdAcHJpc21pY2lvL3JlYWN0JztcbmltcG9ydCB7IFByaXNtaWNQcmV2aWV3IH0gZnJvbSAnQHByaXNtaWNpby9uZXh0JztcbmltcG9ydCB7IEdlaXN0U2FucyB9IGZyb20gXCJnZWlzdC9mb250L3NhbnNcIjtcblxuLy8gRHluYW1pY2FsbHkgaW1wb3J0IHRoZSBQcmVsb2FkZXIgY29tcG9uZW50IHdpdGggU1NSIGRpc2FibGVkXG5jb25zdCBEeW5hbWljUHJlbG9hZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9QcmVsb2FkZXInKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBuYXZpZ2F0aW9uLCBwcmVsb2FkZXIgfSkge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzQ2xpZW50LCBzZXRJc0NsaWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0NsaWVudCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uTG9hZENvbXBsZXRlID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKCFpc0NsaWVudCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bmF2aWdhdGlvbj8uZGF0YT8uc2xpY2VzPy5tYXAoKHNsaWNlKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtzbGljZS5pZH0+XG4gICAgICAgICAgICAgIHtzbGljZS5wcmltYXJ5Py5saW5rICYmIHNsaWNlLnByaW1hcnk/LmxhYmVsICYmIChcbiAgICAgICAgICAgICAgICA8UHJpc21pY0xpbmsgZmllbGQ9e3NsaWNlLnByaW1hcnkubGlua30gbGlua1Jlc29sdmVyPXtsaW5rUmVzb2x2ZXJ9PlxuICAgICAgICAgICAgICAgICAgPFByaXNtaWNSaWNoVGV4dCBmaWVsZD17c2xpY2UucHJpbWFyeS5sYWJlbH0gLz5cbiAgICAgICAgICAgICAgICA8L1ByaXNtaWNMaW5rPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzQ2xpZW50ICYmIGxvYWRpbmcgPyAoXG4gICAgICAgIDxEeW5hbWljUHJlbG9hZGVyIHBhZ2U9e3ByZWxvYWRlcn0gb25Mb2FkQ29tcGxldGU9e29uTG9hZENvbXBsZXRlfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7cmVuZGVyTmF2aWdhdGlvbigpfVxuICAgICAgICAgIDxQcmlzbWljUHJldmlldyByZXBvc2l0b3J5TmFtZT17cmVwb3NpdG9yeU5hbWV9PlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtHZWlzdFNhbnMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDwvUHJpc21pY1ByZXZpZXc+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IENvbXBvbmVudCwgY3R4IH0pID0+IHtcbiAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KCk7XG4gIGxldCBuYXZpZ2F0aW9uID0gbnVsbDtcbiAgbGV0IHByZWxvYWRlciA9IG51bGw7XG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcblxuICB0cnkge1xuICAgIG5hdmlnYXRpb24gPSBhd2FpdCBjbGllbnQuZ2V0QnlVSUQoJ25hdmlnYXRpb24nLCAnaGVhZGVyJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbmF2aWdhdGlvbjonLCBlcnJvcik7XG4gIH1cblxuICB0cnkge1xuICAgIHByZWxvYWRlciA9IGF3YWl0IGNsaWVudC5nZXRTaW5nbGUoJ3ByZWxvYWRlcicpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByZWxvYWRlciBwYWdlOicsIGVycm9yKTtcbiAgfVxuXG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgcGFnZVByb3BzLCBuYXZpZ2F0aW9uLCBwcmVsb2FkZXIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkeW5hbWljIiwiY3JlYXRlQ2xpZW50IiwicmVwb3NpdG9yeU5hbWUiLCJsaW5rUmVzb2x2ZXIiLCJQcmlzbWljTGluayIsIlByaXNtaWNSaWNoVGV4dCIsIlByaXNtaWNQcmV2aWV3IiwiR2Vpc3RTYW5zIiwiRHluYW1pY1ByZWxvYWRlciIsInNzciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm5hdmlnYXRpb24iLCJwcmVsb2FkZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzQ2xpZW50Iiwic2V0SXNDbGllbnQiLCJvbkxvYWRDb21wbGV0ZSIsInJlbmRlck5hdmlnYXRpb24iLCJuYXYiLCJ1bCIsImRhdGEiLCJzbGljZXMiLCJtYXAiLCJzbGljZSIsImxpIiwicHJpbWFyeSIsImxpbmsiLCJsYWJlbCIsImZpZWxkIiwiaWQiLCJwYWdlIiwibWFpbiIsImNsYXNzTmFtZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImNsaWVudCIsImdldEJ5VUlEIiwiZXJyb3IiLCJjb25zb2xlIiwiZ2V0U2luZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/prismicio.js":
/*!**************************!*\
  !*** ./src/prismicio.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient),\n/* harmony export */   linkResolver: () => (/* binding */ linkResolver),\n/* harmony export */   repositoryName: () => (/* binding */ repositoryName)\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prismicio/next */ \"@prismicio/next\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prismicio_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slicemachine_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slicemachine.config.json */ \"./slicemachine.config.json\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio_client__WEBPACK_IMPORTED_MODULE_0__]);\n_prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst repositoryName = process.env.PRISMIC_REPOSITORY_NAME;\n/**\n * A list of Route Resolver objects that define how a document's `url` field is resolved.\n *\n * {@link https://prismic.io/docs/route-resolver#route-resolver}\n *\n * @type {prismic.ClientConfig[\"routes\"]}\n */ const routes = [\n    {\n        type: \"Index\",\n        path: \"/\"\n    },\n    {\n        type: \"colophon\",\n        path: \"/colophon\"\n    },\n    {\n        type: \"project\",\n        path: \"/project/:uid\"\n    }\n];\n/**\n * Creates a Prismic client for the project's repository. The client is used to\n * query content from the Prismic API.\n *\n * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.\n */ const createClient = (config = {})=>{\n    const client = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.createClient(process.env.PRISMIC_REPOSITORY_NAME, {\n        routes,\n        ...config,\n        accessToken: process.env.PRISMIC_ACCESS_TOKEN\n    });\n    (0,_prismicio_next__WEBPACK_IMPORTED_MODULE_1__.enableAutoPreviews)({\n        client,\n        previewData: config.previewData,\n        req: config.req\n    });\n    return client;\n};\nfunction linkResolver(doc) {\n    switch(doc.type){\n        case \"Index\":\n            return \"/\";\n        case \"colophon\":\n            return \"/colophon\";\n        case \"project\":\n            return `/project/${doc.uid}`;\n        default:\n            return \"/\";\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJpc21pY2lvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDTztBQUNIO0FBRzFDLE1BQU1HLGlCQUNYQyxRQUFRQyxHQUFHLENBQUNDLHVCQUF1QixDQUFDO0FBRXRDOzs7Ozs7Q0FNQyxHQUVELE1BQU1DLFNBQVM7SUFDYjtRQUNFQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRDtBQUVEOzs7OztDQUtDLEdBQ00sTUFBTUMsZUFBZSxDQUFDUixTQUFTLENBQUMsQ0FBQztJQUN0QyxNQUFNUyxTQUFTWCwyREFBb0IsQ0FBQ0ksUUFBUUMsR0FBRyxDQUFDQyx1QkFBdUIsRUFBRTtRQUN2RUM7UUFDQSxHQUFHTCxNQUFNO1FBQ1RVLGFBQWFSLFFBQVFDLEdBQUcsQ0FBQ1Esb0JBQW9CO0lBQy9DO0lBRUFaLG1FQUFrQkEsQ0FBQztRQUNqQlU7UUFDQUcsYUFBYVosT0FBT1ksV0FBVztRQUMvQkMsS0FBS2IsT0FBT2EsR0FBRztJQUNqQjtJQUVBLE9BQU9KO0FBQ1QsRUFBRTtBQUVLLFNBQVNLLGFBQWFDLEdBQUc7SUFDOUIsT0FBUUEsSUFBSVQsSUFBSTtRQUNaLEtBQUs7WUFDRCxPQUFPO1FBQ1gsS0FBSztZQUNELE9BQU87UUFDWCxLQUFLO1lBQ0QsT0FBTyxDQUFDLFNBQVMsRUFBRVMsSUFBSUMsR0FBRyxDQUFDLENBQUM7UUFDaEM7WUFDSSxPQUFPO0lBQ2Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby10ZW1wbGF0ZS0xLy4vc3JjL3ByaXNtaWNpby5qcz82NzU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHByaXNtaWMgZnJvbSBcIkBwcmlzbWljaW8vY2xpZW50XCI7XG5pbXBvcnQgeyBlbmFibGVBdXRvUHJldmlld3MgfSBmcm9tICdAcHJpc21pY2lvL25leHQnXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9zbGljZW1hY2hpbmUuY29uZmlnLmpzb25cIjtcblxuXG5leHBvcnQgY29uc3QgcmVwb3NpdG9yeU5hbWUgPVxuICBwcm9jZXNzLmVudi5QUklTTUlDX1JFUE9TSVRPUllfTkFNRTtcblxuLyoqXG4gKiBBIGxpc3Qgb2YgUm91dGUgUmVzb2x2ZXIgb2JqZWN0cyB0aGF0IGRlZmluZSBob3cgYSBkb2N1bWVudCdzIGB1cmxgIGZpZWxkIGlzIHJlc29sdmVkLlxuICpcbiAqIHtAbGluayBodHRwczovL3ByaXNtaWMuaW8vZG9jcy9yb3V0ZS1yZXNvbHZlciNyb3V0ZS1yZXNvbHZlcn1cbiAqXG4gKiBAdHlwZSB7cHJpc21pYy5DbGllbnRDb25maWdbXCJyb3V0ZXNcIl19XG4gKi9cblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgdHlwZTogJ0luZGV4JyxcbiAgICBwYXRoOiAnLycsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnY29sb3Bob24nLFxuICAgIHBhdGg6ICcvY29sb3Bob24nLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ3Byb2plY3QnLFxuICAgIHBhdGg6ICcvcHJvamVjdC86dWlkJyxcbiAgfSxcbl07XG5cbi8qKlxuICogQ3JlYXRlcyBhIFByaXNtaWMgY2xpZW50IGZvciB0aGUgcHJvamVjdCdzIHJlcG9zaXRvcnkuIFRoZSBjbGllbnQgaXMgdXNlZCB0b1xuICogcXVlcnkgY29udGVudCBmcm9tIHRoZSBQcmlzbWljIEFQSS5cbiAqXG4gKiBAcGFyYW0ge3ByaXNtaWNOZXh0LkNyZWF0ZUNsaWVudENvbmZpZ30gY29uZmlnIC0gQ29uZmlndXJhdGlvbiBmb3IgdGhlIFByaXNtaWMgY2xpZW50LlxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlQ2xpZW50ID0gKGNvbmZpZyA9IHt9KSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IHByaXNtaWMuY3JlYXRlQ2xpZW50KHByb2Nlc3MuZW52LlBSSVNNSUNfUkVQT1NJVE9SWV9OQU1FLCB7XG4gICAgcm91dGVzLFxuICAgIC4uLmNvbmZpZyxcbiAgICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuUFJJU01JQ19BQ0NFU1NfVE9LRU4sXG4gIH0pXG5cbiAgZW5hYmxlQXV0b1ByZXZpZXdzKHtcbiAgICBjbGllbnQsXG4gICAgcHJldmlld0RhdGE6IGNvbmZpZy5wcmV2aWV3RGF0YSxcbiAgICByZXE6IGNvbmZpZy5yZXEsXG4gIH0pO1xuXG4gIHJldHVybiBjbGllbnQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua1Jlc29sdmVyKGRvYykge1xuICBzd2l0Y2ggKGRvYy50eXBlKSB7XG4gICAgICBjYXNlICdJbmRleCc6XG4gICAgICAgICAgcmV0dXJuICcvJ1xuICAgICAgY2FzZSAnY29sb3Bob24nOlxuICAgICAgICAgIHJldHVybiAnL2NvbG9waG9uJ1xuICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgcmV0dXJuIGAvcHJvamVjdC8ke2RvYy51aWR9YFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJy8nXG4gIH1cbn0iXSwibmFtZXMiOlsicHJpc21pYyIsImVuYWJsZUF1dG9QcmV2aWV3cyIsImNvbmZpZyIsInJlcG9zaXRvcnlOYW1lIiwicHJvY2VzcyIsImVudiIsIlBSSVNNSUNfUkVQT1NJVE9SWV9OQU1FIiwicm91dGVzIiwidHlwZSIsInBhdGgiLCJjcmVhdGVDbGllbnQiLCJjbGllbnQiLCJhY2Nlc3NUb2tlbiIsIlBSSVNNSUNfQUNDRVNTX1RPS0VOIiwicHJldmlld0RhdGEiLCJyZXEiLCJsaW5rUmVzb2x2ZXIiLCJkb2MiLCJ1aWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/prismicio.js\n");

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