(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Tune-in</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\">\n    <ion-refresher-content  refreshingSpinner=\"lines\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- <ion-toolbar>\n    <ion-segment color=\"primary\"  [(ngModel)]=\"type\"  (ionChange)=\"segmentChanged($event)\" scrollable>\n      <ion-segment-button value=\"latest\" checked>\n        <ion-label class=\"segment\">Broadcasts</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"sermons\">\n        <ion-label class=\"segment\">Meet CCCG</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar> -->\n\n  <div *ngIf=\"dataload\">\n  <!-- <div [ngSwitch]=\"type\"> -->\n\n    <ion-list>\n      <ion-text color=\"white\">\n        <ion-title>Watch CCCG</ion-title>\n        <br>\n        <div *ngIf=\"database.liveVideo.count==1\">\n          <ion-list>    \n            <ion-item lines=\"none\">\n                <ion-card (click)=\"itemTapped(database.liveVideo.videoId, database.liveVideo.videoTitle,database.liveVideo.videoPub)\">\n                  <img [src]=\"database.liveVideo.videoImg\" style=\"object-fit: fill;\" />\n                </ion-card>\n            </ion-item>\n          </ion-list>\n        </div>\n        <div *ngIf=\"database.latestVideo.count==1 && database.liveVideo.count==0\">\n          <ion-list>    \n            <ion-item lines=\"none\">\n                <ion-card (click)=\"itemTapped(database.latestVideo.videoId, database.latestVideo.videoTitle,database.latestVideo.videoPub)\">\n                  <img [src]=\"database.latestVideo.videoImg\" style=\"object-fit: fill;\" />\n                </ion-card>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-text>\n      <ion-text color=\"white\">\n        <!--<ion-title>Listen to CCCG</ion-title>-->\n        <br>\n        <br>\n      </ion-text>\n      <iframe class=\"ion-padding-start\" src=\"https://open.spotify.com/embed/show/0sj3zVfd8YfWSKgiXujitn?theme=0\" \n      width=\"90%\" height=\"152\" frameBorder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\n    </ion-list>\n  <!-- </div> -->\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "zpKS");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color:#121212;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-title {\n  color: #ffffff;\n}\n\nion-toolbar {\n  color: #121212;\n}\n\nion-content {\n  --ion-background-color:#121212;\n  --ion-text-color: white;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-content {\n  --ion-background-color:#121212;\n  --ion-text-color: white;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-card-subtitle {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  font-weight: bold;\n  font-size: x-small;\n  color: black;\n}\n\nion-card-title {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  padding-left: 15px;\n  font-weight: normal;\n  color: black;\n}\n\nion-card-content {\n  color: black;\n}\n\nion-card-title.top {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  font-weight: bold;\n  font-size: 30px;\n  color: black;\n}\n\nh3 {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-style: normal;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 30px;\n  padding-left: 20px;\n}\n\nh3.ion-padding-start-v2 {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-style: normal;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 30px;\n  padding-left: 20px;\n}\n\nion-card {\n  width: 90%;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUVJLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtBQUFKOztBQUdBO0VBRUksOEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBREo7O0FBSUE7RUFDSSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQztFQUNHLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0kscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBRkoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMxMjEyMTI7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgY29sb3I6ICMxMjEyMTI7XG59XG5cbmlvbi1jb250ZW50e1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMTIxMjEyO1xuICAgIC0taW9uLXRleHQtY29sb3I6IHdoaXRlO1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJyBzYW5zLXNlcmlmO1xufVxuXG5pb24tY29udGVudHtcblxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzEyMTIxMjtcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ1JvYm90bycgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJyFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOngtc21hbGw7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4gaW9uLWNhcmQtdGl0bGUge1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJyFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgLy9mb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IGJsYWNrO1xufSBcblxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tY2FyZC10aXRsZS50b3Age1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJyFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuaDMge1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbmgzLmlvbi1wYWRkaW5nLXN0YXJ0LXYyIHtcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgd2lkdGg6OTAlOyAvLyBhZGp1c3Qgd2lkdGggb24geW91ciBpb24tY2FyZCBzdWl0YWJsZSBvbiB5b3VyIHNjcmVlblxuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ionic_youtube_streams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-youtube-streams */ "mYd2");
/* harmony import */ var ionic_youtube_streams__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ionic_youtube_streams__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "RU0F");
/* harmony import */ var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/youtube-video-player/ngx */ "ne/7");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "Bg0J");
/* harmony import */ var _yt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../yt.service */ "X6A2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ "lOSq");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");














let HomePage = class HomePage {
    constructor(streamingMedia, ytService, play, router, http, localNotifications, fcm, plt, detector, ngZone, inAppBrowser) {
        this.streamingMedia = streamingMedia;
        this.ytService = ytService;
        this.play = play;
        this.router = router;
        this.http = http;
        this.localNotifications = localNotifications;
        this.fcm = fcm;
        this.plt = plt;
        this.detector = detector;
        this.ngZone = ngZone;
        this.inAppBrowser = inAppBrowser;
        this.searchModel = '';
        this.dataload = false;
        this.isDataLoaded = false;
        this.channelId = 'UCP7vi_uJF52wJ9d-oWdVVkA'; // CCCG Channel ID
        this.url = 'https://firebasestorage.googleapis.com/v0/b/cccg-mobile-c246b.appspot.com/o/data%2Fjson%2Fvideos.json?alt=media&token=4e4038a8-344f-4cb1-aa85-795915a0e783';
        this.slideOpts = {
            initialSlide: 0,
            spaceBetween: -13,
            slidesPerView: 1.6
        };
        this.data = {
            "liveVideo": {
                "videoId": "",
                "videoTitle": "",
                "videoImg": "",
                "videoPub": "",
                "count": "0"
            },
            "latestVideo": {
                "videoId": "f2g0uYuLvYE",
                "videoTitle": "Secrets to SOAR!",
                "videoImg": "https://i.ytimg.com/vi/f2g0uYuLvYE/mqdefault_live.jpg",
                "videoPub": "2021-07-18T14:31:53Z",
                "count": "1"
            },
            "videos": [
                {
                    "videoId": "HRactv__ehk",
                    "videoTitle": "How to walk in Divine favor || Pastor Emmanuel Adewusi",
                    "videoPub": "2021-03-08T21:53:51Z",
                    "videoImg": "https://i.ytimg.com/vi/HRactv__ehk/maxresdefault.jpg",
                },
                {
                    "videoId": "ZnbrksfUkPA",
                    "videoTitle": "How to Walk in Favor Through Love || Pastor Emmanuel Adewusi",
                    "videoPub": "2021-03-08T21:53:51Z",
                    "videoImg": "https://i.ytimg.com/vi/ZnbrksfUkPA/maxresdefault.jpg",
                },
                {
                    "videoId": "7MxHQPJ8Oek",
                    "videoTitle": "Honor Code || Pastor Emmanuel Adewusi",
                    "videoPub": "2021-03-08T21:53:51Z",
                    "videoImg": "https://i.ytimg.com/vi/7MxHQPJ8Oek/maxresdefault.jpg",
                },
                {
                    "videoId": "irg4pbhAh8M",
                    "videoTitle": "How to Walk in Favour Through Honour || Pastor Emmanuel Adewusi",
                    "videoPub": "2021-03-08T21:53:51Z",
                    "videoImg": "https://i.ytimg.com/vi/irg4pbhAh8M/maxresdefault.jpg",
                },
                {
                    "videoId": "eZWZ6aa6d8w",
                    "videoTitle": "The Believer's Authority || Pastor Emmanuel Adewusi",
                    "videoPub": "2021-03-08T21:53:51Z",
                    "videoImg": "https://i.ytimg.com/vi/eZWZ6aa6d8w/maxresdefault.jpg",
                },
                {
                    "videoId": "_QCH-6PTzpQ",
                    "videoTitle": "How to Increase your Authority || Pastor Emmanuel Adewusi",
                    "videoPub": "2021-03-08T21:53:51Z",
                    "videoImg": "https://i.ytimg.com/vi/_QCH-6PTzpQ/maxresdefault.jpg",
                },
                {
                    "videoId": "LSb06x_WzqE",
                    "videoTitle": "Friday Night Prayer: Anointed for Favour",
                    "videoPub": "2021-03-08T21:53:51Z",
                    "videoImg": "https://i.ytimg.com/vi/LSb06x_WzqE/maxresdefault.jpg",
                },
                {
                    "videoId": "42kHLdXBSl0",
                    "videoTitle": "What Divine Favour is Not || Pastor Emmanuel Adewusi",
                    "videoPub": "2021-03-08T21:53:51Z",
                    "videoImg": "https://i.ytimg.com/vi/42kHLdXBSl0/maxresdefault.jpg",
                }
            ],
            "oldVideos": [
                {
                    "videoId": "K1chPpDEP8Q",
                    "videoTitle": "Open My Eyes To See | Pastor Emmanuel Adewusi",
                    "videoPub": "2020-12-29T23:48:09Z",
                    "videoImg": "https://i.ytimg.com/vi/K1chPpDEP8Q/mqdefault.jpg",
                },
                {
                    "videoId": "6-0bYaab4WI",
                    "videoTitle": "Help us Lord | Friday Night Prayers",
                    "videoPub": "2020-12-30T00:10:49Z",
                    "videoImg": "https://i.ytimg.com/vi/6-0bYaab4WI/mqdefault.jpg",
                },
                {
                    "videoId": "aXvfljDmUV0",
                    "videoTitle": "Knockout | Night Prayer",
                    "videoPub": "2020-12-30T00:11:07Z",
                    "videoImg": "https://i.ytimg.com/vi/aXvfljDmUV0/mqdefault.jpg",
                },
                {
                    "videoId": "zrp_z98tG5g",
                    "videoTitle": "Impact Through Prayer || Night Prayer",
                    "videoPub": "2020-12-30T00:11:54Z",
                    "videoImg": "https://i.ytimg.com/vi/zrp_z98tG5g/mqdefault.jpg",
                },
                {
                    "videoId": "XcWz_WvSGE4",
                    "videoTitle": "Renewal of Vision || Friday Night Prayer",
                    "videoPub": "2020-12-30T00:12:22Z",
                    "videoImg": "https://i.ytimg.com/vi/XcWz_WvSGE4/mqdefault.jpg",
                },
                {
                    "videoId": "6AcDc826NR0",
                    "videoTitle": "Renewal of Strength & Wisdom to Pursue Vision 2020 || Friday Night Prayer",
                    "videoPub": "2020-12-30T00:12:37Z",
                    "videoImg": "https://i.ytimg.com/vi/6AcDc826NR0/mqdefault.jpg",
                },
                {
                    "videoId": "Mwzdbmd-huI",
                    "videoTitle": "Christ Like || Friday Night Prayer",
                    "videoPub": "2020-12-30T00:12:48Z",
                    "videoImg": "https://i.ytimg.com/vi/Mwzdbmd-huI/mqdefault.jpg",
                },
                {
                    "videoId": "wLotJ99K4GY",
                    "videoTitle": "Friday Night Prayer: The Blessing",
                    "videoPub": "2020-12-30T00:13:23Z",
                    "videoImg": "https://i.ytimg.com/vi/wLotJ99K4GY/mqdefault.jpg",
                },
                {
                    "videoId": "nJgKjIi30k4",
                    "videoTitle": "Friday Night Prayer || Healing & Deliverance",
                    "videoPub": "2020-12-30T00:13:37Z",
                    "videoImg": "https://i.ytimg.com/vi/nJgKjIi30k4/mqdefault.jpg",
                },
                {
                    "videoId": "OOjleNj14lo",
                    "videoTitle": "Friday Night Prayer || Release of the Spirit of Wisdom",
                    "videoPub": "2020-12-30T00:13:59Z",
                    "videoImg": "https://i.ytimg.com/vi/OOjleNj14lo/mqdefault.jpg",
                },
                {
                    "videoId": "mU2Eqi4FGnQ",
                    "videoTitle": "Friday Night Prayer: The Latter Rain",
                    "videoPub": "2020-12-30T00:14:16Z",
                    "videoImg": "https://i.ytimg.com/vi/mU2Eqi4FGnQ/mqdefault.jpg",
                },
                {
                    "videoId": "Ctkrws5nulk",
                    "videoTitle": "Friday Night Prayer: Divine Covering",
                    "videoPub": "2020-12-30T00:14:43Z",
                    "videoImg": "https://i.ytimg.com/vi/Ctkrws5nulk/mqdefault.jpg",
                },
            ],
        };
        /* this.fcm.onNotification().subscribe(data => {
          if(data.wasTapped){
            console.log("Received in background");
          } else {
            console.log("Received in foreground");
          };
        });
    
        this.fcm.hasPermission().then(hasPermission => {
          if (hasPermission) {
            console.log("Has permission!");
          }
        }) */
        this.plt.ready().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getItems();
            this.isDataLoaded = true;
            //alert("jam jam " + this.database);
            this.detector.detectChanges();
            this.type = "latest";
        }));
        //alert("cons: " + this.dataload);
    }
    doRefresh(event) {
        //console.log('Begin async operation 3');
        //console.log('okay player 2');
        setTimeout(() => {
            //console.log('Async operation has ended');
            //console.log('okay player');
            //console.log(this.database);
            this.getItems();
            event.target.complete();
        }, 3000);
    }
    getItems() {
        /* this.http.setHeader('*', 'Access-Control-Allow-Origin' , '*');
        this.http.setHeader('*', 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.http.setHeader('*', 'Accept','application/json');
        this.http.setHeader('*', 'Content-Type','application/json');
        this.http.setDataSerializer('json'); */
        let headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Access-Control-Allow-Methods': 'GET'
        };
        return new Promise((resolve, reject) => {
            // this.http.setDataSerializer('json');
            this.http.get(this.url, {}, {}).then(res => {
                //console.log(res.data);
                this.database = JSON.parse(res.data);
                //alert(this.database);
                //alert("more " + JSON.stringify(this.database["latestVideo"].videoId))
                this.dataload = true;
                resolve(JSON.parse(res.data));
                this.ngZone.run;
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
    simpleNotif() {
        alert("er:");
        this.localNotifications.schedule({
            text: 'Delayed ILocalNotification',
            trigger: { at: new Date(new Date().getTime() + 10) },
            led: 'FF0000',
            sound: null
        });
    }
    openWebPage(url) {
        const options = {
            location: 'no'
        };
        const browser = this.inAppBrowser.create(url, '_self', options);
    }
    itemTapped(id, title, datePub) {
        console.log("the id is " + id);
        this.router.navigate(['/playvid', { id: id, title: title, datePub: datePub }]);
    }
    invokeVideoPlayer() {
        this.play.openVideo('t6Z4mbEHxQM');
    }
    determineLiveOrLatest() {
    }
    searchPlaylists() {
        this.playlists = this.ytService.getPlaylistsForChannel(this.channelId);
        this.playlists.subscribe(data => {
            console.log('playlists: ', data);
        }, err => {
            console.log("failed to get playlists");
        });
    }
    search() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            alert("search model " + this.searchModel);
            alert('open vic');
            console.log('open Videos:');
            //this.videos = await youtube.search('cccg');
            console.log('Videos:');
            console.log(this.videos);
        });
    }
    streamVideo(videoId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            alert("lets try streaming " + videoId);
            const info = yield ionic_youtube_streams__WEBPACK_IMPORTED_MODULE_4__["info"](videoId);
            alert(info.formats[0].url);
            this.streamURL(info.formats[0].url);
        });
    }
    streamURL(url) {
        const options = {
            successCallback: () => {
            },
            errorCallback: (e) => {
                console.log('Error streaming');
                alert("error " + e);
            },
            orientation: 'portrait',
            shouldAutoClose: true,
            controls: true
        };
        this.streamingMedia.playVideo(url, options);
    }
    ngOnInit() {
        //alert("cons in init: " + this.dataload);
    }
    segmentChanged(ev) {
        console.log('Segment changed', ev);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__["StreamingMedia"] },
    { type: _yt_service__WEBPACK_IMPORTED_MODULE_8__["YtService"] },
    { type: _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_6__["YoutubeVideoPlayer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_13__["HTTP"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"] },
    { type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_10__["FCM"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map