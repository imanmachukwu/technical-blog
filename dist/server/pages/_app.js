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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prismicio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../prismicio */ \"./src/prismicio.js\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prismicio/react */ \"@prismicio/react\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prismicio_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @prismicio/next */ \"@prismicio/next\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prismicio_next__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio__WEBPACK_IMPORTED_MODULE_3__]);\n_prismicio__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n // Adjust path as needed\n\n\nfunction App({ Component, pageProps, navigation }) {\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    const renderNavigation = ()=>{\n        if (!isClient) return null;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: navigation?.data?.slices?.map((slice)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: slice?.primary?.link && slice?.primary?.label && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_react__WEBPACK_IMPORTED_MODULE_4__.PrismicNextLink, {\n                            field: slice.primary.link,\n                            linkResolver: _prismicio__WEBPACK_IMPORTED_MODULE_3__.linkResolver,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_react__WEBPACK_IMPORTED_MODULE_4__.PrismicRichText, {\n                                field: slice.primary.label\n                            }, void 0, false, {\n                                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                                lineNumber: 23,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, this)\n                    }, slice.id, false, {\n                        fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            renderNavigation(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_next__WEBPACK_IMPORTED_MODULE_5__.PrismicPreview, {\n                repositoryName: _prismicio__WEBPACK_IMPORTED_MODULE_3__.repositoryName,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/imanmachukwu/Desktop/nextProjects/portfolio-template-1/src/pages/_app.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nApp.getInitialProps = async ({ previewData })=>{\n    try {\n        const client = (0,_prismicio__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n            previewData\n        });\n        const navigation = await client.getByUID(\"navigation\", \"header\");\n        console.log(\"Drawn navigation:\", navigation.data.slices);\n        return {\n            props: {\n                navigation\n            }\n        };\n    } catch (error) {\n        console.error(\"Error fetching navigation:\", error);\n        return {\n            props: {\n                error: error.message || \"An error occurred while fetching data\"\n            }\n        };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ2M7QUFDOEIsQ0FBQyx3QkFBd0I7QUFDL0I7QUFDbkI7QUFFakQsU0FBU1EsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFO0lBQy9DLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDUlksWUFBWTtJQUNkLEdBQUcsRUFBRTtJQUVMLE1BQU1DLG1CQUFtQjtRQUN2QixJQUFJLENBQUNGLFVBQVUsT0FBTztRQUN0QixxQkFDRSw4REFBQ0c7c0JBQ0MsNEVBQUNDOzBCQUNFTCxZQUFZTSxNQUFNQyxRQUFRQyxJQUFJLENBQUNDLHNCQUM5Qiw4REFBQ0M7a0NBQ0VELE9BQU9FLFNBQVNDLFFBQVFILE9BQU9FLFNBQVNFLHVCQUN2Qyw4REFBQ25CLDZEQUFlQTs0QkFBQ29CLE9BQU9MLE1BQU1FLE9BQU8sQ0FBQ0MsSUFBSTs0QkFBRW5CLGNBQWNBLG9EQUFZQTtzQ0FDcEUsNEVBQUNFLDZEQUFlQTtnQ0FBQ21CLE9BQU9MLE1BQU1FLE9BQU8sQ0FBQ0UsS0FBSzs7Ozs7Ozs7Ozs7dUJBSHhDSixNQUFNTSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7SUFXM0I7SUFFQSxxQkFDRTs7WUFDR1o7MEJBQ0QsOERBQUNQLDJEQUFjQTtnQkFBQ0osZ0JBQWdCQSxzREFBY0E7MEJBQzVDLDRFQUFDTTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUFGLElBQUltQixlQUFlLEdBQUcsT0FBTyxFQUFDQyxXQUFXLEVBQUM7SUFDeEMsSUFBSTtRQUNGLE1BQU1DLFNBQVMzQix3REFBWUEsQ0FBQztZQUFDMEI7UUFBVztRQUN4QyxNQUFNakIsYUFBYSxNQUFNa0IsT0FBT0MsUUFBUSxDQUFDLGNBQWM7UUFDdkRDLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJyQixXQUFXTSxJQUFJLENBQUNDLE1BQU07UUFDdkQsT0FBTztZQUNMZSxPQUFPO2dCQUFFdEI7WUFBVztRQUN0QjtJQUNGLEVBQUUsT0FBT3VCLE9BQU87UUFDZEgsUUFBUUcsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsT0FBTztZQUNMRCxPQUFPO2dCQUFFQyxPQUFPQSxNQUFNQyxPQUFPLElBQUk7WUFBd0M7UUFDM0U7SUFDRjtBQUNGO0FBRUEsaUVBQWUzQixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXRlbXBsYXRlLTEvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCByZXBvc2l0b3J5TmFtZSwgbGlua1Jlc29sdmVyIH0gZnJvbSAnLi4vcHJpc21pY2lvJzsgLy8gQWRqdXN0IHBhdGggYXMgbmVlZGVkXG5pbXBvcnQgeyBQcmlzbWljTmV4dExpbmssIFByaXNtaWNSaWNoVGV4dCB9IGZyb20gJ0BwcmlzbWljaW8vcmVhY3QnO1xuaW1wb3J0IHsgUHJpc21pY1ByZXZpZXcgfSBmcm9tICdAcHJpc21pY2lvL25leHQnO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgbmF2aWdhdGlvbiB9KSB7XG4gIGNvbnN0IFtpc0NsaWVudCwgc2V0SXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDbGllbnQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgIGlmICghaXNDbGllbnQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge25hdmlnYXRpb24/LmRhdGE/LnNsaWNlcz8ubWFwKChzbGljZSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17c2xpY2UuaWR9PlxuICAgICAgICAgICAgICB7c2xpY2U/LnByaW1hcnk/LmxpbmsgJiYgc2xpY2U/LnByaW1hcnk/LmxhYmVsICYmIChcbiAgICAgICAgICAgICAgICA8UHJpc21pY05leHRMaW5rIGZpZWxkPXtzbGljZS5wcmltYXJ5Lmxpbmt9IGxpbmtSZXNvbHZlcj17bGlua1Jlc29sdmVyfT5cbiAgICAgICAgICAgICAgICAgIDxQcmlzbWljUmljaFRleHQgZmllbGQ9e3NsaWNlLnByaW1hcnkubGFiZWx9IC8+XG4gICAgICAgICAgICAgICAgPC9QcmlzbWljTmV4dExpbms+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVuZGVyTmF2aWdhdGlvbigpfVxuICAgICAgPFByaXNtaWNQcmV2aWV3IHJlcG9zaXRvcnlOYW1lPXtyZXBvc2l0b3J5TmFtZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUHJpc21pY1ByZXZpZXc+XG4gICAgPC8+XG4gICk7XG59XG5cbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3ByZXZpZXdEYXRhfSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7cHJldmlld0RhdGF9KTtcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0gYXdhaXQgY2xpZW50LmdldEJ5VUlEKCduYXZpZ2F0aW9uJywgJ2hlYWRlcicpO1xuICAgIGNvbnNvbGUubG9nKFwiRHJhd24gbmF2aWdhdGlvbjpcIiwgbmF2aWdhdGlvbi5kYXRhLnNsaWNlcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IG5hdmlnYXRpb24gfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBuYXZpZ2F0aW9uOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIGRhdGEnIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUNsaWVudCIsInJlcG9zaXRvcnlOYW1lIiwibGlua1Jlc29sdmVyIiwiUHJpc21pY05leHRMaW5rIiwiUHJpc21pY1JpY2hUZXh0IiwiUHJpc21pY1ByZXZpZXciLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJuYXZpZ2F0aW9uIiwiaXNDbGllbnQiLCJzZXRJc0NsaWVudCIsInJlbmRlck5hdmlnYXRpb24iLCJuYXYiLCJ1bCIsImRhdGEiLCJzbGljZXMiLCJtYXAiLCJzbGljZSIsImxpIiwicHJpbWFyeSIsImxpbmsiLCJsYWJlbCIsImZpZWxkIiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJwcmV2aWV3RGF0YSIsImNsaWVudCIsImdldEJ5VUlEIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/prismicio.js":
/*!**************************!*\
  !*** ./src/prismicio.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient),\n/* harmony export */   linkResolver: () => (/* binding */ linkResolver),\n/* harmony export */   repositoryName: () => (/* binding */ repositoryName)\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prismicio/next */ \"@prismicio/next\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prismicio_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slicemachine_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slicemachine.config.json */ \"./slicemachine.config.json\");\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cross-fetch */ \"cross-fetch\");\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio_client__WEBPACK_IMPORTED_MODULE_0__]);\n_prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst repositoryName = process.env.PRISMIC_REPOSITORY_NAME;\n/**\n * A list of Route Resolver objects that define how a document's `url` field is resolved.\n *\n * {@link https://prismic.io/docs/route-resolver#route-resolver}\n *\n * @type {prismic.ClientConfig[\"routes\"]}\n */ const routes = [\n    {\n        type: \"Index\",\n        path: \"/\"\n    },\n    {\n        type: \"colophon\",\n        path: \"/colophon\"\n    },\n    {\n        type: \"work\",\n        path: \"/work\"\n    },\n    {\n        type: \"project\",\n        path: \"/project/:uid\"\n    }\n];\nconst retryFetch = async (url, options, retries = 3, backoff = 300)=>{\n    try {\n        const response = await cross_fetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {\n            ...options,\n            timeout: 30000\n        });\n        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);\n        return response;\n    } catch (error) {\n        if (retries > 0) {\n            await new Promise((resolve)=>setTimeout(resolve, backoff));\n            return retryFetch(url, options, retries - 1, backoff * 2);\n        }\n        throw error;\n    }\n};\n/**\n * Creates a Prismic client for the project's repository. The client is used to\n * query content from the Prismic API.\n *\n * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.\n */ const createClient = (config = {})=>{\n    const client = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.createClient(process.env.PRISMIC_REPOSITORY_NAME, {\n        routes,\n        ...config,\n        accessToken: process.env.PRISMIC_ACCESS_TOKEN,\n        fetch: async (url, options)=>{\n            //console.time(`Prismic request to ${url}`)\n            try {\n                const response = await retryFetch(url, options);\n                //console.timeEnd(`Prismic request to ${url}`)\n                return response;\n            } catch (error) {\n                //console.timeEnd(`Prismic request to ${url}`)\n                console.error(`Error fetching from Prismic: ${error}`);\n                throw error;\n            }\n        }\n    });\n    (0,_prismicio_next__WEBPACK_IMPORTED_MODULE_1__.enableAutoPreviews)({\n        client,\n        previewData: config.previewData,\n        req: config.req\n    });\n    return client;\n};\nfunction linkResolver(doc) {\n    switch(doc.type){\n        case \"Index\":\n            return \"/\";\n        case \"colophon\":\n            return \"/colophon\";\n        case \"work\":\n            return \"/work\";\n        case \"project\":\n            return `/project/${doc.uid}`;\n        default:\n            return \"/\";\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJpc21pY2lvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNPO0FBQ0g7QUFDbEI7QUFHeEIsTUFBTUksaUJBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0MsdUJBQXVCLENBQUM7QUFFdEM7Ozs7OztDQU1DLEdBRUQsTUFBTUMsU0FBUztJQUNiO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0NBQ0Q7QUFFRCxNQUFNQyxhQUFhLE9BQU9DLEtBQUtDLFNBQVNDLFVBQVUsQ0FBQyxFQUFFQyxVQUFVLEdBQUc7SUFDaEUsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTWIsa0RBQUtBLENBQUNTLEtBQUs7WUFBRSxHQUFHQyxPQUFPO1lBQUVJLFNBQVM7UUFBTTtRQUMvRCxJQUFJLENBQUNELFNBQVNFLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRUgsU0FBU0ksTUFBTSxDQUFDLENBQUM7UUFDMUUsT0FBT0o7SUFDVCxFQUFFLE9BQU9LLE9BQU87UUFDZCxJQUFJUCxVQUFVLEdBQUc7WUFDZixNQUFNLElBQUlRLFFBQVFDLENBQUFBLFVBQVdDLFdBQVdELFNBQVNSO1lBQ2pELE9BQU9KLFdBQVdDLEtBQUtDLFNBQVNDLFVBQVUsR0FBR0MsVUFBVTtRQUN6RDtRQUNBLE1BQU1NO0lBQ1I7QUFDRjtBQUVBOzs7OztDQUtDLEdBQ00sTUFBTUksZUFBZSxDQUFDdkIsU0FBUyxDQUFDLENBQUM7SUFDdEMsTUFBTXdCLFNBQVMxQiwyREFBb0IsQ0FBQ0ssUUFBUUMsR0FBRyxDQUFDQyx1QkFBdUIsRUFBRTtRQUN2RUM7UUFDQSxHQUFHTixNQUFNO1FBQ1R5QixhQUFhdEIsUUFBUUMsR0FBRyxDQUFDc0Isb0JBQW9CO1FBQzdDekIsT0FBTyxPQUFPUyxLQUFLQztZQUNqQiwyQ0FBMkM7WUFDM0MsSUFBSTtnQkFDRixNQUFNRyxXQUFXLE1BQU1MLFdBQVdDLEtBQUtDO2dCQUN2Qyw4Q0FBOEM7Z0JBQzlDLE9BQU9HO1lBQ1QsRUFBRSxPQUFPSyxPQUFPO2dCQUNkLDhDQUE4QztnQkFDOUNRLFFBQVFSLEtBQUssQ0FBQyxDQUFDLDZCQUE2QixFQUFFQSxNQUFNLENBQUM7Z0JBQ3JELE1BQU1BO1lBQ1I7UUFDRjtJQUNGO0lBRUFwQixtRUFBa0JBLENBQUM7UUFDakJ5QjtRQUNBSSxhQUFhNUIsT0FBTzRCLFdBQVc7UUFDL0JDLEtBQUs3QixPQUFPNkIsR0FBRztJQUNqQjtJQUVBLE9BQU9MO0FBQ1QsRUFBRTtBQUVLLFNBQVNNLGFBQWFDLEdBQUc7SUFDOUIsT0FBUUEsSUFBSXhCLElBQUk7UUFDWixLQUFLO1lBQ0QsT0FBTztRQUNYLEtBQUs7WUFDRCxPQUFPO1FBQ1gsS0FBSztZQUNELE9BQU87UUFDWCxLQUFLO1lBQ0QsT0FBTyxDQUFDLFNBQVMsRUFBRXdCLElBQUlDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDO1lBQ0ksT0FBTztJQUNmO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tdGVtcGxhdGUtMS8uL3NyYy9wcmlzbWljaW8uanM/Njc1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwcmlzbWljIGZyb20gXCJAcHJpc21pY2lvL2NsaWVudFwiO1xuaW1wb3J0IHsgZW5hYmxlQXV0b1ByZXZpZXdzIH0gZnJvbSAnQHByaXNtaWNpby9uZXh0J1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vc2xpY2VtYWNoaW5lLmNvbmZpZy5qc29uXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnY3Jvc3MtZmV0Y2gnXG5cblxuZXhwb3J0IGNvbnN0IHJlcG9zaXRvcnlOYW1lID1cbiAgcHJvY2Vzcy5lbnYuUFJJU01JQ19SRVBPU0lUT1JZX05BTUU7XG5cbi8qKlxuICogQSBsaXN0IG9mIFJvdXRlIFJlc29sdmVyIG9iamVjdHMgdGhhdCBkZWZpbmUgaG93IGEgZG9jdW1lbnQncyBgdXJsYCBmaWVsZCBpcyByZXNvbHZlZC5cbiAqXG4gKiB7QGxpbmsgaHR0cHM6Ly9wcmlzbWljLmlvL2RvY3Mvcm91dGUtcmVzb2x2ZXIjcm91dGUtcmVzb2x2ZXJ9XG4gKlxuICogQHR5cGUge3ByaXNtaWMuQ2xpZW50Q29uZmlnW1wicm91dGVzXCJdfVxuICovXG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHR5cGU6ICdJbmRleCcsXG4gICAgcGF0aDogJy8nLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ2NvbG9waG9uJyxcbiAgICBwYXRoOiAnL2NvbG9waG9uJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICd3b3JrJyxcbiAgICBwYXRoOiAnL3dvcmsnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ3Byb2plY3QnLFxuICAgIHBhdGg6ICcvcHJvamVjdC86dWlkJyxcbiAgfSxcbl07XG5cbmNvbnN0IHJldHJ5RmV0Y2ggPSBhc3luYyAodXJsLCBvcHRpb25zLCByZXRyaWVzID0gMywgYmFja29mZiA9IDMwMCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IC4uLm9wdGlvbnMsIHRpbWVvdXQ6IDMwMDAwIH0pXG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKHJldHJpZXMgPiAwKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgYmFja29mZikpXG4gICAgICByZXR1cm4gcmV0cnlGZXRjaCh1cmwsIG9wdGlvbnMsIHJldHJpZXMgLSAxLCBiYWNrb2ZmICogMilcbiAgICB9XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBQcmlzbWljIGNsaWVudCBmb3IgdGhlIHByb2plY3QncyByZXBvc2l0b3J5LiBUaGUgY2xpZW50IGlzIHVzZWQgdG9cbiAqIHF1ZXJ5IGNvbnRlbnQgZnJvbSB0aGUgUHJpc21pYyBBUEkuXG4gKlxuICogQHBhcmFtIHtwcmlzbWljTmV4dC5DcmVhdGVDbGllbnRDb25maWd9IGNvbmZpZyAtIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBQcmlzbWljIGNsaWVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUNsaWVudCA9IChjb25maWcgPSB7fSkgPT4ge1xuICBjb25zdCBjbGllbnQgPSBwcmlzbWljLmNyZWF0ZUNsaWVudChwcm9jZXNzLmVudi5QUklTTUlDX1JFUE9TSVRPUllfTkFNRSwge1xuICAgIHJvdXRlcyxcbiAgICAuLi5jb25maWcsXG4gICAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LlBSSVNNSUNfQUNDRVNTX1RPS0VOLFxuICAgIGZldGNoOiBhc3luYyAodXJsLCBvcHRpb25zKSA9PiB7XG4gICAgICAvL2NvbnNvbGUudGltZShgUHJpc21pYyByZXF1ZXN0IHRvICR7dXJsfWApXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJldHJ5RmV0Y2godXJsLCBvcHRpb25zKVxuICAgICAgICAvL2NvbnNvbGUudGltZUVuZChgUHJpc21pYyByZXF1ZXN0IHRvICR7dXJsfWApXG4gICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy9jb25zb2xlLnRpbWVFbmQoYFByaXNtaWMgcmVxdWVzdCB0byAke3VybH1gKVxuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyBmcm9tIFByaXNtaWM6ICR7ZXJyb3J9YClcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cbiAgICB9LFxuICB9KVxuXG4gIGVuYWJsZUF1dG9QcmV2aWV3cyh7XG4gICAgY2xpZW50LFxuICAgIHByZXZpZXdEYXRhOiBjb25maWcucHJldmlld0RhdGEsXG4gICAgcmVxOiBjb25maWcucmVxLFxuICB9KTtcblxuICByZXR1cm4gY2xpZW50O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtSZXNvbHZlcihkb2MpIHtcbiAgc3dpdGNoIChkb2MudHlwZSkge1xuICAgICAgY2FzZSAnSW5kZXgnOlxuICAgICAgICAgIHJldHVybiAnLydcbiAgICAgIGNhc2UgJ2NvbG9waG9uJzpcbiAgICAgICAgICByZXR1cm4gJy9jb2xvcGhvbidcbiAgICAgIGNhc2UgJ3dvcmsnOlxuICAgICAgICAgIHJldHVybiAnL3dvcmsnXG4gICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICByZXR1cm4gYC9wcm9qZWN0LyR7ZG9jLnVpZH1gXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnLydcbiAgfVxufSJdLCJuYW1lcyI6WyJwcmlzbWljIiwiZW5hYmxlQXV0b1ByZXZpZXdzIiwiY29uZmlnIiwiZmV0Y2giLCJyZXBvc2l0b3J5TmFtZSIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX1JFUE9TSVRPUllfTkFNRSIsInJvdXRlcyIsInR5cGUiLCJwYXRoIiwicmV0cnlGZXRjaCIsInVybCIsIm9wdGlvbnMiLCJyZXRyaWVzIiwiYmFja29mZiIsInJlc3BvbnNlIiwidGltZW91dCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJlcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImNyZWF0ZUNsaWVudCIsImNsaWVudCIsImFjY2Vzc1Rva2VuIiwiUFJJU01JQ19BQ0NFU1NfVE9LRU4iLCJjb25zb2xlIiwicHJldmlld0RhdGEiLCJyZXEiLCJsaW5rUmVzb2x2ZXIiLCJkb2MiLCJ1aWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/prismicio.js\n");

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