(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["testimony-testimony-module"],{

/***/ "9+AF":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testimony/testimony.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>My CCCG Testimony</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">First name:</ion-label>\n      <br>\n      <ion-input type=\"text\" [(ngModel)]=\"first\" [ngModelOptions]=\"{standalone: true}\" required></ion-input>\n    </ion-item>\n    <br>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Last name:</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"last\" [ngModelOptions]=\"{standalone: true}\" required></ion-input>\n    </ion-item>\n    <br>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email:</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" required></ion-input>\n    </ion-item>\n    <br>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Phone Number:</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"phone\" [ngModelOptions]=\"{standalone: true}\" required></ion-input>\n    </ion-item>\n    <br>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Testimony:</ion-label>\n      <ion-textarea [(ngModel)]=\"summary\" [ngModelOptions]=\"{standalone: true}\" required></ion-textarea>\n    </ion-item>\n\n    <br>\n\n    <ion-radio-group allow-empty-selection value=\"onstage\"  [(ngModel)]=\"StageOrLive\" [ngModelOptions]=\"{standalone: true}\" >\n      <ion-list-header>\n        <ion-label>I would like: </ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>To deliver my testimony myself</ion-label>\n        <ion-radio slot=\"end\" color=\"primary\" value=\"myself\" id=\"I would like to go up\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>My testimony read out for me</ion-label>\n        <ion-radio slot=\"end\" color=\"secondary\" value=\"onstage\" id=\"Please read out my testimony for me\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n\n    <br>\n    <br>\n    <br>\n\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col><ion-button (click)=submit() type=\"submit\" size=\"large\">Submit!</ion-button></ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "S64v":
/*!***********************************************!*\
  !*** ./src/app/testimony/testimony.module.ts ***!
  \***********************************************/
/*! exports provided: TestimonyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonyPageModule", function() { return TestimonyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _testimony_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testimony-routing.module */ "TxW6");
/* harmony import */ var _testimony_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimony.page */ "XiHq");







let TestimonyPageModule = class TestimonyPageModule {
};
TestimonyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _testimony_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestimonyPageRoutingModule"]
        ],
        declarations: [_testimony_page__WEBPACK_IMPORTED_MODULE_6__["TestimonyPage"]]
    })
], TestimonyPageModule);



/***/ }),

/***/ "TxW6":
/*!*******************************************************!*\
  !*** ./src/app/testimony/testimony-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TestimonyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonyPageRoutingModule", function() { return TestimonyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _testimony_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testimony.page */ "XiHq");




const routes = [
    {
        path: '',
        component: _testimony_page__WEBPACK_IMPORTED_MODULE_3__["TestimonyPage"]
    }
];
let TestimonyPageRoutingModule = class TestimonyPageRoutingModule {
};
TestimonyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestimonyPageRoutingModule);



/***/ }),

/***/ "XiHq":
/*!*********************************************!*\
  !*** ./src/app/testimony/testimony.page.ts ***!
  \*********************************************/
/*! exports provided: TestimonyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonyPage", function() { return TestimonyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_testimony_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./testimony.page.html */ "9+AF");
/* harmony import */ var _testimony_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimony.page.scss */ "afr+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");







let TestimonyPage = class TestimonyPage {
    constructor(alertController, router, http) {
        this.alertController = alertController;
        this.router = router;
        this.http = http;
        this.form = [
            { val: 'My testimony read for me', isChecked: true },
            { val: 'To deliver my testimony on stage', isChecked: false },
        ];
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Testimony',
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
                header: 'Testimony',
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
        if (this.last == "" || this.last == null) {
            this.validAlert("Please enter a last name");
        }
        if (this.email == "" || this.email == null) {
            this.validAlert("Please enter your email");
        }
        if (this.summary == "" || this.summary == null) {
            this.validAlert("Please enter your testimony summary");
        }
        if (this.first != "" && this.last != "" && this.email != "" && this.summary != "" && this.first != null && this.last != null
            && this.email != null && this.summary != null) {
            var body = "First name : " + this.first + '<br/><br/>' +
                "Last name : " + this.last + '<br/><br/>' +
                "Email: " + this.email + '<br/><br/>' +
                "Phone : " + this.phone + '<br/><br/>' +
                "Summary : " + this.summary + '<br/><br/>' +
                "Live or On Stage: " + this.StageOrLive;
            this.url =
                "https://api.elasticemail.com/v2/email/send?apikey=AC7071D99A31A0A95279BF4802C6B080A15A5F2E83C71DD90BFB3254B7489DC54EBD545CDD674275EB8E9AA355385BA8&subject="
                    + "Testimony Submission from CCCG Mobile!" +
                    "&from=cccgit@gmail.com&fromName=CCCG&sender=cccgit@gmail.com&senderName=CCCG&msgFrom=&msgFromName=&replyTo=&replyToName=&to=cccgit@gmail.com&msgTo=&msgCC=&msgBcc=&lists=&segments=&mergeSourceFilename=&dataSource=&channel=&bodyHtml="
                    + body +
                    "&bodyText="
                    + body +
                    "&charset=&charsetBodyHtml=&charsetBodyText=&encodingType=0&template=&headers_firstname=firstname: myValueHere&postBack=&merge_firstname=John&timeOffSetMinutes=&poolName=My Custom Pool&isTransactional=false&attachments=&trackOpens=true&trackClicks=true&utmSource=source1&utmMedium=medium1&utmCampaign=campaign1&utmContent=content1&bodyAmp=&charsetBodyAmp=";
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
            this.http.setDataSerializer('urlencoded');
            this.url = encodeURI(this.url);
            console.log(this.url);
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
TestimonyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] }
];
TestimonyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-testimony',
        template: _raw_loader_testimony_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_testimony_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TestimonyPage);



/***/ }),

/***/ "afr+":
/*!***********************************************!*\
  !*** ./src/app/testimony/testimony.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color: #121212;\n}\n\nion-menu-button {\n  color: #ffffff;\n}\n\nion-content {\n  --ion-background-color: #121212;\n  --ion-text-color:#ffffff;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-title {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 22px;\n  color: #ffffff;\n}\n\nion-button {\n  color: #121212;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RpbW9ueS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRywrQkFBQTtBQUFIOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBO0VBRUksK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNDQUFBO0FBREo7O0FBSUE7RUFDSSxrREFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtBQURKIiwiZmlsZSI6InRlc3RpbW9ueS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzJEMzMzODtcbiAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1jb250ZW50e1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiNmZmZmZmY7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nIHNhbnMtc2VyaWY7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIGNvbG9yOiAjMTIxMjEyO1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=testimony-testimony-module.js.map