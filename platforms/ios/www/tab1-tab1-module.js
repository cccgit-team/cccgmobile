(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Latest at CCCG</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" pullMin=\"100\" pullMax=\"200\">\n    <ion-refresher-content refreshing-spinner=\"dots\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- <ion-toolbar>\n    <ion-segment color=\"primary\"  [(ngModel)]=\"type\"  (ionChange)=\"segmentChanged($event)\" scrollable>\n      <ion-segment-button value=\"sermons\" checked>\n        <ion-label class=\"segment\">Sermons</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"latest\">\n        <ion-label class=\"segment\">Broadcasts</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar> -->\n  <img src=\"../../assets/images/lastestHeader.PNG\">\n\n  <div *ngIf=\"dataload\">\n  <!-- <div [ngSwitch]=\"type\"> -->\n    <ion-list>\n      <!-- <ion-searchbar style =\"color:white\" autocomplete=\"on\" debounce=\"888\" animated [(ngModel)]=\"searchModel\" (ionClear)=\"videos =[]\" (ionChange)=\n      \"search()\"></ion-searchbar> -->\n      \n      <!-- <ion-list-header>Sunday Services</ion-list-header>-->\n\n      <!-- <ion-slides pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let video of database.SundayVideos\">\n          <ion-card (click)=\"itemTapped(video.videoId, video.videoTitle, video.videoPub)\">\n            <img [src]=\"video.videoImg\" style=\"object-fit: fill;\" />\n            <ion-card-header>\n              <ion-card-subtitle>{{ video.videoTitle }}</ion-card-subtitle>\n            </ion-card-header>\n          </ion-card>\n        </ion-slide>\n      </ion-slides> -->\n\n    <ion-card *ngFor=\"let video of database.SundayVideos\" (click)=\"itemTapped(video.videoId, video.videoTitle, video.videoPub)\">\n      <img [src]=\"video.videoImg\" style=\"object-fit: fill;\" />\n      <p>{{ video.videoTitle.split('|')[0].trim() }}</p>\n    </ion-card>\n\n    <br />\n\n    <ion-card *ngFor=\"let oldVideo of database.TuesdayVideo\" (click)=\"itemTapped(oldVideo.videoId, oldVideo.videoTitle, oldVideo.videoPub)\">\n      <img src=\"../../assets/images/askpastore.png\" style=\"object-fit: fill;\" />\n      <p>Ask Pastor E</p>\n    </ion-card>\n\n\n    <ion-card *ngFor=\"let oldVideo of database.ThursdayVideo\" (click)=\"itemTapped(oldVideo.videoId, oldVideo.videoTitle, oldVideo.videoPub)\">\n      <img [src]=\"oldVideo.videoImg\" style=\"object-fit: fill;\" />\n      <p>Bible Study</p>\n    </ion-card>\n\n\n    <ion-card *ngFor=\"let oldVideo of database.FridayPrayersVideo\" (click)=\"itemTapped(oldVideo.videoId, oldVideo.videoTitle, oldVideo.videoPub)\">\n      <img [src]=\"oldVideo.videoImg\" style=\"object-fit: fill;\" />\n      <p>Night Prayers</p>\n    </ion-card>\n\n  </ion-list>\n</div>\n</ion-content>");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ionic_youtube_streams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-youtube-streams */ "mYd2");
/* harmony import */ var ionic_youtube_streams__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ionic_youtube_streams__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "RU0F");
/* harmony import */ var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/youtube-video-player/ngx */ "ne/7");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "Bg0J");
/* harmony import */ var _yt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../yt.service */ "X6A2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ "lOSq");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");













let Tab1Page = class Tab1Page {
    constructor(streamingMedia, ytService, play, router, http, localNotifications, fcm, plt, detector, ngZone) {
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
            this.type = "sermons";
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
                //console.log(this.database);
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
Tab1Page.ctorParameters = () => [
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__["StreamingMedia"] },
    { type: _yt_service__WEBPACK_IMPORTED_MODULE_8__["YtService"] },
    { type: _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_6__["YoutubeVideoPlayer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_12__["HTTP"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"] },
    { type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_10__["FCM"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color:#121212 ;\n}\n\nion-menu-button {\n  color: #ffffff;\n}\n\nion-refresher ion-spinner {\n  color: red !important;\n}\n\nion-refresher {\n  background: transparent;\n}\n\nion-refresher-content {\n  --color: red!important;\n}\n\nion-spinner {\n  color: red;\n}\n\nion-content {\n  --ion-background-color:#121212;\n  --ion-text-color:#ffffff;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-label {\n  text-transform: none;\n  --ion-font-family: \"Roboto\" , \"Helvetica-Neue\", \"Roboto-Light\", sans-serif !important;\n}\n\n.segment {\n  --ion-font-family: \"Roboto\" , \"Helvetica-Neue\", \"Roboto-Light\", sans-serif !important;\n  color: black;\n}\n\nion-list-header {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-style: normal;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 30px;\n}\n\nh3 {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-style: normal;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 30px;\n}\n\nion-text {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  font-weight: bold;\n  font-size: small;\n  color: #ffffff;\n}\n\nion-title {\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: bold;\n}\n\np {\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: bold;\n}\n\nion-card-subtitle {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  font-weight: bold;\n  font-size: x-small;\n  color: #ffffff;\n}\n\nion-card {\n  width: 90%;\n  height: 80%;\n  box-shadow: none;\n}\n\nion-card img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUVJLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtBQUFKOztBQU9BO0VBQ0ksb0JBQUE7RUFDQSxxRkFBQTtBQUpKOztBQVFBO0VBQ0kscUZBQUE7RUFFQSxZQUFBO0FBTko7O0FBZUE7RUFDSSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFaSjs7QUFlQTtFQUNJLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVpKOztBQWVBO0VBQ0kscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWko7O0FBZUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBWko7O0FBZUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBWko7O0FBZUE7RUFDSSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFaSjs7QUFlQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFaSjs7QUF5QkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXRCSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzEyMTIxMiAgICA7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1yZWZyZXNoZXIgaW9uLXNwaW5uZXJ7XG4gICAgY29sb3I6IHJlZCFpbXBvcnRhbnQ7ICAgICAgXG59XG5cbmlvbi1yZWZyZXNoZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tcmVmcmVzaGVyLWNvbnRlbnQge1xuICAgIC0tY29sb3I6IHJlZCFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zcGlubmVyIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG5pb24tY29udGVudHtcblxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzEyMTIxMjtcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiNmZmZmZmY7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nIHNhbnMtc2VyaWY7XG59XG5cbi8vIGlvbi1pdGVtIHtcbi8vICAgICBib3JkZXItYm90dG9tOiA0cHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4vLyB9XG5cbmlvbi1sYWJlbCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIgLCBcIkhlbHZldGljYS1OZXVlXCIsIFwiUm9ib3RvLUxpZ2h0XCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuXG4uc2VnbWVudCB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIgLCBcIkhlbHZldGljYS1OZXVlXCIsIFwiUm9ib3RvLUxpZ2h0XCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAvL2ZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjpibGFjaztcbn1cblxuLy8gaW9uLWxpc3Qge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbi8vICAgICBmbGV4LXdyYXA6IHdyYXA7XG4vLyB9XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5oMyB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5pb24tdGV4dCB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6c21hbGw7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5wIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ1JvYm90bychaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTp4LXNtYWxsO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tY2FyZCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vLyBpb24tc2xpZGUge1xuLy8gICAgIC8vbWFyZ2luLWxlZnQ6IC02MHB4O1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG4vLyBpb24tc2xpZGUgaW9uLWNhcmQge1xuLy8gICAgIHdpZHRoOiA4NSU7XG4vLyAgICAgaGVpZ2h0OiA2MCU7XG4vLyB9XG5cbmlvbi1jYXJkIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map