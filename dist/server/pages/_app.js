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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prismicio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../prismicio */ \"./src/prismicio.js\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prismicio/react */ \"@prismicio/react\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prismicio_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @prismicio/next */ \"@prismicio/next\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prismicio_next__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio__WEBPACK_IMPORTED_MODULE_3__]);\n_prismicio__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n // Adjust path as needed\n\n\nfunction App({ Component, pageProps }) {\n    const [navigation, setNavigation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    console.log(\"nav not yet fetched\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"nav fetching\");\n        async function fetchNavigation() {\n            try {\n                const client = (0,_prismicio__WEBPACK_IMPORTED_MODULE_3__.createClient)();\n                const nav = await client.getByUID(\"navigation\", \"header\");\n                console.log(\"nav is:\", nav);\n                setNavigation(nav);\n            } catch (error) {\n                console.error(\"Error fetching navigation:\", error);\n            }\n        }\n        fetchNavigation();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: navigation?.data?.slices?.map((slice, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: slice?.primary?.link && slice?.primary?.label && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_next__WEBPACK_IMPORTED_MODULE_5__.PrismicNextLink, {\n                                field: slice.primary.link,\n                                linkResolver: _prismicio__WEBPACK_IMPORTED_MODULE_3__.linkResolver,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_react__WEBPACK_IMPORTED_MODULE_4__.PrismicRichText, {\n                                    field: slice.primary.label\n                                }, void 0, false, {\n                                    fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                                lineNumber: 33,\n                                columnNumber: 17\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_next__WEBPACK_IMPORTED_MODULE_5__.PrismicPreview, {\n                repositoryName: _prismicio__WEBPACK_IMPORTED_MODULE_3__.repositoryName,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ2M7QUFDOEIsQ0FBQyx3QkFBd0I7QUFDaEQ7QUFDZTtBQUVsRSxTQUFTUSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ25DLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUM3Q2EsUUFBUUMsR0FBRyxDQUFDO0lBRVpiLGdEQUFTQSxDQUFDO1FBQ1JZLFFBQVFDLEdBQUcsQ0FBQztRQUNaLGVBQWVDO1lBQ2IsSUFBSTtnQkFDRixNQUFNQyxTQUFTZCx3REFBWUE7Z0JBQzNCLE1BQU1lLE1BQU0sTUFBTUQsT0FBT0UsUUFBUSxDQUFDLGNBQWM7Z0JBQ2hETCxRQUFRQyxHQUFHLENBQUMsV0FBV0c7Z0JBQ3ZCTCxjQUFjSztZQUNoQixFQUFFLE9BQU9FLE9BQU87Z0JBQ2ROLFFBQVFNLEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFDQUo7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNFOzBCQUNDLDRFQUFDRzs4QkFDRVQsWUFBWVUsTUFBTUMsUUFBUUMsSUFBSSxDQUFDQyxPQUFPQyxzQkFDckMsOERBQUNDO3NDQUNFRixPQUFPRyxTQUFTQyxRQUFRSixPQUFPRyxTQUFTRSx1QkFDdkMsOERBQUN2Qiw0REFBZUE7Z0NBQUN3QixPQUFPTixNQUFNRyxPQUFPLENBQUNDLElBQUk7Z0NBQUV4QixjQUFjQSxvREFBWUE7MENBQ3BFLDRFQUFDQyw2REFBZUE7b0NBQUN5QixPQUFPTixNQUFNRyxPQUFPLENBQUNFLEtBQUs7Ozs7Ozs7Ozs7OzJCQUh4Q0o7Ozs7Ozs7Ozs7Ozs7OzswQkFVZiw4REFBQ2xCLDJEQUFjQTtnQkFBQ0osZ0JBQWdCQSxzREFBY0E7MEJBQzVDLDRFQUFDTTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tdGVtcGxhdGUtMS8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQsIHJlcG9zaXRvcnlOYW1lLCBsaW5rUmVzb2x2ZXIgfSBmcm9tICcuLi9wcmlzbWljaW8nOyAvLyBBZGp1c3QgcGF0aCBhcyBuZWVkZWRcbmltcG9ydCB7IFByaXNtaWNSaWNoVGV4dCB9IGZyb20gJ0BwcmlzbWljaW8vcmVhY3QnO1xuaW1wb3J0IHsgUHJpc21pY05leHRMaW5rLCBQcmlzbWljUHJldmlldyB9IGZyb20gJ0BwcmlzbWljaW8vbmV4dCc7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW25hdmlnYXRpb24sIHNldE5hdmlnYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnNvbGUubG9nKFwibmF2IG5vdCB5ZXQgZmV0Y2hlZFwiKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJuYXYgZmV0Y2hpbmdcIilcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaE5hdmlnYXRpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoKTtcbiAgICAgICAgY29uc3QgbmF2ID0gYXdhaXQgY2xpZW50LmdldEJ5VUlEKCduYXZpZ2F0aW9uJywgJ2hlYWRlcicpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5hdiBpczpcIiwgbmF2KVxuICAgICAgICBzZXROYXZpZ2F0aW9uKG5hdik7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBuYXZpZ2F0aW9uOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hOYXZpZ2F0aW9uKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge25hdmlnYXRpb24/LmRhdGE/LnNsaWNlcz8ubWFwKChzbGljZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge3NsaWNlPy5wcmltYXJ5Py5saW5rICYmIHNsaWNlPy5wcmltYXJ5Py5sYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgPFByaXNtaWNOZXh0TGluayBmaWVsZD17c2xpY2UucHJpbWFyeS5saW5rfSBsaW5rUmVzb2x2ZXI9e2xpbmtSZXNvbHZlcn0+XG4gICAgICAgICAgICAgICAgICA8UHJpc21pY1JpY2hUZXh0IGZpZWxkPXtzbGljZS5wcmltYXJ5LmxhYmVsfSAvPlxuICAgICAgICAgICAgICAgIDwvUHJpc21pY05leHRMaW5rPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPFByaXNtaWNQcmV2aWV3IHJlcG9zaXRvcnlOYW1lPXtyZXBvc2l0b3J5TmFtZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUHJpc21pY1ByZXZpZXc+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDbGllbnQiLCJyZXBvc2l0b3J5TmFtZSIsImxpbmtSZXNvbHZlciIsIlByaXNtaWNSaWNoVGV4dCIsIlByaXNtaWNOZXh0TGluayIsIlByaXNtaWNQcmV2aWV3IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibmF2aWdhdGlvbiIsInNldE5hdmlnYXRpb24iLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hOYXZpZ2F0aW9uIiwiY2xpZW50IiwibmF2IiwiZ2V0QnlVSUQiLCJlcnJvciIsInVsIiwiZGF0YSIsInNsaWNlcyIsIm1hcCIsInNsaWNlIiwiaW5kZXgiLCJsaSIsInByaW1hcnkiLCJsaW5rIiwibGFiZWwiLCJmaWVsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/prismicio.js":
/*!**************************!*\
  !*** ./src/prismicio.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient),\n/* harmony export */   linkResolver: () => (/* binding */ linkResolver),\n/* harmony export */   repositoryName: () => (/* binding */ repositoryName)\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prismicio/next */ \"@prismicio/next\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prismicio_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slicemachine_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slicemachine.config.json */ \"./slicemachine.config.json\");\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cross-fetch */ \"cross-fetch\");\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio_client__WEBPACK_IMPORTED_MODULE_0__]);\n_prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst repositoryName = process.env.PRISMIC_REPOSITORY_NAME;\n/**\n * A list of Route Resolver objects that define how a document's `url` field is resolved.\n *\n * {@link https://prismic.io/docs/route-resolver#route-resolver}\n *\n * @type {prismic.ClientConfig[\"routes\"]}\n */ const routes = [\n    {\n        type: \"Index\",\n        path: \"/\"\n    },\n    {\n        type: \"colophon\",\n        path: \"/colophon\"\n    },\n    {\n        type: \"work\",\n        path: \"/work\"\n    },\n    {\n        type: \"project\",\n        path: \"/project/:uid\"\n    },\n    {\n        type: \"blogpost\",\n        path: \"/blog/:uid\"\n    }\n];\nconst retryFetch = async (url, options, retries = 3, backoff = 300)=>{\n    try {\n        const response = await cross_fetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {\n            ...options,\n            timeout: 30000\n        });\n        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);\n        return response;\n    } catch (error) {\n        if (retries > 0) {\n            await new Promise((resolve)=>setTimeout(resolve, backoff));\n            return retryFetch(url, options, retries - 1, backoff * 2);\n        }\n        throw error;\n    }\n};\n/**\n * Creates a Prismic client for the project's repository. The client is used to\n * query content from the Prismic API.\n *\n * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.\n */ const createClient = (config = {})=>{\n    const client = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.createClient(process.env.PRISMIC_REPOSITORY_NAME, {\n        routes,\n        ...config,\n        accessToken: process.env.PRISMIC_ACCESS_TOKEN,\n        fetch: async (url, options)=>{\n            //console.time(`Prismic request to ${url}`)\n            try {\n                const response = await retryFetch(url, options);\n                //console.timeEnd(`Prismic request to ${url}`)\n                return response;\n            } catch (error) {\n                //console.timeEnd(`Prismic request to ${url}`)\n                console.error(`Error fetching from Prismic: ${error}`);\n                throw error;\n            }\n        }\n    });\n    (0,_prismicio_next__WEBPACK_IMPORTED_MODULE_1__.enableAutoPreviews)({\n        client,\n        previewData: config.previewData,\n        req: config.req\n    });\n    return client;\n};\nfunction linkResolver(doc) {\n    switch(doc.type){\n        case \"Index\":\n            return \"/\";\n        case \"colophon\":\n            return \"/colophon\";\n        case \"work\":\n            return \"/work\";\n        case \"project\":\n            return `/project/${doc.uid}`;\n        case \"blog\":\n            return `/blog/${doc.uid}`;\n        default:\n            return \"/\";\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJpc21pY2lvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNPO0FBQ0g7QUFDbEI7QUFHeEIsTUFBTUksaUJBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0MsdUJBQXVCLENBQUM7QUFFdEM7Ozs7OztDQU1DLEdBRUQsTUFBTUMsU0FBUztJQUNiO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRDtBQUVELE1BQU1DLGFBQWEsT0FBT0MsS0FBS0MsU0FBU0MsVUFBVSxDQUFDLEVBQUVDLFVBQVUsR0FBRztJQUNoRSxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNYixrREFBS0EsQ0FBQ1MsS0FBSztZQUFFLEdBQUdDLE9BQU87WUFBRUksU0FBUztRQUFNO1FBQy9ELElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFSCxTQUFTSSxNQUFNLENBQUMsQ0FBQztRQUMxRSxPQUFPSjtJQUNULEVBQUUsT0FBT0ssT0FBTztRQUNkLElBQUlQLFVBQVUsR0FBRztZQUNmLE1BQU0sSUFBSVEsUUFBUUMsQ0FBQUEsVUFBV0MsV0FBV0QsU0FBU1I7WUFDakQsT0FBT0osV0FBV0MsS0FBS0MsU0FBU0MsVUFBVSxHQUFHQyxVQUFVO1FBQ3pEO1FBQ0EsTUFBTU07SUFDUjtBQUNGO0FBRUE7Ozs7O0NBS0MsR0FDTSxNQUFNSSxlQUFlLENBQUN2QixTQUFTLENBQUMsQ0FBQztJQUN0QyxNQUFNd0IsU0FBUzFCLDJEQUFvQixDQUFDSyxRQUFRQyxHQUFHLENBQUNDLHVCQUF1QixFQUFFO1FBQ3ZFQztRQUNBLEdBQUdOLE1BQU07UUFDVHlCLGFBQWF0QixRQUFRQyxHQUFHLENBQUNzQixvQkFBb0I7UUFDN0N6QixPQUFPLE9BQU9TLEtBQUtDO1lBQ2pCLDJDQUEyQztZQUMzQyxJQUFJO2dCQUNGLE1BQU1HLFdBQVcsTUFBTUwsV0FBV0MsS0FBS0M7Z0JBQ3ZDLDhDQUE4QztnQkFDOUMsT0FBT0c7WUFDVCxFQUFFLE9BQU9LLE9BQU87Z0JBQ2QsOENBQThDO2dCQUM5Q1EsUUFBUVIsS0FBSyxDQUFDLENBQUMsNkJBQTZCLEVBQUVBLE1BQU0sQ0FBQztnQkFDckQsTUFBTUE7WUFDUjtRQUNGO0lBQ0Y7SUFFQXBCLG1FQUFrQkEsQ0FBQztRQUNqQnlCO1FBQ0FJLGFBQWE1QixPQUFPNEIsV0FBVztRQUMvQkMsS0FBSzdCLE9BQU82QixHQUFHO0lBQ2pCO0lBRUEsT0FBT0w7QUFDVCxFQUFFO0FBRUssU0FBU00sYUFBYUMsR0FBRztJQUM5QixPQUFRQSxJQUFJeEIsSUFBSTtRQUNaLEtBQUs7WUFDRCxPQUFPO1FBQ1gsS0FBSztZQUNELE9BQU87UUFDWCxLQUFLO1lBQ0QsT0FBTztRQUNYLEtBQUs7WUFDRCxPQUFPLENBQUMsU0FBUyxFQUFFd0IsSUFBSUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsS0FBSztZQUNELE9BQU8sQ0FBQyxNQUFNLEVBQUVELElBQUlDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCO1lBQ0ksT0FBTztJQUNmO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tdGVtcGxhdGUtMS8uL3NyYy9wcmlzbWljaW8uanM/Njc1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwcmlzbWljIGZyb20gXCJAcHJpc21pY2lvL2NsaWVudFwiO1xuaW1wb3J0IHsgZW5hYmxlQXV0b1ByZXZpZXdzIH0gZnJvbSAnQHByaXNtaWNpby9uZXh0J1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vc2xpY2VtYWNoaW5lLmNvbmZpZy5qc29uXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnY3Jvc3MtZmV0Y2gnXG5cblxuZXhwb3J0IGNvbnN0IHJlcG9zaXRvcnlOYW1lID1cbiAgcHJvY2Vzcy5lbnYuUFJJU01JQ19SRVBPU0lUT1JZX05BTUU7XG5cbi8qKlxuICogQSBsaXN0IG9mIFJvdXRlIFJlc29sdmVyIG9iamVjdHMgdGhhdCBkZWZpbmUgaG93IGEgZG9jdW1lbnQncyBgdXJsYCBmaWVsZCBpcyByZXNvbHZlZC5cbiAqXG4gKiB7QGxpbmsgaHR0cHM6Ly9wcmlzbWljLmlvL2RvY3Mvcm91dGUtcmVzb2x2ZXIjcm91dGUtcmVzb2x2ZXJ9XG4gKlxuICogQHR5cGUge3ByaXNtaWMuQ2xpZW50Q29uZmlnW1wicm91dGVzXCJdfVxuICovXG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHR5cGU6ICdJbmRleCcsXG4gICAgcGF0aDogJy8nLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ2NvbG9waG9uJyxcbiAgICBwYXRoOiAnL2NvbG9waG9uJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICd3b3JrJyxcbiAgICBwYXRoOiAnL3dvcmsnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ3Byb2plY3QnLFxuICAgIHBhdGg6ICcvcHJvamVjdC86dWlkJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdibG9ncG9zdCcsXG4gICAgcGF0aDogJy9ibG9nLzp1aWQnLFxuICB9LFxuXTtcblxuY29uc3QgcmV0cnlGZXRjaCA9IGFzeW5jICh1cmwsIG9wdGlvbnMsIHJldHJpZXMgPSAzLCBiYWNrb2ZmID0gMzAwKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgLi4ub3B0aW9ucywgdGltZW91dDogMzAwMDAgfSlcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YClcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAocmV0cmllcyA+IDApIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBiYWNrb2ZmKSlcbiAgICAgIHJldHVybiByZXRyeUZldGNoKHVybCwgb3B0aW9ucywgcmV0cmllcyAtIDEsIGJhY2tvZmYgKiAyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJvclxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFByaXNtaWMgY2xpZW50IGZvciB0aGUgcHJvamVjdCdzIHJlcG9zaXRvcnkuIFRoZSBjbGllbnQgaXMgdXNlZCB0b1xuICogcXVlcnkgY29udGVudCBmcm9tIHRoZSBQcmlzbWljIEFQSS5cbiAqXG4gKiBAcGFyYW0ge3ByaXNtaWNOZXh0LkNyZWF0ZUNsaWVudENvbmZpZ30gY29uZmlnIC0gQ29uZmlndXJhdGlvbiBmb3IgdGhlIFByaXNtaWMgY2xpZW50LlxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlQ2xpZW50ID0gKGNvbmZpZyA9IHt9KSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IHByaXNtaWMuY3JlYXRlQ2xpZW50KHByb2Nlc3MuZW52LlBSSVNNSUNfUkVQT1NJVE9SWV9OQU1FLCB7XG4gICAgcm91dGVzLFxuICAgIC4uLmNvbmZpZyxcbiAgICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuUFJJU01JQ19BQ0NFU1NfVE9LRU4sXG4gICAgZmV0Y2g6IGFzeW5jICh1cmwsIG9wdGlvbnMpID0+IHtcbiAgICAgIC8vY29uc29sZS50aW1lKGBQcmlzbWljIHJlcXVlc3QgdG8gJHt1cmx9YClcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmV0cnlGZXRjaCh1cmwsIG9wdGlvbnMpXG4gICAgICAgIC8vY29uc29sZS50aW1lRW5kKGBQcmlzbWljIHJlcXVlc3QgdG8gJHt1cmx9YClcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvL2NvbnNvbGUudGltZUVuZChgUHJpc21pYyByZXF1ZXN0IHRvICR7dXJsfWApXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGZldGNoaW5nIGZyb20gUHJpc21pYzogJHtlcnJvcn1gKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuICAgIH0sXG4gIH0pXG5cbiAgZW5hYmxlQXV0b1ByZXZpZXdzKHtcbiAgICBjbGllbnQsXG4gICAgcHJldmlld0RhdGE6IGNvbmZpZy5wcmV2aWV3RGF0YSxcbiAgICByZXE6IGNvbmZpZy5yZXEsXG4gIH0pO1xuXG4gIHJldHVybiBjbGllbnQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua1Jlc29sdmVyKGRvYykge1xuICBzd2l0Y2ggKGRvYy50eXBlKSB7XG4gICAgICBjYXNlICdJbmRleCc6XG4gICAgICAgICAgcmV0dXJuICcvJ1xuICAgICAgY2FzZSAnY29sb3Bob24nOlxuICAgICAgICAgIHJldHVybiAnL2NvbG9waG9uJ1xuICAgICAgY2FzZSAnd29yayc6XG4gICAgICAgICAgcmV0dXJuICcvd29yaydcbiAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgIHJldHVybiBgL3Byb2plY3QvJHtkb2MudWlkfWBcbiAgICAgIGNhc2UgJ2Jsb2cnOlxuICAgICAgICAgIHJldHVybiBgL2Jsb2cvJHtkb2MudWlkfWBcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICcvJ1xuICB9XG59Il0sIm5hbWVzIjpbInByaXNtaWMiLCJlbmFibGVBdXRvUHJldmlld3MiLCJjb25maWciLCJmZXRjaCIsInJlcG9zaXRvcnlOYW1lIiwicHJvY2VzcyIsImVudiIsIlBSSVNNSUNfUkVQT1NJVE9SWV9OQU1FIiwicm91dGVzIiwidHlwZSIsInBhdGgiLCJyZXRyeUZldGNoIiwidXJsIiwib3B0aW9ucyIsInJldHJpZXMiLCJiYWNrb2ZmIiwicmVzcG9uc2UiLCJ0aW1lb3V0Iiwib2siLCJFcnJvciIsInN0YXR1cyIsImVycm9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiY3JlYXRlQ2xpZW50IiwiY2xpZW50IiwiYWNjZXNzVG9rZW4iLCJQUklTTUlDX0FDQ0VTU19UT0tFTiIsImNvbnNvbGUiLCJwcmV2aWV3RGF0YSIsInJlcSIsImxpbmtSZXNvbHZlciIsImRvYyIsInVpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/prismicio.js\n");

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