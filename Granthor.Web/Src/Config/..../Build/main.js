webpackJsonp([1],{

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(82);
var forms_1 = __webpack_require__(26); // <-- NgModel lives here
var router_1 = __webpack_require__(275);
__webpack_require__(731);
var App_Component_1 = __webpack_require__(730);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: '', component: App_Component_1.AppComponent }
            ])
        ],
        declarations: [
            App_Component_1.AppComponent
        ],
        bootstrap: [App_Component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var AppComponent = (function () {
    function AppComponent() {
        this.sliderValue = 5;
        this.numericValue = 5;
        this.switchValue = false;
        this.min = 0;
        this.max = 10;
        this.smallStep = 1;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'granthor-app',
        template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \".//Src/App/Views/RootView.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tsr = __webpack_require__(284);
var Utils = (function () {
    function Utils() {
        //toastr configuration
        tsr.options.closeButton = true;
        tsr.options.debug = false;
        tsr.options.newestOnTop = false;
        tsr.options.progressBar = false;
        tsr.options.positionClass = "toast-top-full-width";
        tsr.options.preventDuplicates = false;
        tsr.options.onclick = null;
        tsr.options.showDuration = 300;
        tsr.options.hideDuration = 1000;
        tsr.options.timeOut = 5000;
        tsr.options.extendedTimeOut = 1000;
        tsr.options.showEasing = "swing";
        tsr.options.hideEasing = "linear";
        tsr.options.showMethod = "fadeIn";
        tsr.options.hideMethod = "fadeOut";
    }
    Utils.getInstance = function () {
        if (!Utils.instance) {
            Utils.instance = new Utils();
        }
        return Utils.instance;
    };
    Utils.prototype.writeSuccess = function (mex) {
        tsr.success(mex);
    };
    return Utils;
}());
var environment = (function () {
    function environment() {
    }
    return environment;
}());
environment.utils = Utils.getInstance();
exports.environment = environment;
;


/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(186);
var App_1 = __webpack_require__(537);
//import './Styles/style.css'
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(App_1.AppModule);


/***/ })

},[733]);
//# sourceMappingURL=main.js.map