"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ImpactLevel: () => (/* binding */ ImpactLevel),\n/* harmony export */   SCORE_RANGE: () => (/* binding */ SCORE_RANGE),\n/* harmony export */   TIME_CONSTRAINTS: () => (/* binding */ TIME_CONSTRAINTS),\n/* harmony export */   WheelOfLife: () => (/* binding */ WheelOfLife),\n/* harmony export */   isCompleteDecisionContext: () => (/* binding */ isCompleteDecisionContext),\n/* harmony export */   isValidImpactLevel: () => (/* binding */ isValidImpactLevel),\n/* harmony export */   isValidScore: () => (/* binding */ isValidScore),\n/* harmony export */   isValidWheelArea: () => (/* binding */ isValidWheelArea)\n/* harmony export */ });\n// src/types/index.ts\n/**\n * Represents the different life areas in the Wheel of Life framework\n */ var WheelOfLife = /*#__PURE__*/ function(WheelOfLife) {\n    WheelOfLife[\"CAREER\"] = \"Career_\";\n    WheelOfLife[\"FINANCE\"] = \"Finance\";\n    WheelOfLife[\"HEALTH\"] = \"Health_&_Wellness\";\n    WheelOfLife[\"RELATIONSHIPS\"] = \"Relationships\";\n    WheelOfLife[\"PERSONAL_GROWTH\"] = \"Personal_Growth\";\n    WheelOfLife[\"RECREATION\"] = \"Recreation\";\n    WheelOfLife[\"ENVIRONMENT\"] = \"Physical_Environment\";\n    WheelOfLife[\"SPIRITUALITY\"] = \"Spirituality_&_Purpose\";\n    return WheelOfLife;\n}({});\n/**\n * Represents the level of impact a decision has on each life area\n */ var ImpactLevel = /*#__PURE__*/ function(ImpactLevel) {\n    ImpactLevel[\"NONE\"] = \"none\";\n    ImpactLevel[\"LOW\"] = \"low\";\n    ImpactLevel[\"MEDIUM\"] = \"medium\";\n    ImpactLevel[\"HIGH\"] = \"high\";\n    ImpactLevel[\"CRITICAL\"] = \"critical\";\n    return ImpactLevel;\n}({});\n// Add validation helpers\nconst isValidScore = (score)=>{\n    return score >= 0 && score <= 10;\n};\nconst isValidImpactLevel = (level)=>{\n    return Object.values(ImpactLevel).includes(level);\n};\nconst isValidWheelArea = (area)=>{\n    return Object.values(WheelOfLife).includes(area);\n};\n// Add type guards\nconst isCompleteDecisionContext = (context)=>{\n    return !!(context.description && context.primaryArea && Array.isArray(context.secondaryAreas) && context.impactLevels && Object.keys(context.impactLevels).length > 0);\n};\n// Constants for validation\nconst SCORE_RANGE = {\n    MIN: 0,\n    MAX: 10\n};\nconst TIME_CONSTRAINTS = {\n    WEEKLY_HOURS_MAX: 168,\n    MONTHLY_HOURS_MAX: 744\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHlwZXMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUI7QUFDckI7O0NBRUMsR0FDTSx5Q0FBS0E7Ozs7Ozs7OztXQUFBQTtNQVNYO0FBRUQ7O0NBRUMsR0FDTSx5Q0FBS0M7Ozs7OztXQUFBQTtNQU1YO0FBMEVELHlCQUF5QjtBQUNsQixNQUFNQyxlQUFlLENBQUNDO0lBQ3pCLE9BQU9BLFNBQVMsS0FBS0EsU0FBUztBQUNsQyxFQUFFO0FBRUssTUFBTUMscUJBQXFCLENBQUNDO0lBQy9CLE9BQU9DLE9BQU9DLE1BQU0sQ0FBQ04sYUFBYU8sUUFBUSxDQUFDSDtBQUMvQyxFQUFFO0FBRUssTUFBTUksbUJBQW1CLENBQUNDO0lBQzdCLE9BQU9KLE9BQU9DLE1BQU0sQ0FBQ1AsYUFBYVEsUUFBUSxDQUFDRTtBQUMvQyxFQUFFO0FBRUYsa0JBQWtCO0FBQ1gsTUFBTUMsNEJBQTRCLENBQUNDO0lBQ3RDLE9BQU8sQ0FBQyxDQUNKQSxDQUFBQSxRQUFRQyxXQUFXLElBQ25CRCxRQUFRRSxXQUFXLElBQ25CQyxNQUFNQyxPQUFPLENBQUNKLFFBQVFLLGNBQWMsS0FDcENMLFFBQVFNLFlBQVksSUFDcEJaLE9BQU9hLElBQUksQ0FBQ1AsUUFBUU0sWUFBWSxFQUFFRSxNQUFNLEdBQUc7QUFFbkQsRUFBRTtBQUVGLDJCQUEyQjtBQUNwQixNQUFNQyxjQUFjO0lBQ3ZCQyxLQUFLO0lBQ0xDLEtBQUs7QUFDVCxFQUFXO0FBRUosTUFBTUMsbUJBQW1CO0lBQzVCQyxrQkFBa0I7SUFDbEJDLG1CQUFtQjtBQUN2QixFQUFXIiwic291cmNlcyI6WyIvVXNlcnMvaGFubmFoc2NoZWVyZnVsL2RlY2lzaW9uLWZyYW1ld29yay9zcmMvdHlwZXMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3R5cGVzL2luZGV4LnRzXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGRpZmZlcmVudCBsaWZlIGFyZWFzIGluIHRoZSBXaGVlbCBvZiBMaWZlIGZyYW1ld29ya1xuICovXG5leHBvcnQgZW51bSBXaGVlbE9mTGlmZSB7XG4gICAgQ0FSRUVSID0gJ0NhcmVlcl8nLFxuICAgIEZJTkFOQ0UgPSAnRmluYW5jZScsXG4gICAgSEVBTFRIID0gJ0hlYWx0aF8mX1dlbGxuZXNzJyxcbiAgICBSRUxBVElPTlNISVBTID0gJ1JlbGF0aW9uc2hpcHMnLFxuICAgIFBFUlNPTkFMX0dST1dUSCA9ICdQZXJzb25hbF9Hcm93dGgnLFxuICAgIFJFQ1JFQVRJT04gPSAnUmVjcmVhdGlvbicsXG4gICAgRU5WSVJPTk1FTlQgPSAnUGh5c2ljYWxfRW52aXJvbm1lbnQnLFxuICAgIFNQSVJJVFVBTElUWSA9ICdTcGlyaXR1YWxpdHlfJl9QdXJwb3NlJ1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGxldmVsIG9mIGltcGFjdCBhIGRlY2lzaW9uIGhhcyBvbiBlYWNoIGxpZmUgYXJlYVxuICovXG5leHBvcnQgZW51bSBJbXBhY3RMZXZlbCB7XG4gICAgTk9ORSA9ICdub25lJyxcbiAgICBMT1cgPSAnbG93JyxcbiAgICBNRURJVU0gPSAnbWVkaXVtJyxcbiAgICBISUdIID0gJ2hpZ2gnLFxuICAgIENSSVRJQ0FMID0gJ2NyaXRpY2FsJ1xufVxuXG5leHBvcnQgdHlwZSBNb250aGx5TWV0cmljcyA9IFJlY29yZDxzdHJpbmcsIG51bWJlcj47XG5leHBvcnQgdHlwZSBBbm51YWxNZXRyaWNzID0gUmVjb3JkPHN0cmluZywgbnVtYmVyPjtcblxuZXhwb3J0IHR5cGUgUXVlc3Rpb25SZXNwb25zZSA9IHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdO1xuZXhwb3J0IHR5cGUgUmVzcG9uc2VSZWNvcmQgPSBSZWNvcmQ8c3RyaW5nLCBRdWVzdGlvblJlc3BvbnNlPjtcblxuLy8gVXBkYXRlZCBpbnRlcmZhY2VzIHdpdGggbW9yZSBzcGVjaWZpYyB0eXBlcyBhbmQgZG9jdW1lbnRhdGlvblxuZXhwb3J0IGludGVyZmFjZSBEZWNpc2lvbkNvbnRleHQge1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcHJpbWFyeUFyZWE6IFdoZWVsT2ZMaWZlO1xuICAgIHNlY29uZGFyeUFyZWFzOiBXaGVlbE9mTGlmZVtdO1xuICAgIGltcGFjdExldmVsczogUmVjb3JkPFdoZWVsT2ZMaWZlLCBJbXBhY3RMZXZlbD47XG4gICAgY3JlYXRlZEF0PzogRGF0ZTsgLy8gT3B0aW9uYWw6IG1pZ2h0IGJlIHVzZWZ1bCBmb3IgdHJhY2tpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5hbmNpYWxNZXRyaWNzIHtcbiAgICBpbW1lZGlhdGU6IHtcbiAgICAgICAgY29zdHM6IG51bWJlcjtcbiAgICAgICAgaW5jb21lOiBudW1iZXI7XG4gICAgICAgIGludmVzdG1lbnRzOiBudW1iZXI7XG4gICAgfTtcbiAgICBvbmdvaW5nOiB7XG4gICAgICAgIG1vbnRobHk6IE1vbnRobHlNZXRyaWNzO1xuICAgICAgICBhbm51YWw6IEFubnVhbE1ldHJpY3M7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lTWV0cmljcyB7XG4gICAgaW1tZWRpYXRlOiB7XG4gICAgICAgIHNldHVwOiBudW1iZXI7XG4gICAgICAgIHRyYW5zaXRpb246IG51bWJlcjtcbiAgICB9O1xuICAgIG9uZ29pbmc6IHtcbiAgICAgICAgd2Vla2x5OiBudW1iZXI7XG4gICAgICAgIG1vbnRobHk6IG51bWJlcjtcbiAgICB9O1xuICAgIGR1cmF0aW9uOiBzdHJpbmc7IC8vIENvbnNpZGVyIG1ha2luZyB0aGlzIGFuIGVudW0gb3IgbW9yZSBzcGVjaWZpYyB0eXBlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VNZXRyaWNzIHtcbiAgICByZXF1aXJlZDogc3RyaW5nW107XG4gICAgYXZhaWxhYmxlOiBzdHJpbmdbXTtcbiAgICBnYXBzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RpdmVNZXRyaWNzIHtcbiAgICBmaW5hbmNpYWw6IEZpbmFuY2lhbE1ldHJpY3M7XG4gICAgdGltZTogVGltZU1ldHJpY3M7XG4gICAgcmVzb3VyY2VzOiBSZXNvdXJjZU1ldHJpY3M7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ViamVjdGl2ZU1ldHJpY3Mge1xuICAgIGN1cnJlbnRTdGF0ZTogUmVjb3JkPFdoZWVsT2ZMaWZlLCBudW1iZXI+O1xuICAgIHJlc3BvbnNlczogUmVzcG9uc2VSZWNvcmQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5hbHlzaXNSZXN1bHRzIHtcbiAgICBiYWxhbmNlU2NvcmU6IG51bWJlcjtcbiAgICBhbGlnbm1lbnRTY29yZTogbnVtYmVyO1xuICAgIHN1c3RhaW5hYmlsaXR5U2NvcmU6IG51bWJlcjtcbiAgICBvdmVyYWxsOiBudW1iZXI7XG4gICAgcmVjb21tZW5kYXRpb25zOiBzdHJpbmdbXTtcbiAgICB0aW1lc3RhbXA/OiBEYXRlOyAvLyBPcHRpb25hbDogbWlnaHQgYmUgdXNlZnVsIGZvciB0cmFja2luZ1xuICAgIGRldGFpbHM/OiB7XG4gICAgICAgIFtrZXkgaW4gV2hlZWxPZkxpZmVdPzoge1xuICAgICAgICAgICAgc2NvcmU6IG51bWJlcjtcbiAgICAgICAgICAgIGltcGFjdHM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IHN0cmluZ1tdO1xuICAgICAgICB9O1xuICAgIH07XG59XG5cbi8vIEFkZCB2YWxpZGF0aW9uIGhlbHBlcnNcbmV4cG9ydCBjb25zdCBpc1ZhbGlkU2NvcmUgPSAoc2NvcmU6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiBzY29yZSA+PSAwICYmIHNjb3JlIDw9IDEwO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzVmFsaWRJbXBhY3RMZXZlbCA9IChsZXZlbDogc3RyaW5nKTogbGV2ZWwgaXMgSW1wYWN0TGV2ZWwgPT4ge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKEltcGFjdExldmVsKS5pbmNsdWRlcyhsZXZlbCBhcyBJbXBhY3RMZXZlbCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZFdoZWVsQXJlYSA9IChhcmVhOiBzdHJpbmcpOiBhcmVhIGlzIFdoZWVsT2ZMaWZlID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhXaGVlbE9mTGlmZSkuaW5jbHVkZXMoYXJlYSBhcyBXaGVlbE9mTGlmZSk7XG59O1xuXG4vLyBBZGQgdHlwZSBndWFyZHNcbmV4cG9ydCBjb25zdCBpc0NvbXBsZXRlRGVjaXNpb25Db250ZXh0ID0gKGNvbnRleHQ6IFBhcnRpYWw8RGVjaXNpb25Db250ZXh0Pik6IGNvbnRleHQgaXMgRGVjaXNpb25Db250ZXh0ID0+IHtcbiAgICByZXR1cm4gISEoXG4gICAgICAgIGNvbnRleHQuZGVzY3JpcHRpb24gJiZcbiAgICAgICAgY29udGV4dC5wcmltYXJ5QXJlYSAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KGNvbnRleHQuc2Vjb25kYXJ5QXJlYXMpICYmXG4gICAgICAgIGNvbnRleHQuaW1wYWN0TGV2ZWxzICYmXG4gICAgICAgIE9iamVjdC5rZXlzKGNvbnRleHQuaW1wYWN0TGV2ZWxzKS5sZW5ndGggPiAwXG4gICAgKTtcbn07XG5cbi8vIENvbnN0YW50cyBmb3IgdmFsaWRhdGlvblxuZXhwb3J0IGNvbnN0IFNDT1JFX1JBTkdFID0ge1xuICAgIE1JTjogMCxcbiAgICBNQVg6IDEwXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgVElNRV9DT05TVFJBSU5UUyA9IHtcbiAgICBXRUVLTFlfSE9VUlNfTUFYOiAxNjgsIC8vIDI0ICogN1xuICAgIE1PTlRITFlfSE9VUlNfTUFYOiA3NDQsIC8vIDI0ICogMzFcbn0gYXMgY29uc3Q7Il0sIm5hbWVzIjpbIldoZWVsT2ZMaWZlIiwiSW1wYWN0TGV2ZWwiLCJpc1ZhbGlkU2NvcmUiLCJzY29yZSIsImlzVmFsaWRJbXBhY3RMZXZlbCIsImxldmVsIiwiT2JqZWN0IiwidmFsdWVzIiwiaW5jbHVkZXMiLCJpc1ZhbGlkV2hlZWxBcmVhIiwiYXJlYSIsImlzQ29tcGxldGVEZWNpc2lvbkNvbnRleHQiLCJjb250ZXh0IiwiZGVzY3JpcHRpb24iLCJwcmltYXJ5QXJlYSIsIkFycmF5IiwiaXNBcnJheSIsInNlY29uZGFyeUFyZWFzIiwiaW1wYWN0TGV2ZWxzIiwia2V5cyIsImxlbmd0aCIsIlNDT1JFX1JBTkdFIiwiTUlOIiwiTUFYIiwiVElNRV9DT05TVFJBSU5UUyIsIldFRUtMWV9IT1VSU19NQVgiLCJNT05USExZX0hPVVJTX01BWCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/types/index.ts\n"));

/***/ })

});