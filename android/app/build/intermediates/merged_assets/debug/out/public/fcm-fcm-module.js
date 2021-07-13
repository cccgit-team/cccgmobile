(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fcm-fcm-module"],{

/***/ "N1CO":
/*!*******************************************!*\
  !*** ./src/app/fcm/fcm-routing.module.ts ***!
  \*******************************************/
/*! exports provided: FcmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcmPageRoutingModule", function() { return FcmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fcm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fcm.page */ "h1uL");




const routes = [
    {
        path: '',
        component: _fcm_page__WEBPACK_IMPORTED_MODULE_3__["FcmPage"]
    }
];
let FcmPageRoutingModule = class FcmPageRoutingModule {
};
FcmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FcmPageRoutingModule);



/***/ }),

/***/ "SgtK":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fcm/fcm.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>fcm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "VVWg":
/*!***********************************!*\
  !*** ./src/app/fcm/fcm.module.ts ***!
  \***********************************/
/*! exports provided: FcmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcmPageModule", function() { return FcmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fcm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fcm-routing.module */ "N1CO");
/* harmony import */ var _fcm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fcm.page */ "h1uL");







let FcmPageModule = class FcmPageModule {
};
FcmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fcm_routing_module__WEBPACK_IMPORTED_MODULE_5__["FcmPageRoutingModule"]
        ],
        declarations: [_fcm_page__WEBPACK_IMPORTED_MODULE_6__["FcmPage"]]
    })
], FcmPageModule);



/***/ }),

/***/ "gfTe":
/*!***********************************!*\
  !*** ./src/app/fcm/fcm.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmY20ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "h1uL":
/*!*********************************!*\
  !*** ./src/app/fcm/fcm.page.ts ***!
  \*********************************/
/*! exports provided: FcmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcmPage", function() { return FcmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fcm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fcm.page.html */ "SgtK");
/* harmony import */ var _fcm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fcm.page.scss */ "gfTe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FcmPage = class FcmPage {
    constructor() { }
    ngOnInit() {
    }
};
FcmPage.ctorParameters = () => [];
FcmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fcm',
        template: _raw_loader_fcm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fcm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FcmPage);



/***/ })

}]);
//# sourceMappingURL=fcm-fcm-module.js.map