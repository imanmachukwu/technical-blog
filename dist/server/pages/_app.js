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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _prismicio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/prismicio */ \"./src/prismicio.js\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @prismicio/react */ \"@prismicio/react\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prismicio_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @prismicio/next */ \"@prismicio/next\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_prismicio_next__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio__WEBPACK_IMPORTED_MODULE_4__]);\n_prismicio__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n // Adjust path as needed\n\n\nfunction App({ Component, pageProps }) {\n    const [navigation, setNavigation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchNavigation = async ()=>{\n            try {\n                const response = await fetch(\"/api/navigation\"); // Call the API route\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setNavigation(data);\n            } catch (error) {\n                setError(error.message);\n            }\n        };\n        fetchNavigation();\n    }, []);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Error fetching content. Please refetch.\"\n            }, void 0, false, {\n                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: navigation?.data?.slices?.map((slice, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: slice?.primary?.link && slice?.primary?.label && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_next__WEBPACK_IMPORTED_MODULE_6__.PrismicNextLink, {\n                                field: slice.primary.link,\n                                linkResolver: _prismicio__WEBPACK_IMPORTED_MODULE_4__.linkResolver,\n                                className: router.asPath === slice.primary.link.url ? \"selected\" : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_react__WEBPACK_IMPORTED_MODULE_5__.PrismicRichText, {\n                                    field: slice.primary.label\n                                }, void 0, false, {\n                                    fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                                lineNumber: 45,\n                                columnNumber: 19\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_next__WEBPACK_IMPORTED_MODULE_6__.PrismicPreview, {\n                repositoryName: \"imanma\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDVTtBQUNJO0FBQzZCLENBQUMsd0JBQXdCO0FBQy9DO0FBQ2U7QUFFbEUsU0FBU1MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNuQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1lLFNBQVNoQixzREFBU0E7SUFFeEJFLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsa0JBQWtCO1lBQ3RCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLG9CQUFvQixxQkFBcUI7Z0JBQ3RFLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUNBLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtnQkFDaENWLGNBQWNTO1lBQ2hCLEVBQUUsT0FBT1IsT0FBTztnQkFDZEMsU0FBU0QsTUFBTVUsT0FBTztZQUN4QjtRQUNGO1FBRUFQO0lBQ0YsR0FBRyxFQUFFO0lBRUwsSUFBSUgsT0FBTztRQUNULHFCQUNFLDhEQUFDVztzQkFDQyw0RUFBQ0M7MEJBQUU7Ozs7Ozs7Ozs7O0lBR1Q7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNEOzBCQUNHLDRFQUFDRTs4QkFDRWYsWUFBWVUsTUFBTU0sUUFBUUMsSUFBSSxDQUFDQyxPQUFPQyxzQkFDckMsOERBQUNDO3NDQUNFRixPQUFPRyxTQUFTQyxRQUFRSixPQUFPRyxTQUFTRSx1QkFDdkMsOERBQUM1Qiw0REFBZUE7Z0NBQUM2QixPQUFPTixNQUFNRyxPQUFPLENBQUNDLElBQUk7Z0NBQUU3QixjQUFjQSxvREFBWUE7Z0NBQUVnQyxXQUFXckIsT0FBT3NCLE1BQU0sS0FBS1IsTUFBTUcsT0FBTyxDQUFDQyxJQUFJLENBQUNLLEdBQUcsR0FBRyxhQUFhOzBDQUN6SSw0RUFBQ2pDLDZEQUFlQTtvQ0FBQzhCLE9BQU9OLE1BQU1HLE9BQU8sQ0FBQ0UsS0FBSzs7Ozs7Ozs7Ozs7MkJBSHhDSjs7Ozs7Ozs7Ozs7Ozs7OzBCQVVqQiw4REFBQ3ZCLDJEQUFjQTtnQkFBQ0osZ0JBQWU7MEJBQzdCLDRFQUFDTTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tdGVtcGxhdGUtMS8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQsIHJlcG9zaXRvcnlOYW1lLCBsaW5rUmVzb2x2ZXIgfSBmcm9tICdAL3ByaXNtaWNpbyc7IC8vIEFkanVzdCBwYXRoIGFzIG5lZWRlZFxuaW1wb3J0IHsgUHJpc21pY1JpY2hUZXh0IH0gZnJvbSAnQHByaXNtaWNpby9yZWFjdCc7XG5pbXBvcnQgeyBQcmlzbWljTmV4dExpbmssIFByaXNtaWNQcmV2aWV3IH0gZnJvbSAnQHByaXNtaWNpby9uZXh0JztcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbbmF2aWdhdGlvbiwgc2V0TmF2aWdhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaE5hdmlnYXRpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL25hdmlnYXRpb24nKTsgLy8gQ2FsbCB0aGUgQVBJIHJvdXRlXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldE5hdmlnYXRpb24oZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hOYXZpZ2F0aW9uKCk7XG4gIH0sIFtdKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdj5cbiAgICAgICAgPHA+RXJyb3IgZmV0Y2hpbmcgY29udGVudC4gUGxlYXNlIHJlZmV0Y2guPC9wPlxuICAgICAgPC9uYXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7bmF2aWdhdGlvbj8uZGF0YT8uc2xpY2VzPy5tYXAoKHNsaWNlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAge3NsaWNlPy5wcmltYXJ5Py5saW5rICYmIHNsaWNlPy5wcmltYXJ5Py5sYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgICA8UHJpc21pY05leHRMaW5rIGZpZWxkPXtzbGljZS5wcmltYXJ5Lmxpbmt9IGxpbmtSZXNvbHZlcj17bGlua1Jlc29sdmVyfSBjbGFzc05hbWU9e3JvdXRlci5hc1BhdGggPT09IHNsaWNlLnByaW1hcnkubGluay51cmwgPyAnc2VsZWN0ZWQnIDogJyd9PlxuICAgICAgICAgICAgICAgICAgICA8UHJpc21pY1JpY2hUZXh0IGZpZWxkPXtzbGljZS5wcmltYXJ5LmxhYmVsfSAvPlxuICAgICAgICAgICAgICAgICAgPC9QcmlzbWljTmV4dExpbms+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICAgIDxQcmlzbWljUHJldmlldyByZXBvc2l0b3J5TmFtZT1cImltYW5tYVwiPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1ByaXNtaWNQcmV2aWV3PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlQ2xpZW50IiwicmVwb3NpdG9yeU5hbWUiLCJsaW5rUmVzb2x2ZXIiLCJQcmlzbWljUmljaFRleHQiLCJQcmlzbWljTmV4dExpbmsiLCJQcmlzbWljUHJldmlldyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm5hdmlnYXRpb24iLCJzZXROYXZpZ2F0aW9uIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsImZldGNoTmF2aWdhdGlvbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJtZXNzYWdlIiwibmF2IiwicCIsInVsIiwic2xpY2VzIiwibWFwIiwic2xpY2UiLCJpbmRleCIsImxpIiwicHJpbWFyeSIsImxpbmsiLCJsYWJlbCIsImZpZWxkIiwiY2xhc3NOYW1lIiwiYXNQYXRoIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/prismicio.js":
/*!**************************!*\
  !*** ./src/prismicio.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient),\n/* harmony export */   linkResolver: () => (/* binding */ linkResolver),\n/* harmony export */   repositoryName: () => (/* binding */ repositoryName)\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prismicio/next */ \"@prismicio/next\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prismicio_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slicemachine_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slicemachine.config.json */ \"./slicemachine.config.json\");\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cross-fetch */ \"cross-fetch\");\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio_client__WEBPACK_IMPORTED_MODULE_0__]);\n_prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst repositoryName = process.env.PRISMIC_REPOSITORY_NAME;\n/**\n * A list of Route Resolver objects that define how a document's `url` field is resolved.\n *\n * {@link https://prismic.io/docs/route-resolver#route-resolver}\n *\n * @type {prismic.ClientConfig[\"routes\"]}\n */ const routes = [\n    {\n        type: \"Index\",\n        path: \"/\"\n    },\n    {\n        type: \"colophon\",\n        path: \"/colophon\"\n    },\n    {\n        type: \"work\",\n        path: \"/work\"\n    },\n    {\n        type: \"project\",\n        path: \"/project/:uid\"\n    },\n    {\n        type: \"blogpost\",\n        path: \"/blog/:uid\"\n    }\n];\nconst retryFetch = async (url, options, retries = 3, backoff = 300)=>{\n    try {\n        const response = await cross_fetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {\n            ...options,\n            timeout: 30000\n        });\n        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);\n        return response;\n    } catch (error) {\n        if (retries > 0) {\n            await new Promise((resolve)=>setTimeout(resolve, backoff));\n            return retryFetch(url, options, retries - 1, backoff * 2);\n        }\n        throw error;\n    }\n};\n/**\n * Creates a Prismic client for the project's repository. The client is used to\n * query content from the Prismic API.\n *\n * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.\n */ const createClient = (config = {})=>{\n    const client = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.createClient(repositoryName, {\n        routes,\n        ...config,\n        accessToken: process.env.PRISMIC_ACCESS_TOKEN,\n        fetch: async (url, options)=>{\n            //console.time(`Prismic request to ${url}`)\n            try {\n                const response = await retryFetch(url, options);\n                //console.timeEnd(`Prismic request to ${url}`)\n                return response;\n            } catch (error) {\n                //console.timeEnd(`Prismic request to ${url}`)\n                console.error(`Error fetching from Prismic: ${error}`);\n                throw error;\n            }\n        }\n    });\n    (0,_prismicio_next__WEBPACK_IMPORTED_MODULE_1__.enableAutoPreviews)({\n        client,\n        previewData: config.previewData,\n        req: config.req\n    });\n    return client;\n};\nfunction linkResolver(doc) {\n    switch(doc.type){\n        case \"Index\":\n            return \"/\";\n        case \"colophon\":\n            return \"/colophon\";\n        case \"work\":\n            return \"/work\";\n        case \"project\":\n            return `/project/${doc.uid}`;\n        case \"blog\":\n            return `/blog/${doc.uid}`;\n        default:\n            return \"/\";\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJpc21pY2lvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNPO0FBQ0g7QUFDbEI7QUFHeEIsTUFBTUksaUJBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0MsdUJBQXVCLENBQUM7QUFFdEM7Ozs7OztDQU1DLEdBRUQsTUFBTUMsU0FBUztJQUNiO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRDtBQUVELE1BQU1DLGFBQWEsT0FBT0MsS0FBS0MsU0FBU0MsVUFBVSxDQUFDLEVBQUVDLFVBQVUsR0FBRztJQUNoRSxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNYixrREFBS0EsQ0FBQ1MsS0FBSztZQUFFLEdBQUdDLE9BQU87WUFBRUksU0FBUztRQUFNO1FBQy9ELElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFSCxTQUFTSSxNQUFNLENBQUMsQ0FBQztRQUMxRSxPQUFPSjtJQUNULEVBQUUsT0FBT0ssT0FBTztRQUNkLElBQUlQLFVBQVUsR0FBRztZQUNmLE1BQU0sSUFBSVEsUUFBUUMsQ0FBQUEsVUFBV0MsV0FBV0QsU0FBU1I7WUFDakQsT0FBT0osV0FBV0MsS0FBS0MsU0FBU0MsVUFBVSxHQUFHQyxVQUFVO1FBQ3pEO1FBQ0EsTUFBTU07SUFDUjtBQUNGO0FBRUE7Ozs7O0NBS0MsR0FDTSxNQUFNSSxlQUFlLENBQUN2QixTQUFTLENBQUMsQ0FBQztJQUN0QyxNQUFNd0IsU0FBUzFCLDJEQUFvQixDQUFDSSxnQkFBZ0I7UUFDbERJO1FBQ0EsR0FBR04sTUFBTTtRQUNUeUIsYUFBYXRCLFFBQVFDLEdBQUcsQ0FBQ3NCLG9CQUFvQjtRQUM3Q3pCLE9BQU8sT0FBT1MsS0FBS0M7WUFDakIsMkNBQTJDO1lBQzNDLElBQUk7Z0JBQ0YsTUFBTUcsV0FBVyxNQUFNTCxXQUFXQyxLQUFLQztnQkFDdkMsOENBQThDO2dCQUM5QyxPQUFPRztZQUNULEVBQUUsT0FBT0ssT0FBTztnQkFDZCw4Q0FBOEM7Z0JBQzlDUSxRQUFRUixLQUFLLENBQUMsQ0FBQyw2QkFBNkIsRUFBRUEsTUFBTSxDQUFDO2dCQUNyRCxNQUFNQTtZQUNSO1FBQ0Y7SUFDRjtJQUVBcEIsbUVBQWtCQSxDQUFDO1FBQ2pCeUI7UUFDQUksYUFBYTVCLE9BQU80QixXQUFXO1FBQy9CQyxLQUFLN0IsT0FBTzZCLEdBQUc7SUFDakI7SUFFQSxPQUFPTDtBQUNULEVBQUU7QUFFSyxTQUFTTSxhQUFhQyxHQUFHO0lBQzlCLE9BQVFBLElBQUl4QixJQUFJO1FBQ1osS0FBSztZQUNELE9BQU87UUFDWCxLQUFLO1lBQ0QsT0FBTztRQUNYLEtBQUs7WUFDRCxPQUFPO1FBQ1gsS0FBSztZQUNELE9BQU8sQ0FBQyxTQUFTLEVBQUV3QixJQUFJQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxLQUFLO1lBQ0QsT0FBTyxDQUFDLE1BQU0sRUFBRUQsSUFBSUMsR0FBRyxDQUFDLENBQUM7UUFDN0I7WUFDSSxPQUFPO0lBQ2Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby10ZW1wbGF0ZS0xLy4vc3JjL3ByaXNtaWNpby5qcz82NzU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHByaXNtaWMgZnJvbSBcIkBwcmlzbWljaW8vY2xpZW50XCI7XG5pbXBvcnQgeyBlbmFibGVBdXRvUHJldmlld3MgfSBmcm9tICdAcHJpc21pY2lvL25leHQnXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9zbGljZW1hY2hpbmUuY29uZmlnLmpzb25cIjtcbmltcG9ydCBmZXRjaCBmcm9tICdjcm9zcy1mZXRjaCdcblxuXG5leHBvcnQgY29uc3QgcmVwb3NpdG9yeU5hbWUgPVxuICBwcm9jZXNzLmVudi5QUklTTUlDX1JFUE9TSVRPUllfTkFNRTtcblxuLyoqXG4gKiBBIGxpc3Qgb2YgUm91dGUgUmVzb2x2ZXIgb2JqZWN0cyB0aGF0IGRlZmluZSBob3cgYSBkb2N1bWVudCdzIGB1cmxgIGZpZWxkIGlzIHJlc29sdmVkLlxuICpcbiAqIHtAbGluayBodHRwczovL3ByaXNtaWMuaW8vZG9jcy9yb3V0ZS1yZXNvbHZlciNyb3V0ZS1yZXNvbHZlcn1cbiAqXG4gKiBAdHlwZSB7cHJpc21pYy5DbGllbnRDb25maWdbXCJyb3V0ZXNcIl19XG4gKi9cblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgdHlwZTogJ0luZGV4JyxcbiAgICBwYXRoOiAnLycsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnY29sb3Bob24nLFxuICAgIHBhdGg6ICcvY29sb3Bob24nLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ3dvcmsnLFxuICAgIHBhdGg6ICcvd29yaycsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAncHJvamVjdCcsXG4gICAgcGF0aDogJy9wcm9qZWN0Lzp1aWQnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ2Jsb2dwb3N0JyxcbiAgICBwYXRoOiAnL2Jsb2cvOnVpZCcsXG4gIH0sXG5dO1xuXG5jb25zdCByZXRyeUZldGNoID0gYXN5bmMgKHVybCwgb3B0aW9ucywgcmV0cmllcyA9IDMsIGJhY2tvZmYgPSAzMDApID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyAuLi5vcHRpb25zLCB0aW1lb3V0OiAzMDAwMCB9KVxuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChyZXRyaWVzID4gMCkge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGJhY2tvZmYpKVxuICAgICAgcmV0dXJuIHJldHJ5RmV0Y2godXJsLCBvcHRpb25zLCByZXRyaWVzIC0gMSwgYmFja29mZiAqIDIpXG4gICAgfVxuICAgIHRocm93IGVycm9yXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgUHJpc21pYyBjbGllbnQgZm9yIHRoZSBwcm9qZWN0J3MgcmVwb3NpdG9yeS4gVGhlIGNsaWVudCBpcyB1c2VkIHRvXG4gKiBxdWVyeSBjb250ZW50IGZyb20gdGhlIFByaXNtaWMgQVBJLlxuICpcbiAqIEBwYXJhbSB7cHJpc21pY05leHQuQ3JlYXRlQ2xpZW50Q29uZmlnfSBjb25maWcgLSBDb25maWd1cmF0aW9uIGZvciB0aGUgUHJpc21pYyBjbGllbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVDbGllbnQgPSAoY29uZmlnID0ge30pID0+IHtcbiAgY29uc3QgY2xpZW50ID0gcHJpc21pYy5jcmVhdGVDbGllbnQocmVwb3NpdG9yeU5hbWUsIHtcbiAgICByb3V0ZXMsXG4gICAgLi4uY29uZmlnLFxuICAgIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5QUklTTUlDX0FDQ0VTU19UT0tFTixcbiAgICBmZXRjaDogYXN5bmMgKHVybCwgb3B0aW9ucykgPT4ge1xuICAgICAgLy9jb25zb2xlLnRpbWUoYFByaXNtaWMgcmVxdWVzdCB0byAke3VybH1gKVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeUZldGNoKHVybCwgb3B0aW9ucylcbiAgICAgICAgLy9jb25zb2xlLnRpbWVFbmQoYFByaXNtaWMgcmVxdWVzdCB0byAke3VybH1gKVxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vY29uc29sZS50aW1lRW5kKGBQcmlzbWljIHJlcXVlc3QgdG8gJHt1cmx9YClcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZmV0Y2hpbmcgZnJvbSBQcmlzbWljOiAke2Vycm9yfWApXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG4gICAgfSxcbiAgfSlcblxuICBlbmFibGVBdXRvUHJldmlld3Moe1xuICAgIGNsaWVudCxcbiAgICBwcmV2aWV3RGF0YTogY29uZmlnLnByZXZpZXdEYXRhLFxuICAgIHJlcTogY29uZmlnLnJlcSxcbiAgfSk7XG5cbiAgcmV0dXJuIGNsaWVudDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rUmVzb2x2ZXIoZG9jKSB7XG4gIHN3aXRjaCAoZG9jLnR5cGUpIHtcbiAgICAgIGNhc2UgJ0luZGV4JzpcbiAgICAgICAgICByZXR1cm4gJy8nXG4gICAgICBjYXNlICdjb2xvcGhvbic6XG4gICAgICAgICAgcmV0dXJuICcvY29sb3Bob24nXG4gICAgICBjYXNlICd3b3JrJzpcbiAgICAgICAgICByZXR1cm4gJy93b3JrJ1xuICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgcmV0dXJuIGAvcHJvamVjdC8ke2RvYy51aWR9YFxuICAgICAgY2FzZSAnYmxvZyc6XG4gICAgICAgICAgcmV0dXJuIGAvYmxvZy8ke2RvYy51aWR9YFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJy8nXG4gIH1cbn0iXSwibmFtZXMiOlsicHJpc21pYyIsImVuYWJsZUF1dG9QcmV2aWV3cyIsImNvbmZpZyIsImZldGNoIiwicmVwb3NpdG9yeU5hbWUiLCJwcm9jZXNzIiwiZW52IiwiUFJJU01JQ19SRVBPU0lUT1JZX05BTUUiLCJyb3V0ZXMiLCJ0eXBlIiwicGF0aCIsInJldHJ5RmV0Y2giLCJ1cmwiLCJvcHRpb25zIiwicmV0cmllcyIsImJhY2tvZmYiLCJyZXNwb25zZSIsInRpbWVvdXQiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJjcmVhdGVDbGllbnQiLCJjbGllbnQiLCJhY2Nlc3NUb2tlbiIsIlBSSVNNSUNfQUNDRVNTX1RPS0VOIiwiY29uc29sZSIsInByZXZpZXdEYXRhIiwicmVxIiwibGlua1Jlc29sdmVyIiwiZG9jIiwidWlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/prismicio.js\n");

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

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("cross-fetch");

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();