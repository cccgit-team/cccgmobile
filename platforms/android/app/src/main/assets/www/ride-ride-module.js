(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ride-ride-module"],{

/***/ "FK7X":
/*!***********************************!*\
  !*** ./src/app/ride/ride.page.ts ***!
  \***********************************/
/*! exports provided: RidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidePage", function() { return RidePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ride_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ride.page.html */ "d16H");
/* harmony import */ var _ride_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ride.page.scss */ "rRke");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");







let RidePage = class RidePage {
    constructor(alertController, router, http) {
        this.alertController = alertController;
        this.router = router;
        this.http = http;
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'CCCG Ride Request',
                subHeader: 'Submitted!',
                message: 'Thank you! Someone will contact you shortly',
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
                header: 'CCCG Ride Request',
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
        if (this.email == "" || this.email == null) {
            this.validAlert("Please enter your email");
        }
        if (this.phone == "" || this.phone == null) {
            this.validAlert("Please enter a phone number we can use to reach you or N/A");
        }
        if (this.address == "" || this.address == null) {
            this.validAlert("Please enter your address");
        }
        if (this.service == "" || this.service == null) {
            this.validAlert("Please enter indicate what service/program you'd like to attend");
        }
        if (this.first != "" && this.email != "" && this.phone != "" && this.address != "" && this.service != ""
            && this.first != null && this.email != null && this.phone != null && this.address != null && this.service != null) {
            var body = "First name : " + this.first + '<br/><br/>' +
                "Last name : " + this.last + '<br/><br/>' +
                "Email: " + this.email + '<br/><br/>' +
                "Phone : " + this.phone + '<br/><br/>' +
                "Address : " + this.address + '<br/><br/>' +
                "Service : " + this.service + '<br/><br/>';
            this.url =
                "https://api.elasticemail.com/v2/email/send?apikey=AC7071D99A31A0A95279BF4802C6B080A15A5F2E83C71DD90BFB3254B7489DC54EBD545CDD674275EB8E9AA355385BA8&subject="
                    + "Ride Request Submission from CCCG Mobile!" +
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
RidePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] }
];
RidePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ride',
        template: _raw_loader_ride_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ride_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RidePage);



/***/ }),

/***/ "LUk1":
/*!*********************************************!*\
  !*** ./src/app/ride/ride-routing.module.ts ***!
  \*********************************************/
/*! exports provided: RidePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidePageRoutingModule", function() { return RidePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ride_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ride.page */ "FK7X");




const routes = [
    {
        path: '',
        component: _ride_page__WEBPACK_IMPORTED_MODULE_3__["RidePage"]
    }
];
let RidePageRoutingModule = class RidePageRoutingModule {
};
RidePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RidePageRoutingModule);



/***/ }),

/***/ "NjYU":
/*!*************************************!*\
  !*** ./src/app/ride/ride.module.ts ***!
  \*************************************/
/*! exports provided: RidePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidePageModule", function() { return RidePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ride_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ride-routing.module */ "LUk1");
/* harmony import */ var _ride_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ride.page */ "FK7X");







let RidePageModule = class RidePageModule {
};
RidePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ride_routing_module__WEBPACK_IMPORTED_MODULE_5__["RidePageRoutingModule"]
        ],
        declarations: [_ride_page__WEBPACK_IMPORTED_MODULE_6__["RidePage"]]
    })
], RidePageModule);



/***/ }),

/***/ "d16H":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ride/ride.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Request a Ride</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <form>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">First name:</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"first\" [ngModelOptions]=\"{standalone: true}\" required></ion-input>\n    </ion-item>\n    <br>\n    <br>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Last name:</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"last\" [ngModelOptions]=\"{standalone: true}\" required></ion-input>\n    </ion-item>\n    <br>\n    <br>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email:</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" required></ion-input>\n    </ion-item>\n    <br>\n    <br>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Phone Number:</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"phone\" [ngModelOptions]=\"{standalone: true}\" required></ion-input>\n    </ion-item>\n    <br>\n    <br>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Your Address:</ion-label>\n      <ion-textarea [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\" required></ion-textarea>\n    </ion-item>\n    <br>\n    <br>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">What church service is this for? :</ion-label>\n      <ion-textarea [(ngModel)]=\"service\" [ngModelOptions]=\"{standalone: true}\" required></ion-textarea>\n    </ion-item>\n\n    <br>\n\n    <br>\n\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col><ion-button (click)=submit() type=\"submit\" size=\"large\">Submit!</ion-button></ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "rRke":
/*!*************************************!*\
  !*** ./src/app/ride/ride.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:white;\n  --ion-text-color: black;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-header {\n  --ion-background-color:white;\n}\n\nion-menu-button {\n  color: black;\n}\n\nion-title {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 22px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JpZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBQ0o7O0FBR0E7RUFDSSw0QkFBQTtBQUFKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUlBO0VBQ0ksa0RBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFESiIsImZpbGUiOiJyaWRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogYmxhY2s7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nIHNhbnMtc2VyaWY7XG59XG5cblxuaW9uLWhlYWRlciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cblxuXG5pb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOmJsYWNrO1xufVxuXG5pb24tdGl0bGUge1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiBibGFjaztcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=ride-ride-module.js.map