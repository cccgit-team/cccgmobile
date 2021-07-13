(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"],{

/***/ "0DrO":
/*!*****************************************!*\
  !*** ./src/app/events/events.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "BktZ":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Events</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Make sure to che -->\n  <ion-item *ngFor=\"let event of events\">\n    <ion-card>\n      <img src=\"../../assets/images/borntoaddvalue.JPG\" />\n      <ion-card-header>\n        <ion-card-title>{{event.title}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        {{event.description}} <br /><br />\n        {{event.date}} ({{event.starttime}} - {{event.endtime}})<br />\n        Location: {{event.location}}<br />\n        Price: {{event.price}}<br />\n      </ion-card-content>\n    </ion-card>\n  </ion-item>\n</ion-content>\n");

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
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events.service */ "vQqJ");





let EventsPage = class EventsPage {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    ngOnInit() {
        this.eventsService.getEvents().subscribe((res) => {
            this.events = res;
        });
    }
};
EventsPage.ctorParameters = () => [
    { type: _events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"] }
];
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