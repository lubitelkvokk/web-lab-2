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

/***/ "./content/index.ts":
/*!**************************!*\
  !*** ./content/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Validation_1 = __importDefault(__webpack_require__(/*! ./utils/Validation */ \"./content/utils/Validation.ts\"));\nconst ButtonsListening_1 = __webpack_require__(/*! ./specific_functions/ButtonsListening */ \"./content/specific_functions/ButtonsListening.ts\");\nconst SelectionResults_1 = __webpack_require__(/*! ./specific_functions/SelectionResults */ \"./content/specific_functions/SelectionResults.ts\");\nconst GraphClickCoordinates_1 = __importDefault(__webpack_require__(/*! ./utils/GraphClickCoordinates */ \"./content/utils/GraphClickCoordinates.ts\"));\nconst Table_1 = __webpack_require__(/*! ./specific_functions/Table */ \"./content/specific_functions/Table.ts\");\nlet timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;\n//Прослушивание кнопки X\n(0, ButtonsListening_1.xButtonsListening)();\n//Проверка на change Y\n(0, ButtonsListening_1.yTextListening)();\n//Проверка на change Y\n(0, ButtonsListening_1.rTextListening)();\n(0, GraphClickCoordinates_1.default)();\n(_a = document.querySelector(\"#form-submit\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", function () {\n    let validation_result = (0, Validation_1.default)((0, SelectionResults_1.getX)(), (0, SelectionResults_1.getY)(), (0, SelectionResults_1.getR)(), (0, SelectionResults_1.getXErrorField)(), (0, SelectionResults_1.getYErrorField)(), (0, SelectionResults_1.getRErrorField)());\n    if (validation_result) {\n        let x = parseFloat((0, SelectionResults_1.getX)().value);\n        let y = parseFloat((0, SelectionResults_1.getY)().value.slice(0, 13));\n        let r = parseFloat((0, SelectionResults_1.getR)().value.slice(0, 13));\n        (0, Table_1.getTable)(x, y, r);\n    }\n});\nfunction addRowToTable(html) {\n    document.querySelector(\"#hit-results\").innerHTML += html;\n}\n\n\n//# sourceURL=webpack://web-lab-2/./content/index.ts?");

/***/ }),

/***/ "./content/specific_functions/ButtonsListening.ts":
/*!********************************************************!*\
  !*** ./content/specific_functions/ButtonsListening.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.rTextListening = exports.yTextListening = exports.xButtonsListening = void 0;\nconst GraphClickCoordinates_1 = __webpack_require__(/*! ../utils/GraphClickCoordinates */ \"./content/utils/GraphClickCoordinates.ts\");\nconst SelectionResults_1 = __webpack_require__(/*! ./SelectionResults */ \"./content/specific_functions/SelectionResults.ts\");\nconst Validation_1 = __webpack_require__(/*! ../utils/Validation */ \"./content/utils/Validation.ts\");\nfunction xButtonsListening() {\n    const xButtons = document.querySelectorAll('input[name=\"xChoice\"]');\n    let selectedXButton = null;\n    xButtons.forEach(button => {\n        button.addEventListener('click', () => {\n            if (selectedXButton !== null) {\n                selectedXButton.classList.remove(\"active\");\n            }\n            // Здесь вставьте логику валидации для кнопок\n            selectedXButton = button;\n            button.classList.add(\"active\");\n            (0, GraphClickCoordinates_1.setXPointCoord)(parseFloat(button.value));\n        });\n    });\n}\nexports.xButtonsListening = xButtonsListening;\n// export function yTextListening() {\n//     const yText: HTMLInputElement | null= document.querySelector('input[name=\"yChoice\"]');\n//\n//     let selectedXButton: HTMLInputElement | null = null;\n//     xButtons.forEach(button => {\n//\n//         button.addEventListener('click', () => {\n//             if (selectedXButton !== null) {\n//                 selectedXButton.classList.remove(\"active\");\n//             }\n//             // Здесь вставьте логику валидации для кнопок\n//             selectedXButton = button;\n//             button.classList.add(\"active\");\n//         });\n//     });\n// }\nfunction yTextListening() {\n    const yText = document.querySelector('input[name=\"yChoice\"]');\n    yText === null || yText === void 0 ? void 0 : yText.addEventListener(\"change\", (event) => {\n        const value = parseFloat(event.target.value);\n        (0, GraphClickCoordinates_1.setYPointCoord)(value);\n    });\n}\nexports.yTextListening = yTextListening;\nfunction rTextListening() {\n    const rText = document.querySelector('input[name=\"rChoice\"]');\n    rText === null || rText === void 0 ? void 0 : rText.addEventListener(\"change\", (event) => {\n        let x = parseFloat((0, SelectionResults_1.getX)().value);\n        let y = parseFloat((0, SelectionResults_1.getY)().value);\n        if ((0, Validation_1.validateR)()) {\n            (0, GraphClickCoordinates_1.setXPointCoord)(x);\n            (0, GraphClickCoordinates_1.setYPointCoord)(y);\n        }\n    });\n}\nexports.rTextListening = rTextListening;\n// export function rButtonListening() {\n//     const rButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name=\"rChoice\"]');\n//\n//     let selectedRButton: HTMLInputElement | null = null;\n//     rButtons.forEach(button => {\n//\n//         button.addEventListener('click', () => {\n//             if (selectedRButton !== null) {\n//                 selectedRButton.classList.remove(\"active\");\n//             }\n//             // Здесь вставьте логику валидации для кнопок\n//             selectedRButton = button;\n//             button.classList.add(\"active\");\n//         });\n//\n//     });\n// }\n\n\n//# sourceURL=webpack://web-lab-2/./content/specific_functions/ButtonsListening.ts?");

/***/ }),

/***/ "./content/specific_functions/SelectionResults.ts":
/*!********************************************************!*\
  !*** ./content/specific_functions/SelectionResults.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getRErrorField = exports.getYErrorField = exports.getXErrorField = exports.getValue = exports.getR = exports.getY = exports.getX = void 0;\nfunction getX() {\n    const xButtons = document.querySelectorAll('input[name=\"xChoice\"]');\n    for (let x of xButtons) {\n        if (x.classList.contains(\"active\")) {\n            if (x.value) {\n                return x;\n            }\n        }\n    }\n    return document.createElement(\"input\");\n}\nexports.getX = getX;\nfunction getY() {\n    const y = document.querySelector('input[name=\"yChoice\"]');\n    return y !== null ? y : document.createElement(\"input\");\n}\nexports.getY = getY;\nfunction getR() {\n    const r = document.querySelector('input[name=\"rChoice\"]');\n    return r !== null ? r : document.createElement(\"input\");\n}\nexports.getR = getR;\nfunction getValue(element) {\n    return element.value;\n}\nexports.getValue = getValue;\nfunction getXErrorField() {\n    return document.querySelector(\"#x-error\");\n}\nexports.getXErrorField = getXErrorField;\nfunction getYErrorField() {\n    return document.querySelector(\"#y-error\");\n}\nexports.getYErrorField = getYErrorField;\nfunction getRErrorField() {\n    return document.querySelector(\"#r-error\");\n}\nexports.getRErrorField = getRErrorField;\n\n\n//# sourceURL=webpack://web-lab-2/./content/specific_functions/SelectionResults.ts?");

/***/ }),

/***/ "./content/specific_functions/Table.ts":
/*!*********************************************!*\
  !*** ./content/specific_functions/Table.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.updateTable = exports.getTable = void 0;\nfunction getTable(x, y, r) {\n    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;\n    // fetch(`http://localhost:8080/web-lab-2.1/controller?x=${x}&y=${y}&r=${r}&timeZone=${timeZone}`)\n    //     .then(response => response.text())\n    //     .then(data => {\n    //         updateTable(data);\n    //\n    //     })\n    //     .catch(reason => {\n    //         console.error(reason)\n    //     })\n    let myHeaders = new Headers();\n    myHeaders.append(\"Content-Type\", \"application/json\");\n    // myHeaders.append(\"Cookie\", \"JSESSIONID=-kYt2jtzNVYhPdRWSFFreeKLbleBN0-GbsoIvqQE.predator; Phpstorm-d2bc2213=f0b6a102-d3b3-4d9c-b2f1-c37a3a1558d9\");\n    let raw = JSON.stringify({\n        \"x\": x,\n        \"y\": y,\n        \"r\": r,\n        \"timeZone\": timeZone\n    });\n    fetch(\"http://localhost:8080/web-lab-2.1/controller\", {\n        method: 'POST',\n        headers: myHeaders,\n        body: raw,\n        redirect: 'follow'\n    })\n        .then(response => {\n        if (response.redirected) {\n            window.location.href = response.url;\n        }\n    })\n        .then(result => console.log(result))\n        .catch(error => console.log('error', error));\n}\nexports.getTable = getTable;\nfunction updateTable(html) {\n    document.querySelector('#hit-results').innerHTML = \"<tr>\\n\" +\n        \"                                                                <th>X</th>\\n\" +\n        \"                                                                <th>Y</th>\\n\" +\n        \"                                                                <th>R</th>\\n\" +\n        \"                                                                <th>Current time</th>\\n\" +\n        \"                                                                <th>Script runtime</th>\\n\" +\n        \"                                                                <th>Hit result</th>\\n\" +\n        \"                                                            </tr>\" + html;\n}\nexports.updateTable = updateTable;\n\n\n//# sourceURL=webpack://web-lab-2/./content/specific_functions/Table.ts?");

/***/ }),

/***/ "./content/utils/GraphClickCoordinates.ts":
/*!************************************************!*\
  !*** ./content/utils/GraphClickCoordinates.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setYPointCoord = exports.setXPointCoord = void 0;\nconst SelectionResults_1 = __webpack_require__(/*! ../specific_functions/SelectionResults */ \"./content/specific_functions/SelectionResults.ts\");\nconst Validation_1 = __webpack_require__(/*! ./Validation */ \"./content/utils/Validation.ts\");\nconst Table_1 = __webpack_require__(/*! ../specific_functions/Table */ \"./content/specific_functions/Table.ts\");\nconst graphRoom = document.querySelector(\".svg-graph\");\nfunction graphClickListener() {\n    graphRoom.addEventListener('mousedown', function (event) {\n        // cleanAllErrors();\n        let isValid = (0, Validation_1.validateR)();\n        if (isValid) {\n            if (graphRoom !== null) {\n                let window = graphRoom.getBoundingClientRect();\n                let x = event.clientX - (window.x + 150);\n                let y = (window.y + 150) - event.clientY;\n                [x, y] = pointScaling(x, y);\n                // setX(x);\n                setXPointCoord(x);\n                setYPointCoord(y);\n                // setY(y);\n                (0, Table_1.getTable)(x, y, parseFloat((0, SelectionResults_1.getValue)((0, SelectionResults_1.getR)()).slice(0, 13)));\n            }\n            else {\n                console.log(\"FIIIIIIREEEEE! RUUUUUN FOREST!\");\n            }\n        }\n    });\n}\nexports[\"default\"] = graphClickListener;\nfunction pointScaling(x, y) {\n    let r = parseFloat((0, SelectionResults_1.getValue)((0, SelectionResults_1.getR)()));\n    console.log(r);\n    if (!r) {\n    }\n    else {\n        let scale = r / 120; // because r in picture equals 60 pixels\n        x = scale * x;\n        y = scale * y;\n    }\n    return [x, y];\n}\n// На случай, если нужно устанавливать в поле X значение, полученное кликом по графику\nfunction setX(x) {\n    const xButtons = document.querySelectorAll('input[name=\"xChoice\"]');\n    let selectedXButton = document.querySelector(\"#x-2\");\n    let minDifference = 9999999999;\n    xButtons.forEach(button => {\n        if (button !== null) {\n            button.classList.remove(\"active\");\n        }\n        let difference = Math.abs((x - parseFloat(button.value)));\n        if (minDifference > difference) {\n            minDifference = difference;\n            selectedXButton = button;\n            setXPointCoord(parseFloat(selectedXButton.value));\n        }\n    });\n    if (selectedXButton != null) {\n        selectedXButton.classList.add(\"active\");\n    }\n}\nfunction setXPointCoord(x) {\n    let point = document.querySelector(\"#point\");\n    let pixelXCoord = 150 + x * 120 / parseFloat((0, SelectionResults_1.getR)().value);\n    if (point !== null) {\n        point.setAttribute(\"cx\", `${pixelXCoord}`);\n    }\n}\nexports.setXPointCoord = setXPointCoord;\n// На случай, если нужно устанавливать в поле Y значение, полученное кликом по графику\nfunction setY(y) {\n    let labelY = document.querySelector(\"#y\");\n    if (labelY !== null) {\n        labelY.value = String(y);\n        setYPointCoord(y);\n    }\n}\nfunction setYPointCoord(y) {\n    let point = document.querySelector(\"#point\");\n    let pixelYCoord = 150 - y * 120 / parseFloat((0, SelectionResults_1.getR)().value);\n    if (point !== null) {\n        point.setAttribute(\"cy\", `${pixelYCoord}`);\n    }\n}\nexports.setYPointCoord = setYPointCoord;\n\n\n//# sourceURL=webpack://web-lab-2/./content/utils/GraphClickCoordinates.ts?");

/***/ }),

/***/ "./content/utils/Validation.ts":
/*!*************************************!*\
  !*** ./content/utils/Validation.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.cleanAllErrors = exports.validateR = exports.validateInputElement = void 0;\nconst SelectionResults_1 = __webpack_require__(/*! ../specific_functions/SelectionResults */ \"./content/specific_functions/SelectionResults.ts\");\nfunction validation(x, y, r, xError, yError, rError) {\n    let isValid = true;\n    if (!xError || !yError || !rError) {\n        console.error(\"Some fields for errors not exists or access\");\n        isValid = false;\n    }\n    // Проверка X\n    if ((x === null || x === void 0 ? void 0 : x.value) == \"\") {\n        xError.textContent = \"Value X must be chosen\";\n        isValid = false;\n    }\n    else {\n        xError.textContent = \"\";\n    }\n    // Проверка y\n    if (y.value == \"\" || y == null) {\n        yError.textContent = \"Value Y must be chosen\";\n        isValid = false;\n    }\n    else {\n        let y_number = parseFloat(y.value.slice(0, 5));\n        // console.log(/^\\s*[0-9]+.?[0-9]*\\s*$/.test(y.value));\n        // console.log(!(/^\\s*[0-9]+.?[0-9]*\\s*$/.test(y.value)) || (y_number <= -5 || y_number >= 5))\n        if (!(/^\\s*-?[0-9]+\\.?[0-9]*\\s*$/.test(y.value)) || (y_number <= -5 || y_number >= 5)) {\n            yError.textContent = \"-5 < Y < 5\";\n            isValid = false;\n        }\n        else {\n            yError.textContent = \"\";\n        }\n    }\n    // Проверка R\n    if (r.value == \"\" || r == null) {\n        rError.textContent = \"Value R must be chosen\";\n        isValid = false;\n    }\n    else {\n        let r_number = parseFloat(r.value.slice(0, 5));\n        // console.log(/^\\s*[0-9]+.?[0-9]*\\s*$/.test(y.value));\n        // console.log(!(/^\\s*[0-9]+.?[0-9]*\\s*$/.test(r.value)) || (r_number <= 2 || r_number >= 5))\n        if (!(/^\\s*[0-9]+.?[0-9]*\\s*$/.test(r.value)) || (r_number <= 2 || r_number >= 5)) {\n            rError.textContent = \"2 < R < 5\";\n            isValid = false;\n        }\n        else {\n            rError.textContent = \"\";\n        }\n    }\n    return isValid;\n}\nexports[\"default\"] = validation;\nfunction validateInputElement(r, rError, lowerLimit, upperLimit) {\n    let isValid = true;\n    // Проверка R\n    if (r.value == \"\" || r == null) {\n        rError.textContent = `Value must be chosen`;\n        isValid = false;\n    }\n    else {\n        let r_number = parseFloat(r.value.slice(0, 5));\n        // console.log(/^\\s*[0-9]+.?[0-9]*\\s*$/.test(y.value));\n        // console.log(!(/^\\s*[0-9]+.?[0-9]*\\s*$/.test(r.value)) || (r_number <= 2 || r_number >= 5))\n        if (!(/^\\s*[0-9]+.?[0-9]*\\s*$/.test(r.value)) || (r_number <= lowerLimit || r_number >= upperLimit)) {\n            rError.textContent = `${lowerLimit} < R < ${upperLimit}`;\n            isValid = false;\n        }\n        else {\n            rError.textContent = \"\";\n        }\n    }\n    return isValid;\n}\nexports.validateInputElement = validateInputElement;\nfunction validateR() {\n    return validateInputElement(document.querySelector(\"#r\"), (0, SelectionResults_1.getRErrorField)(), 2, 5);\n}\nexports.validateR = validateR;\nfunction cleanAllErrors() {\n    let x_error = (0, SelectionResults_1.getXErrorField)();\n    let y_error = (0, SelectionResults_1.getYErrorField)();\n    let r_error = (0, SelectionResults_1.getRErrorField)();\n    console.log(y_error.textContent);\n    if (x_error !== null) {\n        x_error.textContent = \"\";\n    }\n    if (y_error !== null) {\n        y_error.textContent = \"\";\n    }\n    if (r_error !== null) {\n        r_error.textContent = \"\";\n    }\n}\nexports.cleanAllErrors = cleanAllErrors;\n\n\n//# sourceURL=webpack://web-lab-2/./content/utils/Validation.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./content/index.ts");
/******/ 	
/******/ })()
;