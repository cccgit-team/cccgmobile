(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updatecenter-updatecenter-module"],{

/***/ "Axpo":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/updatecenter/updatecenter.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div *ngIf=\"dataload\">\n        <ion-list>\n          <ion-list-header>CCCG Updates</ion-list-header>\n          <p style=\"padding-left: 20px;\">Please check here for our latest announcements and events!</p>\n        <ion-item *ngFor=\"let update of database.updates\" lines=\"none\">\n            <ion-card (click)=\"openWebPage(update.link)\">\n              <img [src]=\"update.image\" style=\"object-fit: fill;\" />\n              <ion-card-title>{{ update.title }}</ion-card-title>\n              <ion-card-content>\n                {{update.description}}\n              </ion-card-content>\n            </ion-card>\n          </ion-item>\n          <br />\n          <br />\n          <br />\n        </ion-list>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "I5uc":
/*!*****************************************************!*\
  !*** ./src/app/updatecenter/updatecenter.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color:white;\n}\n\nion-menu-button {\n  color: black;\n}\n\nion-content {\n  --ion-background-color:white;\n  --ion-text-color: #black;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-content {\n  --ion-background-color:white;\n  --ion-text-color: black;\n  --ion-font-family: \"Roboto\" sans-serif;\n}\n\nion-card-subtitle {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  font-weight: bold;\n  font-size: x-small;\n  color: black;\n}\n\nion-card-title {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  padding-left: 15px;\n  font-weight: normal;\n  color: black;\n}\n\nion-card-content {\n  color: black;\n}\n\nion-card-title.top {\n  --ion-font-family: \"Roboto\"!important;\n  font-family: \"Roboto\" !important;\n  font-weight: bold;\n  font-size: 40px;\n  color: black;\n}\n\nion-list-header {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-style: normal;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 30px;\n}\n\nh3 {\n  --ion-font-family: \"Roboto\", sans-serif !important;\n  font-style: normal;\n  font-family: \"Roboto\", sans-serif !important;\n  font-weight: 900;\n  font-size: 30px;\n}\n\nion-card {\n  width: 90%;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VwZGF0ZWNlbnRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBRUksNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHNDQUFBO0FBQUo7O0FBR0E7RUFFSSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0NBQUE7QUFESjs7QUFJQTtFQUNJLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlDO0VBQ0cscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBS0E7RUFDSSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksa0RBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUZKIiwiZmlsZSI6InVwZGF0ZWNlbnRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWNvbnRlbnR7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIC0taW9uLXRleHQtY29sb3I6ICNibGFjaztcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ1JvYm90bycgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWNvbnRlbnR7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIC0taW9uLXRleHQtY29sb3I6IGJsYWNrO1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJyBzYW5zLXNlcmlmO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6eC1zbWFsbDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiBpb24tY2FyZC10aXRsZSB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAvL2ZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogYmxhY2s7XG59IFxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jYXJkLXRpdGxlLnRvcCB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaDMge1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIHdpZHRoOjkwJTsgLy8gYWRqdXN0IHdpZHRoIG9uIHlvdXIgaW9uLWNhcmQgc3VpdGFibGUgb24geW91ciBzY3JlZW5cbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "K9iP":
/*!***************************************************!*\
  !*** ./src/app/updatecenter/updatecenter.page.ts ***!
  \***************************************************/
/*! exports provided: UpdatecenterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatecenterPage", function() { return UpdatecenterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_updatecenter_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./updatecenter.page.html */ "Axpo");
/* harmony import */ var _updatecenter_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updatecenter.page.scss */ "I5uc");
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
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");














let UpdatecenterPage = class UpdatecenterPage {
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
        this.url = 'https://firebasestorage.googleapis.com/v0/b/cccg-mobile-c246b.appspot.com/o/data%2Fjson%2Fupdates.json?alt=media&token=1253d306-6af4-4569-9e1c-c01d7b09c4d2';
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
                console.log(res.data);
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
        //alert(url);
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
UpdatecenterPage.ctorParameters = () => [
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__["StreamingMedia"] },
    { type: _yt_service__WEBPACK_IMPORTED_MODULE_8__["YtService"] },
    { type: _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_6__["YoutubeVideoPlayer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_13__["HTTP"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"] },
    { type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_10__["FCM"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"] }
];
UpdatecenterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-updatecenter',
        template: _raw_loader_updatecenter_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_updatecenter_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UpdatecenterPage);



/***/ }),

/***/ "k+cY":
/*!*****************************************************!*\
  !*** ./src/app/updatecenter/updatecenter.module.ts ***!
  \*****************************************************/
/*! exports provided: UpdatecenterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatecenterPageModule", function() { return UpdatecenterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _updatecenter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updatecenter-routing.module */ "ljYH");
/* harmony import */ var _updatecenter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updatecenter.page */ "K9iP");







let UpdatecenterPageModule = class UpdatecenterPageModule {
};
UpdatecenterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _updatecenter_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdatecenterPageRoutingModule"]
        ],
        declarations: [_updatecenter_page__WEBPACK_IMPORTED_MODULE_6__["UpdatecenterPage"]]
    })
], UpdatecenterPageModule);



/***/ }),

/***/ "ljYH":
/*!*************************************************************!*\
  !*** ./src/app/updatecenter/updatecenter-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UpdatecenterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatecenterPageRoutingModule", function() { return UpdatecenterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _updatecenter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updatecenter.page */ "K9iP");




const routes = [
    {
        path: '',
        component: _updatecenter_page__WEBPACK_IMPORTED_MODULE_3__["UpdatecenterPage"]
    }
];
let UpdatecenterPageRoutingModule = class UpdatecenterPageRoutingModule {
};
UpdatecenterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdatecenterPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=updatecenter-updatecenter-module.js.map