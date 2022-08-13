(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nuggets-nuggets-module"],{

/***/ "EbQQ":
/*!***************************************************!*\
  !*** ./src/app/nuggets/nuggets-routing.module.ts ***!
  \***************************************************/
/*! exports provided: NuggetsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuggetsPageRoutingModule", function() { return NuggetsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nuggets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuggets.page */ "TkaH");




const routes = [
    {
        path: '',
        component: _nuggets_page__WEBPACK_IMPORTED_MODULE_3__["NuggetsPage"]
    }
];
let NuggetsPageRoutingModule = class NuggetsPageRoutingModule {
};
NuggetsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NuggetsPageRoutingModule);



/***/ }),

/***/ "HAc8":
/*!*******************************************!*\
  !*** ./src/app/nuggets/nuggets.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color:#2D3338;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-card-subtitle {\n  --ion-font-family: \"Lato\"!important;\n  font-family: \"Lato\" !important;\n  font-weight: bold;\n  font-size: x-small;\n  color: #ffffff;\n}\n\nion-content {\n  --ion-background-color:#2D3338;\n  --ion-text-color: #ffffff;\n}\n\nion-card img {\n  width: 100%;\n  height: 100%;\n  --ion-text-color: #ffffff;\n}\n\nion-card-title {\n  color: #ffffff;\n}\n\n.row {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 18px;\n  line-height: 1.42857143;\n  color: #fff;\n  background-color: #333;\n  padding-left: 18px;\n  padding-right: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL251Z2dldHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQVNBO0VBQ0ksMkRBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTkoiLCJmaWxlIjoibnVnZ2V0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMyRDMzMzg7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdMYXRvJyFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJyAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTp4LXNtYWxsO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMyRDMzMzg7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuXG5pb24tY2FyZCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi8vaW9uLWNvbnRlbnR7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMyRDMzMzg7XG4gICAgLy8tLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAgIC8vLS1pb24tZm9udC1mYW1pbHk6ICdMYXRvJyBzYW5zLXNlcmlmO1xuLy99XG5cbi5yb3cge1xuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG59Il19 */");

/***/ }),

/***/ "TkaH":
/*!*****************************************!*\
  !*** ./src/app/nuggets/nuggets.page.ts ***!
  \*****************************************/
/*! exports provided: NuggetsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuggetsPage", function() { return NuggetsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nuggets_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nuggets.page.html */ "y1uk");
/* harmony import */ var _nuggets_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nuggets.page.scss */ "HAc8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NuggetsPage = class NuggetsPage {
    constructor() { }
    ngOnInit() {
    }
};
NuggetsPage.ctorParameters = () => [];
NuggetsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nuggets',
        template: _raw_loader_nuggets_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nuggets_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NuggetsPage);



/***/ }),

/***/ "pyAB":
/*!*******************************************!*\
  !*** ./src/app/nuggets/nuggets.module.ts ***!
  \*******************************************/
/*! exports provided: NuggetsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuggetsPageModule", function() { return NuggetsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nuggets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nuggets-routing.module */ "EbQQ");
/* harmony import */ var _nuggets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuggets.page */ "TkaH");







let NuggetsPageModule = class NuggetsPageModule {
};
NuggetsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nuggets_routing_module__WEBPACK_IMPORTED_MODULE_5__["NuggetsPageRoutingModule"]
        ],
        declarations: [_nuggets_page__WEBPACK_IMPORTED_MODULE_6__["NuggetsPage"]]
    })
], NuggetsPageModule);



/***/ }),

/***/ "y1uk":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nuggets/nuggets.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card>\n    <img src=\"../../assets/images/nuggets.PNG\" style=\"object-fit: fill;\" />\n    <ion-card-title>The Golden Nuggets Blog</ion-card-title>\n    <ion-card-content>\n      With Pastor Ibukun Adewusi\n    </ion-card-content>\n  </ion-card>\n\n  <br />\n  <h3 style=\"padding-left: 18px;\">Dealing with Wounds</h3>\n\n  <div class=\"row\">\n  <p>Wounds have a way of interfering with so many things in a person’s life. When you look at a physical wound, it has the potential of taking your attention from other important issues and causes you to focus on the pain at hand. If untreated, it doesn’t just end there but can begin to get infected, causing more havoc, pain and depending on the severity of such wound, it can eventually lead to amputation. The same goes for wounds in marriage.</p>\n\n  <p>As I was writing the previous blog posts on submission, I began to hear in my spirit one of those days “dealing with wounds” and as I pondered on those words, the Holy Spirit began to make me realize that a lot of women find it very challenging to submit because of existing wounds in their marriages. This is not just applicable to wives only but husbands as well.  Most physical wounds are very visible but emotional wounds are dangerous because it is hidden and not seen physically until it begins to manifest outwardly as a result of the pain within. When a hurt, misunderstanding, or unresolved question(s) are not dealt with, they begin to erode trust, creating a disconnect between husbands and wives, and eventually, it becomes very challenging to submit as a wife or love as a husband.</p>\n\n  <p>Today, we’ll be focusing on wounds in marriages, what causes them, and how we can deal with them. Let’s begin!</p>\n\n  <h2>Some Causes of Wounds in Marriages</h2>\n\n  <p><b>Infidelity:</b> When the covenant in marriage is broken, there are consequences that follow and one of such is the erosion of trust and wounds in the heart. Infidelity is not just physical in nature but also involves emotional infidelity. For women especially, when a husband begins to emotionally connect and give more attention to someone else other than his wife, this opens up deep wounds. When physical and/or emotional infidelity occurs, wounds are bound to be created for either spouse. \n  </p>\n\n  <p><b>Delay in Having Children:</b> Delays in having kids can be caused by many reasons including low sperm count, fibroids, polycystic ovarian syndrome (PCOS), fallopian tube blockage, thyroid disorders, endocrine disruptions caused by exposure to hazardous chemicals in everyday personal care/household items, and in some cases, delay as a result of God’s own appointed time for conception. If a couple doesn’t stand together as one, to work and fight together against their current situation, this can open the door to interference from in-laws or third parties in general, who can begin to blame either the wife or husband for their delay in having kids. On the other hand,  listening to the lies of the devil can also open up the door to either the husband or wife blaming their spouse for their delay. When such occurs, a wound is created.  \n  </p>\n\n  <p><b>Loss of a Pregnancy of a Child:</b> Losing a pregnancy or a child comes with so many questions, lots of emotions, and sometimes the temptation to place blame on one’s self or even their spouse. The way each spouse might deal with grieving a lost pregnancy or a child matters and if not properly understood by the other spouse, it would potentially paint a wrong picture filled with false truths, thereby causing resentment or condemnation. For example, a husband might not vocalize or perhaps outwardly express his emotions with lots of tears as compared to his wife while mourning the loss of a  pregnancy or child. Without proper communication with one another or talking to a counselor (their spiritual human authorities, psychologist), a wife might begin to believe the lies of the enemy that he blames her for the loss or he didn’t want or care about the pregnancy in the first place, even though that might not be true. As such, a wound is created, though based on a false truth.  \n  </p>\n\n  <p><b>Negligence:</b> A lack of communication or intimacy (physical, mental, emotional, or spiritual) can make a wife or husband feel neglected by their spouse and this can open up a wound in their heart. Sometimes, not adequately resolving or hashing out misunderstandings that occurred but sweeping it under the carpet could provide a conducive environment for a wound to be created. If this issue of negligence or wound isn’t brought to light and addressed, it could eventually lead to resentment/bitterness, sarcastic words being spoken, hurtful actions/words done deliberately with the intent to get their spouse’s attention, and suspicion amongst others.   \n  </p>\n\n  <p><b>Domestic Violence:</b> Domestic violence isn’t just physical battering or abuse but includes emotional, verbal, economical, and sexual abuse. As a result of such trauma and abuse, several forms of wounds are created including physical, emotional, mental, and in some cases spiritual wounds.   \n  </p>\n\n  <p><b>Please note:</b>If you are physically abused in your marriage, it is important you seek a place of safety. It is crucial you remain alive before the restoration process.</p>\n\n  <h2>Why Wounds Need to be Dealt With</h2>\n\n  <p>Many are not able to honor their husbands or love their wives because they have been wounded. Wounds have to be dealt with in order to function properly. A wounded person cannot fight effectively against the wiles of the enemy. Instead, they become an instrument in the hand of the enemy to attack and fulfill his mission, to steal, kill and destroy. </p>\n\n  <p>The devil is happy when a person allows wounds to fester in their heart and home because he knows that if not dealt with, it gives him an opportunity to strike and disrupt the peace, joy, unity, and ultimate vision God has intended for that union.  When the bible says in Ephesians 4:26-27, “Be angry but do not sin; do not let the sun go down on your anger, and give no opportunity to the devil” (RSV), it is not just referring to active anger but also passive anger that has been allowed to fester in a person’s heart for a long time, creating deep wounds and thereby giving a foothold or opportunity for the devil to operate in their marriage</p>\n\n  <p>You need to be aware of the true enemy at work in your home, which is the devil and not your spouse. Yes, in some cases, your spouse might have opened the door for a wound to be created but you both have the responsibility to come together to fight against the orchestration and wiles of the main enemy, the devil. Let’s examine some ways to deal with wounds in marriage.</p>\n\n  <h2>Ways to Deal with Wounds in Marriage</h2>\n\n  <p><b>Talk About It Together:</b> Talking about whatever the situation caused the wound helps you identify how and what opened the door to the wound in your marriage. This helps you to deal with the root cause, why this took place, and how to avoid such from happening again. The devil thrives where there is no unity but talking about it together from a place of respect and no judgment, allows you both to be on the same page and it actually reinforces your unity. The bible says in James 5:16:\n  \n  <i>“Therefore, confess your sins to one another [your false steps, your offenses], and pray for one another, that you may be healed and restored. The heartfelt and persistent prayer of a righteous man (believer) is able to accomplish much [when put into action and made effective by God—it is dynamic and can have tremendous power].” (AMP)</i>\n  </p>\n\n  <p><b>Seek Help or Escalate to Spiritual Human Authority:</b> There are times where you might need to escalate to higher spiritual human authorities to help with navigating how to deal with the wounds, especially when both spouses are finding it difficult to discuss the issue together. However, it is not advisable to discuss this with biological parents concerning this, as there is a possibility for bias to exist or for sides to be taken towards their biological child.  \n  </p>\n\n  <p><b>Forgive:</b> Talking about it and escalating to higher spiritual human authorities is there to aid forgiveness. Forgiveness invites God into the matter and allows healing to take place. It reinforces the synergy that exists in your union and generates power against the wiles of the enemy. Together, you are able to resist the works of the enemy and ensure that the plan and vision that God has for your marriage remains. God has a powerful vision for your marriage and that frightens the devil. This is one reason why the devil wants you to remain in bitterness and unforgiveness, thereby giving him a foothold into your home. Resist the devil [through forgiveness] and he will flee (James 4:7).\n  </p>\n\n  <p><b>Stand on God's Word Together:</b> Search and meditate on scriptures that address the root of the wounds, until you are lighted by revelation from such scriptures. Allow that revelation to guide your thoughts, your words, and your actions.\n\n  When the temptation comes for you to ruminate or remember the previous things that caused the wounds to exist, stand and hold on to what God’s word says concerning the matter. Resist the lies of the enemy through the revelation gotten from the word of God and he will flee from you. For example, the bible says:\n  </p>\n\n  <p><b>Tackling Infidelity:</b> “Now to Him who is able to keep you from stumbling or falling into sin, and to present you unblemished [blameless and faultless] in the presence of His glory with triumphant joy and unspeakable delight” (Jude 1:24, AMP)   \n  </p>\n\n  <p><b>Tackling Delay in Having Children:</b> “Lift up your eyes round about you and see! They all gather themselves together, they come to you. Your sons shall come from afar, and your daughters shall be carried and nursed in the arms.” (Isaiah 60:4, AMPC)\n  </p>\n\n  <p><b>Tackling the loss of a pregnancy of child:</b> “Instead of your [former] shame you will have a double portion; And instead of humiliation your people will shout for joy over their portion. Therefore in their land they will possess double [what they had forfeited]; Everlasting joy will be theirs.” (Isaiah 61:7, AMPC)</p>\n\n  <p><b>Tackling Negligence:</b> “Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear. And do not grieve the Holy Spirit of God, by whom you were sealed for the day of redemption. Let all bitterness and wrath and anger and clamor and slander be put away from you, along with all malice. Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.” (Ephesians 4:29-32, ESV)</p>\n\n  <p><b>Tackling Domestic Violence (after restoration):</b> “Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness of God.” (James 1:19-20, ESV)</p>\n\n  <p><b>Tackling All:</b> “He who covers and forgives an offense seeks love, But he who repeats or gossips about a matter separates intimate friends.” (Proverbs 17:9, AMP)\n  <br><br>\n  “Therefore if any person is [ingrafted] in Christ (the Messiah) he is a new creation (a new creature altogether); the old [previous moral and spiritual condition] has passed away. Behold, the fresh and new has come!” (2 Corinthians 5:17, AMPC)\n  <br><br>\n  “I know that whatever God does, it endures forever; nothing can be added to it nor can anything be taken from it, for God does it so that men will fear and worship Him [with awe-filled reverence, knowing that He is God].” (Ecclesiastes 3:14, AMP)</p>\n\n\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=nuggets-nuggets-module.js.map