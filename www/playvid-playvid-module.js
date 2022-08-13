(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playvid-playvid-module"],{

/***/ "5LqW":
/*!*******************************************!*\
  !*** ./src/app/playvid/playvid.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#121212;\n  --ion-text-color: #ffffff;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-text {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  font-weight: bold;\n  font-size: large;\n  color: #ffffff;\n}\n\nion-text.date {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  font-weight: normal;\n  font-size: small;\n  color: #ffffff;\n}\n\nion-header {\n  --ion-background-color:#121212;\n}\n\nion-menu-button {\n  color: #ffffff;\n}\n\nion-content {\n  --ion-background-color: #121212;\n  --ion-text-color: #ffffff;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-back-button {\n  --icon-font-size: 60px;\n  --color: purple;\n}\n\nion-title {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 22px;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BsYXl2aWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUVJLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBQUFKOztBQUdBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxrREFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6InBsYXl2aWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMTIxMjEyO1xuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nIHNhbnMtc2VyaWY7XG59XG5cbmlvbi10ZXh0IHtcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ1JvYm90bychaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTpsYXJnZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLXRleHQuZGF0ZSB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTpzbWFsbDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWhlYWRlciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMTIxMjEyO1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tY29udGVudHtcblxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ1JvYm90bycgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICAtLWljb24tZm9udC1zaXplOiA2MHB4OyAvL1ByZWZlcnJlZCBzaXplIGhlcmVcbiAgICAtLWNvbG9yOiBwdXJwbGU7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59Il19 */");

/***/ }),

/***/ "KQCy":
/*!*******************************************!*\
  !*** ./src/app/playvid/playvid.module.ts ***!
  \*******************************************/
/*! exports provided: PlayvidPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayvidPageModule", function() { return PlayvidPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _playvid_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playvid-routing.module */ "MnQ7");
/* harmony import */ var _playvid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playvid.page */ "lZXV");







let PlayvidPageModule = class PlayvidPageModule {
};
PlayvidPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _playvid_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayvidPageRoutingModule"]
        ],
        declarations: [_playvid_page__WEBPACK_IMPORTED_MODULE_6__["PlayvidPage"]]
    })
], PlayvidPageModule);



/***/ }),

/***/ "MnQ7":
/*!***************************************************!*\
  !*** ./src/app/playvid/playvid-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PlayvidPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayvidPageRoutingModule", function() { return PlayvidPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _playvid_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playvid.page */ "lZXV");




const routes = [
    {
        path: '',
        component: _playvid_page__WEBPACK_IMPORTED_MODULE_3__["PlayvidPage"]
    }
];
let PlayvidPageRoutingModule = class PlayvidPageRoutingModule {
};
PlayvidPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlayvidPageRoutingModule);



/***/ }),

/***/ "Z1rr":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playvid/playvid.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Watch CCCG</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen scroll-y=\"false\">\n  <br>\n  <br>\n  <iframe width=\"100%\" height=\"315\" [src]=\"url\" frameborder=\"0\" allowfullscreen></iframe>\n  <br>\n  <br>\n  <div style=\"text-align:center;\">\n  <ion-text>{{ title }}</ion-text>\n  <br>\n  <br>\n  <ion-text class=\"date\">{{ vidDate }}</ion-text>\n  <br>\n  <br>\n  <br>\n  <ion-text>Share this message: </ion-text>\n  <ion-button color=\"light\" (click)=\"ShareGeneric('With love from CCCG')\"><ion-icon name=\"share-social-outline\"></ion-icon></ion-button>\n  </div>\n  <br>\n  <br>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <ion-back-button defaultHref=\"/tabs/tab1\" icon=\"backspace\"></ion-back-button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "lZXV":
/*!*****************************************!*\
  !*** ./src/app/playvid/playvid.page.ts ***!
  \*****************************************/
/*! exports provided: PlayvidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayvidPage", function() { return PlayvidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_playvid_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./playvid.page.html */ "Z1rr");
/* harmony import */ var _playvid_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playvid.page.scss */ "5LqW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");







let PlayvidPage = class PlayvidPage {
    constructor(route, sanitizer, socialSharing) {
        this.route = route;
        this.sanitizer = sanitizer;
        this.socialSharing = socialSharing;
        var urlBuild = "https://www.youtube.com/embed/" + this.route.snapshot.paramMap.get('id');
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(urlBuild);
        //this.chaturl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/live_chat?v=9_b-iwRw-_Q" + "&embed_domain=" + window.location.hostname);
        console.log("constructor " + this.url);
        this.title = this.route.snapshot.paramMap.get('title');
        this.datePub = this.route.snapshot.paramMap.get('datePub');
        var date = new Date(this.datePub);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        this.vidDate = this.datePub.substring(0, 10);
    }
    ShareGeneric(parameter) {
        const url = "https://www.youtube.com/watch?v=" + this.route.snapshot.paramMap.get('id');
        const text = parameter + '\n';
        this.socialSharing.share(text, 'MEDIUM', null, url);
    }
    ShareWhatsapp() {
        const text = this.route.snapshot.paramMap.get('title');
        const link = "https://www.youtube.com/watch?v=" + this.route.snapshot.paramMap.get('id');
        this.socialSharing.shareViaWhatsApp(text, 'https://cdn.pixabay.com/photo/2019/12/26/05/10/pink-4719682_960_720.jpg', link);
    }
    ShareFacebook() {
        const text = this.route.snapshot.paramMap.get('title');
        const link = "https://www.youtube.com/watch?v=" + this.route.snapshot.paramMap.get('id');
        this.socialSharing.shareViaFacebookWithPasteMessageHint(text, 'https://cdn.pixabay.com/photo/2019/12/26/05/10/pink-4719682_960_720.jpg', link, 'Copia Pega!');
    }
    SendEmail() {
        const text = this.route.snapshot.paramMap.get('title');
        const link = "https://www.youtube.com/watch?v=" + this.route.snapshot.paramMap.get('id');
        this.socialSharing.shareViaEmail('text', 'subject', ['email@address.com']);
    }
    SendTwitter() {
        const text = this.route.snapshot.paramMap.get('title');
        const link = "https://www.youtube.com/watch?v=" + this.route.snapshot.paramMap.get('id');
        this.socialSharing.shareViaTwitter(text, 'https://cdn.pixabay.com/photo/2019/12/26/05/10/pink-4719682_960_720.jpg', link);
    }
    SendInstagram() {
        const text = this.route.snapshot.paramMap.get('title');
        const link = "https://www.youtube.com/watch?v=" + this.route.snapshot.paramMap.get('id');
        this.socialSharing.shareViaInstagram(text, 'https://cdn.pixabay.com/photo/2019/12/26/05/10/pink-4719682_960_720.jpg');
    }
    ngOnInit() {
    }
};
PlayvidPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] }
];
PlayvidPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-playvid',
        template: _raw_loader_playvid_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_playvid_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PlayvidPage);



/***/ })

}]);
//# sourceMappingURL=playvid-playvid-module.js.map