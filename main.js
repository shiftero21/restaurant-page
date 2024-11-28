/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/main.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/main.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* CSS RESET June 2024 */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100dvh;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\np {\r\n  text-wrap: pretty;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  text-wrap: balance;\r\n}\r\n\r\nimg,\r\nvideo,\r\nsvg {\r\n  height: auto;\r\n  max-width: 100%;\r\n}\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n    transition: none;\r\n  }\r\n}\r\n\r\nbody {\r\n  background-color: #343d46;\r\n  color: #fff;\r\n  overflow-y: scroll;\r\n  min-height: 100vh;    \r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nheader {\r\n  background-color: #2d2e2d;\r\n}\r\n\r\nnav {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  background-color: #4f5b66;\r\n  width: 900px;\r\n  margin: 0 auto;\r\n  z-index: 1000;\r\n}\r\n\r\n#contenido {\r\n  width: 900px;\r\n  padding: 2rem;\r\n  padding-top: 5rem;\r\n  margin: 0 auto;\r\n  background-color: #65737e;\r\n  overflow: hidden;\r\n}\r\n\r\nbutton {\r\n  --color: #00A97F;\r\n  flex-grow: 1;\r\n  padding: 0.8em 1.7em;\r\n  background-color: transparent;\r\n  border-radius: .3em;\r\n  position: relative;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  transition: .5s;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  border: 1px solid;\r\n  font-family: inherit;\r\n  text-transform: uppercase;\r\n  color: var(--color);\r\n  z-index: 1;\r\n}\r\n\r\nbutton:hover {\r\n  color: rgb(10, 25, 30);\r\n}\r\n\r\nbutton:active {\r\n  filter: brightness(.8);\r\n}\r\n\r\n#home {\r\n  max-width: 600px;\r\n  /* Ajusta el ancho máximo según sea necesario */\r\n  margin: 0 auto;\r\n  /* Centra el contenedor en la página */\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.home-image {\r\n  display: block;\r\n  margin: 0 auto;\r\n  max-width: 100%;\r\n  height: auto;\r\n  padding-top: 2rem;\r\n}\r\n\r\n#menu {\r\n  padding: 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.menu-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 2rem;\r\n  margin-top: 2rem;\r\n  max-width: 900px;\r\n  width: 100%;\r\n}\r\n\r\n.menu-item {\r\n  padding: 1rem;\r\n  background-color: #4f5b66;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  transition: transform 0.2s ease;\r\n  overflow: hidden;\r\n}\r\n\r\n.menu-item:hover {\r\n  transform: translateY(-10px);\r\n}\r\n\r\n.menu-item img {\r\n  width: 100%;\r\n  height: 250px;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  border-radius: 4px;\r\n}\r\n\r\n.menu-item h3 {\r\n  margin: 1rem 0;\r\n}\r\n\r\n.menu-item p {\r\n  line-height: 1.5;\r\n}\r\n\r\n.menu-item .price {\r\n  font-weight: bold;\r\n  color: #00A97F;\r\n  margin-top: 1rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n@media (max-width: 960px) {\r\n  nav {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 1rem;\r\n    position: static;\r\n  }\r\n\r\n  button {\r\n    width: 100%;\r\n  }\r\n\r\n  #contenido {\r\n    width: 100%;\r\n    padding: 1rem;\r\n  }\r\n\r\n  .menu-grid {\r\n    grid-template-columns: 1fr;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .menu-item img {\r\n    height: 250px;\r\n  }\r\n\r\n  .menu-item h3 {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .menu-item p {\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  .menu-item .price {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n.footer-dark {\r\n  margin-top: auto;\r\n  padding:50px 0;\r\n  color:#f0f9ff;\r\n  background-color:#282d32;\r\n}\r\n\r\n.footer-dark h3 {\r\n  margin-top:0;\r\n  margin-bottom:12px;\r\n  font-weight:bold;\r\n  font-size:16px;\r\n}\r\n\r\n.footer-dark ul {\r\n  padding:0;\r\n  list-style:none;\r\n  line-height:1.6;\r\n  font-size:14px;\r\n  margin-bottom:0;\r\n}\r\n\r\n.footer-dark ul a {\r\n  color:inherit;\r\n  text-decoration:none;\r\n  opacity:0.6;\r\n}\r\n\r\n.footer-dark ul a:hover {\r\n  opacity:0.8;\r\n}\r\n\r\n@media (max-width:767px) {\r\n  .footer-dark .item:not(.social) {\r\n    text-align:center;\r\n    padding-bottom:20px;\r\n  }\r\n}\r\n\r\n.footer-dark .item.text {\r\n  margin-bottom:36px;\r\n}\r\n\r\n@media (max-width:767px) {\r\n  .footer-dark .item.text {\r\n    margin-bottom:0;\r\n  }\r\n}\r\n\r\n.footer-dark .item.text p {\r\n  opacity:0.6;\r\n  margin-bottom:0;\r\n}\r\n\r\n.footer-dark .item.social {\r\n  text-align:center;\r\n}\r\n\r\n@media (max-width:991px) {\r\n  .footer-dark .item.social {\r\n    text-align:center;\r\n    margin-top:20px;\r\n  }\r\n}\r\n\r\n.footer-dark .item.social > a {\r\n  font-size:20px;\r\n  width:36px;\r\n  height:36px;\r\n  line-height:36px;\r\n  display:inline-block;\r\n  text-align:center;\r\n  border-radius:50%;\r\n  box-shadow:0 0 0 1px rgba(255,255,255,0.4);\r\n  margin:0 8px;\r\n  color:#fff;\r\n  opacity:0.75;\r\n}\r\n\r\n.footer-dark .item.social > a:hover {\r\n  opacity:0.9;\r\n}\r\n\r\n.footer-dark .copyright {\r\n  text-align:center;\r\n  padding-top:24px; \r\n  opacity:0.3;\r\n  font-size:13px;\r\n  margin-bottom:0;\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./main.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactTab: () => (/* binding */ contactTab)\n/* harmony export */ });\nfunction contactTab () {\r\n  const contactPage = document.createElement('div');\r\n  contactPage.id = 'contact';\r\n  const contactTitle = document.createElement('h1');\r\n  contactTitle.textContent = 'Veni a visitarnos ';\r\n  contactPage.appendChild(contactTitle);\r\n  const contactDescription = document.createElement('p');\r\n  contactDescription.textContent = 'Estamos ubicados en [dirección del restaurante] y esperamos darte la bienvenida muy pronto. Reserva tu mesa ahora o pasa sin previo aviso. ¡Estamos listos para sorprenderte!';\r\n  contactPage.appendChild(contactDescription);\r\n\r\n  // Crear un contenedor para el iframe\r\n  const mapContainer = document.createElement('div');\r\n  mapContainer.style.display = 'flex';\r\n  mapContainer.style.justifyContent = 'center';\r\n  mapContainer.style.marginTop = '20px'; // Espaciado opcional\r\n\r\n  // Generar el iframe del mapa\r\n  const mapIframe = document.createElement('iframe');\r\n  mapIframe.src = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2199.5999406743404!2d-58.40515692468968!3d-34.581267731665534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8fe0d423dd%3A0x178f8021662e036b!2sLmzambrelli%20%26%20Co!5e0!3m2!1sen!2sar!4v1732813192753!5m2!1sen!2sar\";\r\n  mapIframe.width = \"600\";\r\n  mapIframe.height = \"450\";\r\n  mapIframe.style.border = \"0\";\r\n  mapIframe.allowFullscreen = true;\r\n  mapIframe.loading = \"lazy\";\r\n  mapIframe.referrerPolicy = \"no-referrer-when-downgrade\";\r\n\r\n  // Agregar el iframe al contenedor\r\n  mapContainer.appendChild(mapIframe);\r\n  contactPage.appendChild(mapContainer); // Agregar el contenedor a la página de contacto\r\n\r\n  document.getElementById('contenido').appendChild(contactPage);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeTab: () => (/* binding */ homeTab)\n/* harmony export */ });\n/* harmony import */ var _salonPanoramico_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salonPanoramico.jpg */ \"./src/salonPanoramico.jpg\");\n\r\n\r\nfunction homeTab () {\r\n  const homePage = document.createElement('div');\r\n  homePage.id = 'home';\r\n  const homeTitle = document.createElement('h1');\r\n  homeTitle.textContent = 'HOME';\r\n  homePage.appendChild(homeTitle);\r\n  const homeDescription = document.createElement('p');\r\n  homeDescription.textContent = '¡Descubre el sabor que transforma cada comida en una experiencia inolvidable! En [Nombre del Restaurante] ademas, combinamos ingredientes frescos, recetas únicas y un ambiente acogedor para ofrecerte lo mejor de la gastronomía.';\r\n  homePage.appendChild(homeDescription);\r\n  const imgResto = document.createElement(\"img\");\r\n  imgResto.src = _salonPanoramico_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n  imgResto.classList.add('home-image');\r\n  homePage.appendChild(imgResto);\r\n  document.getElementById('contenido').appendChild(homePage);\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\nconsole.log(\"prueba\");\r\n\r\n\r\n\r\n\r\n \r\ndocument.addEventListener('DOMContentLoaded', _home__WEBPACK_IMPORTED_MODULE_0__.homeTab);\r\ndocument.querySelectorAll('button').forEach(button => {\r\n  button.addEventListener('click', (e) => {\r\n    handleTabClick(e.target.id);\r\n  });\r\n});\r\n\r\nfunction handleTabClick(tabId) {\r\n  clearContent();\r\n  \r\n  switch(tabId) {\r\n    case 'home-btn':\r\n      (0,_home__WEBPACK_IMPORTED_MODULE_0__.homeTab)();\r\n      break;\r\n    case 'menu-btn':\r\n      (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuTab)();\r\n      break;\r\n    case 'contact-btn':\r\n      (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactTab)();\r\n      break;\r\n    default:\r\n      (0,_home__WEBPACK_IMPORTED_MODULE_0__.homeTab)();\r\n  }\r\n}\r\n\r\n//funcion para borrar el contenido de content antes de agregar el nuevo contenido\r\nfunction clearContent() {\r\n  document.getElementById('contenido').innerHTML = '';\r\n}\r\n\r\n// const contenido = document.getElementById('contenido');\r\n// if (contenido) {\r\n//   console.log('Content exists');\r\n//   console.log(getComputedStyle(contenido)); // Revisa los estilos aplicados\r\n// } else {\r\n//   console.error('Content not found!');\r\n// }\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuTab: () => (/* binding */ menuTab)\n/* harmony export */ });\n/* harmony import */ var _plates_pasta_al_pesto_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plates/pasta-al-pesto.jpg */ \"./src/plates/pasta-al-pesto.jpg\");\n/* harmony import */ var _plates_salmon_parilla_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plates/salmon-parilla.jpg */ \"./src/plates/salmon-parilla.jpg\");\n/* harmony import */ var _plates_risotto_hongos_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plates/risotto-hongos.jpg */ \"./src/plates/risotto-hongos.jpg\");\n/* harmony import */ var _plates_costillas_bbq_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plates/costillas-bbq.jpg */ \"./src/plates/costillas-bbq.jpg\");\n\r\n\r\n\r\n\r\n\r\nfunction menuTab () {\r\n  const menuPage = document.createElement('div');\r\n  menuPage.id = 'menu';\r\n  const menuTitle = document.createElement('h1');\r\n  menuTitle.textContent = 'Sabores que enamoran';\r\n  menuPage.appendChild(menuTitle);\r\n  const menuDescription = document.createElement('p');\r\n  menuDescription.textContent = 'Desde clásicos reinventados hasta platos contemporáneos, nuestro menú está diseñado para deleitar todos los paladares. Ya sea que busques un almuerzo rápido, una cena especial o un momento para compartir con amigos, encontrarás el platillo perfecto aquí.';\r\n  menuPage.appendChild(menuDescription);\r\n\r\n  //add plates may be a grid\r\n  const menuGrid = document.createElement('div');\r\n  menuGrid.classList.add('menu-grid');\r\n\r\n  const plate1 = document.createElement('div');\r\n  plate1.innerHTML = `\r\n    <img src=\"${_plates_pasta_al_pesto_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Pasta al Pesto\">\r\n    <h3>Pasta al Pesto</h3>\r\n    <p>Linguini artesanal con salsa pesto fresca, piñones tostados y parmesano añejo</p>\r\n    <p class=\"price\">$18.99</p>\r\n  `;\r\n\r\n  const plate2 = document.createElement('div');\r\n  plate2.innerHTML = `\r\n    <img src=\"${_plates_salmon_parilla_jpg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Salmón a la Parrilla\">\r\n    <h3>Salmón a la Parrilla</h3>\r\n    <p>Filete de salmón fresco con salsa de cítricos, servido con vegetales de temporada</p>\r\n    <p class=\"price\">$24.99</p>\r\n  `;\r\n\r\n  const plate3 = document.createElement('div');\r\n  plate3.innerHTML = `\r\n    <img src=\"${_plates_risotto_hongos_jpg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Risotto de Hongos\">\r\n    <h3>Risotto de Hongos</h3>\r\n    <p>Arroz arborio cremoso con variedad de hongos silvestres y trufa negra</p>\r\n    <p class=\"price\">$21.99</p>\r\n  `;\r\n\r\n  const plate4 = document.createElement('div');\r\n  plate4.innerHTML = `\r\n    <img src=\"${_plates_costillas_bbq_jpg__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Costillas BBQ\">\r\n    <h3>Costillas BBQ</h3>\r\n    <p>Costillas de cerdo cocidas a fuego lento con salsa barbacoa casera y puré de papas</p>\r\n    <p class=\"price\">$26.99</p>\r\n  `;\r\n\r\n  [plate1, plate2, plate3, plate4].forEach(plate => {\r\n    plate.classList.add('menu-item');\r\n    menuGrid.appendChild(plate);\r\n  });\r\n\r\n  menuPage.appendChild(menuGrid);\r\n  document.getElementById('contenido').appendChild(menuPage);\r\n\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/plates/costillas-bbq.jpg":
/*!**************************************!*\
  !*** ./src/plates/costillas-bbq.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e4ade6fcd75f9bfa309.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/plates/costillas-bbq.jpg?");

/***/ }),

/***/ "./src/plates/pasta-al-pesto.jpg":
/*!***************************************!*\
  !*** ./src/plates/pasta-al-pesto.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5be8f8e796c625232c86.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/plates/pasta-al-pesto.jpg?");

/***/ }),

/***/ "./src/plates/risotto-hongos.jpg":
/*!***************************************!*\
  !*** ./src/plates/risotto-hongos.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6ad87201e4067f2e68e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/plates/risotto-hongos.jpg?");

/***/ }),

/***/ "./src/plates/salmon-parilla.jpg":
/*!***************************************!*\
  !*** ./src/plates/salmon-parilla.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7079d634e28a3d5f9885.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/plates/salmon-parilla.jpg?");

/***/ }),

/***/ "./src/salonPanoramico.jpg":
/*!*********************************!*\
  !*** ./src/salonPanoramico.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dfa1dbfa2b0904b50e81.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/salonPanoramico.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;