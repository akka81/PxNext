webpackJsonp([1],{

/***/ 165:
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
var Subject_1 = __webpack_require__(11);
var LoadingSpinnerService = (function () {
    function LoadingSpinnerService() {
        // Observable string sources
        this.spinnerStatus = new Subject_1.Subject();
        this.spinnerStatus$ = this.spinnerStatus.asObservable();
    }
    LoadingSpinnerService.prototype.showLoader = function (status) {
        this.spinnerStatus.next(status);
    };
    return LoadingSpinnerService;
}());
LoadingSpinnerService = __decorate([
    core_1.Injectable()
], LoadingSpinnerService);
exports.LoadingSpinnerService = LoadingSpinnerService;


/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tsr = __webpack_require__(285);
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

/***/ 539:
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
var platform_browser_1 = __webpack_require__(83);
var forms_1 = __webpack_require__(27); // <-- NgModel lives here
var router_1 = __webpack_require__(278);
__webpack_require__(449);
var kendo_angular_inputs_1 = __webpack_require__(185);
var App_Component_1 = __webpack_require__(733);
var test_component_1 = __webpack_require__(734);
var test1_component_1 = __webpack_require__(735);
var loadingSpinner_service_1 = __webpack_require__(165);
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
            kendo_angular_inputs_1.InputsModule,
            router_1.RouterModule.forRoot([
                { path: 'test', component: test_component_1.TestComponent },
                { path: 'test1', component: test1_component_1.Test1Component }
            ])
        ],
        declarations: [
            App_Component_1.AppComponent,
            test_component_1.TestComponent,
            test1_component_1.Test1Component
        ],
        providers: [
            loadingSpinner_service_1.LoadingSpinnerService
        ],
        bootstrap: [App_Component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var loadingSpinner_service_1 = __webpack_require__(165);
__webpack_require__(901);
var AppComponent = (function () {
    function AppComponent(loadingSpinnerService) {
        this.loadingSpinnerService = loadingSpinnerService;
        this.loaderStatus = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingSpinnerService.spinnerStatus$.subscribe(function (val) {
            _this.loaderStatus = val;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'granthor-app',
        templateUrl: __webpack_require__(902)
    }),
    __metadata("design:paramtypes", [loadingSpinner_service_1.LoadingSpinnerService])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Environment_1 = __webpack_require__(449);
var loadingSpinner_service_1 = __webpack_require__(165);
var TestComponent = (function () {
    function TestComponent(loadingSpinnerService) {
        this.loadingSpinnerService = loadingSpinnerService;
        this.sliderValue = 5;
        this.numericValue = 5;
        this.switchValue = false;
        this.min = 0;
        this.max = 10;
        this.smallStep = 1;
    }
    TestComponent.prototype.onClickLoader = function () {
        this.loadingSpinnerService.showLoader(true);
    };
    TestComponent.prototype.onClick = function () {
        Environment_1.environment.utils.writeSuccess(this.sliderValue.toString());
        Environment_1.environment.utils.writeSuccess(this.numericValue.toString());
        Environment_1.environment.utils.writeSuccess(this.switchValue == true ? "true" : "false");
    };
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'test-comp',
        templateUrl: __webpack_require__(904)
    }),
    __metadata("design:paramtypes", [loadingSpinner_service_1.LoadingSpinnerService])
], TestComponent);
exports.TestComponent = TestComponent;


/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var loadingSpinner_service_1 = __webpack_require__(165);
var Test1Component = (function () {
    function Test1Component(loadingSpinnerService) {
        this.loadingSpinnerService = loadingSpinnerService;
    }
    Test1Component.prototype.onClick = function () {
        this.loadingSpinnerService.showLoader(true);
    };
    return Test1Component;
}());
Test1Component = __decorate([
    core_1.Component({
        selector: 'test1-comp',
        templateUrl: __webpack_require__(903)
    }),
    __metadata("design:paramtypes", [loadingSpinner_service_1.LoadingSpinnerService])
], Test1Component);
exports.Test1Component = Test1Component;


/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(189);
var App_1 = __webpack_require__(539);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(App_1.AppModule);


/***/ }),

/***/ 901:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = "/Build/Views/RootView.html";

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

module.exports = "/Build/Views/Test1View.html";

/***/ }),

/***/ 904:
/***/ (function(module, exports) {

module.exports = "/Build/Views/TestView.html";

/***/ })

},[737]);
//# sourceMappingURL=main.js.map