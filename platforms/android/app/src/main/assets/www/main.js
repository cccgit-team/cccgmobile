(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Downloads/cccg/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ "lOSq");





//import { SwUpdate } from '@angular/service-worker';

//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { Storage } from '@ionic/storage';


let AppComponent = class AppComponent {
    constructor(inAppBrowser, menu, platform, router, fcm, toastCtrl) {
        this.inAppBrowser = inAppBrowser;
        this.menu = menu;
        this.platform = platform;
        this.router = router;
        this.fcm = fcm;
        this.toastCtrl = toastCtrl;
        this.loggedIn = false;
        this.dark = false;
        this.initializeApp();
    }
    openWebPage(url) {
        const options = {
            location: 'no'
        };
        const browser = this.inAppBrowser.create(url, '_self', options);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // If using a custom driver:
            // await this.storage.defineDriver(MyCustomDriver)
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            //alert("ready");
            // subscribe to a topic
            // this.fcm.subscribeToTopic('Deals');
            // get FCM token
            this.fcm.getToken().then(token => {
                console.log(token);
                //alert("token: " + token);
            });
            // ionic push notification example
            this.fcm.onNotification().subscribe(data => {
                console.log(data);
                if (data.wasTapped) {
                    console.log('Received in background');
                }
                else {
                    console.log('Received in foreground');
                }
            });
            // refresh the FCM token
            this.fcm.onTokenRefresh().subscribe(token => {
                console.log(token);
            });
            // unsubscribe from a topic
            // this.fcm.unsubscribeFromTopic('offers');
        });
    }
    goToNuggets() {
        this.router.navigate(['/nuggets']);
    }
    goToTestimonies() {
        this.router.navigate(['/testimony']);
    }
    goHome() {
        this.router.navigate(['/']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_7__["FCM"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n\n    <ion-menu contentId=\"main-content\">\n      <ion-content>\n        <!-- <ion-list lines=\"none\">\n          <ion-list-header style=\"color:white\">\n            Publications\n          </ion-list-header>\n          \n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item (click)=\"goToNuggets()\">\n              <ion-icon slot=\"start\" name=\"book\" color=\"white\"></ion-icon>\n              <ion-label>\n                The Golden Nuggets Blog\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item (click)=\"openWebPage('https://mailchi.mp/6358c2c3eeb1/cccgalive-8115357')\">\n              <ion-icon slot=\"start\" name=\"bookmarks\" color=\"white\"></ion-icon>\n              <ion-label>\n                The CCCG Buzz\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n        </ion-list> -->\n        <br />\n        <br />\n        <ion-list lines=\"none\">\n          <ion-list-header style=\"color:#ffffff\">\n            Connect with Us\n          </ion-list-header>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item (click)=\"goHome()\">\n              <ion-icon slot=\"start\" name=\"home\" color=\"white\"></ion-icon>\n              <ion-label>\n                Home\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <!--<ion-item routerLink=\"/askpastor\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">-->\n            <ion-item (click)=\"openWebPage('https://app.sli.do/event/e8dxz7ih/live/questions')\">\n              <ion-icon slot=\"start\" name=\"clipboard\" color=\"purple\"></ion-icon>\n              <ion-label>\n                Ask Pastor E\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item (click)=\"openWebPage('https://www.cccghq.org/riderequest')\">\n              <ion-icon slot=\"start\" name=\"car\" color=\"purple\"></ion-icon>\n              <ion-label>\n                Request a Ride\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item (click)=\"openWebPage('https://www.cccghq.org/meet-pastor')\">\n              <ion-icon slot=\"start\" name=\"cafe\" color=\"purple\"></ion-icon>\n              <ion-label>\n                Book a Meeting\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item (click)=\"openWebPage('https://www.cccghq.org/testimonies')\">\n              <ion-icon slot=\"start\" name=\"people\" color=\"purple\"></ion-icon>\n              <ion-label>\n                Submit a Testimony!\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <!-- <ion-menu-toggle autoHide=\"false\">\n            <ion-item routerLink=\"/feedback\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"bulb\" color=\"purple\"></ion-icon>\n              <ion-label>\n                Feedback/Feature Request\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle> -->\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item routerLink=\"/testimonybank\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"briefcase\" color=\"purple\"></ion-icon>\n              <ion-label>\n                The Testimony Bank!\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item (click)=\"openWebPage('https://www.cccghq.org/golden-nugget')\">\n              <ion-icon slot=\"start\" name=\"basket\" color=\"purple\"></ion-icon>\n              <ion-label>\n                The Nuggets Blog!\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item (click)=\"openWebPage('https://www.cccghq.org/events')\">\n              <ion-icon slot=\"start\" name=\"calendar\" color=\"purple\"></ion-icon>\n              <ion-label>\n                CCCG Events\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item (click)=\"openWebPage('https://www.cccghq.org/cccg-buzz')\">\n              <ion-icon slot=\"start\" name=\"flash\" color=\"purple\"></ion-icon>\n              <ion-label>\n                The Cornerstone Buzz\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <!-- <ion-menu-toggle autoHide=\"false\">\n            <ion-item routerLink=\"/updatecenter\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"alert-outline\" color=\"purple\"></ion-icon>\n              <ion-label>\n                CCCG Updates\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle> -->\n\n       </ion-list>\n       \n      </ion-content>\n    </ion-menu>\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n  </ion-split-pane>\n\n</ion-app>\n");

/***/ }),

/***/ "X6A2":
/*!*******************************!*\
  !*** ./src/app/yt.service.ts ***!
  \*******************************/
/*! exports provided: YtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YtService", function() { return YtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





//import 'rxjs/add/operator/map';
let YtService = class YtService {
    //apiKey = 'AIzaSyBuZWspufZ2JMzXPh6W5mUitfezsOhUiaM';
    constructor(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.apiKey = 'AIzaSyBaEi2JO2-725tgz0vz0Hk74wxGDQPqHYA';
        this.url = "https://firebasestorage.googleapis.com/v0/b/cccg-mobile-c246b.appspot.com/o/data%2Fjson%2Fvideos.json?alt=media&token=68e1181e-8d0b-4ec4-ae9a-1fea1052b969";
    }
    getLiveVideo(channel) {
        return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&eventType=live&type=video')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res.json()['items'];
        }));
    }
    getLatestVideo(channel) {
        return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=1&order=date&type=video')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res.json()['items'];
        }));
    }
    getPlaylistsForChannel(channel) {
        return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res.json()['items'];
        }));
    }
    getListVideos(listId) {
        return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId + '&part=snippet,id&maxResults=20')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res.json()['items'];
        }));
    }
};
YtService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
YtService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], YtService);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "RU0F");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ "lOSq");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _yt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./yt.service */ "X6A2");
/* harmony import */ var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/youtube-video-player/ngx */ "ne/7");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "Bg0J");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");










//import { ServiceWorkerModule } from '@angular/service-worker';











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })],
        providers: [
            _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_4__["StreamingMedia"],
            _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_8__["YoutubeVideoPlayer"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonicRouteStrategy"] },
            _yt_service__WEBPACK_IMPORTED_MODULE_7__["YtService"],
            _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_8__["YoutubeVideoPlayer"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__["InAppBrowser"],
            cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_5__["FCM"],
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonicRouteStrategy"]
            },
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_11__["StatusBar"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__["SocialSharing"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_20__["HTTP"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    {
        path: 'events',
        loadChildren: () => __webpack_require__.e(/*! import() | events-events-module */ "events-events-module").then(__webpack_require__.bind(null, /*! ./events/events.module */ "pTcb")).then(m => m.EventsPageModule)
    },
    {
        path: 'testimony',
        loadChildren: () => __webpack_require__.e(/*! import() | testimony-testimony-module */ "testimony-testimony-module").then(__webpack_require__.bind(null, /*! ./testimony/testimony.module */ "S64v")).then(m => m.TestimonyPageModule)
    },
    {
        path: 'bookmeeting',
        loadChildren: () => __webpack_require__.e(/*! import() | bookmeeting-bookmeeting-module */ "bookmeeting-bookmeeting-module").then(__webpack_require__.bind(null, /*! ./bookmeeting/bookmeeting.module */ "m8g8")).then(m => m.BookmeetingPageModule)
    },
    {
        path: 'ride',
        loadChildren: () => __webpack_require__.e(/*! import() | ride-ride-module */ "ride-ride-module").then(__webpack_require__.bind(null, /*! ./ride/ride.module */ "NjYU")).then(m => m.RidePageModule)
    },
    {
        path: 'askpastor',
        loadChildren: () => __webpack_require__.e(/*! import() | askpastor-askpastor-module */ "askpastor-askpastor-module").then(__webpack_require__.bind(null, /*! ./askpastor/askpastor.module */ "gd6A")).then(m => m.AskpastorPageModule)
    },
    {
        path: 'buzz',
        loadChildren: () => __webpack_require__.e(/*! import() | buzz-buzz-module */ "buzz-buzz-module").then(__webpack_require__.bind(null, /*! ./buzz/buzz.module */ "ST7K")).then(m => m.BuzzPageModule)
    },
    {
        path: 'nuggets',
        loadChildren: () => __webpack_require__.e(/*! import() | nuggets-nuggets-module */ "nuggets-nuggets-module").then(__webpack_require__.bind(null, /*! ./nuggets/nuggets.module */ "pyAB")).then(m => m.NuggetsPageModule)
    },
    {
        path: 'playvid',
        loadChildren: () => __webpack_require__.e(/*! import() | playvid-playvid-module */ "playvid-playvid-module").then(__webpack_require__.bind(null, /*! ./playvid/playvid.module */ "KQCy")).then(m => m.PlayvidPageModule)
    },
    {
        path: 'feedback',
        loadChildren: () => __webpack_require__.e(/*! import() | feedback-feedback-module */ "feedback-feedback-module").then(__webpack_require__.bind(null, /*! ./feedback/feedback.module */ "ZMxt")).then(m => m.FeedbackPageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~home-home-module~tab1-tab1-module~updatecenter-updatecenter-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'testimonybank',
        loadChildren: () => __webpack_require__.e(/*! import() | testimonybank-testimonybank-module */ "testimonybank-testimonybank-module").then(__webpack_require__.bind(null, /*! ./testimonybank/testimonybank.module */ "4s3C")).then(m => m.TestimonybankPageModule)
    },
    {
        path: 'updatecenter',
        loadChildren: () => Promise.all(/*! import() | updatecenter-updatecenter-module */[__webpack_require__.e("default~home-home-module~tab1-tab1-module~updatecenter-updatecenter-module"), __webpack_require__.e("updatecenter-updatecenter-module")]).then(__webpack_require__.bind(null, /*! ./updatecenter/updatecenter.module */ "k+cY")).then(m => m.UpdatecenterPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#181818;\n  --ion-text-color: #b3b3b3;\n}\n\nion-icon {\n  --color: #b3b3b3;\n  --ion-text-color: #b3b3b3;\n}\n\nion-icon {\n  color: #b3b3b3;\n}\n\nion-menu ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\n/* Remove background transitions for switching themes */\n\nion-menu ion-item {\n  --transition: none;\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n/*\n * Material Design Menu\n*/\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-list-header {\n  padding-left: 18px;\n  padding-right: 18px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 450;\n}\n\nion-menu.md ion-item {\n  --padding-start: 18px;\n  margin-right: 10px;\n  border-radius: 0 50px 50px 0;\n  font-weight: 500;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-item ion-icon {\n  color: var(--ion-color-step-650, #5f6368);\n}\n\nion-menu.md ion-list:not(:last-of-type) {\n  border-bottom: 1px solid var(--ion-color-step-150, #181818);\n}\n\n/*\n * iOS Menu\n*/\n\nion-menu.ios ion-list-header {\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSwyRUFBQTtBQUFKOztBQUdFLHVEQUFBOztBQUNBO0VBQ0Usa0JBQUE7QUFBSjs7QUFHRTtFQUNFLGlDQUFBO0FBQUo7O0FBR0U7O0NBQUE7O0FBR0E7RUFDRSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUU7RUFDRSxxQkFBQTtFQUVBLGtCQUFBO0VBRUEsNEJBQUE7RUFFQSxnQkFBQTtBQUpKOztBQU9FO0VBQ0Usc0RBQUE7QUFKSjs7QUFPRTtFQUNFLCtCQUFBO0FBSko7O0FBT0U7O0VBRUUseUNBQUE7QUFKSjs7QUFPRTtFQUNFLDJEQUFBO0FBSko7O0FBUUU7O0NBQUE7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUFOSjs7QUFTRTtFQUNFLGlCQUFBO0FBTko7O0FBU0U7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBTko7O0FBU0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVNFO0VBQ0UsK0JBQUE7QUFOSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMxODE4MTg7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2IzYjNiMztcbn1cblxuaW9uLWljb24ge1xuICAgIC0tY29sb3I6ICNiM2IzYjM7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2IzYjNiMztcbn1cblxuaW9uLWljb24ge1xuICAgIGNvbG9yOiAjYjNiM2IzO1xufVxuXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG4gIH1cbiAgXG4gIC8qIFJlbW92ZSBiYWNrZ3JvdW5kIHRyYW5zaXRpb25zIGZvciBzd2l0Y2hpbmcgdGhlbWVzICovXG4gIGlvbi1tZW51IGlvbi1pdGVtIHtcbiAgICAtLXRyYW5zaXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgXG4gIC8qXG4gICAqIE1hdGVyaWFsIERlc2lnbiBNZW51XG4gICovXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG4gIFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gICAgZm9udC13ZWlnaHQ6IDQ1MDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMThweDtcbiAgXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBcbiAgICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xuICBcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTY1MCwgIzVmNjM2OCk7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0Om5vdCg6bGFzdC1vZi10eXBlKSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgIzE4MTgxOCk7XG4gIH1cbiAgXG4gIFxuICAvKlxuICAgKiBpT1MgTWVudVxuICAqL1xuICBpb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDIwcHggMCAwO1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjNzM4NDlhO1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map