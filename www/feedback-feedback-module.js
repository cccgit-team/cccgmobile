(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-feedback-module"],{

/***/ "Lxx/":
/*!*****************************************************!*\
  !*** ./src/app/feedback/feedback-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FeedbackPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageRoutingModule", function() { return FeedbackPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback.page */ "ZUQU");




const routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_3__["FeedbackPage"]
    }
];
let FeedbackPageRoutingModule = class FeedbackPageRoutingModule {
};
FeedbackPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedbackPageRoutingModule);



/***/ }),

/***/ "Qpwy":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Feedback or Feature Request</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">First name:</ion-label>\n      <br>\n      <ion-input type=\"text\" [(ngModel)]=\"first\" [ngModelOptions]=\"{standalone: true}\" required></ion-input>\n    </ion-item>\n    <br>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Last name:</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"last\" [ngModelOptions]=\"{standalone: true}\" required></ion-input>\n    </ion-item>\n    <br>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Phone Number:</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"phone\" [ngModelOptions]=\"{standalone: true}\" required></ion-input>\n    </ion-item>\n    <br>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Your Feedback/Feature Request:</ion-label>\n      <ion-textarea [(ngModel)]=\"feedture\" [ngModelOptions]=\"{standalone: true}\" required></ion-textarea>\n    </ion-item>\n\n    <br>\n    <br>\n\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col><ion-button (click)=submit() type=\"submit\" size=\"large\">Submit!</ion-button></ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "ZMxt":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.module.ts ***!
  \*********************************************/
/*! exports provided: FeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback-routing.module */ "Lxx/");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback.page */ "ZUQU");







let FeedbackPageModule = class FeedbackPageModule {
};
FeedbackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackPageRoutingModule"]
        ],
        declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]]
    })
], FeedbackPageModule);



/***/ }),

/***/ "ZUQU":
/*!*******************************************!*\
  !*** ./src/app/feedback/feedback.page.ts ***!
  \*******************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feedback_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feedback.page.html */ "Qpwy");
/* harmony import */ var _feedback_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback.page.scss */ "hgwP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");







let FeedbackPage = class FeedbackPage {
    constructor(alertController, router, http) {
        this.alertController = alertController;
        this.router = router;
        this.http = http;
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Feedback/Feature Request',
                subHeader: 'Submitted!',
                message: 'Thank you for your submission. We will reach out to you shortly.',
                buttons: ['OK']
            });
            yield alert.present();
            this.router.navigate(['/']);
        });
    }
    validAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Feedback/Feature Request',
                subHeader: 'Missing info!',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
            //this.router.navigate(['/']);
        });
    }
    ngOnInit() {
    }
    submit() {
        //console.log("emailing");
        if (this.first == "" || this.first == null) {
            this.validAlert("Please enter a first name");
        }
        if (this.feedture == "" || this.feedture == null) {
            this.validAlert("Please enter your feedback or feature request");
        }
        if (this.first != "" && this.feedture != "" && this.first != null && this.feedture != null) {
            var body = "First name : " + this.first + '<br/><br/>' +
                "Last name : " + this.last + '<br/><br/>' +
                "Phone : " + this.phone + '<br/><br/>' +
                "Feedback/Feature Request : " + this.feedture + '<br/><br/>';
            this.url =
                "https://api.elasticemail.com/v2/email/send?apikey=AC7071D99A31A0A95279BF4802C6B080A15A5F2E83C71DD90BFB3254B7489DC54EBD545CDD674275EB8E9AA355385BA8&subject="
                    + "Feedback/Feature Submission from CCCG Mobile!" +
                    "&from=cccgit@gmail.com&fromName=CCCG&sender=cccgit@gmail.com&senderName=CCCG&msgFrom=&msgFromName=&replyTo=&replyToName=&to=cccgit@gmail.com&msgTo=&msgCC=&msgBcc=&lists=&segments=&mergeSourceFilename=&dataSource=&channel=&bodyHtml="
                    + body +
                    "&bodyText="
                    + body +
                    "&charset=&charsetBodyHtml=&charsetBodyText=&encodingType=4&template=&headers_firstname=firstname: myValueHere&postBack=&merge_firstname=John&timeOffSetMinutes=&poolName=My Custom Pool&isTransactional=false&attachments=&trackOpens=true&trackClicks=true&utmSource=source1&utmMedium=medium1&utmCampaign=campaign1&utmContent=content1&bodyAmp=&charsetBodyAmp=";
            //console.log(this.url);
            this.sendEmail();
        }
    }
    sendEmail() {
        //console.log("sending");
        let headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Access-Control-Allow-Methods': 'GET'
        };
        return new Promise((resolve, reject) => {
            // this.http.setDataSerializer('json');
            this.http.post(this.url, {}, {}).then(res => {
                this.presentAlert();
                resolve(JSON.parse(res.data));
            })
                .catch(err => {
                alert("Y" + err);
                reject(err);
            });
        });
        /* return this.http.get(this.url,headers).pipe(map(data => { this.database=data; console.log(data); })).subscribe(result => {
          console.log(result);
        }); */
    }
};
FeedbackPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] }
];
FeedbackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feedback',
        template: _raw_loader_feedback_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feedback_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FeedbackPage);



/***/ }),

/***/ "hgwP":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color: white;\n}\n\nion-menu-button {\n  color: black;\n}\n\nion-content {\n  --ion-background-color: white;\n  --ion-text-color:black;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-title {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 22px;\n  color: black;\n}\n\nion-button {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZlZWRiYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDZCQUFBO0FBQUo7O0FBR0M7RUFDSSxZQUFBO0FBQUw7O0FBR0M7RUFFSSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUFETDs7QUFJQztFQUNJLGtEQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBREw7O0FBSUM7RUFDSSxZQUFBO0FBREwiLCJmaWxlIjoiZmVlZGJhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgLy8gLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMkQzMzM4O1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuIH1cbiBcbiBpb24tbWVudS1idXR0b24ge1xuICAgICBjb2xvcjogYmxhY2s7XG4gfVxuIFxuIGlvbi1jb250ZW50e1xuIFxuICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgLS1pb24tdGV4dC1jb2xvcjpibGFjaztcbiAgICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nIHNhbnMtc2VyaWY7XG4gfVxuIFxuIGlvbi10aXRsZSB7XG4gICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICBjb2xvcjogYmxhY2s7XG4gfVxuIFxuIGlvbi1idXR0b24ge1xuICAgICBjb2xvcjogd2hpdGU7XG4gfSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=feedback-feedback-module.js.map