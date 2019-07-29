(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"loadingApp\">\n    <div style=\"display: block; width: 100%; text-align: center; line-height: 100vh\">App Loading...</div>\n</ng-container>\n<section class=\"section\">\n    <app-navigation></app-navigation>\n</section>\n<section class=\"section\">\n    <router-outlet (activate)=\"loadingApp = false\"></router-outlet>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/book-card/book-card.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/book-card/book-card.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-content\">\n        <div class=\"media\">\n            <div\n                class=\"media-left favourites-toggle\"\n                (click)=\"toggleFavourites.emit()\"\n                [class.has-text-link]=\"isFavourite\"\n                [class.has-text-grey-light]=\"!isFavourite\">\n                <span class=\"icon is-small\"><fa-icon [icon]=\"faHeart\"></fa-icon></span>\n            </div>\n            <div class=\"media-content\">\n                <p class=\"title is-4\">{{book.volumeInfo.title}}</p>\n                <p class=\"subtitle is-6\">{{book.volumeInfo.subtitle}}</p>\n            </div>\n        </div>\n        <div class=\"content\">\n\n        </div>\n    </div>\n</div>\n\n<!--<div class=\"container\" (click)=\"toggleFavourites.emit()\">-->\n<!--    <span *ngIf=\"isFavourite; else no\">+</span>-->\n<!--    <ng-template #no>-->\n<!--        <span>-</span>-->\n<!--    </ng-template>-->\n<!--</div>-->\n<!--<span> {{book.volumeInfo.title}}. {{book.volumeInfo.subtitle}}</span>-->\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/books/books.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/books/books.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-books-search\n        [query]=\"query\"\n        [searchLoading]=\"getBooksLoading()\"\n        (search)=\"searchBooks($event)\">\n    </app-books-search>\n</div>\n\n<div class=\"container status\">\n    <div class=\"notification is-medium\">\n        <span *ngIf=\"getBooksLoading(); else statusShowResults\">Выполняется поиск...</span>\n        <ng-template #statusShowResults>\n            <span *ngIf=\"!booksResponse; else statusResults\">Начните поиск...</span>\n        </ng-template>\n        <ng-template #statusResults>\n            <span *ngIf=\"!booksResponse.items?.length; else statusShowItems\">\n                По Вашему запросу ничего не найдено\n            </span>\n        </ng-template>\n        <ng-template #statusShowItems>\n            <span>Найдено всего: {{booksResponse.totalItems}}</span>\n        </ng-template>\n    </div>\n</div>\n\n<div class=\"container\" *ngIf=\"booksResponse?.items?.length\">\n\n    <div class=\"container\" *ngFor=\"let book of booksResponse.items; let i = index;\">\n        <app-book-card\n            [book]=\"book\"\n            [isFavourite]=\"!!favouritesMap[book.id]\"\n            (toggleFavourites)=\"toggleFavourites(book)\"></app-book-card>\n    </div>\n\n    <div class=\"container next-page\" *ngIf=\"booksResponse.totalItems > booksResponse.items.length\">\n        <div class=\"notification has-text-centered\" *ngIf=\"getNextBooksPageLoading(); else getNextPageButton\">\n            <span class=\"is-medium\">Загружаем результаты...</span>\n        </div>\n\n        <ng-template #getNextPageButton>\n            <button class=\"button is-link is-medium is-fullwidth\" (click)=\"getNextPage()\">Загрузить ещё результаты\n            </button>\n        </ng-template>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/books/modules/books-search/books-search.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/books/modules/books-search/books-search.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"searchForm\" novalidate>\n    <div class=\"container\">\n        <div class=\"field has-addons\">\n            <p class=\"control is-expanded is-large\" [class.is-loading]=\"searchLoading\">\n                <input\n                    #inputElement\n                    class=\"input is-large is-expanded\"\n                    type=\"text\" placeholder=\"Начните поиск...\"\n                    formControlName=\"query\" [maxlength]=\"maxlength\"/>\n            </p>\n            <p class=\"control\">\n                <button type=\"button\" class=\"button is-large\" [disabled]=\"!inputElement.value\" (click)=\"clearSearch()\">\n                    Clear\n                </button>\n            </p>\n        </div>\n    </div>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/favourites/favourites.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/favourites/favourites.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let book of favourites; let i = index;\">\n    <app-book-card\n        [book]=\"book\" [isFavourite]=\"true\"\n        (toggleFavourites)=\"removeFromFavourites(book.id)\"></app-book-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/navigation/navigation.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/navigation/navigation.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"tabs is-centered is-large is-toggle\">\n        <ul>\n            <li\n                routerLink=\"/\"\n                routerLinkActive=\"is-active\"\n                [routerLinkActiveOptions]=\"{ exact: true }\">\n                <a>\n                    <span class=\"icon is-small\"><fa-icon [icon]=\"faSearch\"></fa-icon></span>\n                    <span>Поиск книг</span>\n                </a>\n            </li>\n            <li\n                routerLink=\"/favourites\"\n                routerLinkActive=\"is-active\">\n                <a>\n                    <span class=\"icon is-small\"><fa-icon [icon]=\"faHeart\"></fa-icon></span>\n                    <span>Избранное / {{countFavourites}}</span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_books_books_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/books/books.component */ "./src/app/modules/books/books.component.ts");
/* harmony import */ var _modules_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/favourites/favourites.component */ "./src/app/modules/favourites/favourites.component.ts");





const routes = [
    {
        path: '',
        component: _modules_books_books_component__WEBPACK_IMPORTED_MODULE_3__["BooksComponent"],
    },
    {
        path: 'favourites',
        component: _modules_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_4__["FavouritesComponent"],
    },
    {
        path: '**',
        redirectTo: '/',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.loadingApp = true;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _interceptors_url_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/url.interceptor */ "./src/app/interceptors/url.interceptor.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _interceptors_errors_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/errors.interceptor */ "./src/app/interceptors/errors.interceptor.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_app_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/app.store */ "./src/app/store/app.store.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _serializers_custom_route_serializer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./serializers/custom-route.serializer */ "./src/app/serializers/custom-route.serializer.ts");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/navigation/navigation.module */ "./src/app/modules/navigation/navigation.module.ts");
/* harmony import */ var _modules_books_books_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/books/books.module */ "./src/app/modules/books/books.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _modules_favourites_favourites_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/favourites/favourites.module */ "./src/app/modules/favourites/favourites.module.ts");
/* harmony import */ var _providers_window_providers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./providers/window.providers */ "./src/app/providers/window.providers.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_store_app_store__WEBPACK_IMPORTED_MODULE_11__["AppStore"].reducers, {
                metaReducers: _store_app_store__WEBPACK_IMPORTED_MODULE_11__["AppStore"].metaReducers,
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_12__["StoreRouterConnectingModule"].forRoot({
                serializer: _serializers_custom_route_serializer__WEBPACK_IMPORTED_MODULE_14__["CustomRouterSerializer"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([]),
            _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_15__["NavigationModule"],
            _modules_books_books_module__WEBPACK_IMPORTED_MODULE_16__["BooksModule"],
            _modules_favourites_favourites_module__WEBPACK_IMPORTED_MODULE_19__["FavouritesModule"],
            !_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__["StoreDevtoolsModule"].instrument({ maxAge: 50 }) : [],
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_url_interceptor__WEBPACK_IMPORTED_MODULE_7__["URLInterceptor"],
                multi: true,
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_errors_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorsInterceptor"],
                multi: true,
            },
            _providers_window_providers__WEBPACK_IMPORTED_MODULE_20__["WINDOW_PROVIDERS"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/interceptors/errors.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/interceptors/errors.interceptor.ts ***!
  \****************************************************/
/*! exports provided: ErrorsInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsInterceptor", function() { return ErrorsInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let ErrorsInterceptor = class ErrorsInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(event => {
        }, err => {
            let errorText = 'Unknown error';
            if (err && err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    errorText = 'Auth error';
                }
                else if (err.status === 404) {
                    errorText = '404 error';
                }
                else if (err.status !== 400) {
                    errorText = 'Unknown HTTP error';
                }
            }
            const notify = this.injector.get(ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]);
            notify.error(errorText, null, { timeOut: 2000, closeButton: true });
        }));
    }
};
ErrorsInterceptor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];
ErrorsInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ErrorsInterceptor);



/***/ }),

/***/ "./src/app/interceptors/url.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/interceptors/url.interceptor.ts ***!
  \*************************************************/
/*! exports provided: URLInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLInterceptor", function() { return URLInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



let URLInterceptor = class URLInterceptor {
    intercept(req, next) {
        req = req.clone({
            url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].restUrl}${req.url}`,
            setParams: Object.assign({}, req.params, { key: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiKey })
        });
        return next.handle(req);
    }
};
URLInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], URLInterceptor);



/***/ }),

/***/ "./src/app/modules/book-card/book-card.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/book-card/book-card.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".favourites-toggle {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXhleS93b3JrL3R6L2luY29tYS90ei1pbmNvbWEvc3JjL2FwcC9tb2R1bGVzL2Jvb2stY2FyZC9ib29rLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYm9vay1jYXJkL2Jvb2stY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYm9vay1jYXJkL2Jvb2stY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXZvdXJpdGVzLXRvZ2dsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiLmZhdm91cml0ZXMtdG9nZ2xlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/book-card/book-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/book-card/book-card.component.ts ***!
  \**********************************************************/
/*! exports provided: BookCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCardComponent", function() { return BookCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let BookCardComponent = class BookCardComponent {
    constructor() {
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHeart"];
        this.toggleFavourites = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookCardComponent.prototype, "book", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookCardComponent.prototype, "isFavourite", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BookCardComponent.prototype, "toggleFavourites", void 0);
BookCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-card',
        template: __webpack_require__(/*! raw-loader!./book-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/book-card/book-card.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./book-card.component.scss */ "./src/app/modules/book-card/book-card.component.scss")]
    })
], BookCardComponent);



/***/ }),

/***/ "./src/app/modules/book-card/book-card.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/book-card/book-card.module.ts ***!
  \*******************************************************/
/*! exports provided: BookCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCardModule", function() { return BookCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _book_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-card.component */ "./src/app/modules/book-card/book-card.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");





let BookCardModule = class BookCardModule {
};
BookCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_book_card_component__WEBPACK_IMPORTED_MODULE_3__["BookCardComponent"]],
        exports: [_book_card_component__WEBPACK_IMPORTED_MODULE_3__["BookCardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
        ]
    })
], BookCardModule);



/***/ }),

/***/ "./src/app/modules/books/books.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/books/books.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container.status {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.container.next-page {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXhleS93b3JrL3R6L2luY29tYS90ei1pbmNvbWEvc3JjL2FwcC9tb2R1bGVzL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0FSO0FER0k7RUFDSSxnQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ib29rcy9ib29rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgJi5zdGF0dXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgICYubmV4dC1wYWdlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG59XG4iLCIuY29udGFpbmVyLnN0YXR1cyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY29udGFpbmVyLm5leHQtcGFnZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/books/books.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/books/books.component.ts ***!
  \**************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_books_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/books.actions */ "./src/app/modules/books/store/books.actions.ts");
/* harmony import */ var _store_books_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/books.store */ "./src/app/modules/books/store/books.store.ts");
/* harmony import */ var _providers_window_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/window.providers */ "./src/app/providers/window.providers.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_favourites_favourites_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/favourites/favourites.service */ "./src/app/services/favourites/favourites.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSpinner */ "./node_modules/@fortawesome/free-solid-svg-icons/faSpinner.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_10__);











let BooksComponent = class BooksComponent {
    constructor(store$, cdr, document, window, favouritesService) {
        this.store$ = store$;
        this.cdr = cdr;
        this.document = document;
        this.window = window;
        this.favouritesService = favouritesService;
        this.faSpinner = _fortawesome_free_solid_svg_icons_faSpinner__WEBPACK_IMPORTED_MODULE_10__["faSpinner"];
        this.subscriptions = [];
    }
    set subs(sub) {
        this.subscriptions.push(sub);
    }
    ngOnInit() {
        this.favouritesMap = this.favouritesService.favouritesMap;
        this.initSubscriptions();
    }
    ngOnChanges() {
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    initSubscriptions() {
        this.subs = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_books_store__WEBPACK_IMPORTED_MODULE_6__["BooksStore"].Selects.self.query), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(query => {
            this.query = query;
            this.cdr.detectChanges();
        })).subscribe();
        this.subs = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_books_store__WEBPACK_IMPORTED_MODULE_6__["BooksStore"].Selects.self.booksResponse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(books => {
            this.booksResponse = books;
            this.cdr.detectChanges();
        })).subscribe();
        this.subs = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_books_store__WEBPACK_IMPORTED_MODULE_6__["BooksStore"].Selects.self.serviceLoading), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(serviceLoading => {
            this.serviceLoading = serviceLoading;
            this.cdr.detectChanges();
        })).subscribe();
        this.subs = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.window, 'mousewheel')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((e) => e.wheelDelta), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(wheelDelta => {
            const heightToEnd = this.document.body.clientHeight - this.window.innerHeight - this.window.pageYOffset;
            return wheelDelta < 0 && heightToEnd <= 0
                && !this.getBooksLoading() && !this.getNextBooksPageLoading()
                && this.booksResponse && this.booksResponse.totalItems > this.booksResponse.items.length;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => {
            this.store$.dispatch(new _store_books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActions"].GetNextBooksPage());
        })).subscribe();
    }
    searchBooks(query) {
        this.store$.dispatch(new _store_books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActions"].GetBooks(query));
    }
    getNextPage() {
        this.store$.dispatch(new _store_books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActions"].GetNextBooksPage());
    }
    getBooksLoading() {
        return this.serviceLoading && this.serviceLoading[_store_books_store__WEBPACK_IMPORTED_MODULE_6__["BooksStore"].SERVICE_LOADING.GET_BOOKS];
    }
    getNextBooksPageLoading() {
        return this.serviceLoading && this.serviceLoading[_store_books_store__WEBPACK_IMPORTED_MODULE_6__["BooksStore"].SERVICE_LOADING.GET_NEXT_BOOKS_PAGE];
    }
    toggleFavourites(book) {
        this.favouritesService.toggleFavourites(book);
    }
};
BooksComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"],] }] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_providers_window_providers__WEBPACK_IMPORTED_MODULE_7__["WINDOW"],] }] },
    { type: _services_favourites_favourites_service__WEBPACK_IMPORTED_MODULE_9__["FavouritesService"] }
];
BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-books',
        template: __webpack_require__(/*! raw-loader!./books.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/books/books.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./books.component.scss */ "./src/app/modules/books/books.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_providers_window_providers__WEBPACK_IMPORTED_MODULE_7__["WINDOW"]))
], BooksComponent);



/***/ }),

/***/ "./src/app/modules/books/books.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/books/books.module.ts ***!
  \***********************************************/
/*! exports provided: BooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _books_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books.component */ "./src/app/modules/books/books.component.ts");
/* harmony import */ var _modules_books_search_books_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/books-search/books-search.module */ "./src/app/modules/books/modules/books-search/books-search.module.ts");
/* harmony import */ var _store_books_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/books.store */ "./src/app/modules/books/store/books.store.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_books_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/books.effects */ "./src/app/modules/books/store/books.effects.ts");
/* harmony import */ var _book_card_book_card_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../book-card/book-card.module */ "./src/app/modules/book-card/book-card.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");











let BooksModule = class BooksModule {
};
BooksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_books_component__WEBPACK_IMPORTED_MODULE_3__["BooksComponent"]],
        exports: [_books_component__WEBPACK_IMPORTED_MODULE_3__["BooksComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _modules_books_search_books_search_module__WEBPACK_IMPORTED_MODULE_4__["BooksSearchModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_store_books_store__WEBPACK_IMPORTED_MODULE_5__["BooksStore"].FEATURE_UID, _store_books_store__WEBPACK_IMPORTED_MODULE_5__["BooksStore"].mapReducers),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([
                _store_books_effects__WEBPACK_IMPORTED_MODULE_8__["BooksEffects"],
            ]),
            _book_card_book_card_module__WEBPACK_IMPORTED_MODULE_9__["BookCardModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
        ]
    })
], BooksModule);



/***/ }),

/***/ "./src/app/modules/books/modules/books-search/books-search.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/books/modules/books-search/books-search.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":focus {\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXhleS93b3JrL3R6L2luY29tYS90ei1pbmNvbWEvc3JjL2FwcC9tb2R1bGVzL2Jvb2tzL21vZHVsZXMvYm9va3Mtc2VhcmNoL2Jvb2tzLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ib29rcy9tb2R1bGVzL2Jvb2tzLXNlYXJjaC9ib29rcy1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ib29rcy9tb2R1bGVzL2Jvb2tzLXNlYXJjaC9ib29rcy1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4iLCI6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/books/modules/books-search/books-search.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/books/modules/books-search/books-search.component.ts ***!
  \******************************************************************************/
/*! exports provided: BooksSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksSearchComponent", function() { return BooksSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





let BooksSearchComponent = class BooksSearchComponent {
    constructor(fb) {
        this.fb = fb;
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"];
        this.subscriptions = [];
    }
    set subs(sub) {
        this.subscriptions.push(sub);
    }
    ngOnInit() {
        this.initForm();
    }
    ngAfterViewInit() {
        this.inputElement.nativeElement.focus();
    }
    ngOnChanges(simpleChanges) {
        if (simpleChanges.query && this.searchForm) {
            this.searchForm.patchValue({ query: this.query }, { emitEvent: false });
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    initForm() {
        this.searchForm = this.fb.group({
            query: [this.query],
        });
        this.searchForm.controls.query.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(query => {
            query = (query || '').trim().slice(0, this.maxlength);
            this.search.emit(query);
        })).subscribe();
    }
    clearSearch() {
        this.searchForm.patchValue({ query: '' });
    }
};
BooksSearchComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BooksSearchComponent.prototype, "query", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BooksSearchComponent.prototype, "searchLoading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BooksSearchComponent.prototype, "search", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputElement', { static: false })
], BooksSearchComponent.prototype, "inputElement", void 0);
BooksSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-books-search',
        template: __webpack_require__(/*! raw-loader!./books-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/books/modules/books-search/books-search.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./books-search.component.scss */ "./src/app/modules/books/modules/books-search/books-search.component.scss")]
    })
], BooksSearchComponent);



/***/ }),

/***/ "./src/app/modules/books/modules/books-search/books-search.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/books/modules/books-search/books-search.module.ts ***!
  \***************************************************************************/
/*! exports provided: BooksSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksSearchModule", function() { return BooksSearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _books_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books-search.component */ "./src/app/modules/books/modules/books-search/books-search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");






let BooksSearchModule = class BooksSearchModule {
};
BooksSearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_books_search_component__WEBPACK_IMPORTED_MODULE_3__["BooksSearchComponent"]],
        exports: [_books_search_component__WEBPACK_IMPORTED_MODULE_3__["BooksSearchComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        ]
    })
], BooksSearchModule);



/***/ }),

/***/ "./src/app/modules/books/services/books/books.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/books/services/books/books.service.ts ***!
  \***************************************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BooksService = class BooksService {
    constructor(http) {
        this.http = http;
    }
    getBooks(query, startIndex = 0) {
        return this.http.get(`volumes?q=${query}&startIndex=${startIndex}`);
    }
};
BooksService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BooksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BooksService);



/***/ }),

/***/ "./src/app/modules/books/store/books.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/books/store/books.actions.ts ***!
  \******************************************************/
/*! exports provided: BooksActionTypes, BooksActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksActionTypes", function() { return BooksActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksActions", function() { return BooksActions; });
var BooksActionTypes;
(function (BooksActionTypes) {
    BooksActionTypes.PATCH_SERVICE_LOADING = '[BooksActions] PATCH_SERVICE_LOADING';
    BooksActionTypes.GET_BOOKS = '[BooksActions] GET_BOOKS';
    BooksActionTypes.GET_BOOKS_SUCCESS = '[BooksActions] GET_BOOKS_SUCCESS';
    BooksActionTypes.GET_BOOKS_FAILED = '[BooksActions] GET_BOOKS_FAILED';
    BooksActionTypes.GET_NEXT_BOOKS_PAGE = '[BooksActions] GET_NEXT_BOOKS_PAGE';
    BooksActionTypes.GET_NEXT_BOOKS_PAGE_SUCCESS = '[BooksActions] GET_NEXT_BOOKS_PAGE_SUCCESS';
    BooksActionTypes.GET_NEXT_BOOKS_PAGE_FAILED = '[BooksActions] GET_NEXT_BOOKS_PAGE_FAILED';
})(BooksActionTypes || (BooksActionTypes = {}));
var BooksActions;
(function (BooksActions) {
    class PatchServiceLoading {
        constructor(payload) {
            this.payload = payload;
            this.type = BooksActionTypes.PATCH_SERVICE_LOADING;
        }
    }
    PatchServiceLoading.ctorParameters = () => [
        { type: undefined }
    ];
    BooksActions.PatchServiceLoading = PatchServiceLoading;
    class GetBooks {
        constructor(payload) {
            this.payload = payload;
            this.type = BooksActionTypes.GET_BOOKS;
        }
    }
    GetBooks.ctorParameters = () => [
        { type: String }
    ];
    BooksActions.GetBooks = GetBooks;
    class GetBooksSuccess {
        constructor(payload) {
            this.payload = payload;
            this.type = BooksActionTypes.GET_BOOKS_SUCCESS;
        }
    }
    GetBooksSuccess.ctorParameters = () => [
        { type: undefined }
    ];
    BooksActions.GetBooksSuccess = GetBooksSuccess;
    class GetBooksFailed {
        constructor() {
            this.type = BooksActionTypes.GET_BOOKS_FAILED;
        }
    }
    BooksActions.GetBooksFailed = GetBooksFailed;
    class GetNextBooksPage {
        constructor() {
            this.type = BooksActionTypes.GET_NEXT_BOOKS_PAGE;
        }
    }
    BooksActions.GetNextBooksPage = GetNextBooksPage;
    class GetNextBooksPageSuccess {
        constructor(payload) {
            this.payload = payload;
            this.type = BooksActionTypes.GET_NEXT_BOOKS_PAGE_SUCCESS;
        }
    }
    GetNextBooksPageSuccess.ctorParameters = () => [
        { type: Array }
    ];
    BooksActions.GetNextBooksPageSuccess = GetNextBooksPageSuccess;
    class GetNextBooksPageFailed {
        constructor() {
            this.type = BooksActionTypes.GET_NEXT_BOOKS_PAGE_FAILED;
        }
    }
    BooksActions.GetNextBooksPageFailed = GetNextBooksPageFailed;
})(BooksActions || (BooksActions = {}));


/***/ }),

/***/ "./src/app/modules/books/store/books.effects.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/books/store/books.effects.ts ***!
  \******************************************************/
/*! exports provided: BooksEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksEffects", function() { return BooksEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_books_books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/books/books.service */ "./src/app/modules/books/services/books/books.service.ts");
/* harmony import */ var _books_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books.actions */ "./src/app/modules/books/store/books.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _books_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./books.store */ "./src/app/modules/books/store/books.store.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");









let BooksEffects = class BooksEffects {
    constructor(actions$, booksService, store$) {
        this.actions$ = actions$;
        this.booksService = booksService;
        this.store$ = store$;
        this.getBooks$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActionTypes"].GET_BOOKS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(query => {
            if (!query) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActions"].GetBooksSuccess(null));
            }
            else {
                return this.booksService.getBooks(query)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(books => {
                    return new _books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActions"].GetBooksSuccess(books);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActions"].GetBooksFailed())));
            }
        })));
        this.serviceLoadingBooks$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActionTypes"].GET_BOOKS, _books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActionTypes"].GET_BOOKS_SUCCESS, _books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActionTypes"].GET_BOOKS_FAILED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => {
            const flags = {};
            flags[_books_store__WEBPACK_IMPORTED_MODULE_7__["BooksStore"].SERVICE_LOADING.GET_BOOKS] = action.type === _books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActionTypes"].GET_BOOKS;
            flags[_books_store__WEBPACK_IMPORTED_MODULE_7__["BooksStore"].SERVICE_LOADING.GET_NEXT_BOOKS_PAGE] = false;
            return new _books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActions"].PatchServiceLoading(flags);
        })));
        this.getNextBooksPage$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActionTypes"].GET_NEXT_BOOKS_PAGE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])(_books_store__WEBPACK_IMPORTED_MODULE_7__["BooksStore"].Selects.self.query)), this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])(_books_store__WEBPACK_IMPORTED_MODULE_7__["BooksStore"].Selects.self.booksResponse))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(([action, query, booksResponse]) => booksResponse && booksResponse.totalItems > booksResponse.items.length), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(([action, query, booksResponse]) => {
            return this.booksService.getBooks(query, booksResponse.items.length)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])(_books_store__WEBPACK_IMPORTED_MODULE_7__["BooksStore"].Selects.self.serviceLoading))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(([books, serviceLoading]) => {
                return serviceLoading[_books_store__WEBPACK_IMPORTED_MODULE_7__["BooksStore"].SERVICE_LOADING.GET_NEXT_BOOKS_PAGE];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([books]) => {
                return new _books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActions"].GetNextBooksPageSuccess(books.items);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActions"].GetNextBooksPageFailed())));
        })));
        this.serviceLoadingNextBooksPage$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActionTypes"].GET_NEXT_BOOKS_PAGE, _books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActionTypes"].GET_NEXT_BOOKS_PAGE_SUCCESS, _books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActionTypes"].GET_NEXT_BOOKS_PAGE_FAILED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => {
            const flags = {};
            flags[_books_store__WEBPACK_IMPORTED_MODULE_7__["BooksStore"].SERVICE_LOADING.GET_NEXT_BOOKS_PAGE] = action.type === _books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActionTypes"].GET_NEXT_BOOKS_PAGE;
            return new _books_actions__WEBPACK_IMPORTED_MODULE_5__["BooksActions"].PatchServiceLoading(flags);
        })));
    }
};
BooksEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_books_books_service__WEBPACK_IMPORTED_MODULE_4__["BooksService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }
];
BooksEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BooksEffects);



/***/ }),

/***/ "./src/app/modules/books/store/books.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/books/store/books.reducer.ts ***!
  \******************************************************/
/*! exports provided: BooksReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksReducer", function() { return BooksReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _books_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books.actions */ "./src/app/modules/books/store/books.actions.ts");


var BooksReducer;
(function (BooksReducer) {
    const initialState = {
        query: null,
        booksResponse: null,
        serviceLoading: {},
    };
    function createStoreSelector(selector) {
        class Selects {
            constructor() {
                this.query = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selector, ((state) => state.query));
                this.booksResponse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selector, ((state) => state.booksResponse));
                this.serviceLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selector, ((state) => state.serviceLoading));
            }
        }
        return new Selects();
    }
    BooksReducer.createStoreSelector = createStoreSelector;
    function reducer(state = Object.assign({}, initialState), action) {
        switch (action.type) {
            case _books_actions__WEBPACK_IMPORTED_MODULE_1__["BooksActionTypes"].PATCH_SERVICE_LOADING: {
                const serviceLoading = Object.assign({}, state.serviceLoading, action.payload);
                return Object.assign({}, state, { serviceLoading });
            }
            case _books_actions__WEBPACK_IMPORTED_MODULE_1__["BooksActionTypes"].GET_BOOKS: {
                return Object.assign({}, state, { query: action.payload });
            }
            case _books_actions__WEBPACK_IMPORTED_MODULE_1__["BooksActionTypes"].GET_BOOKS_SUCCESS: {
                const booksResponse = action.payload ? Object.assign({}, action.payload) : null;
                return Object.assign({}, state, { booksResponse });
            }
            case _books_actions__WEBPACK_IMPORTED_MODULE_1__["BooksActionTypes"].GET_BOOKS_FAILED: {
                return Object.assign({}, state, { booksResponse: null });
            }
            case _books_actions__WEBPACK_IMPORTED_MODULE_1__["BooksActionTypes"].GET_NEXT_BOOKS_PAGE_SUCCESS: {
                const items = state.booksResponse.items.concat(action.payload);
                return Object.assign({}, state, { booksResponse: Object.assign({}, state.booksResponse, { items }) });
            }
            default:
                return state;
        }
    }
    BooksReducer.reducer = reducer;
})(BooksReducer || (BooksReducer = {}));


/***/ }),

/***/ "./src/app/modules/books/store/books.store.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/books/store/books.store.ts ***!
  \****************************************************/
/*! exports provided: BooksStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksStore", function() { return BooksStore; });
/* harmony import */ var _books_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./books.reducer */ "./src/app/modules/books/store/books.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


var BooksStore;
(function (BooksStore) {
    BooksStore.FEATURE_UID = '[BooksStore] FEATURE_UID';
    BooksStore.SERVICE_LOADING = {
        GET_BOOKS: '[AppStore][SERVICE_LOADING] GET_BOOKS',
        GET_NEXT_BOOKS_PAGE: '[AppStore][SERVICE_LOADING] GET_NEXT_BOOKS_PAGE',
    };
    BooksStore.mapReducers = {
        selfStore: _books_reducer__WEBPACK_IMPORTED_MODULE_0__["BooksReducer"].reducer,
    };
    let Selects;
    (function (Selects) {
        const featureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(BooksStore.FEATURE_UID);
        // self
        const selfSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, (state) => state.selfStore);
        Selects.self = _books_reducer__WEBPACK_IMPORTED_MODULE_0__["BooksReducer"].createStoreSelector(selfSelector);
    })(Selects = BooksStore.Selects || (BooksStore.Selects = {}));
})(BooksStore || (BooksStore = {}));


/***/ }),

/***/ "./src/app/modules/favourites/favourites.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/favourites/favourites.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmF2b3VyaXRlcy9mYXZvdXJpdGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/favourites/favourites.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/favourites/favourites.component.ts ***!
  \************************************************************/
/*! exports provided: FavouritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function() { return FavouritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_favourites_favourites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/favourites/favourites.service */ "./src/app/services/favourites/favourites.service.ts");



let FavouritesComponent = class FavouritesComponent {
    constructor(favouritesService) {
        this.favouritesService = favouritesService;
        this.favourites = [];
    }
    ngOnInit() {
        this.favourites = this.favouritesService.favourites;
    }
    removeFromFavourites(id) {
        this.favouritesService.removeFromFavourites(id);
    }
};
FavouritesComponent.ctorParameters = () => [
    { type: _services_favourites_favourites_service__WEBPACK_IMPORTED_MODULE_2__["FavouritesService"] }
];
FavouritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favourites',
        template: __webpack_require__(/*! raw-loader!./favourites.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/favourites/favourites.component.html"),
        styles: [__webpack_require__(/*! ./favourites.component.scss */ "./src/app/modules/favourites/favourites.component.scss")]
    })
], FavouritesComponent);



/***/ }),

/***/ "./src/app/modules/favourites/favourites.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/favourites/favourites.module.ts ***!
  \*********************************************************/
/*! exports provided: FavouritesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesModule", function() { return FavouritesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _favourites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favourites.component */ "./src/app/modules/favourites/favourites.component.ts");
/* harmony import */ var _book_card_book_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../book-card/book-card.module */ "./src/app/modules/book-card/book-card.module.ts");





let FavouritesModule = class FavouritesModule {
};
FavouritesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_favourites_component__WEBPACK_IMPORTED_MODULE_3__["FavouritesComponent"]],
        exports: [_favourites_component__WEBPACK_IMPORTED_MODULE_3__["FavouritesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _book_card_book_card_module__WEBPACK_IMPORTED_MODULE_4__["BookCardModule"],
        ]
    })
], FavouritesModule);



/***/ }),

/***/ "./src/app/modules/navigation/navigation.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/navigation/navigation.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":focus {\n  outline: none;\n}\n\n.tabs ul {\n  flex-shrink: 1;\n  flex-wrap: wrap;\n}\n\n@media (max-width: 768px) {\n  .tabs ul li {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZXhleS93b3JrL3R6L2luY29tYS90ei1pbmNvbWEvc3JjL2FwcC9tb2R1bGVzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxXQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4udGFicyB1bCB7XG4gICAgZmxleC1zaHJpbms6IDE7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAudGFicyB1bCBsaSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbiIsIjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi50YWJzIHVsIHtcbiAgZmxleC1zaHJpbms6IDE7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50YWJzIHVsIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/navigation/navigation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/navigation/navigation.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_favourites_favourites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/favourites/favourites.service */ "./src/app/services/favourites/favourites.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




let NavigationComponent = class NavigationComponent {
    constructor(favouritesService) {
        this.favouritesService = favouritesService;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"];
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHeart"];
    }
    get countFavourites() {
        return this.favouritesService.favourites.length;
    }
    ngOnInit() {
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _services_favourites_favourites_service__WEBPACK_IMPORTED_MODULE_2__["FavouritesService"] }
];
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/modules/navigation/navigation.component.scss")]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/modules/navigation/navigation.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/navigation/navigation.module.ts ***!
  \*********************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.component */ "./src/app/modules/navigation/navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");






let NavigationModule = class NavigationModule {
};
NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]],
        exports: [_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        ]
    })
], NavigationModule);



/***/ }),

/***/ "./src/app/providers/window.providers.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/window.providers.ts ***!
  \***********************************************/
/*! exports provided: WINDOW, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('window');
const windowProvider = {
    provide: WINDOW,
    useFactory: () => window
};
const WINDOW_PROVIDERS = [
    windowProvider
];


/***/ }),

/***/ "./src/app/serializers/custom-route.serializer.ts":
/*!********************************************************!*\
  !*** ./src/app/serializers/custom-route.serializer.ts ***!
  \********************************************************/
/*! exports provided: CustomRouterSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRouterSerializer", function() { return CustomRouterSerializer; });
class CustomRouterSerializer {
    serialize(routerState) {
        let route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        const { url, root: { queryParams }, } = routerState;
        const { params, data } = route;
        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url, params, queryParams, data };
    }
}


/***/ }),

/***/ "./src/app/services/favourites/favourites.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/favourites/favourites.service.ts ***!
  \***********************************************************/
/*! exports provided: FavouritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesService", function() { return FavouritesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/services/storage/storage.service.ts");



let FavouritesService = class FavouritesService {
    constructor(storageService) {
        this.storageService = storageService;
        this.localKey = 'favourites';
        this.items = [];
        this.keyMap = {};
        this.initItems();
    }
    get favourites() {
        return this.items;
    }
    get favouritesMap() {
        return this.keyMap;
    }
    initItems() {
        try {
            const readItems = this.storageService.local.getItem(this.localKey);
            this.items = JSON.parse(readItems) || [];
            this.keyMap = this.items.reduce((prev, curr) => {
                prev[curr.id] = curr;
                return prev;
            }, {});
        }
        catch (e) {
        }
    }
    toggleFavourites(book) {
        if (this.keyMap[book.id]) {
            this.removeFromFavourites(book.id);
        }
        else {
            this.addToFavourites(book);
        }
    }
    addToFavourites(book) {
        this.items.push(book);
        this.keyMap[book.id] = book;
        this.saveItems();
    }
    removeFromFavourites(id) {
        const item = this.keyMap[id];
        this.items.splice(this.items.indexOf(item), 1);
        delete this.keyMap[id];
        this.saveItems();
    }
    saveItems() {
        this.storageService.local.setItem(this.localKey, JSON.stringify(this.items));
    }
};
FavouritesService.ctorParameters = () => [
    { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
];
FavouritesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FavouritesService);



/***/ }),

/***/ "./src/app/services/storage/storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_window_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/window.providers */ "./src/app/providers/window.providers.ts");



let StorageService = class StorageService {
    constructor(window) {
        this.window = window;
        this.sessionData = {};
        this.localData = {};
        this.initSession();
        this.initLocal();
    }
    get sessionLength() {
        return Object.keys(this.sessionData).length;
    }
    get localLength() {
        return Object.keys(this.localData).length;
    }
    initSession() {
        this.session = {
            length: this.sessionLength,
            clear: () => {
                this.sessionData = {};
            },
            getItem: (key) => {
                return this.sessionData[key];
            },
            key: (index) => {
                return Object.keys(this.sessionData)[index];
            },
            removeItem: (key) => {
                delete this.sessionData[key];
            },
            setItem: (key, value) => {
                this.sessionData[key] = value;
            },
        };
    }
    initLocal() {
        const currentTime = () => {
            // time in minutes
            return Math.floor((new Date().getTime()) / (60 * 1000));
        };
        const expirationKey = (key) => {
            return key + '-cacheexpiration';
        };
        let localStorageWork = false;
        try {
            localStorageWork = (typeof this.window.localStorage === 'object');
        }
        catch (e) {
            localStorageWork = false;
        }
        if (localStorageWork) {
            try {
                this.window.localStorage.setItem('localStorage', '');
                this.window.localStorage.removeItem('localStorage');
            }
            catch (e) {
                localStorageWork = false;
            }
        }
        if (localStorageWork) {
            // override setItem & getItem
            const _setItem = Storage.prototype.setItem;
            const _getItem = Storage.prototype.getItem;
            const localStorage = this.window.localStorage;
            Storage.prototype.setItem = function (key, value, time) {
                _setItem.call(this, key, value);
                if (time) {
                    _setItem.call(this, expirationKey(key), (currentTime() + time).toString(10));
                }
                else {
                    localStorage.removeItem(expirationKey(key));
                }
            };
            Storage.prototype.getItem = function (key) {
                const value = _getItem.call(this, key);
                const expValue = _getItem.call(this, expirationKey(key));
                if (expValue) {
                    const expirationTime = parseInt(expValue, 10);
                    if (currentTime() >= expirationTime) {
                        localStorage.removeItem(key);
                        localStorage.removeItem(expirationKey(key));
                        return null;
                    }
                }
                return value;
            };
            // overrides
            this.local = localStorage;
            return;
        }
        this.local = {
            length: this.localLength,
            clear: () => {
                this.localData = {};
            },
            getItem: (key) => {
                return this.localData[key];
            },
            key: (index) => {
                return Object.keys(this.localData)[index];
            },
            removeItem: (key) => {
                delete this.localData[key];
            },
            setItem: (key, value) => {
                this.localData[key] = value;
            },
        };
    }
};
StorageService.ctorParameters = () => [
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_providers_window_providers__WEBPACK_IMPORTED_MODULE_2__["WINDOW"],] }] }
];
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_providers_window_providers__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]))
], StorageService);



/***/ }),

/***/ "./src/app/store/app.store.ts":
/*!************************************!*\
  !*** ./src/app/store/app.store.ts ***!
  \************************************/
/*! exports provided: AppStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStore", function() { return AppStore; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm2015/router-store.js");



var AppStore;
(function (AppStore) {
    AppStore.reducers = {
        router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__["routerReducer"],
    };
    let Selects;
    (function (Selects) {
        Selects.router = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('router');
    })(Selects = AppStore.Selects || (AppStore.Selects = {}));
    AppStore.metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];
})(AppStore || (AppStore = {}));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiKey: 'AIzaSyDxg6TFVQSJf9tv46YXJ7CIfgoK4ZahWbU',
    restUrl: 'https://www.googleapis.com/books/v1/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alexey/work/tz/incoma/tz-incoma/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map