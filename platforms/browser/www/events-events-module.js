(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"],{

/***/ "0DrO":
/*!*****************************************!*\
  !*** ./src/app/events/events.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color:white;\n}\n\nion-menu-button {\n  color: black;\n}\n\nion-content {\n  --ion-background-color:white;\n  --ion-text-color: #black;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-content {\n  --ion-background-color:white;\n  --ion-text-color: black;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-card-subtitle {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  font-weight: bold;\n  font-size: x-small;\n  color: black;\n}\n\nion-card-title {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  padding-left: 15px;\n  font-weight: normal;\n  color: black;\n}\n\nion-card-content {\n  color: black;\n}\n\nion-card-title.top {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  font-weight: bold;\n  font-size: 30px;\n  color: black;\n}\n\nh3 {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-style: normal;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 30px;\n  padding-left: 20px;\n}\n\np {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-style: normal;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nion-card {\n  width: 90%;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBRUksNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHNDQUFBO0FBQUo7O0FBR0E7RUFFSSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0NBQUE7QUFESjs7QUFJQTtFQUNJLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlDO0VBQ0cscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBS0E7RUFDSSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksa0RBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUZKIiwiZmlsZSI6ImV2ZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWNvbnRlbnR7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIC0taW9uLXRleHQtY29sb3I6ICNibGFjaztcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ1JvYm90bycgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWNvbnRlbnR7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIC0taW9uLXRleHQtY29sb3I6IGJsYWNrO1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJyBzYW5zLXNlcmlmO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6eC1zbWFsbDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiBpb24tY2FyZC10aXRsZSB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAvL2ZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogYmxhY2s7XG59IFxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jYXJkLXRpdGxlLnRvcCB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5oMyB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxucCB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgd2lkdGg6OTAlOyAvLyBhZGp1c3Qgd2lkdGggb24geW91ciBpb24tY2FyZCBzdWl0YWJsZSBvbiB5b3VyIHNjcmVlblxuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "BktZ":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  \n  <h3 class=\"top\">Come and see CCCG</h3>\n\n  <div>\n    <p>Cornerstone Christian Church of God, 9249 50th St NW, Edmonton AB</p>\n  </div>\n  \n\n  <ion-card>\n    <img src=\"../../assets/images/sundayservices.png\" style=\"object-fit: fill;\" />\n    <ion-card-title></ion-card-title>\n    <ion-card-content>\n      1st Service: 9:30am MDT,\n      2nd Service: 11:30am MDT\n    </ion-card-content>\n  </ion-card>\n\n  <br />\n\n  <ion-card>\n    <img src=\"../../assets/images/askpastore.png\" style=\"object-fit: fill;\" />\n    <ion-card-title></ion-card-title>\n    <ion-card-content>\n      Tuesdays online on Youtube and Facebook at 6:00pm MDT\n    </ion-card-content>\n  </ion-card>\n\n  <br />\n\n  <ion-card>\n    <img src=\"../../assets/images/biblestudy.png\" style=\"object-fit: fill;\" />\n    <ion-card-title></ion-card-title>\n    <ion-card-content>\n      Thursdays at 6:30pm MDT\n    </ion-card-content>\n  </ion-card>\n\n  <br />\n\n  <ion-card>\n    <img src=\"../../assets/images/fridaynight.png\" style=\"object-fit: fill;\" />\n    <ion-card-title></ion-card-title>\n    <ion-card-content>\n      Last Friday of the Month at 10:00pm MDT\n    </ion-card-content>\n  </ion-card>\n  \n  <br />\n\n  <ion-card>\n    <img src=\"../../assets/images/youthday.png\" style=\"object-fit: fill;\" />\n    <ion-card-title></ion-card-title>\n    <ion-card-content>\n      Last Saturday of the Month at 1:00pm MDT\n    </ion-card-content>\n  </ion-card>\n\n  <br />\n  <br />\n</ion-content>\n");

/***/ }),

/***/ "QFKT":
/*!***************************************!*\
  !*** ./src/app/events/events.page.ts ***!
  \***************************************/
/*! exports provided: EventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPage", function() { return EventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_events_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./events.page.html */ "BktZ");
/* harmony import */ var _events_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.page.scss */ "0DrO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EventsPage = class EventsPage {
    constructor() { }
    ngOnInit() {
    }
};
EventsPage.ctorParameters = () => [];
EventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-events',
        template: _raw_loader_events_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_events_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventsPage);



/***/ }),

/***/ "kE+t":
/*!*************************************************!*\
  !*** ./src/app/events/events-routing.module.ts ***!
  \*************************************************/
/*! exports provided: EventsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function() { return EventsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.page */ "QFKT");




const routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
    }
];
let EventsPageRoutingModule = class EventsPageRoutingModule {
};
EventsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventsPageRoutingModule);



/***/ }),

/***/ "pTcb":
/*!*****************************************!*\
  !*** ./src/app/events/events.module.ts ***!
  \*****************************************/
/*! exports provided: EventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events-routing.module */ "kE+t");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events.page */ "QFKT");







let EventsPageModule = class EventsPageModule {
};
EventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _events_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPageRoutingModule"]
        ],
        declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]]
    })
], EventsPageModule);



/***/ })

}]);
//# sourceMappingURL=events-events-module.js.map