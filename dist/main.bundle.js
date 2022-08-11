(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/Vogue.ttf */ "./src/fonts/Vogue.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/Profile.ttf */ "./src/fonts/Profile.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: vogue;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: profile;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n:root {\n    --baby-pink: #f2ccc3;\n    --greyblack: rgb(110, 110, 110);\n    --yellow-green: #CBE896;\n    --shipgold: #ae8e1c;\n    --violet-red: #c52184;\n    --carribean: #0dc090;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Times New Roman', Times, serif;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: red;\n}\n\n#container {\n    background-color: rgb(255, 0, 0);\n  \n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    padding: 0 15px 0 15px;\n    \n    position: relative;\n    min-width: 1050px;\n    max-width: 1300px;\n}\n\n#header {\n    box-sizing: border-box;\n    width: 100%;\n    display: flex;\n    gap: 10px;\n    padding: 40px 0px 10px 0px;\n    align-items: flex-end;\n    position: relative;\n}\n\n#header>h1 {\n    font-family: vogue, sans-serif;\n    font-size: 4rem;\n    margin: 0;\n    font-weight: lighter;\n}\n\n#header>h3 {\n    font-family: 'Times New Roman', Times, serif;\n    font-weight: lighter;\n    font-size: 2rem;\n    margin: 0;\n    padding-bottom: 5px;\n}\n\n#headerbtnbox {\n    position: absolute;\n    right: 0px;\n    top: 30%;\n    display: flex;\n    align-items: flex-start;\n    gap: 5px;\n    background-color: transparent;\n    height: 100%;\n    z-index: 2;\n}\n\n#colorbtn {\n    position: relative;\n    font-family: profile, serif;\n    font-size: 2.5rem;\n}\n\n#creditsbtn {\n    position: relative;\n    font-size: 2.5rem;\n    align-self: flex-start;\n    text-align: end;\n    height: 4rem;\n    overflow: hidden;\n    width: 8.5rem;\n    white-space: nowrap;\n}\n\n#creditsbtn:hover {\n    height: 16rem;\n    background-color: rgba(255, 255, 255, 0.753);\n    width: 37rem;\n    backdrop-filter: blur(1px); \n}\n\n#gridscontainer {\n    box-sizing: border-box;\n    display: grid;\n    grid-template-columns: auto auto auto;\n    justify-content: center;\n    align-items: center;\n    column-gap: 20px;\n    background-color: var(--baby-pink);\n    margin: 25px 0 25px 0;\n    padding: 30px 0 30px 0;\n    border-radius: 15px;\n    z-index: 1;\n    position: relative;\n}\n\n#gridscontainer>h2 {\n    font-weight: lighter;\n    text-align: center;\n    margin: 0 0 15px 0;\n}\n\n#gridscontainer>#separator {\n    width: 14px;\n    height: 85%;\n    background-color: rgba(0, 0, 0, 0.294);\n    border-radius: 25px;\n}\n\n#iconbox {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    left: 0;\n    top: 28px;\n    height: 100%;\n    width: 85px;\n    align-items: center;\n    justify-content: center;\n}\n\n#iconbox>img {\n    height: 40px;\n    image-rendering: pixelated;\n    image-rendering: -moz-crisp-edges;\n    image-rendering: crisp-edges;\n    transition: all 0.4s;\n}\n\n#iconbox>img:hover {\n    height: 70px;\n}\n\n#iconname {\n    transform: rotate(-90deg) translate(50%, 0);\n    font-size: 1.5rem;\n}\n\n#icondmg {\n    transform: rotate(-90deg) translate(-50%, 0px);\n    font-size: 1.5rem;\n}\n\n#board, #comboard, #targetgrid, #comtargetgrid {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    background-color: transparent;\n    gap: 4px;\n    border: 4px solid transparent;\n    width: 400px;\n    height: 400px;\n}\n\n#comboard, #comtargetgrid {\n    display: none;\n    aspect-ratio: initial;\n}\n\n.cell {\n    background-color: #120309;\n    transition: all 0.4s;\n    border-radius: 10px;\n}\n\n.shipghost {\n    background-color: var(--shipgold);\n}\n\n.illegal {\n    background-color: var(--violet-red);\n}\n\n.targetcell {\n    background-color: black;\n    transition: background-color 0.5s, border-radius 0.3s, margin 0.3s;\n    border-radius: 10px;\n}\n\n.targetcell:hover {\n    background-color: var(--carribean);\n}\n\n.ship {\n    background-color: teal !important;\n    border-radius: 5px !important;\n}\n\n.hit {\n    background-color: red !important;\n    border-radius: 5px;\n}\n\n.sunkenship {\n    background-color: teal !important;\n}\n\n.miss {\n    background-color: rgba(0, 0, 0, 0.294) !important;\n    border-radius: 50px;\n    margin: 14px;\n}\n\n.highlighted {\n    background-color: rgb(2, 70, 70) !important;\n    border-radius: 5px !important;\n    box-sizing: border-box;\n    margin: -5px;\n}\n\n#infobox {\n    flex-grow: 1;\n    display: flex;\n    margin-bottom: 15px;\n    align-items: flex-end;\n    overflow: hidden;\n}\n\n#btnbox {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    position: relative;\n    height: 100%;\n    align-items: center;\n}\n\n#scorebox {\n    position: absolute;\n    right: 20%;\n    top: 20%;\n}\n\n#score {\n    font-family: 'Times New Roman', Times, serif;\n    font-weight: bolder;\n    font-size: 10rem;\n}\n\n#btnbox>h2 {\n    position: absolute;\n    font-size: 6.5rem;\n    font-family: Vogue, serif;\n    font-weight: lighter;\n    margin: 0;\n    color: white;\n}\n\n#btnbox>h3 {\n    font-family: vogue, serif;\n    font-size: 1.9rem;\n    margin: 0;\n    position: absolute;\n    bottom: 0;\n    left: 145px;\n\n}\n\nbutton {\n    background-color: black;\n    color: white;\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 2rem;\n    border: none;\n    border-radius: 15px;\n    padding: 10px;\n    position: absolute;\n    transition: all 0.4s;\n}\n\nbutton:hover {\n    background-color: white;\n    color: black;\n    border-radius: 0px;\n    padding-left: 40px;\n    padding-right: 20px;\n}\n\nbutton:active {\n    background-color: teal;\n}\n\n#resetbtn {\n    bottom: 0;\n    left: 0;\n    transform-origin: top left;\n    transform: rotate(-90deg) translate(-58px, 80px);\n}\n\n#directionbtn {\n    bottom: 0;\n    left: 0;\n    transform-origin: top left;\n    transform: rotate(-90deg) translate(-58px, 15px);\n}\n\n#capbox, #girlbox {\n    \n    position: relative;\n    flex-grow: 1;\n    border-radius: 15px;\n}\n\n#capbox {\n    overflow: hidden;\n    height: 100%;\n}\n\n#girlbox {\n    height: 50%;\n    background-color: var(--baby-pink);\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-evenly;\n}\n\n#capimg, #girlimg {\n    position: absolute;\n}\n\n#capimg {\n    height: 400px;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: -150px;\n}\n\n#girlimg {\n    right: 50%;\n    transform: translate(50%);\n    bottom: 0;\n    height: 260px;\n    filter: grayscale(100%);\n    transition: filter 0.4s;\n}\n\n.girlglad {\n    animation: girlglad 0.6s;\n}\n\n.girlmad {\n    animation: girlmad 0.4s 2;\n}\n\n.girldef {\n    animation: girldef 0.4s;\n}\n\n.girlcolor {\n    filter: grayscale(0%) !important;\n}\n\n\n@keyframes girlglad {\n    0% {transform: translateX(50%) translateY(0px)}\n    25% {transform: translateX(50%) translateY(-35px)}\n    50% {transform: translateX(50%) translateY(0px)}\n    75% {transform: translateX(50%) translateY(-10px)}\n    100% {transform: translateX(50%) translateY(0px)}\n}\n\n@keyframes girlmad {\n    0% {transform: translateX(50%) translateY(0px)}\n    30% {transform: translateX(50%) translateY(10px)}\n    50% {transform: translateX(45%) translateY(20px)}\n    75% {transform: translateX(55%) translateY(30px)}\n    100% {transform: translateX(50%) translateY(0px)}\n}\n\n@keyframes girldef {\n    0% {transform: translate(50%, 0px) rotate(0deg);}\n    50% {transform: translate(45%, 10px) rotate(-10deg);}\n    100% {transform: translate(50%, 0px) rotate(0deg);}\n\n}\n\n.capani {\n    animation: capani 0.4s;\n}\n\n@keyframes capani {\n    0% {transform: translate(-50%, 0px)}\n    65% {transform: translate(-50%, 10px)}\n    100% {transform: translate(-50%, 0px)}\n}\n\n.gridshake {\n    animation: gridshake 0.5s;\n}\n\n@keyframes gridshake {\n    0% {transform: scale(100%) rotate(0deg);\n        filter: drop-shadow(0px 0px 7px black)}\n    25% {transform: scale(103%) rotate(7deg); \n        filter: drop-shadow(0px 7px 7px black)}\n    50% {transform: scale(105%) rotate(-3deg);\n        filter: drop-shadow(0px 15px 7px black)}\n    100% {transform: scale(100%) rotate(0deg);\n        filter: drop-shadow(0px 0px 7px black)}\n}\n\n#gameoverpanel {\n    position: absolute;\n    left: 50%;\n    top: 55%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    pointer-events: none;\n}\n\n#gamestatus {\n    font-family: Vogue, serif;\n    font-size: 13rem;\n    font-weight: bolder;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.466);\n    padding: 40px 40px 0px 40px;\n    filter: opacity(0);\n    /* backdrop-filter: blur(0px); */\n    border-radius: 15px;\n    pointer-events: none;\n}\n\n#gamestatus.panelshown {\n    animation: gamestatus 3s;\n    filter: opacity(1);\n}\n\n@keyframes gamestatus {\n    from {filter: opacity(0);}\n    to {filter: opacity(1);}\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: vogue;\n    src: url('/src/fonts/Vogue.ttf');\n}\n\n@font-face {\n    font-family: profile;\n    src: url('/src/fonts/Profile.ttf');\n}\n\n:root {\n    --baby-pink: #f2ccc3;\n    --greyblack: rgb(110, 110, 110);\n    --yellow-green: #CBE896;\n    --shipgold: #ae8e1c;\n    --violet-red: #c52184;\n    --carribean: #0dc090;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Times New Roman', Times, serif;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: red;\n}\n\n#container {\n    background-color: rgb(255, 0, 0);\n  \n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    padding: 0 15px 0 15px;\n    \n    position: relative;\n    min-width: 1050px;\n    max-width: 1300px;\n}\n\n#header {\n    box-sizing: border-box;\n    width: 100%;\n    display: flex;\n    gap: 10px;\n    padding: 40px 0px 10px 0px;\n    align-items: flex-end;\n    position: relative;\n}\n\n#header>h1 {\n    font-family: vogue, sans-serif;\n    font-size: 4rem;\n    margin: 0;\n    font-weight: lighter;\n}\n\n#header>h3 {\n    font-family: 'Times New Roman', Times, serif;\n    font-weight: lighter;\n    font-size: 2rem;\n    margin: 0;\n    padding-bottom: 5px;\n}\n\n#headerbtnbox {\n    position: absolute;\n    right: 0px;\n    top: 30%;\n    display: flex;\n    align-items: flex-start;\n    gap: 5px;\n    background-color: transparent;\n    height: 100%;\n    z-index: 2;\n}\n\n#colorbtn {\n    position: relative;\n    font-family: profile, serif;\n    font-size: 2.5rem;\n}\n\n#creditsbtn {\n    position: relative;\n    font-size: 2.5rem;\n    align-self: flex-start;\n    text-align: end;\n    height: 4rem;\n    overflow: hidden;\n    width: 8.5rem;\n    white-space: nowrap;\n}\n\n#creditsbtn:hover {\n    height: 16rem;\n    background-color: rgba(255, 255, 255, 0.753);\n    width: 37rem;\n    backdrop-filter: blur(1px); \n}\n\n#gridscontainer {\n    box-sizing: border-box;\n    display: grid;\n    grid-template-columns: auto auto auto;\n    justify-content: center;\n    align-items: center;\n    column-gap: 20px;\n    background-color: var(--baby-pink);\n    margin: 25px 0 25px 0;\n    padding: 30px 0 30px 0;\n    border-radius: 15px;\n    z-index: 1;\n    position: relative;\n}\n\n#gridscontainer>h2 {\n    font-weight: lighter;\n    text-align: center;\n    margin: 0 0 15px 0;\n}\n\n#gridscontainer>#separator {\n    width: 14px;\n    height: 85%;\n    background-color: rgba(0, 0, 0, 0.294);\n    border-radius: 25px;\n}\n\n#iconbox {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    left: 0;\n    top: 28px;\n    height: 100%;\n    width: 85px;\n    align-items: center;\n    justify-content: center;\n}\n\n#iconbox>img {\n    height: 40px;\n    image-rendering: pixelated;\n    image-rendering: -moz-crisp-edges;\n    image-rendering: crisp-edges;\n    transition: all 0.4s;\n}\n\n#iconbox>img:hover {\n    height: 70px;\n}\n\n#iconname {\n    transform: rotate(-90deg) translate(50%, 0);\n    font-size: 1.5rem;\n}\n\n#icondmg {\n    transform: rotate(-90deg) translate(-50%, 0px);\n    font-size: 1.5rem;\n}\n\n#board, #comboard, #targetgrid, #comtargetgrid {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    background-color: transparent;\n    gap: 4px;\n    border: 4px solid transparent;\n    width: 400px;\n    height: 400px;\n}\n\n#comboard, #comtargetgrid {\n    display: none;\n    aspect-ratio: initial;\n}\n\n.cell {\n    background-color: #120309;\n    transition: all 0.4s;\n    border-radius: 10px;\n}\n\n.shipghost {\n    background-color: var(--shipgold);\n}\n\n.illegal {\n    background-color: var(--violet-red);\n}\n\n.targetcell {\n    background-color: black;\n    transition: background-color 0.5s, border-radius 0.3s, margin 0.3s;\n    border-radius: 10px;\n}\n\n.targetcell:hover {\n    background-color: var(--carribean);\n}\n\n.ship {\n    background-color: teal !important;\n    border-radius: 5px !important;\n}\n\n.hit {\n    background-color: red !important;\n    border-radius: 5px;\n}\n\n.sunkenship {\n    background-color: teal !important;\n}\n\n.miss {\n    background-color: rgba(0, 0, 0, 0.294) !important;\n    border-radius: 50px;\n    margin: 14px;\n}\n\n.highlighted {\n    background-color: rgb(2, 70, 70) !important;\n    border-radius: 5px !important;\n    box-sizing: border-box;\n    margin: -5px;\n}\n\n#infobox {\n    flex-grow: 1;\n    display: flex;\n    margin-bottom: 15px;\n    align-items: flex-end;\n    overflow: hidden;\n}\n\n#btnbox {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    position: relative;\n    height: 100%;\n    align-items: center;\n}\n\n#scorebox {\n    position: absolute;\n    right: 20%;\n    top: 20%;\n}\n\n#score {\n    font-family: 'Times New Roman', Times, serif;\n    font-weight: bolder;\n    font-size: 10rem;\n}\n\n#btnbox>h2 {\n    position: absolute;\n    font-size: 6.5rem;\n    font-family: Vogue, serif;\n    font-weight: lighter;\n    margin: 0;\n    color: white;\n}\n\n#btnbox>h3 {\n    font-family: vogue, serif;\n    font-size: 1.9rem;\n    margin: 0;\n    position: absolute;\n    bottom: 0;\n    left: 145px;\n\n}\n\nbutton {\n    background-color: black;\n    color: white;\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 2rem;\n    border: none;\n    border-radius: 15px;\n    padding: 10px;\n    position: absolute;\n    transition: all 0.4s;\n}\n\nbutton:hover {\n    background-color: white;\n    color: black;\n    border-radius: 0px;\n    padding-left: 40px;\n    padding-right: 20px;\n}\n\nbutton:active {\n    background-color: teal;\n}\n\n#resetbtn {\n    bottom: 0;\n    left: 0;\n    transform-origin: top left;\n    transform: rotate(-90deg) translate(-58px, 80px);\n}\n\n#directionbtn {\n    bottom: 0;\n    left: 0;\n    transform-origin: top left;\n    transform: rotate(-90deg) translate(-58px, 15px);\n}\n\n#capbox, #girlbox {\n    \n    position: relative;\n    flex-grow: 1;\n    border-radius: 15px;\n}\n\n#capbox {\n    overflow: hidden;\n    height: 100%;\n}\n\n#girlbox {\n    height: 50%;\n    background-color: var(--baby-pink);\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-evenly;\n}\n\n#capimg, #girlimg {\n    position: absolute;\n}\n\n#capimg {\n    height: 400px;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: -150px;\n}\n\n#girlimg {\n    right: 50%;\n    transform: translate(50%);\n    bottom: 0;\n    height: 260px;\n    filter: grayscale(100%);\n    transition: filter 0.4s;\n}\n\n.girlglad {\n    animation: girlglad 0.6s;\n}\n\n.girlmad {\n    animation: girlmad 0.4s 2;\n}\n\n.girldef {\n    animation: girldef 0.4s;\n}\n\n.girlcolor {\n    filter: grayscale(0%) !important;\n}\n\n\n@keyframes girlglad {\n    0% {transform: translateX(50%) translateY(0px)}\n    25% {transform: translateX(50%) translateY(-35px)}\n    50% {transform: translateX(50%) translateY(0px)}\n    75% {transform: translateX(50%) translateY(-10px)}\n    100% {transform: translateX(50%) translateY(0px)}\n}\n\n@keyframes girlmad {\n    0% {transform: translateX(50%) translateY(0px)}\n    30% {transform: translateX(50%) translateY(10px)}\n    50% {transform: translateX(45%) translateY(20px)}\n    75% {transform: translateX(55%) translateY(30px)}\n    100% {transform: translateX(50%) translateY(0px)}\n}\n\n@keyframes girldef {\n    0% {transform: translate(50%, 0px) rotate(0deg);}\n    50% {transform: translate(45%, 10px) rotate(-10deg);}\n    100% {transform: translate(50%, 0px) rotate(0deg);}\n\n}\n\n.capani {\n    animation: capani 0.4s;\n}\n\n@keyframes capani {\n    0% {transform: translate(-50%, 0px)}\n    65% {transform: translate(-50%, 10px)}\n    100% {transform: translate(-50%, 0px)}\n}\n\n.gridshake {\n    animation: gridshake 0.5s;\n}\n\n@keyframes gridshake {\n    0% {transform: scale(100%) rotate(0deg);\n        filter: drop-shadow(0px 0px 7px black)}\n    25% {transform: scale(103%) rotate(7deg); \n        filter: drop-shadow(0px 7px 7px black)}\n    50% {transform: scale(105%) rotate(-3deg);\n        filter: drop-shadow(0px 15px 7px black)}\n    100% {transform: scale(100%) rotate(0deg);\n        filter: drop-shadow(0px 0px 7px black)}\n}\n\n#gameoverpanel {\n    position: absolute;\n    left: 50%;\n    top: 55%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    pointer-events: none;\n}\n\n#gamestatus {\n    font-family: Vogue, serif;\n    font-size: 13rem;\n    font-weight: bolder;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.466);\n    padding: 40px 40px 0px 40px;\n    filter: opacity(0);\n    /* backdrop-filter: blur(0px); */\n    border-radius: 15px;\n    pointer-events: none;\n}\n\n#gamestatus.panelshown {\n    animation: gamestatus 3s;\n    filter: opacity(1);\n}\n\n@keyframes gamestatus {\n    from {filter: opacity(0);}\n    to {filter: opacity(1);}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/animate.js":
/*!************************!*\
  !*** ./src/animate.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animate": () => (/* binding */ animate),
/* harmony export */   "animateCap": () => (/* binding */ animateCap),
/* harmony export */   "hideMessage": () => (/* binding */ hideMessage),
/* harmony export */   "shakeGrid": () => (/* binding */ shakeGrid),
/* harmony export */   "showEndGame": () => (/* binding */ showEndGame)
/* harmony export */ });


const girlImg = document.getElementById('girlimg');
const capImg = document.getElementById('capimg');
const gridBox = document.getElementById('gridscontainer');

let lastShip = 'battleship';

//Switch the ship girl to the relevant image, and then animate her.
const animate = (ship, mood) => {
    lastShip = ship.shipName;

    const nick = ship.shipName.slice(0, 3);
    girlImg.src = __webpack_require__("./src/images sync recursive ^\\.\\/.*\\-.*\\.png$")(`./${nick}-${mood}.png`);

    const classChoice =  `girl${mood}`;

    //Animate the ship girl.
    girlImg.classList.remove('girldef');
    girlImg.classList.remove('girlmad');
    girlImg.classList.remove('girlglad');
    
    void girlImg.offsetWidth;
    girlImg.classList.add(classChoice);
    
}
//Animate the captain.
const animateCap = (mood) => {

    capImg.src = __webpack_require__("./src/images sync recursive ^\\.\\/cap\\-.*\\.png$")(`./cap-${mood}.png`);
    
    capImg.classList.remove('capani');
    void capImg.offsetWidth;
    capImg.classList.add('capani');
}

//Shake the grids violently.
const shakeGrid = () => {
    gridBox.classList.remove('gridshake');
    void gridBox.offsetWidth;
    gridBox.classList.add('gridshake');
}


//Animate ship girl on click.
girlImg.addEventListener('click', () => {
        //Reset ship girl animation.
        girlImg.classList.remove('girldef');
        girlImg.classList.remove('girlmad');
        girlImg.classList.remove('girlglad');
        
        void girlImg.offsetWidth;

        //Play a random mood animations.
        const moods = ['def', 'glad', 'mad'];
        const randMood = moods[Math.floor(Math.random() * 3)];
        const nick = lastShip.slice(0, 3);
        girlImg.src = __webpack_require__("./src/images sync recursive ^\\.\\/.*\\-.*\\.png$")(`./${nick}-${randMood}.png`);
 
        girlImg.classList.add(`girl${randMood}`);
});

//Toggle greyscale on shipgirls.
const colorBtn = document.getElementById('colorbtn');
colorBtn.addEventListener('click', () => {
    girlImg.classList.toggle('girlcolor');
})

const showEndGame = (message) => {
    const endMessage = document.getElementById('gamestatus');

    endMessage.classList.add('panelshown');
    endMessage.innerText = ''

    //Display each letter of the message one by one.
    var i = 0;            
    function myLoop() {         
        setTimeout(function() {   
            console.log('hello');   
            endMessage.innerText += message[i];
            i++;
            if (i < message.length) {          
                myLoop();           
            }                       
        }, 400)
    }
    myLoop(); 
}

const hideMessage = () => {
    const endMessage = document.getElementById('gamestatus');
    endMessage.classList.remove('panelshown');
}

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ "./src/animate.js");

;

//Board state object with data for hit cells, and ships within those cells.
const BoardState = (() => {
    
    //Initialize default 100 cells representing the game board.
    let cells = [];
    for (let i = 0; i < 100; i++) {
        cells[i] = null;
    }

    //Initialize default 100 cells representing the game board.
    let comCells = [];
    for (let i = 0; i < 100; i++) {
        comCells[i] = null;
    }

    const resetCells = () => {
        for (let i = 0; i < 100; i++) {
            cells[i] = null;
        }
        for (let i = 0; i < 100; i++) {
            comCells[i] = null;
        }
    }

    return {cells, comCells, resetCells}
})();

//Object for most game logic and displaying boards and target grids.
const Gameboard = (() => {
    const boardBox = document.getElementById('board');
    const comBoardBox = document.getElementById('comboard');

    const targetGrid = document.getElementById('targetgrid');
    const comTargetGrid = document.getElementById('comtargetgrid');

    let cells = boardBox.children;
    const comCells = comBoardBox.children;

    const targetCells = targetGrid.children;
    const comTargetCells =  comTargetGrid.children;

    const dirButton = document.getElementById('directionbtn');
    const dirDisplay = document.getElementById('direction'); 

    const resetButton = document.getElementById('resetbtn');
    
    let offset = 1;
    let legalMove = true;
    let playerShipSpaces = [];
    let comShipSpaces = [];
    let lastGhost;
    let initialSetup = true;
    let initialCombat = true;

    let chosenCells = [];
    let score = 0;
    let shipIndex = 0;
    let gameOver = false;

    //Reset game on click.
    resetButton.addEventListener('click', () => {
        BoardState.resetCells();
        offset = 1;
        legalMove = true;
        playerShipSpaces = [];
        comShipSpaces = [];
        dirDisplay.innerText = 'Horizontal';

        //Reset AI logic variables.
        lastFound = null;
        chosenCells = [];
        comChosenCells = [];
        lastChoiceHit = false;
        testOffset = 1;
        horChecked = false;
        topChecked = false;
        shipIndex = 0;
        gameOver = false;


        resetGrid(cells);
        resetGrid(comCells);
        resetGrid(targetCells);
        resetGrid(comTargetCells);

        (0,_animate__WEBPACK_IMPORTED_MODULE_0__.shakeGrid)();
        (0,_animate__WEBPACK_IMPORTED_MODULE_0__.hideMessage)();

        //Remove event listeners from target cells.
        for (let i = 0; i < targetCells.length; i++) {
            targetCells[i].replaceWith(targetCells[i].cloneNode(true));
        }
    });

    //Add toggle for ship placement direction.
    dirButton.addEventListener('click', () => {
        if (offset === 1) {
            offset = 10;
            dirDisplay.innerText = 'Vertical';
        } else if (offset === 10){
            offset = 1;
            dirDisplay.innerText = 'Horizontal';
        }
    });

    //Add toggle on orientation on right click.
    window.addEventListener('contextmenu', (event) => {
        //Prevent showing context menu on right click.
        event.preventDefault();
    
        //Remove previous ship ghost.
        Array.from(cells).forEach(cell => {
            cell.classList.remove('shipghost');
        });
        
        //Toggle offset and redraw ship ghost.
        if (offset === 1) {
            offset = 10;
            dirDisplay.innerText = 'Vertical';
        } else if (offset === 10){
            offset = 1;
            dirDisplay.innerText = 'Horizontal';
        }
        hideGhost(cells);
        ghostShip(lastGhost[0], lastGhost[1], offset, lastGhost[3]);
    });



    //Reset grid to inital state.
    const resetGrid = (grid) => {
        Array.from(grid).forEach(cell => {
            if (cell.classList.contains('cell')) {
                cell.className = 'cell';
            } else if (cell.classList.contains('targetcell')) {
                cell.className = 'targetcell';
            }
        });
    }

    //Draw a 10 x 10 grid for ships.
    const drawBoard = () => {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            boardBox.appendChild(cell);            
        }
    }

    //Draw a 10 x 10 grid for computer ships.
    const drawComBoard = () => {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            comBoardBox.appendChild(cell);            
        }
    }

    //Draw a 10 x 10 grid for targeting the computer.
    const drawTargetGrid = () => {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.classList.add('targetcell');
            targetGrid.appendChild(cell);            
        }
    }
    
    //Draw a 10 x 10 grid for the computer targeting the player.
    const drawComTargetGrid = () => {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.classList.add('targetcell');
            comTargetGrid.appendChild(cell);            
        }
    }

    const updateScore  = () => {
        const scoreDisplay = document.getElementById('score');

        score++;
        scoreDisplay.innerText = score;
    }

    //Place a ship based on offset, index, and ship length.
    const placeShip = (ship, index, currentPlayer, cells) => {

        //Animate the relevant ship girl.
        ;(0,_animate__WEBPACK_IMPORTED_MODULE_0__.animate)(ship, 'def');

        //Set the used spaces to avoid based on player.
        //And the assign the placed spaces to their index in game state.
        let usedSpaces = [];
        let stateCells;
        let debugTargetCells;
        if (currentPlayer.name === 'player') {
            usedSpaces = playerShipSpaces;
            stateCells = BoardState.cells;
            debugTargetCells = comTargetCells;
        } else if (currentPlayer.name === 'com') {
            usedSpaces = comShipSpaces;
            stateCells = BoardState.comCells;
            debugTargetCells = targetCells;
        }

        //Display ship ghost based on length and hover index.
        for (let i = 0; i < ship.shipLength; i++) {

            //Fill in selected cells based on placement direction.
            cells[index + i * offset].classList.remove('shipghost');
            cells[index + i * offset].classList.add('ship');

            //Set each space of the ship to taken in shipSpaces.
            usedSpaces.push(index + i * offset);

            //Set the selected space to used.
            cells[index + i * offset].classList.add('shipcell');
            
            //Update the game state object with the ship.
            stateCells[index + i * offset] = ship;
            stateCells[index + i * offset]['hit'] = false;
            //debugTargetCells[index + i * offset].style.backgroundColor = 'lightblue';
        }

    }

    //Display where a ship would placed in a hovered location.
    const ghostShip = (ship, index, offset, cells) => {

        lastGhost = [ship, index, offset, cells];
        const illegals = getIllegalCells(ship.shipLength);

        legalMove = true;
        let usedSpaces;

        //Set the grid to use based on the currentPlayer.
        if (cells === comCells) {
            usedSpaces = comShipSpaces;
        } else {
            usedSpaces = playerShipSpaces;
        }

        //Display ship ghost based on length and hover index.
        for (let i = 0; i < ship.shipLength; i++) {

            //Set the move to illegal if it is in illegal moves.
            //or for vertical, if it is past the grid.
            if (offset === 1) {
                if (illegals.includes(index)) {
                    legalMove = false;
                }
            } else if (offset === 10) {
                if (index + i * offset > 99) {
                    legalMove = false;
                }
            }

            //Set the move to illegal if it intersects a place ship.
            if (usedSpaces.includes(index + i * offset)) {
                legalMove = false;
            }

            //Stop filling in cells past the grid.
            if (index + i * offset > 99) break;

            //Fill in selected cells based on placement direction.
            cells[index + i * offset].classList.add('shipghost');
        }

        //Color selected cells pink if move is illegal.
        if (!legalMove) {
            for (let i = 0;i < ship.shipLength; i++) {
                //Stop filling in cells past the grid.
                if (index + i * offset > 99) break;
    
                cells[index + i * offset].classList.add('illegal');
            }
        }
    }

    //Hide a previously displayed ship ghost.
    const hideGhost = (cells) => {
        Array.from(cells).forEach(cell => {
            //Clear cells that are not currently housing a ship.
            if (cell.classList.contains('ship')) {
                if (cell.classList.contains('hit')) {
                    cell.className = 'cell ship hit';
                } else {
                    cell.className = 'cell ship';
                }
            } else {
                cell.classList.remove('shipghost');
                cell.classList.remove('illegal');
            }
        });
    }

    const getIllegalCells = (shipLength) => {
            //Set the illegal positions for a ship.
            let illegalCells = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
            illegalCells.forEach(cell => {
                for (let i = 1; i < shipLength - 1; i++) {
                    illegalCells.push(cell + (i*-1));
                }
            });
            return illegalCells;
    }

    //Let the player place all their ships.
    const setup = (player, com) => {

        //Display ship info when hovering over an icon.
        const icons = Array.from(document.querySelectorAll('.icon'));
        const nameDisplay = document.getElementById('iconname');
        const dmgDisplay = document.getElementById('icondmg');
        for (let i = 0; i < 5; i++) {
            //Prevent re-adding listeners.
            if (!initialSetup) continue;
            icons[i].addEventListener('mouseover', () => {
                nameDisplay.innerText = player.ships[i].shipName.toUpperCase();
                dmgDisplay.innerText = `${player.ships[i].damage} DMG`;
                (0,_animate__WEBPACK_IMPORTED_MODULE_0__.animate)(player.ships[i], 'def');
                
                //Highlight hovered ship.
                for (let j = 0; j < 100; j++) {
                    if (BoardState.cells[j] !== null &&
                        BoardState.cells[j].shipName === icons[i].id) {
                        cells[j].classList.add('highlighted');
                    }
                }
            });

            //Remove highlighting on mouse leave.
            icons[i].addEventListener('mouseleave', () => {
                hideGhost(cells);
            });

            icons[i].addEventListener('click', () => {
                (0,_animate__WEBPACK_IMPORTED_MODULE_0__.animate)(player.ships[i], 'glad');
            });
        }

        

        //Only draw cells on initial setup.
        if (initialSetup) {
            drawBoard();
            drawComBoard();
            drawTargetGrid();
            drawComTargetGrid();
            initialSetup = false;
        }


        //Reset damage and sunk on all ships.
        player.ships.forEach(ship => {
            ship.damage = 0;
            ship.sunk = false;
        });
        com.ships.forEach(ship => {
            ship.damage = 0;
            ship.sunk = false;
        });

        

        //Initialize event listeners for all cells.
        for (let i = 0; i < cells.length; i++) {

            //Show the ship's ghost based on the current ship and
            //the index of the cell hovered.
            cells[i].addEventListener('mouseenter', () => {
                ghostShip(player.ships[shipIndex], i, offset, cells);
            });
            
            //Show the ship's ghost based on the current ship and
            //the index of the cell hovered.
            cells[i].addEventListener('mouseleave', () => {
                hideGhost(cells);
            });

            cells[i].addEventListener('click', () => {
                //Prevent clicking ships in indentical cells. 
                if (BoardState.cells[i] !== null) {
                    return;
                }

                if (legalMove) {
                    placeShip(player.ships[shipIndex], i, player, cells);
                    shipIndex ++;

                    //Switch round to combat if all ships placed.
                    if (shipIndex > 4) {
                        startCombat(player, com);
                    }
                }
            });

        }
        

    }

    //Switch phase to combat and remove all setup listeners.
    const startCombat = (player, com) => {

        //Remove setup phase event listeners.
        for (let i = 0; i < cells.length; i++) {
            cells[i].replaceWith(cells[i].cloneNode(true));
        }

        //Place computer's ships.
        let index;
        let flip;
        

        for (let i = 0; i < com.ships.length; i++) {
            const randomPlacement = () => {
                index  = Math.floor(Math.random() * 100);
                flip = Math.round(Math.random());
                (flip === 0) ? offset = 1 : offset = 10;
                
                ghostShip(com.ships[i], index, offset, comCells);
                hideGhost(comCells);
            }

            //Choose a random index to place a ship;
            //And reroll in the case of illegal moves being chosen.
            randomPlacement();

            while (!legalMove) {
                randomPlacement();
            }

            placeShip(com.ships[i], index, com, comCells)
        }   

        //Add event listener for marking a strike on the computer.
        for (let i = 0; i < cells.length; i++) {
            targetCells[i].addEventListener('click', () => {

                //Stop the entire function if the game is over.
                if (gameOver) return;
                
                //Prevent reclicking an already selected cell.
                if (chosenCells.includes(i)) {
                    return;
                }

                chosenCells.push(i);

                //Hit the selected cell if there is a ship there.
                if (BoardState.comCells[i] !== null) {
                    targetCells[i].classList.add('hit');
            

                    //Add one damage to the selected ship.
                    BoardState.comCells[i]['damage'] += 1;

                    //Animate the captain.
                    (0,_animate__WEBPACK_IMPORTED_MODULE_0__.animateCap)('glad');

                    //Check for a sunk ship.
                    if (BoardState.comCells[i]['damage'] >= BoardState.comCells[i]['shipLength']) {
                        BoardState.comCells[i].sunk = true;

                        //Animate the captain.
                        (0,_animate__WEBPACK_IMPORTED_MODULE_0__.animateCap)('mad');
                        (0,_animate__WEBPACK_IMPORTED_MODULE_0__.shakeGrid)();
                        updateScore();

                        //Display the whole sunken battleship.
                        for (let j = 0; j < BoardState.comCells.length; j++) {
                            if (BoardState.comCells[j] !== null &&
                                BoardState.comCells[j].shipName === BoardState.comCells[i].shipName) {
                                targetCells[j].classList.add('sunkenship');
                            }
                        }
                    }
                } else {
                    //Mark a strike that missed.
                    targetCells[i].classList.add('miss');
                    
                }

                if (!gameOver) {
                    getWinner(player, com);
                }
                
                //Play an AI turn if the game is not over.
                if (getWinner(player,com) !== undefined) return;
                comTurn();

                if (!gameOver) {
                    getWinner(player, com);
                }
            });
        }       
        
        initialCombat = false;
    }

    let lastFound = null;
    let comChosenCells = [];
    let lastChoiceHit = false;
    let testOffset = 1;
    let horChecked = false;
    let topChecked = false;

    const killIndex = (index) => {

        //Start by attempting to destroy a ship horizontally.
        const killHorizon = () => {
            //Prevent selecting a previously chosen cell on the edge of a ship.
            if (comChosenCells.includes(newIndex + 1)) {
                lastChoiceHit = false;
            }

            //Change direction if horizontal end of ship is found.
            if (lastChoiceHit) {
                newIndex += testOffset;
            } else {
                testOffset = -1;
                //Skip over previously selected cells.
                while (comChosenCells.includes(newIndex)) {
                    newIndex += testOffset;
                }
            }

            if (newIndex > 99) {
                newIndex -= 1;
                //Skip over previously selected cells.
                while (comChosenCells.includes(newIndex)) {
                    newIndex -= 1;
                }
            }
        }

        //Start to destroy a ship if it is oriented vertically.
        const killVert = () => {
            
            //Change direction if bottom of ship is found.
            if (BoardState.cells[newIndex - 10] === 'miss') {
                topChecked = true;
            }

            if (topChecked) {
                testOffset = 10;
            } else {
                testOffset = -10;
            }

            newIndex += testOffset;

            //Skip over previously selected cells.
            while (comChosenCells.includes(newIndex)) {
                newIndex += testOffset;
            }

            //Avoid selecting a cell outside of the grid.
            if (newIndex < 0) {
                newIndex += 10;
                //Skip over previously selected cells.
                while (comChosenCells.includes(newIndex)) {
                    newIndex += 10;
                }
            }

        }

        let newIndex = index;

        //Switch mode to vertical kill if horizontal is done.
        if (testOffset !== 1 && BoardState.cells[lastFound -1] === 'miss') {
            horChecked = true; 
        }

        //If horizontal of ship is checked, switch to killing vertically.
        if (horChecked) {
            killVert();
        } else {
            killHorizon();
        }

        return newIndex;
    }

    //Play the computer's turn.
    const comTurn = () => {

        //Roll a random cell, and reroll if it is a hit or a miss.
        let index = Math.round(Math.random() * 99);
        while (comChosenCells.includes(index)) {
            index = Math.round(Math.random() * 99);
        }     

        //If ship has been found and not destroyed, destroy it.
        if (lastFound !== null) {
            index = killIndex(lastFound);
        }

        //Remove the selected cell from com choices.
        comChosenCells.push(index);

        if (BoardState.cells[index] !== null &&
            BoardState.cells[index] !== 'miss') {
     
            //Mark the ship hit index.
            lastFound = index;
            lastChoiceHit = true;

            comTargetCells[index].classList.add('hit');
            cells[index].classList.add('hit');

            //Add one damage to the selected ship and particular cell.
            BoardState.cells[index]['damage'] += 1;

            BoardState.cells[index]['hit'] = true;

            //Animate ship girl.
            (0,_animate__WEBPACK_IMPORTED_MODULE_0__.animate)(BoardState.cells[index], 'def');

            //Check for a sunk ship.
            if (BoardState.cells[index]['damage'] >= BoardState.cells[index]['shipLength']) {
                BoardState.cells[index].sunk = true;
                testOffset = 1;
                horChecked = false;
                topChecked = false;

                //Animate the captain and the ship girl.
                (0,_animate__WEBPACK_IMPORTED_MODULE_0__.animateCap)('def');
                (0,_animate__WEBPACK_IMPORTED_MODULE_0__.animate)(BoardState.cells[index], 'mad');

                (0,_animate__WEBPACK_IMPORTED_MODULE_0__.shakeGrid)();

                //Display the whole sunken battleship.
                for (let j = 0; j < BoardState.cells.length; j++) {
                    
                    if (BoardState.cells[j] !== null &&
                        BoardState.cells[j].shipName === BoardState.cells[index].shipName) {
                        comTargetCells[j].classList.add('sunkenship');
                        //Switch back to hunting for a ship.

                        if (lastFound !== null) lastFound = null;
                    }
                }
            }
        } else {
            //Mark a strike that missed.
            comTargetCells[index].classList.add('miss');
            cells[index].classList.add('miss');
            BoardState.cells[index] = 'miss';
            lastChoiceHit = false;
        }
    }

    //Check for winner.
    const getWinner = (player, com) => {
        let playerTotal = 0;
        let comTotal = 0;

        

        //Find the total of ships sunk for the player and computer.
        player.ships.forEach(ship => {
            if (ship.sunk) comTotal++;
        });
        com.ships.forEach(ship => {
            if (ship.sunk) playerTotal++;
        });

        //Return the winner if there is one.
        if (playerTotal === 5) {
            if (!gameOver) {
                (0,_animate__WEBPACK_IMPORTED_MODULE_0__.showEndGame)('VICOTORY');
            }
            
            console.log('Player Wins');
            gameOver = true;
            return player;
        } else if (comTotal === 5) {
            if (!gameOver) {
                (0,_animate__WEBPACK_IMPORTED_MODULE_0__.showEndGame)('FAILURE');
            }
            console.log('Computer wins!');
            
            gameOver = true;
            return com;
        }
    }

    return {drawBoard, placeShip, setup, getIllegalCells}
})();



/***/ }),

/***/ "./src/images sync recursive ^\\.\\/.*\\-.*\\.png$":
/*!********************************************!*\
  !*** ./src/images/ sync ^\.\/.*\-.*\.png$ ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bat-def.png": "./src/images/bat-def.png",
	"./bat-glad.png": "./src/images/bat-glad.png",
	"./bat-icon.png": "./src/images/bat-icon.png",
	"./bat-mad.png": "./src/images/bat-mad.png",
	"./cap-def.png": "./src/images/cap-def.png",
	"./cap-glad.png": "./src/images/cap-glad.png",
	"./cap-mad.png": "./src/images/cap-mad.png",
	"./car-def.png": "./src/images/car-def.png",
	"./car-glad.png": "./src/images/car-glad.png",
	"./car-icon.png": "./src/images/car-icon.png",
	"./car-mad.png": "./src/images/car-mad.png",
	"./cru-def.png": "./src/images/cru-def.png",
	"./cru-glad.png": "./src/images/cru-glad.png",
	"./cru-icon.png": "./src/images/cru-icon.png",
	"./cru-mad.png": "./src/images/cru-mad.png",
	"./data/001-000.png": "./src/images/data/001-000.png",
	"./data/001-001.png": "./src/images/data/001-001.png",
	"./data/001-002.png": "./src/images/data/001-002.png",
	"./data/002-000.png": "./src/images/data/002-000.png",
	"./data/002-001.png": "./src/images/data/002-001.png",
	"./data/002-002.png": "./src/images/data/002-002.png",
	"./data/003-000.png": "./src/images/data/003-000.png",
	"./data/003-001.png": "./src/images/data/003-001.png",
	"./data/003-002.png": "./src/images/data/003-002.png",
	"./data/004-000.png": "./src/images/data/004-000.png",
	"./data/004-001.png": "./src/images/data/004-001.png",
	"./data/004-002.png": "./src/images/data/004-002.png",
	"./data/005-000.png": "./src/images/data/005-000.png",
	"./data/005-001.png": "./src/images/data/005-001.png",
	"./data/005-002.png": "./src/images/data/005-002.png",
	"./des-def.png": "./src/images/des-def.png",
	"./des-glad.png": "./src/images/des-glad.png",
	"./des-icon.png": "./src/images/des-icon.png",
	"./des-mad.png": "./src/images/des-mad.png",
	"./sub-def.png": "./src/images/sub-def.png",
	"./sub-glad.png": "./src/images/sub-glad.png",
	"./sub-icon.png": "./src/images/sub-icon.png",
	"./sub-mad.png": "./src/images/sub-mad.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync recursive ^\\.\\/.*\\-.*\\.png$";

/***/ }),

/***/ "./src/images sync recursive ^\\.\\/cap\\-.*\\.png$":
/*!*********************************************!*\
  !*** ./src/images/ sync ^\.\/cap\-.*\.png$ ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./cap-def.png": "./src/images/cap-def.png",
	"./cap-glad.png": "./src/images/cap-glad.png",
	"./cap-mad.png": "./src/images/cap-mad.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync recursive ^\\.\\/cap\\-.*\\.png$";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sum": () => (/* binding */ sum)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animate */ "./src/animate.js");





function sum(a, b) {
    return a + b;
}

const Ship = (length, name) => {
    let shipLength = length;
    let shipName = name;
    let damage = 0;
    let sunk = false;
    
    return {shipLength, shipName, damage, sunk}
};

const Player = (ships, name) => {
     return {ships, name}
};

let ships = [];
let ships2 = [];

const destroyer = Ship(2, 'destroyer');
const cruiser = Ship(3, 'cruiser');
const submarine = Ship(3, 'submarine');
const battleship = Ship(4, 'battleship');
const carrier = Ship(5, 'carrier');

const destroyer2 = Ship(2, 'destroyer');
const cruiser2 = Ship(3, 'cruiser');
const submarine2 = Ship(3, 'submarine');
const battleship2 = Ship(4, 'battleship');
const carrier2 = Ship(5, 'carrier');

ships.push(destroyer, cruiser, submarine, battleship, carrier);
ships2.push(destroyer2, cruiser2, submarine2, battleship2, carrier2);

let player = Player(ships, 'player');
let com = Player(ships2, 'com');



_gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard.setup(player, com);

//Reinitialize the board on reset button click.
const resetButton = document.getElementById('resetbtn');

resetButton.addEventListener('click', () => {
    _gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard.setup(player, com);
});


//Debugger for animating ship girls.
window.addEventListener('click', () => {
    const moods = ['def', 'glad', 'mad']
    const randMood = moods[Math.floor(Math.random() * 3)];

    const randIndex = Math.floor(Math.random() * 5);

    // animate(player.ships[randIndex], randMood);
    // animateCap(randMood);
});






/***/ }),

/***/ "./src/fonts/Profile.ttf":
/*!*******************************!*\
  !*** ./src/fonts/Profile.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3ee39ac35fba879218f9.ttf";

/***/ }),

/***/ "./src/fonts/Vogue.ttf":
/*!*****************************!*\
  !*** ./src/fonts/Vogue.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cc23cdc2582e9de16b77.ttf";

/***/ }),

/***/ "./src/images/bat-def.png":
/*!********************************!*\
  !*** ./src/images/bat-def.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "945d3cb8b0e0d3fff5d2.png";

/***/ }),

/***/ "./src/images/bat-glad.png":
/*!*********************************!*\
  !*** ./src/images/bat-glad.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c45e0363dab8d26a8cd0.png";

/***/ }),

/***/ "./src/images/bat-icon.png":
/*!*********************************!*\
  !*** ./src/images/bat-icon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5a401789e6497088e7a8.png";

/***/ }),

/***/ "./src/images/bat-mad.png":
/*!********************************!*\
  !*** ./src/images/bat-mad.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f68e6dcdd7900d027c5.png";

/***/ }),

/***/ "./src/images/cap-def.png":
/*!********************************!*\
  !*** ./src/images/cap-def.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1ba0913d86d7d751c2f7.png";

/***/ }),

/***/ "./src/images/cap-glad.png":
/*!*********************************!*\
  !*** ./src/images/cap-glad.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5670dced2ff57e2a2d6b.png";

/***/ }),

/***/ "./src/images/cap-mad.png":
/*!********************************!*\
  !*** ./src/images/cap-mad.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "04bdafe9c2fb62b2d62d.png";

/***/ }),

/***/ "./src/images/car-def.png":
/*!********************************!*\
  !*** ./src/images/car-def.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4222f16ade26510746eb.png";

/***/ }),

/***/ "./src/images/car-glad.png":
/*!*********************************!*\
  !*** ./src/images/car-glad.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f0b77016fdef58036819.png";

/***/ }),

/***/ "./src/images/car-icon.png":
/*!*********************************!*\
  !*** ./src/images/car-icon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b0b8cedbb7cfeed4e025.png";

/***/ }),

/***/ "./src/images/car-mad.png":
/*!********************************!*\
  !*** ./src/images/car-mad.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a3bca0308ef81c8d1dbc.png";

/***/ }),

/***/ "./src/images/cru-def.png":
/*!********************************!*\
  !*** ./src/images/cru-def.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "588fa93613d04b7332d0.png";

/***/ }),

/***/ "./src/images/cru-glad.png":
/*!*********************************!*\
  !*** ./src/images/cru-glad.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fb5c780a3c24c9d9543d.png";

/***/ }),

/***/ "./src/images/cru-icon.png":
/*!*********************************!*\
  !*** ./src/images/cru-icon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f81b05b36e97cf22c76c.png";

/***/ }),

/***/ "./src/images/cru-mad.png":
/*!********************************!*\
  !*** ./src/images/cru-mad.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f23f43e29e33e42af07.png";

/***/ }),

/***/ "./src/images/data/001-000.png":
/*!*************************************!*\
  !*** ./src/images/data/001-000.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "400a5033e6713580b350.png";

/***/ }),

/***/ "./src/images/data/001-001.png":
/*!*************************************!*\
  !*** ./src/images/data/001-001.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6573d431685381dc865d.png";

/***/ }),

/***/ "./src/images/data/001-002.png":
/*!*************************************!*\
  !*** ./src/images/data/001-002.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "422911e9ffa070ad5f3d.png";

/***/ }),

/***/ "./src/images/data/002-000.png":
/*!*************************************!*\
  !*** ./src/images/data/002-000.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "588fa93613d04b7332d0.png";

/***/ }),

/***/ "./src/images/data/002-001.png":
/*!*************************************!*\
  !*** ./src/images/data/002-001.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fb5c780a3c24c9d9543d.png";

/***/ }),

/***/ "./src/images/data/002-002.png":
/*!*************************************!*\
  !*** ./src/images/data/002-002.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f23f43e29e33e42af07.png";

/***/ }),

/***/ "./src/images/data/003-000.png":
/*!*************************************!*\
  !*** ./src/images/data/003-000.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "774a2f9009cb3e910b60.png";

/***/ }),

/***/ "./src/images/data/003-001.png":
/*!*************************************!*\
  !*** ./src/images/data/003-001.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d0709e218e99b3f76eff.png";

/***/ }),

/***/ "./src/images/data/003-002.png":
/*!*************************************!*\
  !*** ./src/images/data/003-002.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b064a705c14981af2c1e.png";

/***/ }),

/***/ "./src/images/data/004-000.png":
/*!*************************************!*\
  !*** ./src/images/data/004-000.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c45e0363dab8d26a8cd0.png";

/***/ }),

/***/ "./src/images/data/004-001.png":
/*!*************************************!*\
  !*** ./src/images/data/004-001.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "945d3cb8b0e0d3fff5d2.png";

/***/ }),

/***/ "./src/images/data/004-002.png":
/*!*************************************!*\
  !*** ./src/images/data/004-002.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f68e6dcdd7900d027c5.png";

/***/ }),

/***/ "./src/images/data/005-000.png":
/*!*************************************!*\
  !*** ./src/images/data/005-000.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4222f16ade26510746eb.png";

/***/ }),

/***/ "./src/images/data/005-001.png":
/*!*************************************!*\
  !*** ./src/images/data/005-001.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f0b77016fdef58036819.png";

/***/ }),

/***/ "./src/images/data/005-002.png":
/*!*************************************!*\
  !*** ./src/images/data/005-002.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a3bca0308ef81c8d1dbc.png";

/***/ }),

/***/ "./src/images/des-def.png":
/*!********************************!*\
  !*** ./src/images/des-def.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6573d431685381dc865d.png";

/***/ }),

/***/ "./src/images/des-glad.png":
/*!*********************************!*\
  !*** ./src/images/des-glad.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "422911e9ffa070ad5f3d.png";

/***/ }),

/***/ "./src/images/des-icon.png":
/*!*********************************!*\
  !*** ./src/images/des-icon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e684bb0c2ccc19e41168.png";

/***/ }),

/***/ "./src/images/des-mad.png":
/*!********************************!*\
  !*** ./src/images/des-mad.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "400a5033e6713580b350.png";

/***/ }),

/***/ "./src/images/sub-def.png":
/*!********************************!*\
  !*** ./src/images/sub-def.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "774a2f9009cb3e910b60.png";

/***/ }),

/***/ "./src/images/sub-glad.png":
/*!*********************************!*\
  !*** ./src/images/sub-glad.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d0709e218e99b3f76eff.png";

/***/ }),

/***/ "./src/images/sub-icon.png":
/*!*********************************!*\
  !*** ./src/images/sub-icon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d39a0cfcdaa006415694.png";

/***/ }),

/***/ "./src/images/sub-mad.png":
/*!********************************!*\
  !*** ./src/images/sub-mad.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b064a705c14981af2c1e.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssaUJBQWlCLGtCQUFrQixrQkFBa0Isa0JBQWtCLGtCQUFrQixPQUFPLEtBQUssaUJBQWlCLGtCQUFrQixrQkFBa0Isa0JBQWtCLGtCQUFrQixP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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJzQjtBQUNrQjtBQUNRO0FBQ3BDOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUEsdURBQWU7O0FBRWY7QUFDQTs7QUFFQTtBQUNBLElBQUksdURBQWU7QUFDbkIsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hbmltYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW1hZ2VzLyBzeW5jIF5cXC5cXC8uKlxcLS4qXFwucG5nJCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ltYWdlcy8gc3luYyBeXFwuXFwvY2FwXFwtLipcXC5wbmckIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvVm9ndWUudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9Qcm9maWxlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHZvZ3VlO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogcHJvZmlsZTtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmFieS1waW5rOiAjZjJjY2MzO1xcbiAgICAtLWdyZXlibGFjazogcmdiKDExMCwgMTEwLCAxMTApO1xcbiAgICAtLXllbGxvdy1ncmVlbjogI0NCRTg5NjtcXG4gICAgLS1zaGlwZ29sZDogI2FlOGUxYztcXG4gICAgLS12aW9sZXQtcmVkOiAjYzUyMTg0O1xcbiAgICAtLWNhcnJpYmVhbjogIzBkYzA5MDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbiAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi13aWR0aDogMTA1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMHB4IDEwcHggMHB4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2hlYWRlcj5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2b2d1ZSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4jaGVhZGVyPmgzIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuI2hlYWRlcmJ0bmJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI2NvbG9yYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LWZhbWlseTogcHJvZmlsZSwgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4jY3JlZGl0c2J0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogOC41cmVtO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4jY3JlZGl0c2J0bjpob3ZlciB7XFxuICAgIGhlaWdodDogMTZyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NTMpO1xcbiAgICB3aWR0aDogMzdyZW07XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpOyBcXG59XFxuXFxuI2dyaWRzY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhYnktcGluayk7XFxuICAgIG1hcmdpbjogMjVweCAwIDI1cHggMDtcXG4gICAgcGFkZGluZzogMzBweCAwIDMwcHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jZ3JpZHNjb250YWluZXI+aDIge1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgMCAxNXB4IDA7XFxufVxcblxcbiNncmlkc2NvbnRhaW5lcj4jc2VwYXJhdG9yIHtcXG4gICAgd2lkdGg6IDE0cHg7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjk0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuI2ljb25ib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMjhweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogODVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNpY29uYm94PmltZyB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxuICAgIGltYWdlLXJlbmRlcmluZzogLW1vei1jcmlzcC1lZGdlcztcXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBjcmlzcC1lZGdlcztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcblxcbiNpY29uYm94PmltZzpob3ZlciB7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuI2ljb25uYW1lIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNpY29uZG1nIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoLTUwJSwgMHB4KTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNib2FyZCwgI2NvbWJvYXJkLCAjdGFyZ2V0Z3JpZCwgI2NvbXRhcmdldGdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBnYXA6IDRweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuI2NvbWJvYXJkLCAjY29tdGFyZ2V0Z3JpZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFzcGVjdC1yYXRpbzogaW5pdGlhbDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIwMzA5O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNoaXBnaG9zdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXBnb2xkKTtcXG59XFxuXFxuLmlsbGVnYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aW9sZXQtcmVkKTtcXG59XFxuXFxuLnRhcmdldGNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzLCBib3JkZXItcmFkaXVzIDAuM3MsIG1hcmdpbiAwLjNzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4udGFyZ2V0Y2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcnJpYmVhbik7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbCAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zdW5rZW5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yOTQpICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIG1hcmdpbjogMTRweDtcXG59XFxuXFxuLmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDcwLCA3MCkgIWltcG9ydGFudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogLTVweDtcXG59XFxuXFxuI2luZm9ib3gge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2J0bmJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzY29yZWJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDIwJTtcXG4gICAgdG9wOiAyMCU7XFxufVxcblxcbiNzY29yZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDEwcmVtO1xcbn1cXG5cXG4jYnRuYm94PmgyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDYuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFZvZ3VlLCBzZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYnRuYm94PmgzIHtcXG4gICAgZm9udC1mYW1pbHk6IHZvZ3VlLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjlyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDE0NXB4O1xcblxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG59XFxuXFxuI3Jlc2V0YnRuIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoLTU4cHgsIDgwcHgpO1xcbn1cXG5cXG4jZGlyZWN0aW9uYnRuIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoLTU4cHgsIDE1cHgpO1xcbn1cXG5cXG4jY2FwYm94LCAjZ2lybGJveCB7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuI2NhcGJveCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2dpcmxib3gge1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFieS1waW5rKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuI2NhcGltZywgI2dpcmxpbWcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiNjYXBpbWcge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgYm90dG9tOiAtMTUwcHg7XFxufVxcblxcbiNnaXJsaW1nIHtcXG4gICAgcmlnaHQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlKTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBoZWlnaHQ6IDI2MHB4O1xcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNHM7XFxufVxcblxcbi5naXJsZ2xhZCB7XFxuICAgIGFuaW1hdGlvbjogZ2lybGdsYWQgMC42cztcXG59XFxuXFxuLmdpcmxtYWQge1xcbiAgICBhbmltYXRpb246IGdpcmxtYWQgMC40cyAyO1xcbn1cXG5cXG4uZ2lybGRlZiB7XFxuICAgIGFuaW1hdGlvbjogZ2lybGRlZiAwLjRzO1xcbn1cXG5cXG4uZ2lybGNvbG9yIHtcXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbkBrZXlmcmFtZXMgZ2lybGdsYWQge1xcbiAgICAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgdHJhbnNsYXRlWSgwcHgpfVxcbiAgICAyNSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHRyYW5zbGF0ZVkoLTM1cHgpfVxcbiAgICA1MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHRyYW5zbGF0ZVkoMHB4KX1cXG4gICAgNzUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSB0cmFuc2xhdGVZKC0xMHB4KX1cXG4gICAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgdHJhbnNsYXRlWSgwcHgpfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdpcmxtYWQge1xcbiAgICAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgdHJhbnNsYXRlWSgwcHgpfVxcbiAgICAzMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHRyYW5zbGF0ZVkoMTBweCl9XFxuICAgIDUwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQ1JSkgdHJhbnNsYXRlWSgyMHB4KX1cXG4gICAgNzUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTUlKSB0cmFuc2xhdGVZKDMwcHgpfVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSB0cmFuc2xhdGVZKDBweCl9XFxufVxcblxcbkBrZXlmcmFtZXMgZ2lybGRlZiB7XFxuICAgIDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDBweCkgcm90YXRlKDBkZWcpO31cXG4gICAgNTAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0NSUsIDEwcHgpIHJvdGF0ZSgtMTBkZWcpO31cXG4gICAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwcHgpIHJvdGF0ZSgwZGVnKTt9XFxuXFxufVxcblxcbi5jYXBhbmkge1xcbiAgICBhbmltYXRpb246IGNhcGFuaSAwLjRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNhcGFuaSB7XFxuICAgIDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwcHgpfVxcbiAgICA2NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwcHgpfVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwcHgpfVxcbn1cXG5cXG4uZ3JpZHNoYWtlIHtcXG4gICAgYW5pbWF0aW9uOiBncmlkc2hha2UgMC41cztcXG59XFxuXFxuQGtleWZyYW1lcyBncmlkc2hha2Uge1xcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxMDAlKSByb3RhdGUoMGRlZyk7XFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggN3B4IGJsYWNrKX1cXG4gICAgMjUlIHt0cmFuc2Zvcm06IHNjYWxlKDEwMyUpIHJvdGF0ZSg3ZGVnKTsgXFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA3cHggN3B4IGJsYWNrKX1cXG4gICAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDEwNSUpIHJvdGF0ZSgtM2RlZyk7XFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxNXB4IDdweCBibGFjayl9XFxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMTAwJSkgcm90YXRlKDBkZWcpO1xcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDdweCBibGFjayl9XFxufVxcblxcbiNnYW1lb3ZlcnBhbmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTUlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNnYW1lc3RhdHVzIHtcXG4gICAgZm9udC1mYW1pbHk6IFZvZ3VlLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDY2KTtcXG4gICAgcGFkZGluZzogNDBweCA0MHB4IDBweCA0MHB4O1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMCk7XFxuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwcHgpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2dhbWVzdGF0dXMucGFuZWxzaG93biB7XFxuICAgIGFuaW1hdGlvbjogZ2FtZXN0YXR1cyAzcztcXG4gICAgZmlsdGVyOiBvcGFjaXR5KDEpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdhbWVzdGF0dXMge1xcbiAgICBmcm9tIHtmaWx0ZXI6IG9wYWNpdHkoMCk7fVxcbiAgICB0byB7ZmlsdGVyOiBvcGFjaXR5KDEpO31cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsNENBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksU0FBUztJQUNULDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0NBQWdDOztJQUVoQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7O0lBRXRCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsU0FBUztJQUNULDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7SUFDZixTQUFTO0lBQ1Qsb0JBQW9C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MENBQTBDO0FBQ3BEOztBQUVBO0lBQ0ksSUFBSSwwQ0FBMEM7SUFDOUMsS0FBSywyQ0FBMkM7SUFDaEQsS0FBSywyQ0FBMkM7SUFDaEQsS0FBSywyQ0FBMkM7SUFDaEQsTUFBTSwwQ0FBMEM7QUFDcEQ7O0FBRUE7SUFDSSxJQUFJLDJDQUEyQyxDQUFDO0lBQ2hELEtBQUssOENBQThDLENBQUM7SUFDcEQsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFdEQ7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxJQUFJLCtCQUErQjtJQUNuQyxLQUFLLGdDQUFnQztJQUNyQyxNQUFNLCtCQUErQjtBQUN6Qzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLElBQUksbUNBQW1DO1FBQ25DLHNDQUFzQztJQUMxQyxLQUFLLG1DQUFtQztRQUNwQyxzQ0FBc0M7SUFDMUMsS0FBSyxvQ0FBb0M7UUFDckMsdUNBQXVDO0lBQzNDLE1BQU0sbUNBQW1DO1FBQ3JDLHNDQUFzQztBQUM5Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHNDQUFzQztJQUN0QywyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE1BQU0sa0JBQWtCLENBQUM7SUFDekIsSUFBSSxrQkFBa0IsQ0FBQztBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHZvZ3VlO1xcbiAgICBzcmM6IHVybCgnL3NyYy9mb250cy9Wb2d1ZS50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBwcm9maWxlO1xcbiAgICBzcmM6IHVybCgnL3NyYy9mb250cy9Qcm9maWxlLnR0ZicpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmFieS1waW5rOiAjZjJjY2MzO1xcbiAgICAtLWdyZXlibGFjazogcmdiKDExMCwgMTEwLCAxMTApO1xcbiAgICAtLXllbGxvdy1ncmVlbjogI0NCRTg5NjtcXG4gICAgLS1zaGlwZ29sZDogI2FlOGUxYztcXG4gICAgLS12aW9sZXQtcmVkOiAjYzUyMTg0O1xcbiAgICAtLWNhcnJpYmVhbjogIzBkYzA5MDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbiAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi13aWR0aDogMTA1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMHB4IDEwcHggMHB4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2hlYWRlcj5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2b2d1ZSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4jaGVhZGVyPmgzIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuI2hlYWRlcmJ0bmJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI2NvbG9yYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LWZhbWlseTogcHJvZmlsZSwgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4jY3JlZGl0c2J0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogOC41cmVtO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4jY3JlZGl0c2J0bjpob3ZlciB7XFxuICAgIGhlaWdodDogMTZyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NTMpO1xcbiAgICB3aWR0aDogMzdyZW07XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpOyBcXG59XFxuXFxuI2dyaWRzY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhYnktcGluayk7XFxuICAgIG1hcmdpbjogMjVweCAwIDI1cHggMDtcXG4gICAgcGFkZGluZzogMzBweCAwIDMwcHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jZ3JpZHNjb250YWluZXI+aDIge1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgMCAxNXB4IDA7XFxufVxcblxcbiNncmlkc2NvbnRhaW5lcj4jc2VwYXJhdG9yIHtcXG4gICAgd2lkdGg6IDE0cHg7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjk0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuI2ljb25ib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMjhweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogODVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNpY29uYm94PmltZyB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxuICAgIGltYWdlLXJlbmRlcmluZzogLW1vei1jcmlzcC1lZGdlcztcXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBjcmlzcC1lZGdlcztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcblxcbiNpY29uYm94PmltZzpob3ZlciB7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuI2ljb25uYW1lIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNpY29uZG1nIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoLTUwJSwgMHB4KTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNib2FyZCwgI2NvbWJvYXJkLCAjdGFyZ2V0Z3JpZCwgI2NvbXRhcmdldGdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBnYXA6IDRweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuI2NvbWJvYXJkLCAjY29tdGFyZ2V0Z3JpZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFzcGVjdC1yYXRpbzogaW5pdGlhbDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIwMzA5O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNoaXBnaG9zdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXBnb2xkKTtcXG59XFxuXFxuLmlsbGVnYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aW9sZXQtcmVkKTtcXG59XFxuXFxuLnRhcmdldGNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzLCBib3JkZXItcmFkaXVzIDAuM3MsIG1hcmdpbiAwLjNzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4udGFyZ2V0Y2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcnJpYmVhbik7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbCAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zdW5rZW5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yOTQpICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIG1hcmdpbjogMTRweDtcXG59XFxuXFxuLmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDcwLCA3MCkgIWltcG9ydGFudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogLTVweDtcXG59XFxuXFxuI2luZm9ib3gge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2J0bmJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzY29yZWJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDIwJTtcXG4gICAgdG9wOiAyMCU7XFxufVxcblxcbiNzY29yZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDEwcmVtO1xcbn1cXG5cXG4jYnRuYm94PmgyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDYuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFZvZ3VlLCBzZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYnRuYm94PmgzIHtcXG4gICAgZm9udC1mYW1pbHk6IHZvZ3VlLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjlyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDE0NXB4O1xcblxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG59XFxuXFxuI3Jlc2V0YnRuIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoLTU4cHgsIDgwcHgpO1xcbn1cXG5cXG4jZGlyZWN0aW9uYnRuIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoLTU4cHgsIDE1cHgpO1xcbn1cXG5cXG4jY2FwYm94LCAjZ2lybGJveCB7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuI2NhcGJveCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2dpcmxib3gge1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFieS1waW5rKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuI2NhcGltZywgI2dpcmxpbWcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiNjYXBpbWcge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgYm90dG9tOiAtMTUwcHg7XFxufVxcblxcbiNnaXJsaW1nIHtcXG4gICAgcmlnaHQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlKTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBoZWlnaHQ6IDI2MHB4O1xcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNHM7XFxufVxcblxcbi5naXJsZ2xhZCB7XFxuICAgIGFuaW1hdGlvbjogZ2lybGdsYWQgMC42cztcXG59XFxuXFxuLmdpcmxtYWQge1xcbiAgICBhbmltYXRpb246IGdpcmxtYWQgMC40cyAyO1xcbn1cXG5cXG4uZ2lybGRlZiB7XFxuICAgIGFuaW1hdGlvbjogZ2lybGRlZiAwLjRzO1xcbn1cXG5cXG4uZ2lybGNvbG9yIHtcXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbkBrZXlmcmFtZXMgZ2lybGdsYWQge1xcbiAgICAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgdHJhbnNsYXRlWSgwcHgpfVxcbiAgICAyNSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHRyYW5zbGF0ZVkoLTM1cHgpfVxcbiAgICA1MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHRyYW5zbGF0ZVkoMHB4KX1cXG4gICAgNzUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSB0cmFuc2xhdGVZKC0xMHB4KX1cXG4gICAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgdHJhbnNsYXRlWSgwcHgpfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdpcmxtYWQge1xcbiAgICAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgdHJhbnNsYXRlWSgwcHgpfVxcbiAgICAzMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHRyYW5zbGF0ZVkoMTBweCl9XFxuICAgIDUwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQ1JSkgdHJhbnNsYXRlWSgyMHB4KX1cXG4gICAgNzUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTUlKSB0cmFuc2xhdGVZKDMwcHgpfVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSB0cmFuc2xhdGVZKDBweCl9XFxufVxcblxcbkBrZXlmcmFtZXMgZ2lybGRlZiB7XFxuICAgIDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDBweCkgcm90YXRlKDBkZWcpO31cXG4gICAgNTAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0NSUsIDEwcHgpIHJvdGF0ZSgtMTBkZWcpO31cXG4gICAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwcHgpIHJvdGF0ZSgwZGVnKTt9XFxuXFxufVxcblxcbi5jYXBhbmkge1xcbiAgICBhbmltYXRpb246IGNhcGFuaSAwLjRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNhcGFuaSB7XFxuICAgIDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwcHgpfVxcbiAgICA2NSUge3RyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwcHgpfVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwcHgpfVxcbn1cXG5cXG4uZ3JpZHNoYWtlIHtcXG4gICAgYW5pbWF0aW9uOiBncmlkc2hha2UgMC41cztcXG59XFxuXFxuQGtleWZyYW1lcyBncmlkc2hha2Uge1xcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxMDAlKSByb3RhdGUoMGRlZyk7XFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggN3B4IGJsYWNrKX1cXG4gICAgMjUlIHt0cmFuc2Zvcm06IHNjYWxlKDEwMyUpIHJvdGF0ZSg3ZGVnKTsgXFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA3cHggN3B4IGJsYWNrKX1cXG4gICAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDEwNSUpIHJvdGF0ZSgtM2RlZyk7XFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxNXB4IDdweCBibGFjayl9XFxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMTAwJSkgcm90YXRlKDBkZWcpO1xcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDdweCBibGFjayl9XFxufVxcblxcbiNnYW1lb3ZlcnBhbmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTUlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNnYW1lc3RhdHVzIHtcXG4gICAgZm9udC1mYW1pbHk6IFZvZ3VlLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDY2KTtcXG4gICAgcGFkZGluZzogNDBweCA0MHB4IDBweCA0MHB4O1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMCk7XFxuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwcHgpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2dhbWVzdGF0dXMucGFuZWxzaG93biB7XFxuICAgIGFuaW1hdGlvbjogZ2FtZXN0YXR1cyAzcztcXG4gICAgZmlsdGVyOiBvcGFjaXR5KDEpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdhbWVzdGF0dXMge1xcbiAgICBmcm9tIHtmaWx0ZXI6IG9wYWNpdHkoMCk7fVxcbiAgICB0byB7ZmlsdGVyOiBvcGFjaXR5KDEpO31cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHthbmltYXRlLCBhbmltYXRlQ2FwLCBzaGFrZUdyaWQsIHNob3dFbmRHYW1lLCBoaWRlTWVzc2FnZX1cblxuY29uc3QgZ2lybEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXJsaW1nJyk7XG5jb25zdCBjYXBJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FwaW1nJyk7XG5jb25zdCBncmlkQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWRzY29udGFpbmVyJyk7XG5cbmxldCBsYXN0U2hpcCA9ICdiYXR0bGVzaGlwJztcblxuLy9Td2l0Y2ggdGhlIHNoaXAgZ2lybCB0byB0aGUgcmVsZXZhbnQgaW1hZ2UsIGFuZCB0aGVuIGFuaW1hdGUgaGVyLlxuY29uc3QgYW5pbWF0ZSA9IChzaGlwLCBtb29kKSA9PiB7XG4gICAgbGFzdFNoaXAgPSBzaGlwLnNoaXBOYW1lO1xuXG4gICAgY29uc3QgbmljayA9IHNoaXAuc2hpcE5hbWUuc2xpY2UoMCwgMyk7XG4gICAgZ2lybEltZy5zcmMgPSByZXF1aXJlKGAvc3JjL2ltYWdlcy8ke25pY2t9LSR7bW9vZH0ucG5nYCk7XG5cbiAgICBjb25zdCBjbGFzc0Nob2ljZSA9ICBgZ2lybCR7bW9vZH1gO1xuXG4gICAgLy9BbmltYXRlIHRoZSBzaGlwIGdpcmwuXG4gICAgZ2lybEltZy5jbGFzc0xpc3QucmVtb3ZlKCdnaXJsZGVmJyk7XG4gICAgZ2lybEltZy5jbGFzc0xpc3QucmVtb3ZlKCdnaXJsbWFkJyk7XG4gICAgZ2lybEltZy5jbGFzc0xpc3QucmVtb3ZlKCdnaXJsZ2xhZCcpO1xuICAgIFxuICAgIHZvaWQgZ2lybEltZy5vZmZzZXRXaWR0aDtcbiAgICBnaXJsSW1nLmNsYXNzTGlzdC5hZGQoY2xhc3NDaG9pY2UpO1xuICAgIFxufVxuLy9BbmltYXRlIHRoZSBjYXB0YWluLlxuY29uc3QgYW5pbWF0ZUNhcCA9IChtb29kKSA9PiB7XG5cbiAgICBjYXBJbWcuc3JjID0gcmVxdWlyZShgL3NyYy9pbWFnZXMvY2FwLSR7bW9vZH0ucG5nYCk7XG4gICAgXG4gICAgY2FwSW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcGFuaScpO1xuICAgIHZvaWQgY2FwSW1nLm9mZnNldFdpZHRoO1xuICAgIGNhcEltZy5jbGFzc0xpc3QuYWRkKCdjYXBhbmknKTtcbn1cblxuLy9TaGFrZSB0aGUgZ3JpZHMgdmlvbGVudGx5LlxuY29uc3Qgc2hha2VHcmlkID0gKCkgPT4ge1xuICAgIGdyaWRCb3guY2xhc3NMaXN0LnJlbW92ZSgnZ3JpZHNoYWtlJyk7XG4gICAgdm9pZCBncmlkQm94Lm9mZnNldFdpZHRoO1xuICAgIGdyaWRCb3guY2xhc3NMaXN0LmFkZCgnZ3JpZHNoYWtlJyk7XG59XG5cblxuLy9BbmltYXRlIHNoaXAgZ2lybCBvbiBjbGljay5cbmdpcmxJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vUmVzZXQgc2hpcCBnaXJsIGFuaW1hdGlvbi5cbiAgICAgICAgZ2lybEltZy5jbGFzc0xpc3QucmVtb3ZlKCdnaXJsZGVmJyk7XG4gICAgICAgIGdpcmxJbWcuY2xhc3NMaXN0LnJlbW92ZSgnZ2lybG1hZCcpO1xuICAgICAgICBnaXJsSW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2dpcmxnbGFkJyk7XG4gICAgICAgIFxuICAgICAgICB2b2lkIGdpcmxJbWcub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgLy9QbGF5IGEgcmFuZG9tIG1vb2QgYW5pbWF0aW9ucy5cbiAgICAgICAgY29uc3QgbW9vZHMgPSBbJ2RlZicsICdnbGFkJywgJ21hZCddO1xuICAgICAgICBjb25zdCByYW5kTW9vZCA9IG1vb2RzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXTtcbiAgICAgICAgY29uc3QgbmljayA9IGxhc3RTaGlwLnNsaWNlKDAsIDMpO1xuICAgICAgICBnaXJsSW1nLnNyYyA9IHJlcXVpcmUoYC9zcmMvaW1hZ2VzLyR7bmlja30tJHtyYW5kTW9vZH0ucG5nYCk7XG4gXG4gICAgICAgIGdpcmxJbWcuY2xhc3NMaXN0LmFkZChgZ2lybCR7cmFuZE1vb2R9YCk7XG59KTtcblxuLy9Ub2dnbGUgZ3JleXNjYWxlIG9uIHNoaXBnaXJscy5cbmNvbnN0IGNvbG9yQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yYnRuJyk7XG5jb2xvckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBnaXJsSW1nLmNsYXNzTGlzdC50b2dnbGUoJ2dpcmxjb2xvcicpO1xufSlcblxuY29uc3Qgc2hvd0VuZEdhbWUgPSAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IGVuZE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZXN0YXR1cycpO1xuXG4gICAgZW5kTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdwYW5lbHNob3duJyk7XG4gICAgZW5kTWVzc2FnZS5pbm5lclRleHQgPSAnJ1xuXG4gICAgLy9EaXNwbGF5IGVhY2ggbGV0dGVyIG9mIHRoZSBtZXNzYWdlIG9uZSBieSBvbmUuXG4gICAgdmFyIGkgPSAwOyAgICAgICAgICAgIFxuICAgIGZ1bmN0aW9uIG15TG9vcCgpIHsgICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpOyAgIFxuICAgICAgICAgICAgZW5kTWVzc2FnZS5pbm5lclRleHQgKz0gbWVzc2FnZVtpXTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGlmIChpIDwgbWVzc2FnZS5sZW5ndGgpIHsgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbXlMb29wKCk7ICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9LCA0MDApXG4gICAgfVxuICAgIG15TG9vcCgpOyBcbn1cblxuY29uc3QgaGlkZU1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZW5kTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lc3RhdHVzJyk7XG4gICAgZW5kTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYW5lbHNob3duJyk7XG59IiwiZXhwb3J0IHtHYW1lYm9hcmR9XG5pbXBvcnQgeyBhbmltYXRlLCBhbmltYXRlQ2FwLCBzaGFrZUdyaWQsIHNob3dFbmRHYW1lLCBoaWRlTWVzc2FnZSB9IGZyb20gXCIuL2FuaW1hdGVcIjtcblxuLy9Cb2FyZCBzdGF0ZSBvYmplY3Qgd2l0aCBkYXRhIGZvciBoaXQgY2VsbHMsIGFuZCBzaGlwcyB3aXRoaW4gdGhvc2UgY2VsbHMuXG5jb25zdCBCb2FyZFN0YXRlID0gKCgpID0+IHtcbiAgICBcbiAgICAvL0luaXRpYWxpemUgZGVmYXVsdCAxMDAgY2VsbHMgcmVwcmVzZW50aW5nIHRoZSBnYW1lIGJvYXJkLlxuICAgIGxldCBjZWxscyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgY2VsbHNbaV0gPSBudWxsO1xuICAgIH1cblxuICAgIC8vSW5pdGlhbGl6ZSBkZWZhdWx0IDEwMCBjZWxscyByZXByZXNlbnRpbmcgdGhlIGdhbWUgYm9hcmQuXG4gICAgbGV0IGNvbUNlbGxzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBjb21DZWxsc1tpXSA9IG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRDZWxscyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgY2VsbHNbaV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbUNlbGxzW2ldID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7Y2VsbHMsIGNvbUNlbGxzLCByZXNldENlbGxzfVxufSkoKTtcblxuLy9PYmplY3QgZm9yIG1vc3QgZ2FtZSBsb2dpYyBhbmQgZGlzcGxheWluZyBib2FyZHMgYW5kIHRhcmdldCBncmlkcy5cbmNvbnN0IEdhbWVib2FyZCA9ICgoKSA9PiB7XG4gICAgY29uc3QgYm9hcmRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcbiAgICBjb25zdCBjb21Cb2FyZEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21ib2FyZCcpO1xuXG4gICAgY29uc3QgdGFyZ2V0R3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXRncmlkJyk7XG4gICAgY29uc3QgY29tVGFyZ2V0R3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb210YXJnZXRncmlkJyk7XG5cbiAgICBsZXQgY2VsbHMgPSBib2FyZEJveC5jaGlsZHJlbjtcbiAgICBjb25zdCBjb21DZWxscyA9IGNvbUJvYXJkQm94LmNoaWxkcmVuO1xuXG4gICAgY29uc3QgdGFyZ2V0Q2VsbHMgPSB0YXJnZXRHcmlkLmNoaWxkcmVuO1xuICAgIGNvbnN0IGNvbVRhcmdldENlbGxzID0gIGNvbVRhcmdldEdyaWQuY2hpbGRyZW47XG5cbiAgICBjb25zdCBkaXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyZWN0aW9uYnRuJyk7XG4gICAgY29uc3QgZGlyRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb24nKTsgXG5cbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldGJ0bicpO1xuICAgIFxuICAgIGxldCBvZmZzZXQgPSAxO1xuICAgIGxldCBsZWdhbE1vdmUgPSB0cnVlO1xuICAgIGxldCBwbGF5ZXJTaGlwU3BhY2VzID0gW107XG4gICAgbGV0IGNvbVNoaXBTcGFjZXMgPSBbXTtcbiAgICBsZXQgbGFzdEdob3N0O1xuICAgIGxldCBpbml0aWFsU2V0dXAgPSB0cnVlO1xuICAgIGxldCBpbml0aWFsQ29tYmF0ID0gdHJ1ZTtcblxuICAgIGxldCBjaG9zZW5DZWxscyA9IFtdO1xuICAgIGxldCBzY29yZSA9IDA7XG4gICAgbGV0IHNoaXBJbmRleCA9IDA7XG4gICAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cbiAgICAvL1Jlc2V0IGdhbWUgb24gY2xpY2suXG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIEJvYXJkU3RhdGUucmVzZXRDZWxscygpO1xuICAgICAgICBvZmZzZXQgPSAxO1xuICAgICAgICBsZWdhbE1vdmUgPSB0cnVlO1xuICAgICAgICBwbGF5ZXJTaGlwU3BhY2VzID0gW107XG4gICAgICAgIGNvbVNoaXBTcGFjZXMgPSBbXTtcbiAgICAgICAgZGlyRGlzcGxheS5pbm5lclRleHQgPSAnSG9yaXpvbnRhbCc7XG5cbiAgICAgICAgLy9SZXNldCBBSSBsb2dpYyB2YXJpYWJsZXMuXG4gICAgICAgIGxhc3RGb3VuZCA9IG51bGw7XG4gICAgICAgIGNob3NlbkNlbGxzID0gW107XG4gICAgICAgIGNvbUNob3NlbkNlbGxzID0gW107XG4gICAgICAgIGxhc3RDaG9pY2VIaXQgPSBmYWxzZTtcbiAgICAgICAgdGVzdE9mZnNldCA9IDE7XG4gICAgICAgIGhvckNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdG9wQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBzaGlwSW5kZXggPSAwO1xuICAgICAgICBnYW1lT3ZlciA9IGZhbHNlO1xuXG5cbiAgICAgICAgcmVzZXRHcmlkKGNlbGxzKTtcbiAgICAgICAgcmVzZXRHcmlkKGNvbUNlbGxzKTtcbiAgICAgICAgcmVzZXRHcmlkKHRhcmdldENlbGxzKTtcbiAgICAgICAgcmVzZXRHcmlkKGNvbVRhcmdldENlbGxzKTtcblxuICAgICAgICBzaGFrZUdyaWQoKTtcbiAgICAgICAgaGlkZU1lc3NhZ2UoKTtcblxuICAgICAgICAvL1JlbW92ZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0YXJnZXQgY2VsbHMuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0Q2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRhcmdldENlbGxzW2ldLnJlcGxhY2VXaXRoKHRhcmdldENlbGxzW2ldLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vQWRkIHRvZ2dsZSBmb3Igc2hpcCBwbGFjZW1lbnQgZGlyZWN0aW9uLlxuICAgIGRpckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKG9mZnNldCA9PT0gMSkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gMTA7XG4gICAgICAgICAgICBkaXJEaXNwbGF5LmlubmVyVGV4dCA9ICdWZXJ0aWNhbCc7XG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0ID09PSAxMCl7XG4gICAgICAgICAgICBvZmZzZXQgPSAxO1xuICAgICAgICAgICAgZGlyRGlzcGxheS5pbm5lclRleHQgPSAnSG9yaXpvbnRhbCc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vQWRkIHRvZ2dsZSBvbiBvcmllbnRhdGlvbiBvbiByaWdodCBjbGljay5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgLy9QcmV2ZW50IHNob3dpbmcgY29udGV4dCBtZW51IG9uIHJpZ2h0IGNsaWNrLlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgICAgICAvL1JlbW92ZSBwcmV2aW91cyBzaGlwIGdob3N0LlxuICAgICAgICBBcnJheS5mcm9tKGNlbGxzKS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwZ2hvc3QnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvL1RvZ2dsZSBvZmZzZXQgYW5kIHJlZHJhdyBzaGlwIGdob3N0LlxuICAgICAgICBpZiAob2Zmc2V0ID09PSAxKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAxMDtcbiAgICAgICAgICAgIGRpckRpc3BsYXkuaW5uZXJUZXh0ID0gJ1ZlcnRpY2FsJztcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPT09IDEwKXtcbiAgICAgICAgICAgIG9mZnNldCA9IDE7XG4gICAgICAgICAgICBkaXJEaXNwbGF5LmlubmVyVGV4dCA9ICdIb3Jpem9udGFsJztcbiAgICAgICAgfVxuICAgICAgICBoaWRlR2hvc3QoY2VsbHMpO1xuICAgICAgICBnaG9zdFNoaXAobGFzdEdob3N0WzBdLCBsYXN0R2hvc3RbMV0sIG9mZnNldCwgbGFzdEdob3N0WzNdKTtcbiAgICB9KTtcblxuXG5cbiAgICAvL1Jlc2V0IGdyaWQgdG8gaW5pdGFsIHN0YXRlLlxuICAgIGNvbnN0IHJlc2V0R3JpZCA9IChncmlkKSA9PiB7XG4gICAgICAgIEFycmF5LmZyb20oZ3JpZCkuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXJnZXRjZWxsJykpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICd0YXJnZXRjZWxsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9EcmF3IGEgMTAgeCAxMCBncmlkIGZvciBzaGlwcy5cbiAgICBjb25zdCBkcmF3Qm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xuICAgICAgICAgICAgYm9hcmRCb3guYXBwZW5kQ2hpbGQoY2VsbCk7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0RyYXcgYSAxMCB4IDEwIGdyaWQgZm9yIGNvbXB1dGVyIHNoaXBzLlxuICAgIGNvbnN0IGRyYXdDb21Cb2FyZCA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgICAgICAgICBjb21Cb2FyZEJveC5hcHBlbmRDaGlsZChjZWxsKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vRHJhdyBhIDEwIHggMTAgZ3JpZCBmb3IgdGFyZ2V0aW5nIHRoZSBjb21wdXRlci5cbiAgICBjb25zdCBkcmF3VGFyZ2V0R3JpZCA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCd0YXJnZXRjZWxsJyk7XG4gICAgICAgICAgICB0YXJnZXRHcmlkLmFwcGVuZENoaWxkKGNlbGwpOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vRHJhdyBhIDEwIHggMTAgZ3JpZCBmb3IgdGhlIGNvbXB1dGVyIHRhcmdldGluZyB0aGUgcGxheWVyLlxuICAgIGNvbnN0IGRyYXdDb21UYXJnZXRHcmlkID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3RhcmdldGNlbGwnKTtcbiAgICAgICAgICAgIGNvbVRhcmdldEdyaWQuYXBwZW5kQ2hpbGQoY2VsbCk7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVTY29yZSAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNjb3JlRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xuXG4gICAgICAgIHNjb3JlKys7XG4gICAgICAgIHNjb3JlRGlzcGxheS5pbm5lclRleHQgPSBzY29yZTtcbiAgICB9XG5cbiAgICAvL1BsYWNlIGEgc2hpcCBiYXNlZCBvbiBvZmZzZXQsIGluZGV4LCBhbmQgc2hpcCBsZW5ndGguXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIGluZGV4LCBjdXJyZW50UGxheWVyLCBjZWxscykgPT4ge1xuXG4gICAgICAgIC8vQW5pbWF0ZSB0aGUgcmVsZXZhbnQgc2hpcCBnaXJsLlxuICAgICAgICBhbmltYXRlKHNoaXAsICdkZWYnKTtcblxuICAgICAgICAvL1NldCB0aGUgdXNlZCBzcGFjZXMgdG8gYXZvaWQgYmFzZWQgb24gcGxheWVyLlxuICAgICAgICAvL0FuZCB0aGUgYXNzaWduIHRoZSBwbGFjZWQgc3BhY2VzIHRvIHRoZWlyIGluZGV4IGluIGdhbWUgc3RhdGUuXG4gICAgICAgIGxldCB1c2VkU3BhY2VzID0gW107XG4gICAgICAgIGxldCBzdGF0ZUNlbGxzO1xuICAgICAgICBsZXQgZGVidWdUYXJnZXRDZWxscztcbiAgICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIubmFtZSA9PT0gJ3BsYXllcicpIHtcbiAgICAgICAgICAgIHVzZWRTcGFjZXMgPSBwbGF5ZXJTaGlwU3BhY2VzO1xuICAgICAgICAgICAgc3RhdGVDZWxscyA9IEJvYXJkU3RhdGUuY2VsbHM7XG4gICAgICAgICAgICBkZWJ1Z1RhcmdldENlbGxzID0gY29tVGFyZ2V0Q2VsbHM7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXllci5uYW1lID09PSAnY29tJykge1xuICAgICAgICAgICAgdXNlZFNwYWNlcyA9IGNvbVNoaXBTcGFjZXM7XG4gICAgICAgICAgICBzdGF0ZUNlbGxzID0gQm9hcmRTdGF0ZS5jb21DZWxscztcbiAgICAgICAgICAgIGRlYnVnVGFyZ2V0Q2VsbHMgPSB0YXJnZXRDZWxscztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRGlzcGxheSBzaGlwIGdob3N0IGJhc2VkIG9uIGxlbmd0aCBhbmQgaG92ZXIgaW5kZXguXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgLy9GaWxsIGluIHNlbGVjdGVkIGNlbGxzIGJhc2VkIG9uIHBsYWNlbWVudCBkaXJlY3Rpb24uXG4gICAgICAgICAgICBjZWxsc1tpbmRleCArIGkgKiBvZmZzZXRdLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBnaG9zdCcpO1xuICAgICAgICAgICAgY2VsbHNbaW5kZXggKyBpICogb2Zmc2V0XS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG5cbiAgICAgICAgICAgIC8vU2V0IGVhY2ggc3BhY2Ugb2YgdGhlIHNoaXAgdG8gdGFrZW4gaW4gc2hpcFNwYWNlcy5cbiAgICAgICAgICAgIHVzZWRTcGFjZXMucHVzaChpbmRleCArIGkgKiBvZmZzZXQpO1xuXG4gICAgICAgICAgICAvL1NldCB0aGUgc2VsZWN0ZWQgc3BhY2UgdG8gdXNlZC5cbiAgICAgICAgICAgIGNlbGxzW2luZGV4ICsgaSAqIG9mZnNldF0uY2xhc3NMaXN0LmFkZCgnc2hpcGNlbGwnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9VcGRhdGUgdGhlIGdhbWUgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNoaXAuXG4gICAgICAgICAgICBzdGF0ZUNlbGxzW2luZGV4ICsgaSAqIG9mZnNldF0gPSBzaGlwO1xuICAgICAgICAgICAgc3RhdGVDZWxsc1tpbmRleCArIGkgKiBvZmZzZXRdWydoaXQnXSA9IGZhbHNlO1xuICAgICAgICAgICAgLy9kZWJ1Z1RhcmdldENlbGxzW2luZGV4ICsgaSAqIG9mZnNldF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Ymx1ZSc7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vRGlzcGxheSB3aGVyZSBhIHNoaXAgd291bGQgcGxhY2VkIGluIGEgaG92ZXJlZCBsb2NhdGlvbi5cbiAgICBjb25zdCBnaG9zdFNoaXAgPSAoc2hpcCwgaW5kZXgsIG9mZnNldCwgY2VsbHMpID0+IHtcblxuICAgICAgICBsYXN0R2hvc3QgPSBbc2hpcCwgaW5kZXgsIG9mZnNldCwgY2VsbHNdO1xuICAgICAgICBjb25zdCBpbGxlZ2FscyA9IGdldElsbGVnYWxDZWxscyhzaGlwLnNoaXBMZW5ndGgpO1xuXG4gICAgICAgIGxlZ2FsTW92ZSA9IHRydWU7XG4gICAgICAgIGxldCB1c2VkU3BhY2VzO1xuXG4gICAgICAgIC8vU2V0IHRoZSBncmlkIHRvIHVzZSBiYXNlZCBvbiB0aGUgY3VycmVudFBsYXllci5cbiAgICAgICAgaWYgKGNlbGxzID09PSBjb21DZWxscykge1xuICAgICAgICAgICAgdXNlZFNwYWNlcyA9IGNvbVNoaXBTcGFjZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1c2VkU3BhY2VzID0gcGxheWVyU2hpcFNwYWNlcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRGlzcGxheSBzaGlwIGdob3N0IGJhc2VkIG9uIGxlbmd0aCBhbmQgaG92ZXIgaW5kZXguXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgLy9TZXQgdGhlIG1vdmUgdG8gaWxsZWdhbCBpZiBpdCBpcyBpbiBpbGxlZ2FsIG1vdmVzLlxuICAgICAgICAgICAgLy9vciBmb3IgdmVydGljYWwsIGlmIGl0IGlzIHBhc3QgdGhlIGdyaWQuXG4gICAgICAgICAgICBpZiAob2Zmc2V0ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlsbGVnYWxzLmluY2x1ZGVzKGluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICBsZWdhbE1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggKyBpICogb2Zmc2V0ID4gOTkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVnYWxNb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL1NldCB0aGUgbW92ZSB0byBpbGxlZ2FsIGlmIGl0IGludGVyc2VjdHMgYSBwbGFjZSBzaGlwLlxuICAgICAgICAgICAgaWYgKHVzZWRTcGFjZXMuaW5jbHVkZXMoaW5kZXggKyBpICogb2Zmc2V0KSkge1xuICAgICAgICAgICAgICAgIGxlZ2FsTW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL1N0b3AgZmlsbGluZyBpbiBjZWxscyBwYXN0IHRoZSBncmlkLlxuICAgICAgICAgICAgaWYgKGluZGV4ICsgaSAqIG9mZnNldCA+IDk5KSBicmVhaztcblxuICAgICAgICAgICAgLy9GaWxsIGluIHNlbGVjdGVkIGNlbGxzIGJhc2VkIG9uIHBsYWNlbWVudCBkaXJlY3Rpb24uXG4gICAgICAgICAgICBjZWxsc1tpbmRleCArIGkgKiBvZmZzZXRdLmNsYXNzTGlzdC5hZGQoJ3NoaXBnaG9zdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9Db2xvciBzZWxlY3RlZCBjZWxscyBwaW5rIGlmIG1vdmUgaXMgaWxsZWdhbC5cbiAgICAgICAgaWYgKCFsZWdhbE1vdmUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwO2kgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vU3RvcCBmaWxsaW5nIGluIGNlbGxzIHBhc3QgdGhlIGdyaWQuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICsgaSAqIG9mZnNldCA+IDk5KSBicmVhaztcbiAgICBcbiAgICAgICAgICAgICAgICBjZWxsc1tpbmRleCArIGkgKiBvZmZzZXRdLmNsYXNzTGlzdC5hZGQoJ2lsbGVnYWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vSGlkZSBhIHByZXZpb3VzbHkgZGlzcGxheWVkIHNoaXAgZ2hvc3QuXG4gICAgY29uc3QgaGlkZUdob3N0ID0gKGNlbGxzKSA9PiB7XG4gICAgICAgIEFycmF5LmZyb20oY2VsbHMpLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAvL0NsZWFyIGNlbGxzIHRoYXQgYXJlIG5vdCBjdXJyZW50bHkgaG91c2luZyBhIHNoaXAuXG4gICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSkge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCBzaGlwIGhpdCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCBzaGlwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcGdob3N0Jyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdpbGxlZ2FsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGdldElsbGVnYWxDZWxscyA9IChzaGlwTGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICAvL1NldCB0aGUgaWxsZWdhbCBwb3NpdGlvbnMgZm9yIGEgc2hpcC5cbiAgICAgICAgICAgIGxldCBpbGxlZ2FsQ2VsbHMgPSBbOSwgMTksIDI5LCAzOSwgNDksIDU5LCA2OSwgNzksIDg5LCA5OV07XG4gICAgICAgICAgICBpbGxlZ2FsQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXBMZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWxsZWdhbENlbGxzLnB1c2goY2VsbCArIChpKi0xKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaWxsZWdhbENlbGxzO1xuICAgIH1cblxuICAgIC8vTGV0IHRoZSBwbGF5ZXIgcGxhY2UgYWxsIHRoZWlyIHNoaXBzLlxuICAgIGNvbnN0IHNldHVwID0gKHBsYXllciwgY29tKSA9PiB7XG5cbiAgICAgICAgLy9EaXNwbGF5IHNoaXAgaW5mbyB3aGVuIGhvdmVyaW5nIG92ZXIgYW4gaWNvbi5cbiAgICAgICAgY29uc3QgaWNvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uJykpO1xuICAgICAgICBjb25zdCBuYW1lRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29ubmFtZScpO1xuICAgICAgICBjb25zdCBkbWdEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb25kbWcnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIC8vUHJldmVudCByZS1hZGRpbmcgbGlzdGVuZXJzLlxuICAgICAgICAgICAgaWYgKCFpbml0aWFsU2V0dXApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWNvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5hbWVEaXNwbGF5LmlubmVyVGV4dCA9IHBsYXllci5zaGlwc1tpXS5zaGlwTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGRtZ0Rpc3BsYXkuaW5uZXJUZXh0ID0gYCR7cGxheWVyLnNoaXBzW2ldLmRhbWFnZX0gRE1HYDtcbiAgICAgICAgICAgICAgICBhbmltYXRlKHBsYXllci5zaGlwc1tpXSwgJ2RlZicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vSGlnaGxpZ2h0IGhvdmVyZWQgc2hpcC5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCb2FyZFN0YXRlLmNlbGxzW2pdICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBCb2FyZFN0YXRlLmNlbGxzW2pdLnNoaXBOYW1lID09PSBpY29uc1tpXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbal0uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL1JlbW92ZSBoaWdobGlnaHRpbmcgb24gbW91c2UgbGVhdmUuXG4gICAgICAgICAgICBpY29uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGhpZGVHaG9zdChjZWxscyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWNvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZShwbGF5ZXIuc2hpcHNbaV0sICdnbGFkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgIC8vT25seSBkcmF3IGNlbGxzIG9uIGluaXRpYWwgc2V0dXAuXG4gICAgICAgIGlmIChpbml0aWFsU2V0dXApIHtcbiAgICAgICAgICAgIGRyYXdCb2FyZCgpO1xuICAgICAgICAgICAgZHJhd0NvbUJvYXJkKCk7XG4gICAgICAgICAgICBkcmF3VGFyZ2V0R3JpZCgpO1xuICAgICAgICAgICAgZHJhd0NvbVRhcmdldEdyaWQoKTtcbiAgICAgICAgICAgIGluaXRpYWxTZXR1cCA9IGZhbHNlO1xuICAgICAgICB9XG5cblxuICAgICAgICAvL1Jlc2V0IGRhbWFnZSBhbmQgc3VuayBvbiBhbGwgc2hpcHMuXG4gICAgICAgIHBsYXllci5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgc2hpcC5kYW1hZ2UgPSAwO1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBjb20uc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIHNoaXAuZGFtYWdlID0gMDtcbiAgICAgICAgICAgIHNoaXAuc3VuayA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBcblxuICAgICAgICAvL0luaXRpYWxpemUgZXZlbnQgbGlzdGVuZXJzIGZvciBhbGwgY2VsbHMuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgLy9TaG93IHRoZSBzaGlwJ3MgZ2hvc3QgYmFzZWQgb24gdGhlIGN1cnJlbnQgc2hpcCBhbmRcbiAgICAgICAgICAgIC8vdGhlIGluZGV4IG9mIHRoZSBjZWxsIGhvdmVyZWQuXG4gICAgICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdob3N0U2hpcChwbGF5ZXIuc2hpcHNbc2hpcEluZGV4XSwgaSwgb2Zmc2V0LCBjZWxscyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9TaG93IHRoZSBzaGlwJ3MgZ2hvc3QgYmFzZWQgb24gdGhlIGN1cnJlbnQgc2hpcCBhbmRcbiAgICAgICAgICAgIC8vdGhlIGluZGV4IG9mIHRoZSBjZWxsIGhvdmVyZWQuXG4gICAgICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGhpZGVHaG9zdChjZWxscyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9QcmV2ZW50IGNsaWNraW5nIHNoaXBzIGluIGluZGVudGljYWwgY2VsbHMuIFxuICAgICAgICAgICAgICAgIGlmIChCb2FyZFN0YXRlLmNlbGxzW2ldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobGVnYWxNb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcChwbGF5ZXIuc2hpcHNbc2hpcEluZGV4XSwgaSwgcGxheWVyLCBjZWxscyk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBJbmRleCArKztcblxuICAgICAgICAgICAgICAgICAgICAvL1N3aXRjaCByb3VuZCB0byBjb21iYXQgaWYgYWxsIHNoaXBzIHBsYWNlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBJbmRleCA+IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29tYmF0KHBsYXllciwgY29tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICB9XG5cbiAgICAvL1N3aXRjaCBwaGFzZSB0byBjb21iYXQgYW5kIHJlbW92ZSBhbGwgc2V0dXAgbGlzdGVuZXJzLlxuICAgIGNvbnN0IHN0YXJ0Q29tYmF0ID0gKHBsYXllciwgY29tKSA9PiB7XG5cbiAgICAgICAgLy9SZW1vdmUgc2V0dXAgcGhhc2UgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZXBsYWNlV2l0aChjZWxsc1tpXS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9QbGFjZSBjb21wdXRlcidzIHNoaXBzLlxuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGxldCBmbGlwO1xuICAgICAgICBcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbS5zaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tUGxhY2VtZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGluZGV4ICA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgICAgICAgICAgZmxpcCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICAgICAgKGZsaXAgPT09IDApID8gb2Zmc2V0ID0gMSA6IG9mZnNldCA9IDEwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGdob3N0U2hpcChjb20uc2hpcHNbaV0sIGluZGV4LCBvZmZzZXQsIGNvbUNlbGxzKTtcbiAgICAgICAgICAgICAgICBoaWRlR2hvc3QoY29tQ2VsbHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0Nob29zZSBhIHJhbmRvbSBpbmRleCB0byBwbGFjZSBhIHNoaXA7XG4gICAgICAgICAgICAvL0FuZCByZXJvbGwgaW4gdGhlIGNhc2Ugb2YgaWxsZWdhbCBtb3ZlcyBiZWluZyBjaG9zZW4uXG4gICAgICAgICAgICByYW5kb21QbGFjZW1lbnQoKTtcblxuICAgICAgICAgICAgd2hpbGUgKCFsZWdhbE1vdmUpIHtcbiAgICAgICAgICAgICAgICByYW5kb21QbGFjZW1lbnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGxhY2VTaGlwKGNvbS5zaGlwc1tpXSwgaW5kZXgsIGNvbSwgY29tQ2VsbHMpXG4gICAgICAgIH0gICBcblxuICAgICAgICAvL0FkZCBldmVudCBsaXN0ZW5lciBmb3IgbWFya2luZyBhIHN0cmlrZSBvbiB0aGUgY29tcHV0ZXIuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRhcmdldENlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy9TdG9wIHRoZSBlbnRpcmUgZnVuY3Rpb24gaWYgdGhlIGdhbWUgaXMgb3Zlci5cbiAgICAgICAgICAgICAgICBpZiAoZ2FtZU92ZXIpIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL1ByZXZlbnQgcmVjbGlja2luZyBhbiBhbHJlYWR5IHNlbGVjdGVkIGNlbGwuXG4gICAgICAgICAgICAgICAgaWYgKGNob3NlbkNlbGxzLmluY2x1ZGVzKGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjaG9zZW5DZWxscy5wdXNoKGkpO1xuXG4gICAgICAgICAgICAgICAgLy9IaXQgdGhlIHNlbGVjdGVkIGNlbGwgaWYgdGhlcmUgaXMgYSBzaGlwIHRoZXJlLlxuICAgICAgICAgICAgICAgIGlmIChCb2FyZFN0YXRlLmNvbUNlbGxzW2ldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgLy9BZGQgb25lIGRhbWFnZSB0byB0aGUgc2VsZWN0ZWQgc2hpcC5cbiAgICAgICAgICAgICAgICAgICAgQm9hcmRTdGF0ZS5jb21DZWxsc1tpXVsnZGFtYWdlJ10gKz0gMTtcblxuICAgICAgICAgICAgICAgICAgICAvL0FuaW1hdGUgdGhlIGNhcHRhaW4uXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVDYXAoJ2dsYWQnKTtcblxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGZvciBhIHN1bmsgc2hpcC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEJvYXJkU3RhdGUuY29tQ2VsbHNbaV1bJ2RhbWFnZSddID49IEJvYXJkU3RhdGUuY29tQ2VsbHNbaV1bJ3NoaXBMZW5ndGgnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQm9hcmRTdGF0ZS5jb21DZWxsc1tpXS5zdW5rID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9BbmltYXRlIHRoZSBjYXB0YWluLlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUNhcCgnbWFkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFrZUdyaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNjb3JlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRGlzcGxheSB0aGUgd2hvbGUgc3Vua2VuIGJhdHRsZXNoaXAuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEJvYXJkU3RhdGUuY29tQ2VsbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQm9hcmRTdGF0ZS5jb21DZWxsc1tqXSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb2FyZFN0YXRlLmNvbUNlbGxzW2pdLnNoaXBOYW1lID09PSBCb2FyZFN0YXRlLmNvbUNlbGxzW2ldLnNoaXBOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldENlbGxzW2pdLmNsYXNzTGlzdC5hZGQoJ3N1bmtlbnNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL01hcmsgYSBzdHJpa2UgdGhhdCBtaXNzZWQuXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFnYW1lT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBnZXRXaW5uZXIocGxheWVyLCBjb20pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL1BsYXkgYW4gQUkgdHVybiBpZiB0aGUgZ2FtZSBpcyBub3Qgb3Zlci5cbiAgICAgICAgICAgICAgICBpZiAoZ2V0V2lubmVyKHBsYXllcixjb20pICE9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb21UdXJuKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWdhbWVPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFdpbm5lcihwbGF5ZXIsIGNvbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gICAgICAgXG4gICAgICAgIFxuICAgICAgICBpbml0aWFsQ29tYmF0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGxhc3RGb3VuZCA9IG51bGw7XG4gICAgbGV0IGNvbUNob3NlbkNlbGxzID0gW107XG4gICAgbGV0IGxhc3RDaG9pY2VIaXQgPSBmYWxzZTtcbiAgICBsZXQgdGVzdE9mZnNldCA9IDE7XG4gICAgbGV0IGhvckNoZWNrZWQgPSBmYWxzZTtcbiAgICBsZXQgdG9wQ2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qga2lsbEluZGV4ID0gKGluZGV4KSA9PiB7XG5cbiAgICAgICAgLy9TdGFydCBieSBhdHRlbXB0aW5nIHRvIGRlc3Ryb3kgYSBzaGlwIGhvcml6b250YWxseS5cbiAgICAgICAgY29uc3Qga2lsbEhvcml6b24gPSAoKSA9PiB7XG4gICAgICAgICAgICAvL1ByZXZlbnQgc2VsZWN0aW5nIGEgcHJldmlvdXNseSBjaG9zZW4gY2VsbCBvbiB0aGUgZWRnZSBvZiBhIHNoaXAuXG4gICAgICAgICAgICBpZiAoY29tQ2hvc2VuQ2VsbHMuaW5jbHVkZXMobmV3SW5kZXggKyAxKSkge1xuICAgICAgICAgICAgICAgIGxhc3RDaG9pY2VIaXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9DaGFuZ2UgZGlyZWN0aW9uIGlmIGhvcml6b250YWwgZW5kIG9mIHNoaXAgaXMgZm91bmQuXG4gICAgICAgICAgICBpZiAobGFzdENob2ljZUhpdCkge1xuICAgICAgICAgICAgICAgIG5ld0luZGV4ICs9IHRlc3RPZmZzZXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlc3RPZmZzZXQgPSAtMTtcbiAgICAgICAgICAgICAgICAvL1NraXAgb3ZlciBwcmV2aW91c2x5IHNlbGVjdGVkIGNlbGxzLlxuICAgICAgICAgICAgICAgIHdoaWxlIChjb21DaG9zZW5DZWxscy5pbmNsdWRlcyhuZXdJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggKz0gdGVzdE9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA+IDk5KSB7XG4gICAgICAgICAgICAgICAgbmV3SW5kZXggLT0gMTtcbiAgICAgICAgICAgICAgICAvL1NraXAgb3ZlciBwcmV2aW91c2x5IHNlbGVjdGVkIGNlbGxzLlxuICAgICAgICAgICAgICAgIHdoaWxlIChjb21DaG9zZW5DZWxscy5pbmNsdWRlcyhuZXdJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggLT0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL1N0YXJ0IHRvIGRlc3Ryb3kgYSBzaGlwIGlmIGl0IGlzIG9yaWVudGVkIHZlcnRpY2FsbHkuXG4gICAgICAgIGNvbnN0IGtpbGxWZXJ0ID0gKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL0NoYW5nZSBkaXJlY3Rpb24gaWYgYm90dG9tIG9mIHNoaXAgaXMgZm91bmQuXG4gICAgICAgICAgICBpZiAoQm9hcmRTdGF0ZS5jZWxsc1tuZXdJbmRleCAtIDEwXSA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICAgICAgdG9wQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b3BDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGVzdE9mZnNldCA9IDEwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZXN0T2Zmc2V0ID0gLTEwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXdJbmRleCArPSB0ZXN0T2Zmc2V0O1xuXG4gICAgICAgICAgICAvL1NraXAgb3ZlciBwcmV2aW91c2x5IHNlbGVjdGVkIGNlbGxzLlxuICAgICAgICAgICAgd2hpbGUgKGNvbUNob3NlbkNlbGxzLmluY2x1ZGVzKG5ld0luZGV4KSkge1xuICAgICAgICAgICAgICAgIG5ld0luZGV4ICs9IHRlc3RPZmZzZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vQXZvaWQgc2VsZWN0aW5nIGEgY2VsbCBvdXRzaWRlIG9mIHRoZSBncmlkLlxuICAgICAgICAgICAgaWYgKG5ld0luZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIG5ld0luZGV4ICs9IDEwO1xuICAgICAgICAgICAgICAgIC8vU2tpcCBvdmVyIHByZXZpb3VzbHkgc2VsZWN0ZWQgY2VsbHMuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGNvbUNob3NlbkNlbGxzLmluY2x1ZGVzKG5ld0luZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCArPSAxMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXdJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIC8vU3dpdGNoIG1vZGUgdG8gdmVydGljYWwga2lsbCBpZiBob3Jpem9udGFsIGlzIGRvbmUuXG4gICAgICAgIGlmICh0ZXN0T2Zmc2V0ICE9PSAxICYmIEJvYXJkU3RhdGUuY2VsbHNbbGFzdEZvdW5kIC0xXSA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICBob3JDaGVja2VkID0gdHJ1ZTsgXG4gICAgICAgIH1cblxuICAgICAgICAvL0lmIGhvcml6b250YWwgb2Ygc2hpcCBpcyBjaGVja2VkLCBzd2l0Y2ggdG8ga2lsbGluZyB2ZXJ0aWNhbGx5LlxuICAgICAgICBpZiAoaG9yQ2hlY2tlZCkge1xuICAgICAgICAgICAga2lsbFZlcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtpbGxIb3Jpem9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3SW5kZXg7XG4gICAgfVxuXG4gICAgLy9QbGF5IHRoZSBjb21wdXRlcidzIHR1cm4uXG4gICAgY29uc3QgY29tVHVybiA9ICgpID0+IHtcblxuICAgICAgICAvL1JvbGwgYSByYW5kb20gY2VsbCwgYW5kIHJlcm9sbCBpZiBpdCBpcyBhIGhpdCBvciBhIG1pc3MuXG4gICAgICAgIGxldCBpbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDk5KTtcbiAgICAgICAgd2hpbGUgKGNvbUNob3NlbkNlbGxzLmluY2x1ZGVzKGluZGV4KSkge1xuICAgICAgICAgICAgaW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5OSk7XG4gICAgICAgIH0gICAgIFxuXG4gICAgICAgIC8vSWYgc2hpcCBoYXMgYmVlbiBmb3VuZCBhbmQgbm90IGRlc3Ryb3llZCwgZGVzdHJveSBpdC5cbiAgICAgICAgaWYgKGxhc3RGb3VuZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaW5kZXggPSBraWxsSW5kZXgobGFzdEZvdW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vUmVtb3ZlIHRoZSBzZWxlY3RlZCBjZWxsIGZyb20gY29tIGNob2ljZXMuXG4gICAgICAgIGNvbUNob3NlbkNlbGxzLnB1c2goaW5kZXgpO1xuXG4gICAgICAgIGlmIChCb2FyZFN0YXRlLmNlbGxzW2luZGV4XSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgQm9hcmRTdGF0ZS5jZWxsc1tpbmRleF0gIT09ICdtaXNzJykge1xuICAgICBcbiAgICAgICAgICAgIC8vTWFyayB0aGUgc2hpcCBoaXQgaW5kZXguXG4gICAgICAgICAgICBsYXN0Rm91bmQgPSBpbmRleDtcbiAgICAgICAgICAgIGxhc3RDaG9pY2VIaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb21UYXJnZXRDZWxsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICBjZWxsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG5cbiAgICAgICAgICAgIC8vQWRkIG9uZSBkYW1hZ2UgdG8gdGhlIHNlbGVjdGVkIHNoaXAgYW5kIHBhcnRpY3VsYXIgY2VsbC5cbiAgICAgICAgICAgIEJvYXJkU3RhdGUuY2VsbHNbaW5kZXhdWydkYW1hZ2UnXSArPSAxO1xuXG4gICAgICAgICAgICBCb2FyZFN0YXRlLmNlbGxzW2luZGV4XVsnaGl0J10gPSB0cnVlO1xuXG4gICAgICAgICAgICAvL0FuaW1hdGUgc2hpcCBnaXJsLlxuICAgICAgICAgICAgYW5pbWF0ZShCb2FyZFN0YXRlLmNlbGxzW2luZGV4XSwgJ2RlZicpO1xuXG4gICAgICAgICAgICAvL0NoZWNrIGZvciBhIHN1bmsgc2hpcC5cbiAgICAgICAgICAgIGlmIChCb2FyZFN0YXRlLmNlbGxzW2luZGV4XVsnZGFtYWdlJ10gPj0gQm9hcmRTdGF0ZS5jZWxsc1tpbmRleF1bJ3NoaXBMZW5ndGgnXSkge1xuICAgICAgICAgICAgICAgIEJvYXJkU3RhdGUuY2VsbHNbaW5kZXhdLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRlc3RPZmZzZXQgPSAxO1xuICAgICAgICAgICAgICAgIGhvckNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0b3BDaGVja2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvL0FuaW1hdGUgdGhlIGNhcHRhaW4gYW5kIHRoZSBzaGlwIGdpcmwuXG4gICAgICAgICAgICAgICAgYW5pbWF0ZUNhcCgnZGVmJyk7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZShCb2FyZFN0YXRlLmNlbGxzW2luZGV4XSwgJ21hZCcpO1xuXG4gICAgICAgICAgICAgICAgc2hha2VHcmlkKCk7XG5cbiAgICAgICAgICAgICAgICAvL0Rpc3BsYXkgdGhlIHdob2xlIHN1bmtlbiBiYXR0bGVzaGlwLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQm9hcmRTdGF0ZS5jZWxscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJvYXJkU3RhdGUuY2VsbHNbal0gIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIEJvYXJkU3RhdGUuY2VsbHNbal0uc2hpcE5hbWUgPT09IEJvYXJkU3RhdGUuY2VsbHNbaW5kZXhdLnNoaXBOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21UYXJnZXRDZWxsc1tqXS5jbGFzc0xpc3QuYWRkKCdzdW5rZW5zaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1N3aXRjaCBiYWNrIHRvIGh1bnRpbmcgZm9yIGEgc2hpcC5cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RGb3VuZCAhPT0gbnVsbCkgbGFzdEZvdW5kID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vTWFyayBhIHN0cmlrZSB0aGF0IG1pc3NlZC5cbiAgICAgICAgICAgIGNvbVRhcmdldENlbGxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICBjZWxsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgQm9hcmRTdGF0ZS5jZWxsc1tpbmRleF0gPSAnbWlzcyc7XG4gICAgICAgICAgICBsYXN0Q2hvaWNlSGl0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0NoZWNrIGZvciB3aW5uZXIuXG4gICAgY29uc3QgZ2V0V2lubmVyID0gKHBsYXllciwgY29tKSA9PiB7XG4gICAgICAgIGxldCBwbGF5ZXJUb3RhbCA9IDA7XG4gICAgICAgIGxldCBjb21Ub3RhbCA9IDA7XG5cbiAgICAgICAgXG5cbiAgICAgICAgLy9GaW5kIHRoZSB0b3RhbCBvZiBzaGlwcyBzdW5rIGZvciB0aGUgcGxheWVyIGFuZCBjb21wdXRlci5cbiAgICAgICAgcGxheWVyLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5zdW5rKSBjb21Ub3RhbCsrO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5zdW5rKSBwbGF5ZXJUb3RhbCsrO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL1JldHVybiB0aGUgd2lubmVyIGlmIHRoZXJlIGlzIG9uZS5cbiAgICAgICAgaWYgKHBsYXllclRvdGFsID09PSA1KSB7XG4gICAgICAgICAgICBpZiAoIWdhbWVPdmVyKSB7XG4gICAgICAgICAgICAgICAgc2hvd0VuZEdhbWUoJ1ZJQ09UT1JZJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQbGF5ZXIgV2lucycpO1xuICAgICAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICAgICAgfSBlbHNlIGlmIChjb21Ub3RhbCA9PT0gNSkge1xuICAgICAgICAgICAgaWYgKCFnYW1lT3Zlcikge1xuICAgICAgICAgICAgICAgIHNob3dFbmRHYW1lKCdGQUlMVVJFJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcHV0ZXIgd2lucyEnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGNvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7ZHJhd0JvYXJkLCBwbGFjZVNoaXAsIHNldHVwLCBnZXRJbGxlZ2FsQ2VsbHN9XG59KSgpO1xuXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmF0LWRlZi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYmF0LWRlZi5wbmdcIixcblx0XCIuL2JhdC1nbGFkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9iYXQtZ2xhZC5wbmdcIixcblx0XCIuL2JhdC1pY29uLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9iYXQtaWNvbi5wbmdcIixcblx0XCIuL2JhdC1tYWQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2JhdC1tYWQucG5nXCIsXG5cdFwiLi9jYXAtZGVmLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9jYXAtZGVmLnBuZ1wiLFxuXHRcIi4vY2FwLWdsYWQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2NhcC1nbGFkLnBuZ1wiLFxuXHRcIi4vY2FwLW1hZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvY2FwLW1hZC5wbmdcIixcblx0XCIuL2Nhci1kZWYucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2Nhci1kZWYucG5nXCIsXG5cdFwiLi9jYXItZ2xhZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvY2FyLWdsYWQucG5nXCIsXG5cdFwiLi9jYXItaWNvbi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvY2FyLWljb24ucG5nXCIsXG5cdFwiLi9jYXItbWFkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9jYXItbWFkLnBuZ1wiLFxuXHRcIi4vY3J1LWRlZi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvY3J1LWRlZi5wbmdcIixcblx0XCIuL2NydS1nbGFkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9jcnUtZ2xhZC5wbmdcIixcblx0XCIuL2NydS1pY29uLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9jcnUtaWNvbi5wbmdcIixcblx0XCIuL2NydS1tYWQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2NydS1tYWQucG5nXCIsXG5cdFwiLi9kYXRhLzAwMS0wMDAucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2RhdGEvMDAxLTAwMC5wbmdcIixcblx0XCIuL2RhdGEvMDAxLTAwMS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZGF0YS8wMDEtMDAxLnBuZ1wiLFxuXHRcIi4vZGF0YS8wMDEtMDAyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9kYXRhLzAwMS0wMDIucG5nXCIsXG5cdFwiLi9kYXRhLzAwMi0wMDAucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2RhdGEvMDAyLTAwMC5wbmdcIixcblx0XCIuL2RhdGEvMDAyLTAwMS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZGF0YS8wMDItMDAxLnBuZ1wiLFxuXHRcIi4vZGF0YS8wMDItMDAyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9kYXRhLzAwMi0wMDIucG5nXCIsXG5cdFwiLi9kYXRhLzAwMy0wMDAucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2RhdGEvMDAzLTAwMC5wbmdcIixcblx0XCIuL2RhdGEvMDAzLTAwMS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZGF0YS8wMDMtMDAxLnBuZ1wiLFxuXHRcIi4vZGF0YS8wMDMtMDAyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9kYXRhLzAwMy0wMDIucG5nXCIsXG5cdFwiLi9kYXRhLzAwNC0wMDAucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2RhdGEvMDA0LTAwMC5wbmdcIixcblx0XCIuL2RhdGEvMDA0LTAwMS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZGF0YS8wMDQtMDAxLnBuZ1wiLFxuXHRcIi4vZGF0YS8wMDQtMDAyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9kYXRhLzAwNC0wMDIucG5nXCIsXG5cdFwiLi9kYXRhLzAwNS0wMDAucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2RhdGEvMDA1LTAwMC5wbmdcIixcblx0XCIuL2RhdGEvMDA1LTAwMS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZGF0YS8wMDUtMDAxLnBuZ1wiLFxuXHRcIi4vZGF0YS8wMDUtMDAyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9kYXRhLzAwNS0wMDIucG5nXCIsXG5cdFwiLi9kZXMtZGVmLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9kZXMtZGVmLnBuZ1wiLFxuXHRcIi4vZGVzLWdsYWQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2Rlcy1nbGFkLnBuZ1wiLFxuXHRcIi4vZGVzLWljb24ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2Rlcy1pY29uLnBuZ1wiLFxuXHRcIi4vZGVzLW1hZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZGVzLW1hZC5wbmdcIixcblx0XCIuL3N1Yi1kZWYucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3N1Yi1kZWYucG5nXCIsXG5cdFwiLi9zdWItZ2xhZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvc3ViLWdsYWQucG5nXCIsXG5cdFwiLi9zdWItaWNvbi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvc3ViLWljb24ucG5nXCIsXG5cdFwiLi9zdWItbWFkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9zdWItbWFkLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwtLipcXFxcLnBuZyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2FwLWRlZi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvY2FwLWRlZi5wbmdcIixcblx0XCIuL2NhcC1nbGFkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9jYXAtZ2xhZC5wbmdcIixcblx0XCIuL2NhcC1tYWQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2NhcC1tYWQucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcL2NhcFxcXFwtLipcXFxcLnBuZyRcIjsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBhbmltYXRlLCBhbmltYXRlQ2FwIH0gZnJvbSAnLi9hbmltYXRlJztcbmV4cG9ydCB7c3VtfVxuXG5mdW5jdGlvbiBzdW0oYSwgYikge1xuICAgIHJldHVybiBhICsgYjtcbn1cblxuY29uc3QgU2hpcCA9IChsZW5ndGgsIG5hbWUpID0+IHtcbiAgICBsZXQgc2hpcExlbmd0aCA9IGxlbmd0aDtcbiAgICBsZXQgc2hpcE5hbWUgPSBuYW1lO1xuICAgIGxldCBkYW1hZ2UgPSAwO1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG4gICAgXG4gICAgcmV0dXJuIHtzaGlwTGVuZ3RoLCBzaGlwTmFtZSwgZGFtYWdlLCBzdW5rfVxufTtcblxuY29uc3QgUGxheWVyID0gKHNoaXBzLCBuYW1lKSA9PiB7XG4gICAgIHJldHVybiB7c2hpcHMsIG5hbWV9XG59O1xuXG5sZXQgc2hpcHMgPSBbXTtcbmxldCBzaGlwczIgPSBbXTtcblxuY29uc3QgZGVzdHJveWVyID0gU2hpcCgyLCAnZGVzdHJveWVyJyk7XG5jb25zdCBjcnVpc2VyID0gU2hpcCgzLCAnY3J1aXNlcicpO1xuY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzLCAnc3VibWFyaW5lJyk7XG5jb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0LCAnYmF0dGxlc2hpcCcpO1xuY29uc3QgY2FycmllciA9IFNoaXAoNSwgJ2NhcnJpZXInKTtcblxuY29uc3QgZGVzdHJveWVyMiA9IFNoaXAoMiwgJ2Rlc3Ryb3llcicpO1xuY29uc3QgY3J1aXNlcjIgPSBTaGlwKDMsICdjcnVpc2VyJyk7XG5jb25zdCBzdWJtYXJpbmUyID0gU2hpcCgzLCAnc3VibWFyaW5lJyk7XG5jb25zdCBiYXR0bGVzaGlwMiA9IFNoaXAoNCwgJ2JhdHRsZXNoaXAnKTtcbmNvbnN0IGNhcnJpZXIyID0gU2hpcCg1LCAnY2FycmllcicpO1xuXG5zaGlwcy5wdXNoKGRlc3Ryb3llciwgY3J1aXNlciwgc3VibWFyaW5lLCBiYXR0bGVzaGlwLCBjYXJyaWVyKTtcbnNoaXBzMi5wdXNoKGRlc3Ryb3llcjIsIGNydWlzZXIyLCBzdWJtYXJpbmUyLCBiYXR0bGVzaGlwMiwgY2FycmllcjIpO1xuXG5sZXQgcGxheWVyID0gUGxheWVyKHNoaXBzLCAncGxheWVyJyk7XG5sZXQgY29tID0gUGxheWVyKHNoaXBzMiwgJ2NvbScpO1xuXG5cblxuR2FtZWJvYXJkLnNldHVwKHBsYXllciwgY29tKTtcblxuLy9SZWluaXRpYWxpemUgdGhlIGJvYXJkIG9uIHJlc2V0IGJ1dHRvbiBjbGljay5cbmNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0YnRuJyk7XG5cbnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIEdhbWVib2FyZC5zZXR1cChwbGF5ZXIsIGNvbSk7XG59KTtcblxuXG4vL0RlYnVnZ2VyIGZvciBhbmltYXRpbmcgc2hpcCBnaXJscy5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBtb29kcyA9IFsnZGVmJywgJ2dsYWQnLCAnbWFkJ11cbiAgICBjb25zdCByYW5kTW9vZCA9IG1vb2RzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXTtcblxuICAgIGNvbnN0IHJhbmRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xuXG4gICAgLy8gYW5pbWF0ZShwbGF5ZXIuc2hpcHNbcmFuZEluZGV4XSwgcmFuZE1vb2QpO1xuICAgIC8vIGFuaW1hdGVDYXAocmFuZE1vb2QpO1xufSk7XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==