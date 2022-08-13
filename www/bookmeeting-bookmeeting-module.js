(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookmeeting-bookmeeting-module"],{

/***/ "AR1X":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookmeeting/bookmeeting.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Book a Meeting</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card (click)=\"openWebPage('https://booking.setmore.com/scheduleappointment/625b7bd1-eb6f-434b-8be3-6dff1b1f44b4')\">\n    <img src=\"../../assets/images/cccgheader.png\" style=\"object-fit: fill;\" />\n    <ion-card-title>Meet with Pastor Emmanuel</ion-card-title>\n    <ion-card-content>\n      Book a meeting with Pastor on regular weekdays\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card (click)=\"openWebPage('https://booking.setmore.com/scheduleappointment/rc1361620387535180')\">\n    <img src=\"../../assets/images/pastorService.png\" style=\"object-fit: fill;\" />\n    <ion-card-title>Meet with Pastor Emmanuel (Service Days)</ion-card-title>\n    <ion-card-content>\n      Book a meeting with Pastor on service days\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card (click)=\"openWebPage('https://booking.setmore.com/scheduleappointment/0bb1c30e-d57a-4e5a-a73c-483b58735721/bookappointment')\">\n    <img src=\"../../assets/images/pastorIbukun.png\" style=\"object-fit: fill;\" />\n    <ion-card-title>Meet with Pastor Ibukun</ion-card-title>\n    <ion-card-content>\n      Book a meeting with Pastor Ibukun\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "OjLV":
/*!*************************************************!*\
  !*** ./src/app/bookmeeting/bookmeeting.page.ts ***!
  \*************************************************/
/*! exports provided: BookmeetingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmeetingPage", function() { return BookmeetingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bookmeeting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bookmeeting.page.html */ "AR1X");
/* harmony import */ var _bookmeeting_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookmeeting.page.scss */ "XAb2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");





let BookmeetingPage = class BookmeetingPage {
    constructor(inAppBrowser) {
        this.inAppBrowser = inAppBrowser;
    }
    ngOnInit() {
    }
    openWebPage(url) {
        const options = {
            location: 'no'
        };
        const browser = this.inAppBrowser.create(url, '_blank', options);
    }
};
BookmeetingPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
];
BookmeetingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bookmeeting',
        template: _raw_loader_bookmeeting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bookmeeting_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BookmeetingPage);



/***/ }),

/***/ "XAb2":
/*!***************************************************!*\
  !*** ./src/app/bookmeeting/bookmeeting.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:white;\n  --ion-text-color: black;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-header {\n  --ion-background-color:white;\n}\n\nion-menu-button {\n  color: black;\n}\n\nion-title {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 22px;\n  color: black;\n}\n\nion-card-subtitle {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  font-weight: bold;\n  font-size: x-small;\n  color: black;\n}\n\nion-card-title {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  padding-left: 15px;\n  font-weight: normal;\n  color: black;\n}\n\nion-card-content {\n  color: black;\n}\n\nion-card-title.top {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  font-weight: bold;\n  font-size: 40px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Jvb2ttZWV0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtBQUNKOztBQUdBO0VBQ0ksNEJBQUE7QUFBSjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLGtEQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQztFQUNHLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0kscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFGSiIsImZpbGUiOiJib29rbWVldGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIC0taW9uLXRleHQtY29sb3I6IGJsYWNrO1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJyBzYW5zLXNlcmlmO1xufVxuXG5cbmlvbi1oZWFkZXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6d2hpdGU7XG59XG5cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBjb2xvcjpibGFjaztcbn1cblxuaW9uLXRpdGxlIHtcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ1JvYm90bychaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTp4LXNtYWxsO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ1JvYm90bychaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIC8vZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn0gXG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWNhcmQtdGl0bGUudG9wIHtcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ1JvYm90bychaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */");

/***/ }),

/***/ "m8g8":
/*!***************************************************!*\
  !*** ./src/app/bookmeeting/bookmeeting.module.ts ***!
  \***************************************************/
/*! exports provided: BookmeetingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmeetingPageModule", function() { return BookmeetingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _bookmeeting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookmeeting-routing.module */ "ytFq");
/* harmony import */ var _bookmeeting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookmeeting.page */ "OjLV");







let BookmeetingPageModule = class BookmeetingPageModule {
};
BookmeetingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bookmeeting_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookmeetingPageRoutingModule"]
        ],
        declarations: [_bookmeeting_page__WEBPACK_IMPORTED_MODULE_6__["BookmeetingPage"]]
    })
], BookmeetingPageModule);



/***/ }),

/***/ "ytFq":
/*!***********************************************************!*\
  !*** ./src/app/bookmeeting/bookmeeting-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BookmeetingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmeetingPageRoutingModule", function() { return BookmeetingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bookmeeting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookmeeting.page */ "OjLV");




const routes = [
    {
        path: '',
        component: _bookmeeting_page__WEBPACK_IMPORTED_MODULE_3__["BookmeetingPage"]
    }
];
let BookmeetingPageRoutingModule = class BookmeetingPageRoutingModule {
};
BookmeetingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookmeetingPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=bookmeeting-bookmeeting-module.js.map