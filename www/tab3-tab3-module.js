(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "IqiF":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "h1hx");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "nRCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");





let Tab3Page = class Tab3Page {
    constructor(inAppBrowser) {
        this.inAppBrowser = inAppBrowser;
    }
    openWebPage(url) {
        const options = {
            location: 'no'
        };
        const browser = this.inAppBrowser.create(url, '_self', options);
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "OcaV":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "IqiF");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "h1hx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  \n  <h3 class=\"top\">Connect</h3>\n  <p style=\"padding-left: 20px;\">Check out and interact with our programs at CCCG</p>\n\n  <br />\n\n  <ion-card (click)=\"openWebPage('https://www.cccghq.org/training')\">\n    <img src=\"../../assets/images/leadershipclass.png\" style=\"object-fit: fill;\" />\n  </ion-card>\n\n  <br />\n  <br />\n\n  <ion-card (click)=\"openWebPage('https://linktr.ee/CCCG')\">\n    <img src=\"../../assets/images/followoursocials.png\" style=\"object-fit: fill;\"  />\n  </ion-card>\n\n  <br />\n</ion-content>\n");

/***/ }),

/***/ "k+ul":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "IqiF");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "OcaV");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "nRCe":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color: #121212;\n}\n\nion-menu-button {\n  color: #ffffff;\n}\n\nion-content {\n  --ion-background-color:#121212;\n  --ion-text-color: #ffffff;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-content {\n  --ion-background-color:#121212;\n  --ion-text-color: #ffffff;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-card-subtitle {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  font-weight: bold;\n  font-size: x-small;\n  color: black;\n}\n\nion-card-title {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  padding-left: 15px;\n  font-weight: normal;\n  color: black;\n}\n\nion-card-content {\n  color: black;\n}\n\nion-card-title.top {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  font-weight: bold;\n  font-size: 30px;\n  color: black;\n}\n\nh3 {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-style: normal;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 30px;\n  padding-left: 20px;\n}\n\nion-card {\n  width: 90%;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUVJLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBQUFKOztBQUdBO0VBRUksOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0FBREo7O0FBSUE7RUFDSSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQztFQUNHLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0kscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFGSiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6I2ZmZmZmZjtcbn1cblxuaW9uLWNvbnRlbnR7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMxMjEyMTI7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ1JvYm90bycgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWNvbnRlbnR7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMxMjEyMTI7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ1JvYm90bycgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJyFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOngtc21hbGw7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4gaW9uLWNhcmQtdGl0bGUge1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJyFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgLy9mb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IGJsYWNrO1xufSBcblxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tY2FyZC10aXRsZS50b3Age1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJyFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuaDMge1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgICB3aWR0aDo5MCU7IC8vIGFkanVzdCB3aWR0aCBvbiB5b3VyIGlvbi1jYXJkIHN1aXRhYmxlIG9uIHlvdXIgc2NyZWVuXG4gICAgZGlzcGxheTpibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map