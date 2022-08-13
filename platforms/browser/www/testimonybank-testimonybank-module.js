(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["testimonybank-testimonybank-module"],{

/***/ "0Xin":
/*!*****************************************************!*\
  !*** ./src/app/testimonybank/testimonybank.page.ts ***!
  \*****************************************************/
/*! exports provided: TestimonybankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonybankPage", function() { return TestimonybankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_testimonybank_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./testimonybank.page.html */ "4jIa");
/* harmony import */ var _testimonybank_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonybank.page.scss */ "xgKC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_assets_smtp_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/assets/smtp.js */ "ip79");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








let TestimonybankPage = class TestimonybankPage {
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
    ngOnInit() {
    }
    runFunc() {
        //alert(this.testtype);
        //this.testimonies = this.testtype;
        if (this.testtype == "") {
            this.testimonies = "";
            return;
        }
        this.url = 'https://cccgtestimonies.azurewebsites.net/testimony?type=' + this.testtype;
        this.http.get(this.url).subscribe((response) => {
            console.log(response);
            let result = response["submissions"];
            this.testimonies = result.replace("---------", "");
        });
    }
    submit() {
        console.log("emailing");
        var body = "First name : " + this.first + '\n' +
            "Last name : " + this.last + '\n' +
            "Email: " + this.email + '\n' +
            "Phone : " + this.phone + '\n' +
            "Summary : " + this.summary + '\n' +
            "Live or On Stage: " + this.StageOrLive;
        //alert(body);
        _src_assets_smtp_js__WEBPACK_IMPORTED_MODULE_4__["Email"].send({
            Host: 'smtp.elasticemail.com',
            Username: 'cccgit@gmail.com',
            Password: 'A21F5920919F984EF2E759A1BD3DD986266D',
            To: 'cccgit@gmail.com',
            From: 'cccgit@gmail.com',
            Subject: 'Testimony submission (CCCG Mobile): ' + this.first,
            Body: body
        }).then(this.presentAlert());
    }
};
TestimonybankPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
TestimonybankPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-testimonybank',
        template: _raw_loader_testimonybank_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_testimonybank_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TestimonybankPage);



/***/ }),

/***/ "4jIa":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testimonybank/testimonybank.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>The Testimony Bank</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"../../assets/images/testimonybank.png\" style=\"object-fit: fill;\" />\n    <ion-card-title></ion-card-title>\n    <ion-card-content>\n      At CCCG we LOVE testimonies. We thank God for all the wonderful things He has done and keeps doing for us, and now we want you to be encouraged.\n\n      Use the testimony bank and be encouraged as you see all the times we thanked the Lord for His marvelous deeds!\n    </ion-card-content>\n  </ion-card>\n\n  <form>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Search for testimonies involving:</ion-label>\n      <ion-input placeholder=\"Search phrase e.g. healing\" name=\"testimonytypes\" [(ngModel)]=\"testtype\"  (ionChange)=\"runFunc()\" ></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"floating\">Testimonies:</ion-label>\n      <br>\n      <ion-textarea [(ngModel)]=\"testimonies\" name=\"listoftestimonies\" autoGrow=\"true\" readonly=\"true\"></ion-textarea>\n    </ion-item>\n    <br>\n    \n\n    <br>\n    <br>\n    <br>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "4s3C":
/*!*******************************************************!*\
  !*** ./src/app/testimonybank/testimonybank.module.ts ***!
  \*******************************************************/
/*! exports provided: TestimonybankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonybankPageModule", function() { return TestimonybankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _testimonybank_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testimonybank-routing.module */ "bPIA");
/* harmony import */ var _testimonybank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonybank.page */ "0Xin");







let TestimonybankPageModule = class TestimonybankPageModule {
};
TestimonybankPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _testimonybank_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestimonybankPageRoutingModule"]
        ],
        declarations: [_testimonybank_page__WEBPACK_IMPORTED_MODULE_6__["TestimonybankPage"]]
    })
], TestimonybankPageModule);



/***/ }),

/***/ "bPIA":
/*!***************************************************************!*\
  !*** ./src/app/testimonybank/testimonybank-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TestimonybankPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonybankPageRoutingModule", function() { return TestimonybankPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _testimonybank_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testimonybank.page */ "0Xin");




const routes = [
    {
        path: '',
        component: _testimonybank_page__WEBPACK_IMPORTED_MODULE_3__["TestimonybankPage"]
    }
];
let TestimonybankPageRoutingModule = class TestimonybankPageRoutingModule {
};
TestimonybankPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestimonybankPageRoutingModule);



/***/ }),

/***/ "ip79":
/*!****************************!*\
  !*** ./src/assets/smtp.js ***!
  \****************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
/* SmtpJS.com - v3.0.0 */
var Email = {
    send: function(a) {
        return new Promise(function(n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) {
                n(e)
            })
        })
    },
    ajaxPost: function(e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function() {
            var e = a.responseText;
            null != t && t(e)
        }, a.send(n)
    },
    ajax: function(e, n) {
        var t = Email.createCORSRequest("GET", e);
        t.onload = function() {
            var e = t.responseText;
            null != n && n(e)
        }, t.send()
    },
    createCORSRequest: function(e, n) {
        var t = new XMLHttpRequest;
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
    }
};



/***/ }),

/***/ "xgKC":
/*!*******************************************************!*\
  !*** ./src/app/testimonybank/testimonybank.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color: #121212;\n}\n\nion-menu-button {\n  color: #ffffff;\n}\n\nion-content {\n  --ion-background-color: #121212;\n  --ion-text-color:#ffffff;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-title {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 22px;\n  color: #ffffff;\n}\n\nion-button {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RpbW9ueWJhbmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksK0JBQUE7QUFBSjs7QUFHQztFQUNJLGNBQUE7QUFBTDs7QUFHQztFQUVJLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtBQURMOztBQUlDO0VBQ0ksa0RBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFETDs7QUFJQztFQUNJLFlBQUE7QUFETCIsImZpbGUiOiJ0ZXN0aW1vbnliYW5rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzJEMzMzODtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuIH1cbiBcbiBpb24tbWVudS1idXR0b24ge1xuICAgICBjb2xvcjogI2ZmZmZmZjtcbiB9XG4gXG4gaW9uLWNvbnRlbnR7XG4gXG4gICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgIC0taW9uLXRleHQtY29sb3I6I2ZmZmZmZjtcbiAgICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nIHNhbnMtc2VyaWY7XG4gfVxuIFxuIGlvbi10aXRsZSB7XG4gICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICBjb2xvcjogI2ZmZmZmZjtcbiB9XG4gXG4gaW9uLWJ1dHRvbiB7XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiB9Il19 */");

/***/ })

}]);
//# sourceMappingURL=testimonybank-testimonybank-module.js.map