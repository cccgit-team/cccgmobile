(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buzz-buzz-module"],{

/***/ "ST7K":
/*!*************************************!*\
  !*** ./src/app/buzz/buzz.module.ts ***!
  \*************************************/
/*! exports provided: BuzzPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuzzPageModule", function() { return BuzzPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _buzz_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buzz-routing.module */ "Vmbf");
/* harmony import */ var _buzz_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buzz.page */ "ba7L");







let BuzzPageModule = class BuzzPageModule {
};
BuzzPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _buzz_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuzzPageRoutingModule"]
        ],
        declarations: [_buzz_page__WEBPACK_IMPORTED_MODULE_6__["BuzzPage"]]
    })
], BuzzPageModule);



/***/ }),

/***/ "Vmbf":
/*!*********************************************!*\
  !*** ./src/app/buzz/buzz-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BuzzPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuzzPageRoutingModule", function() { return BuzzPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _buzz_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buzz.page */ "ba7L");




const routes = [
    {
        path: '',
        component: _buzz_page__WEBPACK_IMPORTED_MODULE_3__["BuzzPage"]
    }
];
let BuzzPageRoutingModule = class BuzzPageRoutingModule {
};
BuzzPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BuzzPageRoutingModule);



/***/ }),

/***/ "ba7L":
/*!***********************************!*\
  !*** ./src/app/buzz/buzz.page.ts ***!
  \***********************************/
/*! exports provided: BuzzPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuzzPage", function() { return BuzzPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_buzz_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./buzz.page.html */ "v22T");
/* harmony import */ var _buzz_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buzz.page.scss */ "cCKG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BuzzPage = class BuzzPage {
    constructor() { }
    ngOnInit() {
    }
};
BuzzPage.ctorParameters = () => [];
BuzzPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buzz',
        template: _raw_loader_buzz_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buzz_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BuzzPage);



/***/ }),

/***/ "cCKG":
/*!*************************************!*\
  !*** ./src/app/buzz/buzz.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXp6LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "v22T":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buzz/buzz.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>buzz</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=buzz-buzz-module.js.map