webpackJsonp([0],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TBaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__ = __webpack_require__(21);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var API_URL = 'http://39.104.57.129';
var TBaseService = (function () {
    function TBaseService(http) {
        this.http = http;
    }
    Object.defineProperty(TBaseService.prototype, "CreateHeader", {
        get: function () {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var token = localStorage.getItem('token');
            if (__WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(token)) {
                headers.append('Authorization', 'Bearer ' + token);
            }
            return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        },
        enumerable: true,
        configurable: true
    });
    TBaseService.prototype.Md5T = function (Password) {
        return __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__["Md5"].hashStr(Password.toString());
    };
    /**
     * DONE: json对象转成uri, 数据传输时，都以JSON,转成key1=value1&key2=value格式
     */
    TBaseService.prototype.JSON2URI = function (data) {
        var result = [];
        for (var key in data) {
            result.push(key + '=' + data[key]);
        }
        return result.join('&');
    };
    TBaseService.prototype.Get = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = API_URL + '/' + uri;
                        return [4 /*yield*/, this.http.get(url, this.CreateHeader).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TBaseService.prototype.Post = function (Uri, Data) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        App.ShowLoading();
                        url = API_URL + '/' + Uri + (__WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(Data) ? this.JSON2URI(Data) : '');
                        App.HideLoading();
                        return [4 /*yield*/, this.http.post(url, '', this.CreateHeader).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TBaseService;
}());

//# sourceMappingURL=pub_service.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppShare; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//微信朋友圈分享

// declare var Wechat;
var AppShare = (function () {
    function AppShare() {
        //标题
        this.title = "58付-信用能收款，资金秒到账";
        //描述
        this.description = "用信用卡满足你资金需求，有信用卡就能收款。"; /*领券免手续费*/
        //分享链接
        this.link = "http://www.werunpay.com/invite?sourceid=";
        //分享图片
        this.image = "www/assets/imgs/58icon.png";
        this.Wechat = window.Wechat;
    }
    AppShare.prototype.wxShare = function (scene) {
        App.ShowLoading();
        try {
            this.Wechat.share({
                message: {
                    title: this.title,
                    description: this.description,
                    thumb: this.image,
                    media: {
                        type: this.Wechat.Type.WEBPAGE,
                        webpageUrl: this.link + App.UserInfo.userId
                    }
                },
                scene: scene == 0 ? this.Wechat.Scene.SESSION : this.Wechat.Scene.Timeline // share to Timeline
            }, function () {
                App.ShowToast('分享成功');
            }, function (reason) {
                // alert("Failed: " + reason);
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            App.HideLoading();
        }
    };
    AppShare = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppShare);
    return AppShare;
}());

//# sourceMappingURL=app.share.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeInfo; });
/* TypeInfo namespace */
var TypeInfo;
(function (TypeInfo) {
    TypeInfo.UNDEFINED = typeof (void 0);
    TypeInfo.BOOLEAN = typeof true;
    TypeInfo.NUMBER = typeof 0;
    TypeInfo.STRING = typeof '';
    TypeInfo.OBJECT = typeof {};
    TypeInfo.FUNCTION = typeof function () { };
    /**
     * Returns true if the value Assigned (defined and not null)
     * @param value
     * @returns {boolean}
     */
    function Assigned(value) {
        return (typeof value !== TypeInfo.UNDEFINED) && (value !== null);
    }
    TypeInfo.Assigned = Assigned;
    /**
     * Returns true if the value defined
     * @param value
     * @returns {boolean}
     */
    function Defined(value) {
        return (typeof value !== TypeInfo.UNDEFINED);
    }
    TypeInfo.Defined = Defined;
    /**
     * Returns true if the value is ture null
     * @param value
     * @returns {boolean}
     */
    function IsNull(value) {
        return (typeof value !== TypeInfo.UNDEFINED) && (value === null);
    }
    TypeInfo.IsNull = IsNull;
    /**
     * Returns true if the value parameter is a true/false
     * @param value
     * @returns {boolean}
     */
    function IsBoolean(value) {
        return typeof value === TypeInfo.BOOLEAN;
    }
    TypeInfo.IsBoolean = IsBoolean;
    /**
     * Returns true if the value parameter is a number.
     * @param value
     * @param allowNaN Default is true.
     * @returns {boolean}
     */
    function IsNumber(value, allowNaN) {
        if (allowNaN === void 0) { allowNaN = true; }
        return typeof value === TypeInfo.NUMBER && (allowNaN || !isNaN(value));
    }
    TypeInfo.IsNumber = IsNumber;
    /**
     * Returns true if is a number and is NaN.
     * @param value
     * @returns {boolean}
     */
    function IsTrueNaN(value) {
        return typeof value === TypeInfo.NUMBER && isNaN(value);
    }
    TypeInfo.IsTrueNaN = IsTrueNaN;
    /**
     * Returns true if the value parameter is a string.
     * @param value
     * @returns {boolean}
     */
    function IsString(value) {
        return typeof value === TypeInfo.STRING;
    }
    TypeInfo.IsString = IsString;
    /**
     * Returns true if the value is a boolean, string, number, null, or undefined.
     * @param value
     * @returns {boolean}
     */
    function IsPrimitive(value) {
        var t = typeof value;
        switch (t) {
            case TypeInfo.BOOLEAN:
            case TypeInfo.STRING:
            case TypeInfo.NUMBER:
            case TypeInfo.UNDEFINED:
                return true;
            case TypeInfo.OBJECT:
                return value === null;
        }
        return false;
    }
    TypeInfo.IsPrimitive = IsPrimitive;
    /**
     * Returns true if the value parameter is a function.
     * @param value
     * @returns {boolean}
     */
    function IsFunction(value) {
        return typeof value === TypeInfo.FUNCTION;
    }
    TypeInfo.IsFunction = IsFunction;
    /**
     * Returns true if the value parameter is an object.
     * @param value
     * @param allowNull If false (default) null is not considered an object.
     * @returns {boolean}
     */
    function IsObject(value, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        return typeof value === TypeInfo.OBJECT && (allowNull || value !== null);
    }
    TypeInfo.IsObject = IsObject;
    function IsArrayLike(instance) {
        /*
        * NOTE:
        *
        * Functions:
        * Enumerating a function although it has a .length property will yield nothing or unexpected results.
        * Effectively, a function is not like an array.
        *
        * Strings:
        * Behave like arrays but don't have the same exact methods.
        */
        return Assigned(instance) && ((instance instanceof Array) ||
            IsString(instance) ||
            (!IsFunction(instance) && HasMember(instance, 'length')));
    }
    TypeInfo.IsArrayLike = IsArrayLike;
    function ZeroArray(ary) {
        if (ary.fill) {
            ary.fill(0);
        }
        else {
            for (var I = 0; I < ary.length; I++)
                ary[I] = 0;
        }
    }
    TypeInfo.ZeroArray = ZeroArray;
    function ArrayCopy(Dst, Src, SrcOffset, Count, DstOffset) {
        if (DstOffset === void 0) { DstOffset = 0; }
        if (Src.subarray && Dst.subarray) {
            Dst.set(Src.subarray(SrcOffset, SrcOffset + Count), DstOffset);
        }
        else {
            for (var i = 0; i < Count; i++)
                Dst[DstOffset + i] = Src[SrcOffset + i];
        }
    }
    TypeInfo.ArrayCopy = ArrayCopy;
    /**
     *  Guarantees a number value or NaN instead.
     *  @param value
     *  @returns {number}
     */
    function NumberOrNaN(value) {
        return isNaN(value) ? NaN : value;
    }
    TypeInfo.NumberOrNaN = NumberOrNaN;
    /**
     */
    function HasMember(value, property) {
        return Assigned(value) && !IsPrimitive(value) && (property in value);
    }
    TypeInfo.HasMember = HasMember;
    /**
     */
    function HasMemberOfType(instance, property, type) {
        return HasMember(instance, property) && typeof (instance[property]) === type;
    }
    TypeInfo.HasMemberOfType = HasMemberOfType;
    function Create(Creater) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new Creater(args);
    }
    TypeInfo.Create = Create;
    /* Decorator */
    /** Class Decorator:
     *      seal class for futher extendion or add properties
     */
    function Sealed() {
        return function (Cls) {
            Object.seal(Cls);
            Object.seal(Cls.prototype);
        };
    }
    TypeInfo.Sealed = Sealed;
    /** Class Decorator:
     *      static implements decorator
     *
     *      interface FooStatic
     *      {
     *          function bar();
     *      }
     *
     *      @StaticImplements<FooStatic>
     *      class Foo
     *      {
     *          static function bar() {};   // shows error if not implements this
     *      }
     */
    function StaticImplements() {
        return function (constructor) { };
    }
    TypeInfo.StaticImplements = StaticImplements;
})(TypeInfo || (TypeInfo = {}));
Object.freeze(TypeInfo);
//# sourceMappingURL=TypeInfo.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pub_service__ = __webpack_require__(137);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var TAuthService = (function (_super) {
    __extends(TAuthService, _super);
    function TAuthService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    TAuthService.prototype.judgeLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.IsLogin) return [3 /*break*/, 1];
                        return [2 /*return*/, App.RootPage.StartPage];
                    case 1: return [4 /*yield*/, this.CheckToken()];
                    case 2:
                        if (!(_a.sent())) {
                            return [2 /*return*/, App.RootPage.StartPage];
                        }
                        else {
                            this.GetUserData();
                            return [2 /*return*/, App.RootPage.TabsPage];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // 登录
    TAuthService.prototype.Login = function (Tel, Password) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/login?', { mobile: Tel, password: this.Md5T(Password) }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            App.EnableHardwareBackButton();
                            localStorage.setItem('token', result.data.token);
                            this.GetUserData().then(function () { return App.Nav.push(App.RootPage.TabsPage); });
                        }
                        else {
                            App.HideLoading();
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //校验找回密码短信验证码
    TAuthService.prototype.GetFindPwdData = function (tel, VCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/checkPwdVeriCode?', { mobile: tel, veriCode: VCode }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            App.Nav.push(App.RootPage.ResetpwdPage, { mobile: tel, code: VCode });
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //获取找回密码短信验证码
    TAuthService.prototype.GetResetPwdData = function (tel) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/getPwdVericode?', { mobile: tel }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            return [2 /*return*/, result];
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //修改用户密码
    TAuthService.prototype.GetchangePsdData = function (tel, pwd, VCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/user/changePassword?', { mobile: tel, password: this.Md5T(pwd), veriCode: VCode }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            App.ShowToast('更改成功，请重新登陆');
                            App.Nav.push(App.RootPage.LoginPage);
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //获取修改密码验证码
    TAuthService.prototype.getPwdVericode = function (mobile) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/getPwdVericode?', { mobile: mobile }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    //注册
    TAuthService.prototype.SignIn = function (Tel, Password, Code, Recommend) {
        return __awaiter(this, void 0, void 0, function () {
            var json, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        json = {};
                        if (Recommend) {
                            json = { mobile: Tel, password: this.Md5T(Password), veriCode: Code, referee: Recommend };
                        }
                        else {
                            json = { mobile: Tel, password: this.Md5T(Password), veriCode: Code };
                        }
                        return [4 /*yield*/, this.Post('kpay/api/register?', json).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            App.ShowToast("注册成功,请登陆");
                            App.Nav.push(App.RootPage.LoginPage);
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取注册验证码
    TAuthService.prototype.GetVerifyCode = function (Tel) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/getVericode?', { mobile: Tel }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // 验证注册验证码
    TAuthService.prototype.CheckVerifyCode = function (Tel, VCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/checkRegVeriCode?', { mobile: Tel, veriCode: VCode }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        // return result;
                        if (result.code === 1) {
                            App.Nav.push(App.RootPage.SetPwdPage, { mobile: Tel, code: VCode });
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 退出登陆
    TAuthService.prototype.Logout = function () {
        localStorage.removeItem('token');
        App.UserInfo = {};
        App.DisableHardwareBackButton();
        App.Nav.push(App.RootPage.StartPage);
    };
    Object.defineProperty(TAuthService.prototype, "IsLogin", {
        // 判断登录
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(localStorage.getItem('token'));
        },
        enumerable: true,
        configurable: true
    });
    // 校验token有效性
    TAuthService.prototype.CheckToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/checkToken').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1)
                            return [2 /*return*/, true];
                        return [2 /*return*/, false];
                }
            });
        });
    };
    // 修改用户信息
    TAuthService.prototype.ModifyUserInfo = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/user/modify?', json).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            App.ShowToast('用户信息修改成功！');
                        }
                        else {
                            App.ShowError('result.msg');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取用户信息
    TAuthService.prototype.GetUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/user/info').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            result.data.canTrade = '1';
                            App.UserInfo = result.data;
                            result.data.vip === '1' ? App.IsVip = true : App.IsVip = false;
                            result.data.canTrade === '1' ? App.CanTrade = true : App.CanTrade = false;
                        }
                        else {
                            App.ShowError(result.msg).then(function () { return _this.Logout(); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TAuthService);
    return TAuthService;
}(__WEBPACK_IMPORTED_MODULE_3__pub_service__["a" /* TBaseService */]));

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__ = __webpack_require__(21);
/**
 *  https://github.com/apache/cordova-plugin-splashscreen
 *      cordova plugin add cordova-plugin-splashscreen --save
 */

var SplashScreen = (function () {
    function SplashScreen() {
    }
    SplashScreen.show = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(navigator.splashscreen)) {
            console.error('SplashScreen Plugin not Installed.');
            return;
        }
        navigator.splashscreen.show();
    };
    SplashScreen.hide = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(navigator.splashscreen)) {
            console.error('SplashScreen Plugin not Installed.');
            return;
        }
        navigator.splashscreen.hide();
    };
    return SplashScreen;
}());

//# sourceMappingURL=SplashScreen.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__ = __webpack_require__(21);
/**
 *  https://github.com/apache/cordova-plugin-statusbar
 *      cordova plugin add cordova-plugin-statusbar --save
 */

var StatusBar = (function () {
    function StatusBar() {
    }
    /** iOS */
    StatusBar.overlaysWebView = function (Overlay) {
        if (Overlay === void 0) { Overlay = true; }
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.overlaysWebView(Overlay);
    };
    StatusBar.styleDefault = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.styleDefault();
    };
    /** iOS, WP */
    StatusBar.styleLightContent = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.styleLightContent();
    };
    /** iOS, WP */
    StatusBar.styleBlackTranslucent = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.styleBlackTranslucent();
    };
    /** iOS, WP */
    StatusBar.styleBlackOpaque = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.styleBlackOpaque();
    };
    /** iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing. */
    StatusBar.backgroundColorByName = function (colorName) {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.backgroundColorByName(colorName);
    };
    /** iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing. */
    StatusBar.backgroundColorByHexString = function (hexString) {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.backgroundColorByHexString(hexString);
    };
    StatusBar.hide = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.hide();
    };
    StatusBar.show = function () {
        if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
            console.error('StatusBar Plugin not Installed.');
            return;
        }
        window.StatusBar.show();
    };
    Object.defineProperty(StatusBar, "isVisible", {
        get: function () {
            if (!__WEBPACK_IMPORTED_MODULE_0__Core_TypeInfo__["a" /* TypeInfo */].Assigned(window.StatusBar)) {
                console.error('StatusBar Plugin not Installed.');
                return false;
            }
            return window.StatusBar.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    return StatusBar;
}());

//# sourceMappingURL=StatusBar.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application__ = __webpack_require__(459);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__application__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appservice__ = __webpack_require__(497);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mineservice__ = __webpack_require__(37);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__mineservice__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homeservice__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__homeservice__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__auth__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(244);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__camera__ = __webpack_require__(243);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__camera__["a"]; });


// export * from './publicservice';



// export * from './native_service';


// export { File } from '@ionic-native/file';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs__ = __webpack_require__(462);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return __WEBPACK_IMPORTED_MODULE_0__pages_tabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home__ = __webpack_require__(463);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return __WEBPACK_IMPORTED_MODULE_1__pages_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_creditCard__ = __webpack_require__(466);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardPage", function() { return __WEBPACK_IMPORTED_MODULE_2__pages_home_creditCard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_cardInfor__ = __webpack_require__(467);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CardInforPage", function() { return __WEBPACK_IMPORTED_MODULE_3__pages_home_cardInfor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_finalpay__ = __webpack_require__(468);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FinalpayPage", function() { return __WEBPACK_IMPORTED_MODULE_4__pages_home_finalpay__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_confirminfo__ = __webpack_require__(469);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirminfoPage", function() { return __WEBPACK_IMPORTED_MODULE_5__pages_home_confirminfo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_addcredits__ = __webpack_require__(242);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AddcreditsPage", function() { return __WEBPACK_IMPORTED_MODULE_6__pages_home_addcredits__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_changecards__ = __webpack_require__(470);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ChangecardsPage", function() { return __WEBPACK_IMPORTED_MODULE_7__pages_home_changecards__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_adddeposit__ = __webpack_require__(471);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AdddepositPage", function() { return __WEBPACK_IMPORTED_MODULE_8__pages_home_adddeposit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_listofbank__ = __webpack_require__(472);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ListofbankPage", function() { return __WEBPACK_IMPORTED_MODULE_9__pages_home_listofbank__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_branchcard__ = __webpack_require__(473);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BranchcardPage", function() { return __WEBPACK_IMPORTED_MODULE_10__pages_home_branchcard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_usevoucher__ = __webpack_require__(474);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UsevoucherPage", function() { return __WEBPACK_IMPORTED_MODULE_11__pages_home_usevoucher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_start__ = __webpack_require__(475);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return __WEBPACK_IMPORTED_MODULE_12__pages_start__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_modifypwd__ = __webpack_require__(476);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ModifypwdPage", function() { return __WEBPACK_IMPORTED_MODULE_13__pages_modifypwd__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_findpwd__ = __webpack_require__(477);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FindpwdPage", function() { return __WEBPACK_IMPORTED_MODULE_14__pages_findpwd__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_resetpwd__ = __webpack_require__(478);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpwdPage", function() { return __WEBPACK_IMPORTED_MODULE_15__pages_home_resetpwd__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ucenter__ = __webpack_require__(479);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UcenterPage", function() { return __WEBPACK_IMPORTED_MODULE_16__pages_ucenter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login__ = __webpack_require__(480);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return __WEBPACK_IMPORTED_MODULE_17__pages_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_loan__ = __webpack_require__(481);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LoanPage", function() { return __WEBPACK_IMPORTED_MODULE_18__pages_loan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_SetPwd__ = __webpack_require__(482);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SetPwdPage", function() { return __WEBPACK_IMPORTED_MODULE_19__pages_SetPwd__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_applycard__ = __webpack_require__(483);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ApplycardPage", function() { return __WEBPACK_IMPORTED_MODULE_20__pages_applycard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_ucenter_profits__ = __webpack_require__(484);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitsPage", function() { return __WEBPACK_IMPORTED_MODULE_21__pages_ucenter_profits__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_ucenter_orders__ = __webpack_require__(485);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return __WEBPACK_IMPORTED_MODULE_22__pages_ucenter_orders__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_ucenter_records__ = __webpack_require__(486);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsPage", function() { return __WEBPACK_IMPORTED_MODULE_23__pages_ucenter_records__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_ucenter_uinfo__ = __webpack_require__(487);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UinfoPage", function() { return __WEBPACK_IMPORTED_MODULE_24__pages_ucenter_uinfo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_ucenter_usetup__ = __webpack_require__(488);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UsetupPage", function() { return __WEBPACK_IMPORTED_MODULE_25__pages_ucenter_usetup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_ucenter_cashback__ = __webpack_require__(489);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CashbackPage", function() { return __WEBPACK_IMPORTED_MODULE_26__pages_ucenter_cashback__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_ucenter_voucher__ = __webpack_require__(490);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherPage", function() { return __WEBPACK_IMPORTED_MODULE_27__pages_ucenter_voucher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_ucenter_myclient__ = __webpack_require__(491);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MyclientPage", function() { return __WEBPACK_IMPORTED_MODULE_28__pages_ucenter_myclient__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_ucenter_VIPmembers__ = __webpack_require__(492);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VIPmembersPage", function() { return __WEBPACK_IMPORTED_MODULE_29__pages_ucenter_VIPmembers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_ucenter_invfriends__ = __webpack_require__(493);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InvfriendsPage", function() { return __WEBPACK_IMPORTED_MODULE_30__pages_ucenter_invfriends__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_ucenter_mycard__ = __webpack_require__(494);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MycardPage", function() { return __WEBPACK_IMPORTED_MODULE_31__pages_ucenter_mycard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_register__ = __webpack_require__(495);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return __WEBPACK_IMPORTED_MODULE_32__pages_register__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_ucenter_noIdentify__ = __webpack_require__(496);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NoldentifyPage", function() { return __WEBPACK_IMPORTED_MODULE_33__pages_ucenter_noIdentify__["a"]; });
// import { from } from 'rxjs/observable/from';


































//# sourceMappingURL=index.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwiperComp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_swiper__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 *  to get Swiper
 *  npm install swiper -S
 *  npm install @types/swiper -D
 */


var SwiperComp = (function () {
    function SwiperComp(Ref) {
        this.Ref = Ref;
        this.Initialized = false;
        // onInit(swiper)       function    Callback function, will be executed right after Swiper initialization
        // onDestroy(swiper)    function    Callback function, will be executed when you destroy Swiper
        this.OnSlideChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** 300ms delay */
        this.OnClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** no delay */
        this.OnTap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnDoubleTap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnImagesReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**  will be executed when Swiper progress is changed, as second arguments it receives progress that is always from 0 to 1 */
        this.OnProgress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnReachBeginning = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnReachEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Same as onSlideChangeStart but caused by autoplay */
        this.OnAutoplay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnAutoplayStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OnAutoplayStop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SwiperComp.prototype.ngAfterViewInit = function () {
        this.Wrapper = this.Ref.nativeElement.querySelector('.swiper-wrapper');
        this.Instance = new Swiper(this.Ref.nativeElement.querySelector('swiper > div'), this.Config);
        this.HookSwiperEvents();
    };
    SwiperComp.prototype.Update = function (Reset, AnimateSpeed) {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__["a" /* TypeInfo */].Assigned(Reset))
            Reset = true;
        var Animate = !__WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__["a" /* TypeInfo */].Assigned(AnimateSpeed) || AnimateSpeed > 0;
        if (!this.Updating) {
            this.Updating = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (Reset) {
                        if (Animate) {
                            _this.Instance.slideNext(false, 0);
                            _this.Instance.update(true);
                            _this.SlideTo(0);
                        }
                        else {
                            _this.Instance.update(true);
                            _this.Instance.slideTo(0, 0);
                        }
                    }
                    else
                        _this.Instance.update(true);
                    if (!_this.Initialized) {
                        _this.Initialized = true;
                        _this.OnSlideChanged.next(_this.ActiveIndex);
                    }
                    _this.Updating = undefined;
                    resolve();
                });
            });
        }
        return this.Updating;
    };
    Object.defineProperty(SwiperComp.prototype, "ActiveIndex", {
        get: function () {
            if (__WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Instance))
                return this.Instance.activeIndex;
            else
                return 0;
        },
        set: function (v) {
            setTimeout(this.SlideTo(v));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComp.prototype, "SlideCount", {
        get: function () {
            if (__WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Instance))
                return this.Instance.slides.length;
            else
                return 0;
        },
        enumerable: true,
        configurable: true
    });
    SwiperComp.prototype.SlideTo = function (Idx, Speed) {
        var _this = this;
        setTimeout(function () {
            if (__WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__["a" /* TypeInfo */].Assigned(_this.Instance))
                _this.Instance.slideTo(Idx, Speed);
        });
    };
    /**
     *  @param Speed
     *      default 300
     *  @param Slient
     *      transition will not produce OnSlideChange when true
     */
    SwiperComp.prototype.SlidePrev = function (Speed, Slient) {
        var _this = this;
        setTimeout(function () {
            if (__WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__["a" /* TypeInfo */].Assigned(_this.Instance))
                _this.Instance.slidePrev(!Slient, Speed);
        });
    };
    /**
     *  @param Speed
     *      default 300
     *  @param Slient
     *      transition will not produce OnSlideChange when true
     */
    SwiperComp.prototype.SlideNext = function (Speed, Slient) {
        var _this = this;
        setTimeout(function () {
            if (__WEBPACK_IMPORTED_MODULE_2__Core_TypeInfo__["a" /* TypeInfo */].Assigned(_this.Instance))
                _this.Instance.slideNext(!Slient, Speed);
        });
    };
    SwiperComp.prototype.HookSwiperEvents = function () {
        var _this = this;
        /* all these can not simply use to decide slide changed
        (this.Instance as any).on('slideChangeStart', (Inst: Swiper) => this.OnSlideChangeStart.next(Inst));
        (this.Instance as any).on('slideNextStart', (Inst: Swiper) => this.OnSlideNextStart.next(Inst));
        (this.Instance as any).on('slideNextEnd', (Inst: Swiper) => this.OnSlideNextEnd.next(Inst));
        (this.Instance as any).on('slidePrevStart', (Inst: Swiper) => this.OnSlidePrevStart.next(Inst));
        (this.Instance as any).on('slidePrevEnd', (Inst: Swiper) => this.OnSlidePrevEnd.next(Inst));
        (this.Instance as any).on('transitionStart', (Inst: Swiper) => this.OnTransitionStart.next(Inst));
        (this.Instance as any).on('transitionEnd', (Inst: Swiper) => this.OnTransitionEnd.next(Inst));

        (this.Instance as any).on('touchStart', (Inst: Swiper, ev: TouchEvent) => this.OnTouchStart.next({Inst: Inst, ev: ev}));
        (this.Instance as any).on('touchMove', (Inst: Swiper, ev: TouchEvent) => this.OnTouchMove.next({Inst: Inst, ev: ev}));
        (this.Instance as any).on('touchMoveOpposite', (Inst: Swiper, ev: TouchEvent) => this.OnTouchMoveOpposite.next({Inst: Inst, ev: ev}));
        (this.Instance as any).on('slidesMove', (Inst: Swiper, ev: TouchEvent) => this.OnSlidesMove.next({Inst: Inst, ev: ev}));
        (this.Instance as any).on('touchEnd', (Inst: Swiper, ev: TouchEvent) => this.OnTouchEnd.next({Inst: Inst, ev: ev}));
        */
        this.Instance.on('touchStart', function (Inst) {
            _this.TouchStartIdx = _this.ActiveIndex;
        });
        this.Instance.on('touchEnd', function (Inst) {
            if (_this.TouchStartIdx !== _this.ActiveIndex) {
                if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                    console.log('Swiper OnSlideChanged: touchEnd');
                _this.OnSlideChanged.next(Inst.activeIndex);
            }
        });
        this.Instance.on('slideChangeEnd', function (Inst) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper OnSlideChanged: slideChangeEnd');
            _this.OnSlideChanged.next(Inst.activeIndex);
        });
        this.Instance.on('click', function (Inst, ev) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper click');
            _this.OnClick.next({ Inst: Inst, ev: ev });
        });
        this.Instance.on('tap', function (Inst, ev) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper tap');
            _this.OnTap.next({ Inst: Inst, ev: ev });
        });
        this.Instance.on('doubleTap', function (Inst, ev) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper doubleTap');
            _this.OnDoubleTap.next({ Inst: Inst, ev: ev });
        });
        this.Instance.on('imagesReady', function (Inst) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper imagesReady');
            _this.OnImagesReady.next(Inst);
        });
        this.Instance.on('progress', function (Inst, Progress) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper progress');
            _this.OnProgress.next({ Inst: Inst, Progress: Progress });
        });
        this.Instance.on('reachBeginning', function (Inst) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper reachBeginning');
            _this.OnReachBeginning.next(Inst);
        });
        this.Instance.on('reachEnd', function (Inst) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper reachEnd');
            _this.OnReachEnd.next(Inst);
        });
        this.Instance.on('autoplay', function (Inst) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper autoplay');
            _this.OnAutoplay.next(Inst);
        });
        this.Instance.on('autoplayStart', function (Inst) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper autoplayStart');
            _this.OnAutoplayStart.next(Inst);
        });
        this.Instance.on('autoplayStop', function (Inst) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
                console.log('Swiper autoplayStop');
            _this.OnAutoplayStop.next(Inst);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "Config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnSlideChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnTap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnDoubleTap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnImagesReady", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnProgress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnReachBeginning", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnReachEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnAutoplay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnAutoplayStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperComp.prototype, "OnAutoplayStop", void 0);
    SwiperComp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'swiper',
            template: "<div [ngClass]=\"{'swiper-container': false}\">\n        <ng-content></ng-content></div>",
            styles: [':host {display: block; height: 100%;}', ':host > div {width: 100%; height: 100%; overflow: hidden}']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], SwiperComp);
    return SwiperComp;
}());

//# sourceMappingURL=swiper.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcreditsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddcreditsPage = (function () {
    function AddcreditsPage(Service, navParams, Auth) {
        this.Service = Service;
        this.navParams = navParams;
        this.Auth = Auth;
        this.App = window.App;
        this.HeadTitle = "添加信用卡";
        this.AddWrong = false;
        this.WrongMsg = '';
        this.GetIdCard(App.UserInfo['idCardNo']);
    }
    AddcreditsPage.prototype.ngOnInit = function () {
        this.Form_Group_Card = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            CardNo: this.CardNo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(16)
            ]),
            Mobile: this.Mobile = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^1[3|4|5|7|8][0-9]{9}$/)
            ])
        });
    };
    Object.defineProperty(AddcreditsPage.prototype, "CompleteBtnIsDisabled", {
        get: function () {
            if (this.CardNo.invalid || this.Mobile.invalid)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    AddcreditsPage.prototype.GetIdCard = function (IdNo) {
        if (__WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(IdNo)) {
            this.ShowIDCard = IdNo.substr(0, 6);
            for (var i = 0; i < (IdNo.length - 10); i++) {
                this.ShowIDCard += '*';
            }
            this.ShowIDCard += IdNo.substr(-4);
        }
    };
    AddcreditsPage.prototype.AddCard = function () {
        var _this = this;
        this.Service.AddCreditCard(this.Form_Group_Card.value.CardNo, this.Form_Group_Card.value.Mobile).then(function (res) {
            if (res) {
                App.ShowToast('信用卡添加成功');
                _this.Auth.GetUserData().then(function () { return App.Nav.push(App.RootPage[_this.navParams.data]); });
                console.log(1313131);
                // App.Nav.push(App.RootPage.CreditCardPage);
            }
            // else
            // {
            //   this.AddWrong = true;
            //   this.WrongMsg = res;
            // }
        });
    };
    AddcreditsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addcredits',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\home\addcredits\index.html"*/'<ion-header no-border>\n  <!-- 添加信用卡 -->\n  <ion-toolbar no-padding>\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class="grid-inforlist-default" m-b-10>\n        <ion-row class="border-last">\n            <ion-col col-4>持卡人</ion-col>\n            <ion-col>{{App.UserInfo.name}}</ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class="grid-inforlist-default" m-b-10>\n          <ion-row class="border-last">\n              <ion-col col-4>身份证</ion-col>\n              <ion-col>{{ShowIDCard}}</ion-col>\n          </ion-row>\n        </ion-grid>\n        <form novalidate [formGroup]="Form_Group_Card">\n          <ion-grid class="grid-inforlist-default" m-b-10>\n            <ion-row>\n                <ion-col col-4>卡号</ion-col>\n                <ion-col><ion-input type=\'number\' placeholder="请输信用卡卡号" formControlName="CardNo"></ion-input></ion-col>\n            </ion-row>\n            <ion-row class="border-last">\n              <ion-col col-4>手机号</ion-col>\n              <ion-col> <ion-input type=\'number\' placeholder="请输银行预留手机号" formControlName="Mobile"></ion-input></ion-col>\n          </ion-row>\n          </ion-grid>\n        </form>\n        <ion-row justify-content-center m-t-15>\n          <ion-col col-11>\n            <button class="bgc-grad-primary bgc-header" ion-button round block f-1-6 [disabled]="CompleteBtnIsDisabled" (click)="AddCard()">完成</button>\n          </ion-col>\n      </ion-row>\n</ion-content>\n\n<!-- 添加银行卡错误阴影 样式在grid.scss-->\n<!-- <div *ngIf = "AddWrong">\n    <div class="shadow-bgc"></div>\n    <div class="shadow-cont shadow-contA">\n        <ion-grid>\n            <ion-row justify-content-center>\n                <ion-col col-9 text-center>\n                    <div>\n                        <p no-margin ion-text color="red">添加失败!</p>\n                        <span>{{WrongMsg}}</span>\n                    </div>\n                    <p ion-text color="orange" f-1-5>请重新输入</p>\n                </ion-col>\n            </ion-row>\n            <ion-row justify-content-center m-t-10>\n                <ion-col col-6><button class="bgc-grad-primary bgc-header" ion-button block (click)="Close()">确定</button></ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n  </div> -->\n\n\n\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\home\addcredits\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth__["a" /* TAuthService */]])
    ], AddcreditsPage);
    return AddcreditsPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TCameraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
var TCameraService = (function () {
    function TCameraService(Camera) {
        this.Camera = Camera;
    }
    /*
      ReadFileAsText(FileName: string): Promise<string>
      {
          return this.File.readAsText(this.File.dataDirectory, FileName)
              .then(result => result)
              .catch(error =>
              {
                  return null;
              });
      }
  
      WriteFile(FileName: string, data: string | Blob | ArrayBuffer): Promise<any>
      {
          console.log(this.File.dataDirectory+FileName);
  
          return this.File.writeFile(this.File.dataDirectory, FileName,
              data, { replace: true })
              .catch(error =>
              {
                  return null;
              });
      }
  
      UploadFile(uri:string, imageuri:string, fileoptions: FileUploadOptions) {
  
        App.ShowLoading('上传中.......')
        const fileTransfer: FileTransferObject = this.transfer.create();
  
        // let options: FileUploadOptions = {
        //   fileKey: 'ionicfile',
        //   fileName: 'ionicfile',
        //   chunkedMode: false,
        //   mimeType: "image/jpeg",
        //   headers: {}
        // }
        let FileName = new Date().getTime() + '.jpg';
        let options: FileUploadOptions = {
          fileKey: "file",
          fileName: new Date().getTime() + '.jpg',
          chunkedMode: false,
          mimeType: "multipart/form-data",
        };
  
        fileTransfer.upload(imageuri, 'http://39.104.57.129/kpay/api/image/upload', options)
          .then((data) => {
            alert('success' + data.bytesSent);
  
            App.HideLoading();
            App.ShowToast('上传成功');
  
        }, (err) => {
  
          console.log(err);
          App.HideLoading();
          App.ShowError(err);
        });
      }
  
      DataURItoBlob(dataURI)
      {
          let byteString = atob(dataURI.split(',')[1]);
          let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
          let ab = new ArrayBuffer(byteString.length);
          let ia = new Uint8Array(ab);
          for (let i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
          }
          return new Blob([ab], {type: mimeString});
      }
    */
    TCameraService.prototype.GetPicture = function (type) {
        var cameraOpt = {
            quality: 60,
            destinationType: this.Camera.DestinationType.DATA_URL,
            encodingType: this.Camera.EncodingType.JPEG,
            mediaType: this.Camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: true,
            targetWidth: App.Platform.width() * 2,
            targetHeight: App.Platform.height() * 2,
        };
        console.log('onDidDismiss = ' + type);
        switch (type) {
            case 0:// 相机
                cameraOpt.sourceType = this.Camera.PictureSourceType.CAMERA;
                break;
            case 1:// 相册
                cameraOpt.sourceType = this.Camera.PictureSourceType.PHOTOLIBRARY;
                break;
        }
        return this.Camera.getPicture(cameraOpt)
            .catch(function (error) {
            console.log(error);
            throw error;
        });
    };
    TCameraService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], TCameraService);
    return TCameraService;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pub_service__ = __webpack_require__(137);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var HomeService = (function (_super) {
    __extends(HomeService, _super);
    function HomeService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    // 身份证认证
    HomeService.prototype.VerifyId = function (idcardNo, name, mobile) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        App.ShowLoading('验证中...');
                        return [4 /*yield*/, this.Post('kpay/api/idcard/auth?', { idcardNo: idcardNo, name: name, mobile: mobile }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            App.HideLoading();
                            return [2 /*return*/, true];
                        }
                        else {
                            App.HideLoading();
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取当日分润明细
    HomeService.prototype.GetProfitToday = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/user/myprofit/today').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取银行卡列表
    HomeService.prototype.GetCardList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/bankcard/list').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        // console.log(result);
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 设置银行卡主卡
    HomeService.prototype.SetPrimCard = function (cardId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/bankcard/setPrimary?', { cardId: cardId }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 添加信用卡
    HomeService.prototype.AddCreditCard = function (cardNo, mobile) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/bankcard/addCredit?', { cardNo: cardNo, mobile: mobile }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            //    App.Nav.push(App.RootPage.CreditCardPage);
                            return [2 /*return*/, true];
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 添加储蓄卡
    HomeService.prototype.AddDeposiCard = function (cardNo, bankName, bankNo, branchName, mobile) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/bankcard/addDeposit?', {
                            cardNo: cardNo,
                            bankName: bankName,
                            bankNo: bankNo,
                            branchName: branchName,
                            mobile: mobile
                        }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            return [2 /*return*/, true];
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 删除银行卡
    HomeService.prototype.DelCard = function (cardId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/bankcard/del?', { cardId: cardId }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取银行总行信息
    HomeService.prototype.GetTolBanks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/bank/info').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //获取银行支行信息
    HomeService.prototype.GetBranchBanks = function (massage) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/bank/list?', { name: massage }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 取现可用返现券
    HomeService.prototype.GetAvaCash = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/cash/cashback/available?', { amount: amount }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1 && result.data) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取银行取现列表
    HomeService.prototype.GetBankPage = function (cardId, enterCardId, amount, cashbackId) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        json = {};
                        if (cashbackId) {
                            json = {
                                cardId: cardId,
                                enterCardId: enterCardId,
                                amount: Math.round(amount * 100),
                                cashbackId: cashbackId,
                                token: localStorage.getItem('token')
                            };
                        }
                        else {
                            json = {
                                cardId: cardId,
                                enterCardId: enterCardId,
                                amount: Math.round(amount * 100),
                                token: localStorage.getItem('token')
                            };
                        }
                        return [4 /*yield*/, this.Post('kpay/api/trade/quickPay/request?', json)
                                .then(function (res) { return res.text(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // 快捷取现获取验证码
    HomeService.prototype.GetVerifyode = function (acctNo, cvn2, expDate, mobile, amount, cashbackId) {
        return __awaiter(this, void 0, void 0, function () {
            var json, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        json = {};
                        App.ShowLoading('验证中...');
                        if (cashbackId) {
                            json = {
                                acctNo: acctNo,
                                cvn2: cvn2,
                                expDate: expDate,
                                mobile: mobile,
                                amount: Math.round(amount * 100),
                                cashbackId: cashbackId
                            };
                        }
                        else {
                            json = {
                                acctNo: acctNo,
                                cvn2: cvn2,
                                expDate: expDate,
                                mobile: mobile,
                                amount: Math.round(amount * 100)
                            };
                        }
                        return [4 /*yield*/, this.Post('kpay/api/trade/quickPay/sendVericode?', json)
                                .then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            App.HideLoading();
                            App.ShowToast('验证码发送成功');
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.HideLoading();
                            App.ShowError(result.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 快捷取现确认
    HomeService.prototype.ConfirmResult = function (orderNo, smsCode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        App.ShowLoading('确认中...');
                        return [4 /*yield*/, this.Post('kpay/api/trade/quickPay/confirm?', { orderNo: orderNo, smsCode: smsCode }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            App.HideLoading();
                            return [2 /*return*/, true];
                        }
                        else if (result.code === 0) {
                            App.HideLoading();
                            App.ShowError(result.msg);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HomeService);
    return HomeService;
}(__WEBPACK_IMPORTED_MODULE_2__providers_pub_service__["a" /* TBaseService */]));

//# sourceMappingURL=homeservice.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(381);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pub_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__ = __webpack_require__(21);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MineService = (function (_super) {
    __extends(MineService, _super);
    function MineService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    // 获取我的分润
    MineService.prototype.MyProfit = function (keyword, month) {
        return __awaiter(this, void 0, void 0, function () {
            var tmp_json, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (month) {
                            tmp_json = { span: keyword, month: month };
                        }
                        else {
                            tmp_json = { span: keyword };
                        }
                        return [4 /*yield*/, this.Post('kpay/api/user/myprofit/stati?', tmp_json).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取分润账户
    MineService.prototype.UserProfit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/user/myprofit').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //分润账户数据处理
    MineService.prototype.GetProfitList = function (keyword, month, len) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(month)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.MyProfit(keyword, month).then(function (res) {
                                return _this.ChartDataProcess(res, len);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.MyProfit(keyword).then(function (res) {
                            return _this.ListDataProcess(res);
                        })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MineService.prototype.ChartDataProcess = function (data, len) {
        var tmp_arr = [];
        if (data.length == 0) {
            for (var i = 0; i < len; i++) {
                tmp_arr.push(0);
            }
        }
        else {
            for (var i = 1; i < len + 1; i++) {
                var flag = true;
                for (var j = 0; j < data.length; j++) {
                    if (data[j].date.substr(-2) == i) {
                        tmp_arr.push(data[j].profit / 100);
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    tmp_arr.push(0);
                }
            }
        }
        return tmp_arr;
    };
    MineService.prototype.ListDataProcess = function (data) {
        var tmp_data = [];
        if (data.length == 0) {
            return tmp_data;
        }
        var tmpMonth = data[0].date.split(' ')[0].substr(0, 7);
        tmp_data = [
            {
                month: tmpMonth,
                total: 0,
                close: false,
                data: []
            }
        ];
        for (var i = 0; i < data.length; i++) {
            var tmpJson = {
                profit: data[i].profit,
                date: data[i].date
            };
            if (tmpMonth == data[i].date.split(' ')[0].substr(0, 7)) {
                for (var j = 0; j < tmp_data.length; j++) {
                    if (tmp_data[j].month == tmpMonth) {
                        tmp_data[j].data.push(tmpJson);
                        tmp_data[j].total += Number(tmpJson.profit);
                        break;
                    }
                }
            }
            else {
                tmpMonth = data[i].date.split(' ')[0].substr(0, 7);
                tmp_data.push({
                    month: tmpMonth,
                    total: tmpJson.profit,
                    close: false,
                    data: [tmpJson]
                });
            }
        }
        tmp_data = this.GetBarWidth(tmp_data);
        return tmp_data;
    };
    MineService.prototype.GetBarWidth = function (data_arr) {
        var max = 0;
        for (var i = 0; i < data_arr.length; i++) {
            if (max < data_arr[i].total) {
                max = data_arr[i].total;
            }
        }
        for (var i = 0; i < data_arr.length; i++) {
            data_arr[i].barWidth = (100 - 100 * data_arr[i].total / max) + '%';
        }
        return data_arr;
    };
    //获取取现记录列表
    MineService.prototype.GetCashList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/cash/getCashList').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取取现记录详情
    MineService.prototype.GetCashDetail = function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/cash/getCashDetail?', { id: orderId }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取红包礼券voucher
    MineService.prototype.GetVoucherList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/cash/cashback/list').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取我的客户
    MineService.prototype.GetMyCustomer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/user/mycustomer').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取返现记录
    MineService.prototype.GetCashBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/trade/list').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取VIP套餐列表
    MineService.prototype.GetVipList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/package/list').then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            App.Nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 购买Vip
    MineService.prototype.BuyVip = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Post('kpay/api/package/buy?', { packId: id }).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        if (result.code === 1) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            App.ShowError(result.msg);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MineService);
    return MineService;
}(__WEBPACK_IMPORTED_MODULE_2__providers_pub_service__["a" /* TBaseService */]));

//# sourceMappingURL=mineservice.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__UltraCreation_Native_StatusBar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__UltraCreation_Native_SplashScreen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_app_share__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
var config = {
    backButtonText: '',
    pageTransitionDelay: 0,
    swipeBackEnabled: false,
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], config, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__pages__["a" /* PagesModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__UltraCreation_Native_StatusBar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__UltraCreation_Native_SplashScreen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_app_share__["a" /* AppShare */],
                __WEBPACK_IMPORTED_MODULE_10__providers__["d" /* TApplication */],
                __WEBPACK_IMPORTED_MODULE_10__providers__["e" /* TAuthService */],
                __WEBPACK_IMPORTED_MODULE_10__providers__["c" /* MineService */],
                __WEBPACK_IMPORTED_MODULE_10__providers__["b" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_10__providers__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__providers__["f" /* TCameraService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UltraCreation_Native_SplashScreen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_StatusBar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(App, Auth) {
        var _this = this;
        this.Auth = Auth;
        App.Platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_1__UltraCreation_Native_SplashScreen__["a" /* SplashScreen */].show();
            __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_StatusBar__["a" /* StatusBar */].hide();
            __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_StatusBar__["a" /* StatusBar */].overlaysWebView(true);
            if (App.IsIos)
                __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_StatusBar__["a" /* StatusBar */].styleBlackTranslucent();
            else
                // StatusBar.styleBlackTranslucent();
                __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_StatusBar__["a" /* StatusBar */].backgroundColorByHexString('#1d83d2');
            // StatusBar.backgroundColorByHexString('blue');
        })
            .then(function () {
            __WEBPACK_IMPORTED_MODULE_1__UltraCreation_Native_SplashScreen__["a" /* SplashScreen */].hide();
            __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Native_StatusBar__["a" /* StatusBar */].show();
        })
            .then(function () {
            _this.Auth.judgeLogin().then(function (root) { return _this.rootPage = root; });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<ion-nav #rootNavController [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers__["d" /* TApplication */], __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* TAuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TApplication; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UltraCreation_ng_ion_appcontroller__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_root__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__ = __webpack_require__(21);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//双击物理返回键推出APP系统




var TApplication = (function (_super) {
    __extends(TApplication, _super);
    function TApplication(Injector) {
        var _this = _super.call(this, Injector) || this;
        _this.UserInfo = {};
        _this.IsVip = false;
        _this.CanTrade = true;
        _this.CurrentCreditCards = {};
        _this.CurrentDepositCard = {};
        _this.RootPage = __WEBPACK_IMPORTED_MODULE_2__shared_root__;
        _this.HardwareBackButtonDisabled = false;
        _this.BackButtonPressed = false;
        window.App = _this;
        _this.Platform.ready().then(function () {
            _this.Platform.registerBackButtonAction(function () {
                if (_this.HardwareBackButtonDisabled)
                    return;
                if (App.Nav.canGoBack()) {
                    App.Nav.pop();
                    return;
                }
                if (_this.BackButtonPressed) {
                    _this.Platform.exitApp();
                }
                else {
                    _this.ShowToast('再按一次退出58付应用');
                    _this.BackButtonPressed = true;
                    setTimeout(function () {
                        _this.BackButtonPressed = false;
                    }, 2000);
                }
            });
            if (_this.IsAndroid) {
                window.addEventListener('native.keyboardshow', _this.keyboardShowHandler.bind(_this));
                window.addEventListener('native.keyboardhide', _this.keyboardHideHandler.bind(_this));
            }
        });
        return _this;
    }
    TApplication.prototype.keyboardShowHandler = function (e) {
        if (window.scrollY < 100)
            window.scrollTo(0, e.keyboardHeight);
    };
    TApplication.prototype.keyboardHideHandler = function (e) {
        if (window.scrollY != 0)
            window.scrollTo(0, 0);
    };
    TApplication.prototype.DisableHardwareBackButton = function () {
        this.HardwareBackButtonDisabled = true;
    };
    TApplication.prototype.EnableHardwareBackButton = function () {
        this.HardwareBackButtonDisabled = false;
    };
    TApplication.prototype.ShowToast = function (MsgOrConfig) {
        if (MsgOrConfig instanceof Object)
            return _super.prototype.ShowToast.call(this, MsgOrConfig);
        else
            return _super.prototype.ShowToast.call(this, { message: MsgOrConfig, position: 'middle', cssClass: 'toast-default', duration: 1500 });
    };
    TApplication.prototype.ShowLoading = function (MsgOrConfig) {
        if (MsgOrConfig instanceof Object)
            return _super.prototype.ShowLoading.call(this, MsgOrConfig);
        else
            return _super.prototype.ShowLoading.call(this, { spinner: 'ios-small', content: MsgOrConfig, cssClass: 'loading-default' });
    };
    TApplication.prototype.ShowError = function (err, duration, position) {
        if (duration === void 0) { duration = 3000; }
        if (position === void 0) { position = 'middle'; }
        return _super.prototype.ShowError.call(this, err, {
            duration: duration, position: position,
            style: 'toast-error', prefix_lang: 'hint.'
        });
    };
    Object.defineProperty(TApplication.prototype, "UserFace", {
        get: function () {
            if (__WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(localStorage.getItem('imageface'))) {
                return { backgroundImage: 'url(' + localStorage.getItem('imageface') + ')' };
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    TApplication.prototype.IsReal = function (page) {
        if (App.UserInfo.idAuthed !== '1') {
            App.Nav.push(App.RootPage.NoldentifyPage);
        }
        else {
            App.Nav.push(page);
        }
    };
    Object.defineProperty(TApplication.prototype, "IconFace", {
        get: function () {
            if (this.UserFace === null && this.UserInfo.sex === '男')
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    TApplication = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], TApplication);
    return TApplication;
}(__WEBPACK_IMPORTED_MODULE_1__UltraCreation_ng_ion_appcontroller__["a" /* TAppController */]));

//# sourceMappingURL=application.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TAppController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_app__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_modal_modal_controller__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_loading_loading_controller__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_action_sheet_action_sheet_controller__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_popover_popover_controller__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Core_Exception__ = __webpack_require__(461);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var TAppController = (function () {
    function TAppController(Injector) {
        this.Injector = Injector;
        this.Instance = Injector.get(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_app__["a" /* App */]);
        this.Platform = Injector.get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__["a" /* Platform */]);
        this.ToastCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]);
        this.AlertCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]);
        this.ModalCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]);
        this.LoadingCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]);
        this.ActionSheetCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_action_sheet_action_sheet_controller__["a" /* ActionSheetController */]);
        this.PopoverCtrl = Injector.get(__WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_popover_popover_controller__["a" /* PopoverController */]);
        this.Translation = Injector.get(__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateService */]);
    }
    Object.defineProperty(TAppController.prototype, "IsAndroid", {
        get: function () {
            return this.Platform.is('android');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TAppController.prototype, "IsIos", {
        get: function () {
            return this.Platform.is('ios');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TAppController.prototype, "IsWindowPhone", {
        get: function () {
            return this.Platform.is('wp');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TAppController.prototype, "Nav", {
        get: function () {
            return this.Instance.getActiveNavs()[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TAppController.prototype, "ActiveView", {
        get: function () {
            return this.Nav.getActive(true);
        },
        enumerable: true,
        configurable: true
    });
    TAppController.prototype.IconFont = function (Index) {
        return String.fromCharCode(Index);
    };
    TAppController.prototype.ShowError = function (err, config) {
        return __awaiter(this, void 0, void 0, function () {
            var trace, msg, lang_id, localize_msg, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(config))
                            config = {};
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
                            if (err instanceof Error)
                                console.error(err.stack);
                            else {
                                trace = new Error();
                                console.error(trace.stack);
                            }
                        }
                        if (err instanceof __WEBPACK_IMPORTED_MODULE_11__Core_Exception__["a" /* EAbort */]) {
                            console.warn(err.message);
                            return [2 /*return*/];
                        }
                        if (__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].IsString(err))
                            msg = err;
                        else if (err instanceof Error)
                            msg = err.message;
                        else if (err instanceof __WEBPACK_IMPORTED_MODULE_11__Core_Exception__["b" /* Exception */])
                            msg = err.message;
                        else
                            msg = '';
                        if (!(msg !== '')) return [3 /*break*/, 4];
                        if (__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(config) && __WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(config.prefix_lang)) {
                            lang_id = config.prefix_lang + msg;
                            localize_msg = this.Translate(lang_id);
                            if (localize_msg !== lang_id)
                                msg = localize_msg;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.ShowToast({ message: msg, position: config.position, duration: config.duration,
                                cssClass: config.style })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *  @params PageType class of PageType
     *  @param opts: ModalOptions
     *      showBackdrop?: boolean;
     *      enableBackdropDismiss?: boolean;
    */
    TAppController.prototype.ShowModal = function (PageType, data, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modal = this.ModalCtrl.create(PageType, data, opts);
                        return [4 /*yield*/, modal.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, modal];
                }
            });
        });
    };
    /**
     *  Display an alert with a title, inputs, and buttons
     *
     *  @param opts: AlertOptions
     *      title?: string;
     *      subTitle?: string;
     *      message?: string;
     *      cssClass?: string;
     *      inputs?: Array<AlertInputOptions>;
     *      buttons?: Array<any>;
     *      enableBackdropDismiss?: boolean;
     *
     *  @param opts.inputs
     *      type?: string;
     *      name?: string;
     *      placeholder?: string;
     *      value?: string;
     *      label?: string;
     *      checked?: boolean;
     *      disabled?: boolean;
     *      id?: string;
     *
     *  @param opt.buttons
     *      text?: string;
     *      icon?: icon;
     *      handler?: any;  // function false => dismiss
     *      cssClass: string;
     *      role: 'destructive' | 'cancel'
     */
    TAppController.prototype.ShowAlert = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(opts.enableBackdropDismiss))
                            opts.enableBackdropDismiss = false;
                        alert = this.AlertCtrl.create(opts);
                        return [4 /*yield*/, alert.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, alert];
                }
            });
        });
    };
    TAppController.prototype.ShowToast = function (opt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Toast)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.Toast.dismiss()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.Toast = this.ToastCtrl.create(opt);
                        this.Toast.onDidDismiss(function () { return _this.Toast = undefined; });
                        return [4 /*yield*/, this.Toast.present()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.Toast];
                }
            });
        });
    };
    TAppController.prototype.ShowLoading = function (opt, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Loading))
                            return [2 /*return*/];
                        if (!__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(opt.spinner))
                            opt.spinner = 'ios';
                        this.IsManualHideLoading = false;
                        this.Loading = this.LoadingCtrl.create(opt);
                        this.Loading.onDidDismiss(function () {
                            if (__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(_this.Loading))
                                _this.Loading = undefined;
                            if (!_this.IsManualHideLoading && __WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(timeout))
                                timeout();
                        });
                        return [4 /*yield*/, this.Loading.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.Loading];
                }
            });
        });
    };
    TAppController.prototype.HideLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Loading)) return [3 /*break*/, 5];
                        this.IsManualHideLoading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.Loading.dismiss()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4:
                        this.Loading = undefined;
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *  @param opt: ActionSheetOptions
     *      title?: string;
     *      subTitle?: string;
     *      cssClass?: string;
     *      buttons?: Array<any>;
     *      enableBackdropDismiss?: boolean;
     *
     *  @param opt.buttons
     *      text?: string;
     *      icon?: icon;
     *      handler?: any;  // function false => dismiss
     *      cssClass: string;
     *      role: 'destructive' | 'cancel'
     */
    TAppController.prototype.ShowActionSheet = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(opts))
                            opts = {};
                        actionSheet = this.ActionSheetCtrl.create(opts);
                        return [4 /*yield*/, actionSheet.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, actionSheet];
                }
            });
        });
    };
    /**
     *  @params PageType class of PageType
     *  @params event to get the top and left prop of current page
     *  @param opts: ModalOptions
     *      cssClass?: string;
     *      showBackdrop?: boolean;
     *      enableBackdropDismiss?: boolean;
    */
    TAppController.prototype.ShowPopover = function (PageType, event, data, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        popover = this.PopoverCtrl.create(PageType, data, opts);
                        return [4 /*yield*/, popover.present({ ev: event })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, popover];
                }
            });
        });
    };
    /* langulage support */
    TAppController.prototype.SetDefaultLanguage = function (lang) {
        this.Translation.setDefaultLang(lang);
    };
    Object.defineProperty(TAppController.prototype, "Languages", {
        get: function () {
            return this.Translation.getLangs();
        },
        enumerable: true,
        configurable: true
    });
    TAppController.prototype.AddLanguage = function (Name, Translation, Merge) {
        if (Merge === void 0) { Merge = false; }
        if (__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(Translation))
            this.Translation.setTranslation(Name, Translation, Merge);
        else
            this.Translation.addLangs([Name]);
        if (this.Languages.length === 1)
            this.Translation.setDefaultLang(Name);
    };
    Object.defineProperty(TAppController.prototype, "Language", {
        get: function () {
            var RetVal = this.Translation.currentLang;
            if (__WEBPACK_IMPORTED_MODULE_10__Core_TypeInfo__["a" /* TypeInfo */].Assigned(RetVal))
                return RetVal;
            else
                return 'en';
        },
        set: function (Value) {
            this.Translation.use(Value);
        },
        enumerable: true,
        configurable: true
    });
    TAppController.prototype.Translate = function (Key) {
        return this.Translation.instant(Key);
    };
    TAppController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], TAppController);
    return TAppController;
}());

//# sourceMappingURL=appcontroller.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EAbort; });
/* unused harmony export EInvalidArg */
/* unused harmony export ENotImplemented */
/* unused harmony export EUsage */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *  TODO: how to extend or implement a Error ?
 *      this simple task impossable to done in JSP
 *
 *  more information:
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 *
 *  predefined errors:
 *      EvalError
 *          Creates an instance representing an error that occurs regarding the global function eval().
 *      InternalError
 *          Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".
 *      RangeError
 *          Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.
 *      ReferenceError
 *          Creates an instance representing an error that occurs when de-referencing an invalid reference.
 *      SyntaxError
 *          Creates an instance representing a syntax error that occurs while parsing code in eval().
 *      TypeError
 *          Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
 *      URIError
 *          Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.
 */
var Exception = (function (_super) {
    __extends(Exception, _super);
    function Exception(message) {
        var _newTarget = this.constructor;
        if (message === void 0) { message = ''; }
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    Exception.Throw = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        throw this.Create.apply(this, args);
    };
    Exception.Create = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new ((_a = this).bind.apply(_a, [void 0].concat(args)))();
        var _a;
    };
    Exception.prototype.toString = function () {
        return this.name + ': ' + this.message;
    };
    return Exception;
}(Error));

/**
 *  abort executing only
 */
var EAbort = (function (_super) {
    __extends(EAbort, _super);
    function EAbort(message) {
        if (message === void 0) { message = ''; }
        var _this = this;
        if (message === '')
            message = 'e_abort';
        _this = _super.call(this, message) || this;
        return _this;
    }
    return EAbort;
}(Exception));

/**
 *  invalid argument
 */
var EInvalidArg = (function (_super) {
    __extends(EInvalidArg, _super);
    function EInvalidArg(message) {
        if (message === void 0) { message = ''; }
        var _this = this;
        if (message === '')
            message = 'e_invalid_arg';
        _this = _super.call(this, message) || this;
        return _this;
    }
    return EInvalidArg;
}(Exception));

/**
 *  not implemented yet.
 */
var ENotImplemented = (function (_super) {
    __extends(ENotImplemented, _super);
    function ENotImplemented(message) {
        if (message === void 0) { message = ''; }
        var _this = this;
        if (message === '')
            message = 'e_not_implemented';
        _this = _super.call(this, message) || this;
        return _this;
    }
    return ENotImplemented;
}(Exception));

/**
 *  not use by this way...
 */
var EUsage = (function (_super) {
    __extends(EUsage, _super);
    function EUsage(message) {
        if (message === void 0) { message = ''; }
        var _this = this;
        if (message === '')
            message = 'e_usage';
        _this = _super.call(this, message) || this;
        return _this;
    }
    return EUsage;
}(Exception));

//# sourceMappingURL=Exception.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsPage = (function () {
    function TabsPage() {
        this.App = window.App;
        this.tab1Root = App.RootPage.HomePage;
        this.tab2Root = App.RootPage.LoanPage;
        this.tab3Root = App.RootPage.ApplycardPage;
        this.tab4Root = App.RootPage.UcenterPage;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\app-project\58pay\src\pages\tabs\index.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="tab-home" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="借贷" tabIcon="tab-dr" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="办卡" tabIcon="tab-card" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="我的" tabIcon="tab-mine" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\tabs\index.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_ng_ion_swiper__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_share__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(elementRef, zone, Service, appShare) {
        this.elementRef = elementRef;
        this.zone = zone;
        this.Service = Service;
        this.appShare = appShare;
        this.App = window.App;
        this.TopVue = 0;
        this.OpacityHeader = 1;
        this.default_header = true;
        this.Notice = [];
        this.ProfitTol = 0;
        this.Wechat = window.Wechat;
        this.GetProfitToday();
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function ($event) {
            _this.zone.run(function () {
                _this.TopVue = Math.ceil(_this.content.scrollTop); //ceil 对一个数进行上舍入
                if (_this.TopVue > 15) {
                    _this.default_header = false;
                }
                else {
                    _this.default_header = true;
                }
                _this.OpacityHeader = _this.TopVue > 10 && _this.TopVue < 20 ? (_this.TopVue - 15) / 10 : 1;
            });
        });
    };
    HomePage.prototype.ngAfterViewInit = function () {
        var _DomHeader = this.FixedHeader.nativeElement;
        var header_height = _DomHeader.clientHeight + 25;
        this.ConBorderTop = header_height + 'px';
    };
    HomePage.prototype.GetProfitToday = function () {
        var _this = this;
        this.Service.GetProfitToday().then(function (res) {
            // console.log(res);
            // res = {"total":888 ,"detail":[{"id":123124,"profit":888,"level":1},{"id":123123,"profit":888,"level":1},{"id":1231,"profit":888,"level":1}]};
            if (res.total) {
                _this.Notice = res.detail;
                _this.NoticeSwiper.Update();
                _this.ProfitTol = res.total / 100;
            }
        });
    };
    HomePage.prototype.Invite = function () {
        var _this = this;
        var ActionSheetConfig = {
            title: '分享方式',
            buttons: [
                {
                    text: '朋友圈',
                    icon: 'friends',
                    cssClass: 'action-sheet-cust action-sheet-friends',
                    role: '分享到朋友圈',
                    handler: function () {
                        _this.appShare.wxShare(1);
                    }
                },
                {
                    text: '微信好友',
                    cssClass: 'action-sheet-cust  action-sheet-wx',
                    icon: 'wx',
                    handler: function () {
                        _this.appShare.wxShare(0);
                    }
                }
            ]
        };
        App.ShowActionSheet(ActionSheetConfig);
    };
    HomePage.prototype.clickfreflinkA = function () {
        new __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]().create('http://t.cn/RQSGp7F');
    };
    HomePage.prototype.clickfreflinkB = function () {
        new __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]().create('https://channel.91gfd.com/register/4?channelCodePreFix=zY5zr5L11');
    };
    HomePage.prototype.clickfreflinkC = function () {
        new __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]().create('https://c.lattebank.com/hbzc/a1/293?channel=hz23');
    };
    HomePage.prototype.clickpingabank = function () {
        new __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]().create('https://interacts.hq.vidata.com.cn/h5/card-platform/index.html?source=1174');
    };
    HomePage.prototype.clickzhaosbank = function () {
        new __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]().create('https://interacts.hq.vidata.com.cn/h5/card-platform/index.html?source=1173');
    };
    HomePage.prototype.clickxingybank = function () {
        new __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]().create('https://interacts.hq.vidata.com.cn/h5/card-platform/index.html?source=1172');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], HomePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('FixedHeader'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "FixedHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('notice'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__UltraCreation_ng_ion_swiper__["a" /* SwiperComp */])
    ], HomePage.prototype, "NoticeSwiper", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\home\index.html"*/'<div class="fixed-header" #FixedHeader>\n  <div *ngIf="!default_header">\n    <div no-border no-padding>\n      <ion-grid class="grid-header-bar bgc-grad-primary bgc-header" p-h-15>\n        <ion-row class="face-cont" align-items-center [ngClass]="{\'ani-opacity\': !default_header}">\n          <ng-template [ngIf]="App.CanTrade || App.IsIos">\n            <ion-col (click)="App.IsReal(App.RootPage.CreditCardPage)">\n              <b class="face-active">\n                <img class="face" src="assets/imgs/ka2.png">\n              </b>\n              <p>刷卡提现</p>\n            </ion-col>\n          </ng-template>\n          <ion-col (click)="Invite()">\n            <b class="face-active">\n              <img class="face" src="assets/imgs/yaoqing.png">\n            </b>\n            <p>邀请好友</p>\n          </ion-col>\n          <ng-template [ngIf]="App.CanTrade">\n            <ion-col [navPush]="App.RootPage.VIPmembersPage">\n              <b class="face-active">\n                <img class="face" src="assets/imgs/VIP2.png">\n              </b>\n              <p>升级会员</p>\n            </ion-col>\n          </ng-template>\n          <ion-col [navPush]="App.RootPage.ApplycardPage">\n            <b class="face-active">\n              <img class="face" src="assets/imgs/xiny.png">\n            </b>\n            <p>办信用卡</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n  <div class="home-header" *ngIf="default_header">\n    <div no-border no-padding>\n      <ion-grid no-padding class="grid-header-bar bgc-grad-primary bgc-header">\n        <ion-row align-items-center p-t-15 p-b-35 [ngClass]="{\'ani-opacity\': default_header}">\n          <ion-col col-4 offset-4 text-center>\n            <img src="assets/imgs/58font.png" alt="" width="44%">\n          </ion-col>\n          <!-- <ion-col col-4>\n                        <ion-row>\n                            <ion-col col-4 offset-4 ><img src="assets/imgs/homemy.png" alt="" width="80%"></ion-col>\n                            <ion-col col-4 text-left><img src="assets/imgs/homenotice.png" alt="" width="80%"></ion-col>\n                        </ion-row>\n                    </ion-col> -->\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <ion-grid no-padding class="rel-grid" [ngClass]="{\'ani-opacity\': default_header}">\n      <ion-row align-items-center class="header-btm">\n        <ng-template [ngIf]="App.CanTrade || App.IsIos">\n          <ion-col col-5 (click)="App.IsReal(App.RootPage.CreditCardPage)">\n            <div text-center>\n              <img src="assets/imgs/home_card.png" alt="">\n              <p no-margin ion-text color="dark" f-1-2>刷卡提现</p>\n            </div>\n          </ion-col>\n        </ng-template>\n        <ion-col col-7>\n          <ion-row align-items-center>\n            <ion-col (click)="Invite()">\n              <span class="option-sm">\n                <img class="header-face" src="assets/imgs/yaoqing.png">\n              </span>\n              <p no-margin ion-text ion-text color="dark" f-1-2>邀请好友</p>\n            </ion-col>\n            <ng-template [ngIf]="App.CanTrade && App.IsAndroid">\n              <ion-col [navPush]="App.RootPage.VIPmembersPage">\n                <span class="option-sm">\n                  <img class="header-face" src="assets/imgs/VIP2.png">\n                </span>\n                <p no-margin ion-text ion-text color="dark" f-1-2>升级会员</p>\n              </ion-col>\n            </ng-template>\n            <ion-col [navPush]="App.RootPage.ApplycardPage">\n              <span class="option-sm">\n                <img class="header-face" src="assets/imgs/xiny.png">\n              </span>\n              <p no-margin ion-text ion-text color="dark" f-1-2>办信用卡</p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div>\n<ion-content>\n  <!--\n  <div class="swiper-topic" style="position: relative" id="{{ConBorderTop}}" [style.margin-top]="ConBorderTop">\n     <swiper [Config]="{slidesPerView: 1, spaceBetween: 0, pagination: \'.swiper-pagination\', loop: true, autoplay: 2500, autoplayDisableOnInteraction: false}">\n    <ng-template [ngIf]="App.CanTrade || App.IsIos">\n      <swiper [Config]="{slidesPerView: 1, spaceBetween: 0}">\n        <div class="swiper-wrapper">\n          <div class="swiper-slide">\n                  <img src="assets/imgs/banner.png" alt="">\n                </div>\n                <div class="swiper-slide">\n                    <img src="assets/imgs/banner.png" alt="">\n                </div>\n          <div class="swiper-slide">\n            <img src="assets/imgs/banner.png" alt="">\n          </div>\n        </div>\n        <div class="swiper-pagination"></div>\n      </swiper>\n    </ng-template>\n  </div>\n-->\n  <div [ngStyle]="{\'margin-top\':ConBorderTop}">\n    <ng-template [ngIf]="App.CanTrade">\n      <div class="bgc-light profit-bar" m-v-10>\n        <div class="profit-bar-header" text-light>\n          <div class="triangle"></div>\n          今日分润\n        </div>\n\n        <div class="profit-bar-content" text-nowrap>\n          <div class="profit-amount">\n            <span f-1-2>￥</span>\n            <span f-1-6>{{ProfitTol}}</span>\n          </div>\n          <div class="profit-content">\n            <swiper #notice [Config]="{slidesPerView: 1, spaceBetween: 15, loop: true, autoplay: 3500, autoplayDisableOnInteraction: false, direction: \'vertical\'}">\n              <div class="swiper-wrapper" *ngIf="ProfitTol">\n                <div class="swiper-slide" style="height: 30px" *ngFor="let item of Notice">\n                  <span p-l-5 f-1-2>ID:{{item.id}} 贡献利润{{item.profit/100}}元</span>\n                </div>\n              </div>\n              <div class="swiper-wraper" *ngIf="!ProfitTol">\n                <div class="swiper-slide" style="height: 30px">\n                  <span p-l-5 f-1-2>今日暂无收益</span>\n                </div>\n              </div>\n            </swiper>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <div>\n      <ion-grid m-b-10 class="grid-header-bar bgc-light tip">\n        <ion-row m-b-15 text-center>\n          <ion-col ion-text color="gray" f-1-6 text-left>\n            <b>精选贷款</b>\n          </ion-col>\n        </ion-row>\n        <ion-row class="floor-cont" text-center>\n          <ion-col col-4>\n            <img src="assets/imgs/sheng.png" width="50%" (click)="clickfreflinkA()">\n            <p>省呗</p>\n            <h6 f-1-4>秒批 大额 低息</h6>\n          </ion-col>\n          <ion-col col-4>\n            <img src="assets/imgs/qiqi.png" width="50%" (click)="clickfreflinkB()">\n            <p>功夫贷</p>\n            <h6 f-1-4>超低息 大额贷</h6>\n          </ion-col>\n\n          <ion-col col-4>\n            <img src="assets/imgs/huan.png" width="50%" (click)="clickfreflinkC()">\n            <p>还呗</p>\n            <h6 f-1-4>信用代还 利息低</h6>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <ion-grid m-b-10 class="grid-header-bar bgc-light tip">\n        <ion-row m-b-15>\n          <ion-col ion-text color="gray" f-1-6 text-left>\n            <b>畅想生活必备卡</b>\n          </ion-col>\n        </ion-row>\n        <ion-row class="home-bank" (click)="clickpingabank()">\n          <ion-col col-5>\n            <img src="assets/imgs/pinga.png">\n          </ion-col>\n          <ion-col col-7 text-left>\n            <h6 no-margin>平安银行信用卡</h6>\n            <p>快速审批；加油88折年返960；淘宝联名卡乐享积分</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class="home-bank" (click)="clickzhaosbank()">\n          <ion-col col-5>\n            <img src="assets/imgs/zhaos.png">\n          </ion-col>\n          <ion-col col-7 text-left>\n            <h6 no-margin>招商银行信用卡</h6>\n            <p>100%额度取现；NBA、京东联名卡，积分永久有效</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class="home-bank" (click)="clickxingybank()">\n          <ion-col col-5>\n            <img src="assets/imgs/xingy.png">\n          </ion-col>\n          <ion-col col-7 text-left>\n            <h6 no-margin>兴业银行信用卡</h6>\n            <p>租车88折；淘宝联名信用卡，淘宝购物神器</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\home\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_4__providers_app_share__["a" /* AppShare */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_homeservice__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreditCardPage = (function () {
    function CreditCardPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "刷卡提现";
        this.Amount = {
            InputAmount: undefined,
            OutputAmount: undefined
        };
        this.Way = {
            Type: 1
        };
        this.CreditCards = new Array();
        this.DepositCards = new Array();
        this.GetCardList();
        this.Way.Rate = App.UserInfo.rate;
    }
    CreditCardPage.prototype.ngOnInit = function () {
    };
    CreditCardPage.prototype.GetCardList = function () {
        var _this = this;
        this.Service.GetCardList().then(function (res) {
            if (!__WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(res.length) || res.length === 0)
                return;
            _this.CardList = new Array();
            _this.CreditCards = new Array();
            _this.DepositCards = new Array();
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var item = res_1[_i];
                _this.CardList.push(item);
                if (item.type === '0') {
                    _this.CreditCards.push(item);
                    if (item.primary === '1')
                        App.CurrentCreditCards = _this.CurrentCreditCard = item;
                }
                if (item.type === '1') {
                    _this.DepositCards.push(item);
                    _this.CurrentDepositCard = item;
                    // if(item.primary === '1')
                    // {
                    //   this.CurrentDepositCard = item;
                    // }
                }
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    CreditCardPage.prototype.InputAmount = function () {
        if (!this.Amount.InputAmount) {
            this.Amount.OutputAmount = undefined;
            return;
        }
        this.Amount.OutputAmount = Math.floor((this.Amount.InputAmount * (1 - this.Way.Rate / 100)) * 10) / 10;
    };
    CreditCardPage.prototype.ChoseWay = function (index) {
        this.Way.Type = index;
        if (index === 1) {
            this.Way.Rate = App.UserInfo.rate;
            this.InputAmount();
        }
        else {
            this.Way.Rate = App.UserInfo.rate1;
            this.InputAmount();
        }
    };
    CreditCardPage.prototype.ConfirmPay = function () {
        var myDate = new Date();
        var myTime = myDate.getHours();
        if (myTime >= 22 || myTime < 9) {
            App.ShowToast("交易时间为早九点到晚十点");
            return;
        }
        if (this.CreditCards.length == 0 || this.DepositCards.length == 0) {
            App.ShowError('请先添加银行卡和储蓄卡');
            return;
        }
        if (this.Way.Type === 1) {
            this.Service.GetBankPage(this.CurrentCreditCard.id, this.CurrentDepositCard.id, this.Amount.InputAmount).then(function (res) {
                // 跳转银联页面
                if (res) {
                    if (res.indexOf('<html>') == -1) {
                        var _json = JSON.parse(res);
                        App.ShowError(_json.respMsg);
                    }
                    else {
                        App.Nav.push(App.RootPage.FinalpayPage, { innerHtml: res });
                    }
                }
                else {
                    App.ShowError('系统异常，请尝试有积分提现, 或稍后再试');
                }
            });
        }
        else {
            App.Nav.push(App.RootPage.CardInforPage, {
                InAmount: this.Amount.InputAmount,
                OutAmount: this.Amount.OutputAmount,
                CreditCard: this.CurrentCreditCard.bank + '(' + this.CurrentCreditCard.cardNo + ')',
                DepositCard: this.CurrentDepositCard.bank + '(' + this.CurrentDepositCard.cardNo + ')',
                Code: this.CurrentCreditCard.id,
                CreditCode: this.CurrentCreditCard.code,
                DepositCode: this.CurrentDepositCard.code,
                Mobile: this.CurrentCreditCard.mobile
            });
        }
    };
    CreditCardPage.prototype.ChangeCard = function () {
        var _this = this;
        App.ShowModal(App.RootPage.ChangecardsPage, this.CreditCards).then(function (modal) {
            modal.onDidDismiss(function (data) {
                if (__WEBPACK_IMPORTED_MODULE_2__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(data)) {
                    App.CurrentCreditCards = _this.CurrentCreditCard = data;
                    _this.CreditCards.forEach(function (item) {
                        if (item.id === data.id)
                            item.primary = '1';
                        else
                            item.primary = '0';
                    });
                }
            });
        });
    };
    CreditCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-creditCard',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\home\creditCard\index.html"*/'<ion-header no-border>\n    <!-- <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar> -->\n    <div class=" register">\n        <ion-row class="bgc-grad-primary back-btn">\n            <ion-col f-1-6 p-h-15>\n                <span>\n                    <ion-icon f-2-0 float-left tappable [navPush]="App.RootPage.TabsPage">&#xf3cf;</ion-icon>\n                    刷卡提现\n                </span>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-header>\n<ion-content>\n    <div *ngIf="App.CurrentCreditCards.primary === \'1\'; then HasCredit; else NullCredit"></div>\n    <!-- 已添加信用卡 -->\n    <ng-template #HasCredit>\n        <div padding-horizontal m-t-10>\n            <ion-grid class="grid-card-banks bgc-grad-primary bgc-top bgc-boxshadow">\n                <ion-row class="banks-contA">\n                    <ion-col col-2 text-center>\n                        <div class="face">\n                            <img src="assets/banklogo/bank_{{App.CurrentCreditCards.code}}.png" alt="">\n                        </div>\n                    </ion-col>\n                    <ion-col>\n                        <h6 no-margin>{{App.CurrentCreditCards.bank}}</h6>\n                        <span class="opacity-7">付款信用卡</span>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="banks-contB">\n                    <ion-col></ion-col>\n                    <ion-col>****</ion-col>\n                    <ion-col>****</ion-col>\n                    <ion-col>****</ion-col>\n                    <ion-col>{{App.CurrentCreditCards.cardNo}}</ion-col>\n                </ion-row>\n                <ion-row class="banks-contC">\n                    <ion-col col-2 p-t-10 text-center>\n                        <button ion-button block (click)="ChangeCard()">更换</button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <div class="pic">\n                <img src="assets/banklogo/bank_{{App.CurrentCreditCards.code}}_0.png" alt="">\n            </div>\n        </div>\n    </ng-template>\n\n    <!-- 未添加信用卡 -->\n    <ng-template #NullCredit>\n        <div padding-horizontal m-t-10>\n            <ion-grid class="grid-card-banks bgc-grad-primary bgc-top bgc-boxshadow">\n                <ion-row class="banks-temp">\n                    <ion-col text-center>\n                        请添加付款信用卡\n                    </ion-col>\n                </ion-row>\n                <ion-row class="banks-temp" text-center>\n                    <ion-col col-4 class="infc-btn" [navPush]="App.RootPage.AddcreditsPage" navParams="CreditCardPage">\n                        <button ion-button block >+</button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </ng-template>\n\n<div p-h-15>\n    <ion-grid class="list-grid-default" m-t-10 no-padding>\n        <div *ngIf="DepositCards.length > 0; then HasDeposit; else NullDeposit"></div>\n        <!-- 已添加储蓄卡 -->\n        <ng-template #HasDeposit>\n            <ion-row align-items-center p-l-10>\n                <ion-col>\n                    <ul class="list-row-inner">\n                        <li class="title infor">收款储蓄卡</li>\n                        <li class="note" text-right>\n                            <span class="bank-face"><img src="assets/banklogo/bank_{{CurrentDepositCard.code}}.png"></span>\n                            <span ion-text color="dark" >{{CurrentDepositCard.bank}}({{CurrentDepositCard.cardNo}})</span>\n                        </li>\n                    </ul>\n                </ion-col>\n            </ion-row>\n        </ng-template>\n        <!-- 未添加储蓄卡 -->\n        <ng-template #NullDeposit>\n            <ion-row align-items-center p-l-10 [navPush]="App.RootPage.AdddepositPage" navParams="CreditCardPage">\n                <ion-col>\n                    <ul class="list-row-inner">\n                        <li class="title infor">收款储蓄卡</li>\n                        <li class="note" text-right><span ion-text color="dark">请添加收款储蓄卡</span></li>\n                        <li class="icon-arrow "><ion-icon></ion-icon></li>\n                    </ul>\n                </ion-col>\n            </ion-row>\n        </ng-template>\n        <p class="bank-tip">收款金额</p>\n        <ion-row p-b-10 p-l-10>\n            <ion-col col-1 text-center f-2-5>￥</ion-col>\n            <ion-col col-11 p-r-20 text-left>\n                <ion-input type="number" placeholder="0.00" [(ngModel)]="Amount.InputAmount" (ngModelChange)="InputAmount()"></ion-input>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid class="list-grid-default grid-default" m-t-10 text-nowrap p-h-5>\n        <ion-row p-h-10 ion-text p-t-10 color="gray">\n            <ion-col>收款方式</ion-col>\n            <ng-template [ngIf]="App.IsAndroid">\n              <ion-col text-right f-1-3 ion-text color="light-primary" [navPush]="App.RootPage.VIPmembersPage">购买VIP享0.38%费率>></ion-col>\n            </ng-template>\n        </ion-row>\n        <ion-row>\n            <ion-col col-5 [ngStyle]="{\'line-height\':\'1px\'}">\n                <ul class="list-row-inner" text-center (click)="ChoseWay(1)">\n                    <li class="title"><i class="has-point active" [ngClass]="{\'active\': Way.Type == 1}"></i></li>\n                    <li class="note" ion-text color="orange">{{App.UserInfo.rate}}%+2</li>\n                    <li class="note" >无积分</li>\n                </ul>\n            </ion-col>\n            <ion-col col-2></ion-col>\n            <ion-col col-5 [ngStyle]="{\'line-height\':\'1px\'}">\n                <ul class="list-row-inner" text-center (click)="ChoseWay(2)">\n                    <li class="title"><i class="has-point" [ngClass]="{\'active\': Way.Type == 2}"></i></li>\n                    <li class="note" ion-text color="orange">{{App.UserInfo.rate1}}%+2</li>\n                    <li class="note" >有积分</li>\n                </ul>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</div>\n\n\n    <!-- <ion-grid  class="grid-header-bar" >\n        <ion-row class="face-cont" align-items-center >\n            <ion-col>\n                <b class="face-tab face-active"><img class="face-nav" src="assets/imgs/zs4.png"></b>\n                <p class="mold">普通会员</p>\n            </ion-col>\n            <ion-col>\n                <b class="face-tab"><img class="face-nav" src="assets/imgs/zs1.png"></b>\n                <p class="mold">黄金会员</p>\n            </ion-col>\n            <ion-col>\n                <b class="face-tab"><img class="face-nav" src="assets/imgs/zs3.png"></b>\n                <p class="mold">铂金会员</p>\n            </ion-col>\n            <ion-col>\n                <b class="face-tab"><img class="face-nav" src="assets/imgs/zs2.png"></b>\n                <p class="mold">钻石会员</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid> -->\n\n    <ion-row justify-content-center m-t-10>\n        <ion-col col-11>\n            <!-- <button class="bgc-grad-primary bgc-header" ion-button block [disabled]="!Amount.InputAmount" (click)="ConfirmPay()">到账金额{{Amount.OutputAmount}}，去确认</button> -->\n            <button class="bgc-grad-primary bgc-header" ion-button round block [disabled]="!Amount.InputAmount" (click)="ConfirmPay()">下一步</button>\n        </ion-col>\n    </ion-row>\n</ion-content>\n\n\n\n\n\n\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\home\creditCard\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_homeservice__["a" /* HomeService */]])
    ], CreditCardPage);
    return CreditCardPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardInforPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardInforPage = (function () {
    function CardInforPage(navParams, Service) {
        this.navParams = navParams;
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "确认信息";
        this.VCodeText = '获取验证码';
        this.State = 0;
        this.ShowFront = false;
        this.ShowBack = false;
        this.Voucher = [];
        this.Params = {
            InputAmount: this.navParams.get('OutAmount'),
            OutputAmount: this.navParams.get('InAmount'),
            CreditCard: this.navParams.get('CreditCard'),
            DepositCard: this.navParams.get('DepositCard'),
            Code: this.navParams.get('Code'),
            CreditCode: this.navParams.get('CreditCode'),
            DepositCode: this.navParams.get('DepositCode'),
            Mobile: this.navParams.get('Mobile')
        };
    }
    CardInforPage.prototype.ngOnInit = function () {
        this.Form_Group_Info = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            CVN: this.CVN = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(3)
            ]),
            CardDate: this.CardDate = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(4)
            ]),
            VerifyCode: this.VerifyCode = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(6)
            ]),
        });
        this.GetAvaCash();
    };
    //倒计时
    CardInforPage.prototype.times = function () {
        var _this = this;
        var count = 60;
        var timer = setInterval(function () {
            if (count > 0) {
                count--;
                _this.VCodeText = '已发送' + count + 's';
                if (count === 0) {
                    _this.VCodeText = '重新获取';
                    _this.State = 0;
                    clearInterval(timer);
                }
            }
        }, 1000);
    };
    // 获取可用优惠券
    CardInforPage.prototype.GetAvaCash = function () {
        var _this = this;
        this.Service.GetAvaCash(this.Params.OutputAmount).then(function (res) {
            _this.Voucher = res;
            // this.Voucher = [{'cashbackId':12313,'expireDate':'2017-12-01','source':'来自邀请奖励','amount':600},
            //               {'cashbackId':12314,'expireDate':'2017-12-01','source':'来自邀请奖励','amount':1000}];
        });
    };
    Object.defineProperty(CardInforPage.prototype, "VCodeBtnIsDisabled", {
        // selectTick() {
        //   let tick = this.alertCtrl.create({
        //     title: '已记住!',
        //     subTitle: '下次收款时无需输入CVN2和有效期',
        //     cssClass:'bom-bbox',
        //     buttons: ['OK']
        //   });
        //   tick.present();
        // }
        get: function () {
            if (this.CVN.invalid || this.CardDate.invalid)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardInforPage.prototype, "CompleteBtnIsDisabled", {
        get: function () {
            if (this.CVN.invalid || this.CardDate.invalid || this.VerifyCode.invalid)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    CardInforPage.prototype.GetVerifyCode = function () {
        var _this = this;
        if (this.VoucherId) {
            this.Service.GetVerifyode(this.Params.Code, this.Form_Group_Info.value.CVN, this.Form_Group_Info.value.CardDate, this.Params.Mobile, this.Params.OutputAmount, this.VoucherId)
                .then(function (res) {
                if (res) {
                    _this.OrderNo = res;
                    _this.times();
                }
            });
        }
        else {
            this.Service.GetVerifyode(this.Params.Code, this.Form_Group_Info.value.CVN, this.Form_Group_Info.value.CardDate, this.Params.Mobile, this.Params.OutputAmount)
                .then(function (res) {
                if (res) {
                    _this.OrderNo = res;
                    _this.times();
                }
            });
        }
    };
    CardInforPage.prototype.ConfirmCode = function () {
        var _this = this;
        if (!this.OrderNo) {
            App.ShowError('验证码输入不正确');
            return;
        }
        this.Service.ConfirmResult(this.OrderNo, this.Form_Group_Info.value.VerifyCode).then(function (res) {
            if (res) {
                App.Nav.push(App.RootPage.ConfirminfoPage, { InCard: _this.Params.DepositCard, FinalAmount: _this.Params.InputAmount, CardCode: _this.Params.DepositCode });
            }
        });
    };
    CardInforPage.prototype.ShowBackEmp = function () {
        this.ShowBack = true;
    };
    CardInforPage.prototype.ShowFrontEmp = function () {
        this.ShowFront = true;
    };
    CardInforPage.prototype.CloseCard = function () {
        this.ShowBack = this.ShowFront = false;
    };
    CardInforPage.prototype.ClickUserVoucher = function () {
        var _this = this;
        App.ShowModal(App.RootPage.UsevoucherPage, { Voucher: this.Voucher }).then(function (modal) {
            modal.onDidDismiss(function (data) {
                _this.VoucherId = data;
            });
        });
    };
    CardInforPage.prototype.ClickUserChosen = function () {
        App.ShowModal(App.RootPage.UsevoucherPage);
    };
    CardInforPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cardInfor',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\home\cardInfor\index.html"*/'<ion-header no-border>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar>\n    <ion-toolbar no-padding>\n        <ion-grid class="list-grid-default bgc-grad-primary">\n            <ion-row padding-vertical>\n                <ion-col>\n                    <ul class="list-row-inner">\n                        <li class="title" text-center>\n                            <div class="bold" f-2-5 ion-text color="light"><span f-1-2>￥</span>{{Params.OutputAmount}}</div>\n                            <p class="color-fopacity-7">收款金额</p>\n                        </li>\n                        <!-- <li class="title slash" text-center><span></span></li> -->\n                        <li class="title" text-center>\n                            <div class="bold" f-2-5 ion-text color="light"><span f-1-2>￥</span>{{Params.InputAmount}}</div>\n                            <p class="color-fopacity-7">到账金额</p>\n                        </li>\n                    </ul>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid class="grid-inforlist-default" m-b-10>\n        <ion-row class="border-last">\n            <ion-col col-4>收款储蓄卡</ion-col>\n            <ion-col>\n                <span class="bank-face"><img src="assets/banklogo/bank_{{Params.DepositCode}}.png"></span>\n                <span>{{Params.DepositCard}}</span>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <form novalidate [formGroup]="Form_Group_Info">\n        <ion-grid class="grid-inforlist-default" m-b-10>\n            <ion-row>\n                <ion-col col-4>付款信用卡</ion-col>\n                <ion-col>\n                    <span class="bank-face"><img src="assets/banklogo/bank_{{Params.CreditCode}}.png"></span>\n                    <span>{{Params.CreditCard}}</span>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-4>CVN2</ion-col>\n                <ion-col col-6><ion-input type=\'number\' placeholder="卡片背面末三位数" formControlName="CVN"></ion-input></ion-col>\n                <ion-col (click)="ShowBackEmp()" text-right text-nowrap><span ion-text color="orange">示例</span></ion-col>\n            </ion-row>\n            <ion-row class="border-last">\n                <ion-col col-4>有效期</ion-col>\n                <ion-col col-6><ion-input type=\'number\' placeholder="卡片正面有效期" formControlName="CardDate"></ion-input></ion-col>\n                <ion-col (click)="ShowFrontEmp()" text-right text-nowrap><span ion-text color="orange">示例</span></ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-grid class="grid-inforlist-default" m-b-10 *ngIf="Voucher.length > 0">\n            <ion-row class="border-last" (click)="ClickUserVoucher()">\n                <ion-col col-4>抵扣券</ion-col>\n                <ion-col col-5><span ion-text color="orange">{{Voucher.length}}张可用</span></ion-col>\n                <ion-col text-right col-2>去使用</ion-col>\n                <ion-col text-right><ion-icon>&#xf3d1;</ion-icon></ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-grid class="grid-inforlist-default" m-b-10>\n            <ion-row [ngStyle]="{\'padding\':\'6px 12px 5px 0\'}">\n                <ion-col col-4>手机号</ion-col>\n                <ion-col col-4>{{Params.Mobile}}</ion-col>\n                <ion-col text-right>\n                    <button class="btn" ion-button p-l-5 p-r-5 f-1-5 [disabled]="VCodeBtnIsDisabled" (click)="GetVerifyCode()" tappable>{{VCodeText}}</button>\n                </ion-col>\n            </ion-row>\n            <ion-row class="border-last">\n                <ion-col col-4>验证码</ion-col>\n                <ion-col><ion-input type=\'text\' placeholder="请输入验证码" formControlName="VerifyCode"></ion-input></ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </form>\n    <!-- <ion-row class="hook-tick">\n        <ion-col>\n            <b (click)="selectTick()"><ion-icon>&#xf2bc;</ion-icon></b>\n            <span>记住这张信用卡的CVN2和有效期</span>\n        </ion-col>\n    </ion-row> -->\n    <!-- <ion-row justify-content-center>\n        <ion-col col-7>\n            <button class="bgc-grad-primary bgc-header" ion-button block  f-1-6 [disabled]="CompleteBtnIsDisabled" (click)="ConfirmCode()" tappable>确认</button>\n        </ion-col>\n    </ion-row> -->\n    <ion-row justify-content-center m-t-10>\n        <ion-col col-11>\n            <button class="bgc-grad-primary bgc-header" ion-button block round f-1-6 [disabled]="CompleteBtnIsDisabled" (click)="ConfirmCode()" tappable>确认</button>\n        </ion-col>\n    </ion-row>\n</ion-content>\n\n<!-- 确认信息阴影弹框正面 样式在grid.scss-->\n<div *ngIf="ShowFront">\n    <div class="shadow-bgc"></div>\n    <div class="shadow-cont">\n        <ion-grid>\n            <ion-row justify-content-center>\n                <ion-col col-10 text-center>\n                    <img src="assets/imgs/main1.png">\n                    <div m-t-10 ion-text color="light">\n                        <p no-margin>有效期为信用卡正面"VALID THRU"右侧日期</p>\n                        <p no-margin>如输入"1210"</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row  justify-content-center class="banks-contC">\n                <ion-col col-5>\n                    <button class="small" ion-button block (click)="CloseCard()">知道了</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</div>\n\n<div *ngIf="ShowBack">\n    <div class="shadow-bgc"></div>\n    <!-- 确认信息阴影弹框反面 -->\n    <div class="shadow-cont">\n        <ion-grid>\n            <ion-row justify-content-center>\n                <ion-col col-10 text-center>\n                    <img src="assets/imgs/main2.png">\n                    <div m-t-10 ion-text color="light">\n                        <p no-margin>CVN2为信用卡背面末三位数字</p>\n                        <p no-margin>如输入"267"</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row  justify-content-center class="banks-contC">\n                <ion-col col-5>\n                    <button class="small" ion-button block (click)="CloseCard()">知道了</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</div>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\home\cardInfor\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */]])
    ], CardInforPage);
    return CardInforPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalpayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinalpayPage = (function () {
    function FinalpayPage(navParams, sanitizer) {
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.browser = {
            isLoaded: false,
            proObj: null,
            progress: 0,
            secUrl: '',
            title: '加载中',
            url: '',
            share: null // 是否具有分享功能（传递一个分享对象ShareModel过来）
        };
        this.flag = true;
        this.this_html = '';
        this.htmltext = '';
        this.shareConfig = {
            isShow: false
        }; // 分享控制的配置
        this.headTitle = '银联支付';
        var bodyText = this.navParams.get('innerHtml').toString();
        if (bodyText.indexOf('form') == -1) {
            this.flag = false;
            var tmp_html = bodyText.split('<body>')[1];
            tmp_html = tmp_html.split('</body>')[0];
            tmp_html = this.sanitizer.bypassSecurityTrustHtml(tmp_html);
            this.this_html = tmp_html;
        }
        else {
            this.flag = true;
            var tmp_html2 = bodyText.split('<form')[1];
            tmp_html2 = tmp_html2.split('</form>')[0];
            tmp_html2 = '<form' + tmp_html2 + '<form>';
            tmp_html2 = tmp_html2.split('>');
            tmp_html2[0] += ' target="brower"';
            tmp_html2 = tmp_html2.join('>');
            tmp_html2 = this.sanitizer.bypassSecurityTrustHtml(tmp_html2);
            this.htmltext = tmp_html2;
        }
        var browser = this.navParams.get('browser');
        if (browser) {
            this.browser.title = browser.title;
            this.browser.url = browser.url;
            this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(browser.url);
            if (browser.share) {
                this.browser.share = browser.share;
            }
        }
        else {
            this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.browser.url);
        }
        this.reload();
    }
    FinalpayPage.prototype.ionViewDidEnter = function () {
        if (this.flag) {
            document.getElementsByTagName('form')[0].submit();
        }
        if (!this.browser.proObj) {
            this.browser.proObj = document.getElementById('progress');
            console.log(this.browser.proObj);
        }
        this.onprogress();
    };
    FinalpayPage.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    // 网页访问进度
    FinalpayPage.prototype.onprogress = function () {
        var _this = this;
        // 随机时间
        var timeout = this.random(10, 30);
        var timer = setTimeout(function () {
            if (_this.browser.isLoaded) {
                _this.browser.proObj.style.width = '100%';
                clearTimeout(timer);
                return;
            }
            // 随机进度
            _this.browser.progress += _this.random(1, 5);
            // 随机进度不能超过 90%，以免页面还没加载完毕，进度已经 100% 了
            if (_this.browser.progress > 90) {
                _this.browser.progress = 90;
            }
            _this.browser.proObj.style.width = _this.browser.progress + '%';
            _this.onprogress();
        }, timeout);
    };
    // 如果iframe页面加载成功后
    FinalpayPage.prototype.loaded = function () {
        this.browser.isLoaded = true;
    };
    // 重新加载页面
    FinalpayPage.prototype.reload = function () {
        var _this = this;
        var title = this.browser.title;
        var url = this.browser.secUrl;
        this.browser.title = '加载中';
        this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
        setTimeout(function () {
            _this.browser.isLoaded = false;
            _this.browser.progress = 0;
            if (!_this.browser.proObj) {
                _this.browser.proObj = document.getElementById('progress');
            }
            _this.onprogress();
            _this.browser.title = title;
            _this.browser.secUrl = url;
        }, 10);
    };
    FinalpayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-finalpay',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\home\finalpay\index.html"*/'\n\n<ion-header>\n\n    <ion-toolbar no-padding>\n\n        <app-toolbar HasBack="true" [Title]="headTitle"></app-toolbar>\n\n    </ion-toolbar> \n\n    <!-- <ion-toolbar>\n\n        <ion-buttons end>\n\n          <button ion-button icon-only (click)="presentPopover($event)">\n\n            <ion-icon name="more"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n    </ion-toolbar> -->\n\n  </ion-header>\n\n\n\n  <ion-content class="content"> <!--scroll="true" overflow-scroll="true"-->\n\n    <div class="progress" [hidden]="browser.isLoaded">\n\n      <div class="progress-inner" id="progress"></div>\n\n    </div>\n\n    <div *ngIf = "flag">\n\n      <iframe id="iframe" class="iframe"\n\n              sandbox="allow-scripts allow-top-navigation allow-pointer-lock allow-same-origin allow-popups allow-forms"\n\n              (load)="loaded()"\n\n              name = "brower">\n\n      </iframe>\n\n      <div [innerHtml]="htmltext"></div>\n\n    </div>\n\n    <div *ngIf = "!flag" [innerHtml]="this_html"></div>\n\n  </ion-content>'/*ion-inline-end:"D:\app-project\58pay\src\pages\home\finalpay\index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], FinalpayPage);
    return FinalpayPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirminfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirminfoPage = (function () {
    function ConfirminfoPage(navParams) {
        this.navParams = navParams;
        this.App = window.App;
        this.CardInfo = this.navParams.get('InCard');
        this.Amount = this.navParams.get('FinalAmount');
        this.CardCode = this.navParams.get('CardCode');
    }
    ConfirminfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirminfo',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\home\confirminfo\index.html"*/'<ion-header no-border>\n    <!-- <ion-toolbar no-padding>\n        <app-toolbar HasBack="true"></app-toolbar>\n    </ion-toolbar> -->\n    <ion-toolbar no-padding>\n        <ion-row class="bgc-grad-primary grid-confirm-card">\n            <ion-col text-center>\n            <p><ion-icon f-5-0>&#xf2bc;</ion-icon><span f-3-0>收款成功</span></p>\n                \n              <!-- <img class="hook-face bgc-grad-primary bgc-top" src="assets/imgs/duigou.png"> -->\n              <div><span f-1-5>￥</span><span f-5-0>{{Amount}}</span></div>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid class="list-grid-default" m-b-10>\n        <ion-row align-items-center p-l-10>\n            <ion-col p-t-8 p-b-8>\n                <ul class="list-row-inner">\n                    <li class="title infor">收款储蓄卡</li>\n                    <li class="note">\n                        <span class="bank-face"><img src="assets/banklogo/bank_{{CardCode}}.png"></span>\n                        <span ion-text color="dark">{{CardInfo}}</span>\n                    </li>\n                </ul>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-grid class="list-grid-default" m-b-10>\n        <ion-row align-items-center p-l-10>\n            <ion-col p-t-8 p-b-8>\n                <ul class="list-row-inner">\n                    <li class="title infor">订单状态</li>\n                    <li class="note" *ngIf="Status; then Done; else Failed">\n                        <span ion-text color="orange">交易成功</span>\n                    </li>\n                </ul>\n            </ion-col>\n        </ion-row>\n        <ion-row align-items-center p-l-10>\n            <ion-col p-t-8 p-b-8>\n                <ul class="list-row-inner">\n                    <li class="title infor">预计到账时间</li>\n                    <li class="note"><span ion-text color="dark" >实时到账</span></li>\n                </ul>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-row text-right p-r-10 ion-text color="gray"><ion-col>*如未实时到账，一般最晚第二个工作日可到账</ion-col></ion-row>\n    <ion-row justify-content-center m-t-50  [navPush]="App.RootPage.TabsPage">\n        <ion-col col-11><button class="bgc-grad-primary bgc-header" round ion-button block  f-1-6>完 成</button></ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\home\confirminfo\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ConfirminfoPage);
    return ConfirminfoPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangecardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangecardsPage = (function () {
    function ChangecardsPage(Service, navParams) {
        this.Service = Service;
        this.navParams = navParams;
        this.HeadTitle = "我的信用卡";
        this.BankList = [];
    }
    ChangecardsPage.prototype.ngOnInit = function () {
        this.BankList = [];
        for (var _i = 0, _a = this.navParams.data; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.primary === '1')
                item.chose = true;
            this.BankList.push(item);
        }
    };
    ChangecardsPage.prototype.AddCards = function () {
        App.Nav.push(App.RootPage.AddcreditsPage);
    };
    ChangecardsPage.prototype.SelectedCard = function (item) {
        // console.log(item.chose)  //undefined
        // console.log(!item.chose)  //true
        if (item.chose)
            return;
        for (var _i = 0, _a = this.BankList; _i < _a.length; _i++) {
            var i = _a[_i];
            i.chose = false;
        }
        item.chose = !item.chose;
        this.Service.SetPrimCard(item.id)
            .then(function () { return setTimeout(function () { return App.ActiveView.dismiss(item); }); })
            .catch(function (err) { return App.ShowError('接口异常...'); });
    };
    ChangecardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-changecards',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\home\changecards\index.html"*/'<ion-header>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle" BtnIcon="&#xf273;" (BtnIconEvent)="AddCards()"></app-toolbar>\n        <!-- <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar> -->\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <div padding-horizontal class="minus-margin" *ngFor="let item of BankList;">\n        <b class="bank-tick" (click)="SelectedCard(item)">\n            <ion-icon *ngIf="item.chose">&#xf2bc;</ion-icon>\n        </b>\n        <ion-grid class="grid-card-banks bgc-grad-primary bgc-top bgc-boxshadow" [ngStyle]="{\'justify-content\':\'start\'}">\n            <ion-row class="banks-contA" [ngStyle]="{\'padding-top\':\'15px\'}">\n                <ion-col col-2 text-center>\n                    <div class="face">\n                        <img src="assets/banklogo/bank_{{item.code}}.png" alt="">\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <h6 no-margin>{{item.bank}}</h6>\n                    <span class="opacity-7">付款信用卡</span>\n                </ion-col>\n            </ion-row>\n            <ion-row class="banks-contB">\n                <ion-col></ion-col>\n                <ion-col>****</ion-col>\n                <ion-col>****</ion-col>\n                <ion-col>****</ion-col>\n                <ion-col>{{item.cardNo}}</ion-col>\n            </ion-row>\n            <div class="pic">\n                <img src="assets/banklogo/bank_{{item.code}}_0.png" alt="">\n            </div>\n        </ion-grid>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\home\changecards\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChangecardsPage);
    return ChangecardsPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdddepositPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdddepositPage = (function () {
    function AdddepositPage(Service, navParams, Auth) {
        this.Service = Service;
        this.navParams = navParams;
        this.Auth = Auth;
        this.App = window.App;
        this.HeadTitle = "添加储蓄卡";
        this.BankName = '请选择开户银行';
        this.BankCode = '';
        this.BranchName = '请选择具体开户支行';
        this.BranchCode = '';
        this.TranCode = '';
        this.BranchList = [];
    }
    AdddepositPage.prototype.ngOnInit = function () {
        if (!__WEBPACK_IMPORTED_MODULE_3__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(App.UserInfo))
            return;
        this.GetIdCard(App.UserInfo['idCardNo']);
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            CardNo: this.CardNo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(16)
            ]),
            Mobile: this.Mobile = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^1[3|4|5|7|8][0-9]{9}$/)
            ])
        });
    };
    AdddepositPage.prototype.DelCard = function () {
        var _this = this;
        this.Service.GetCardList().then(function (res) {
            for (var i = 0; i < res.length; i++) {
                if (res[i].type === '1') {
                    _this.Service.DelCard(res[i].id).then(function (res) {
                        console.log(res);
                    });
                }
            }
        });
    };
    Object.defineProperty(AdddepositPage.prototype, "CompleteBtnIsDisabled", {
        get: function () {
            if (this.CardNo.invalid || this.Mobile.invalid)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    AdddepositPage.prototype.GetIdCard = function (IdNo) {
        this.ShowId = IdNo.substr(0, 6);
        for (var i = 0; i < (IdNo.length - 10); i++) {
            this.ShowId += '*';
        }
        this.ShowId += IdNo.substr(-4);
    };
    AdddepositPage.prototype.ClickOpenBank = function () {
        var _this = this;
        if (this.CardNo.invalid) {
            return App.ShowError('请先输入银行卡卡号');
        }
        App.ShowModal(App.RootPage.ListofbankPage).then(function (modal) {
            modal.onDidDismiss(function (data) {
                if (data) {
                    _this.BankName = data.name;
                    _this.BankCode = data.code;
                    _this.BranchCode = '';
                    _this.BranchName = '请选择具体开户支行';
                }
            });
        });
    };
    AdddepositPage.prototype.ClickBranchBank = function () {
        var _this = this;
        if (!this.BankCode) {
            return App.ShowError('请先选择开户银行');
        }
        App.ShowModal(App.RootPage.BranchcardPage, { Bank: this.BankName, Code: this.BankCode }).then(function (modal) {
            modal.onDidDismiss(function (data) {
                if (data) {
                    _this.BranchName = data.name;
                    _this.BranchCode = _this.BankCode;
                    _this.TranCode = data.bankCode;
                }
            });
        });
    };
    AdddepositPage.prototype.Finish = function () {
        var _this = this;
        this.DelCard();
        this.Service.AddDeposiCard(this.Form_Group.value.CardNo, this.BankName, this.TranCode, this.BranchName, this.Form_Group.value.Mobile).then(function (res) {
            if (res) {
                App.ShowToast('储蓄卡添加成功!');
                _this.Auth.GetUserData();
                App.Nav.push(App.RootPage[_this.navParams.data]);
            }
        });
    };
    AdddepositPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-adddeposit',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\home\adddeposit\index.html"*/'<ion-header>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid class="grid-inforlist-default" m-b-10>\n        <ion-row>\n            <ion-col col-3>持卡人</ion-col>\n            <ion-col col-8>{{App.UserInfo.name}}</ion-col>\n        </ion-row>\n        <ion-row class="border-last">\n            <ion-col col-3>身份证</ion-col>\n            <ion-col col-8>{{ShowId}}</ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <form novalidate [formGroup]="Form_Group">\n        <ion-grid class="grid-inforlist-default" m-b-10>\n            <ion-row>\n                <ion-col col-3>卡号</ion-col>\n                <ion-col col-8><ion-input type=\'number\' placeholder="请输入储蓄卡卡号" formControlName="CardNo"></ion-input></ion-col>\n            </ion-row>\n\n            <ion-row (click)=\'ClickOpenBank()\'>\n                <ion-col col-3>银行</ion-col>\n                <ion-col col-8>\n                    <span class="bank-face" *ngIf="BankCode"><img src="assets/banklogo/bank_{{BankCode}}.png"></span>\n                    <span>{{BankName}}</span>\n                </ion-col>\n                <ion-col text-right><ion-icon>&#xf3d1;</ion-icon></ion-col>\n            </ion-row>\n            <ion-row class="border-last" (click)=\'ClickBranchBank()\'>\n                <ion-col col-3>支行</ion-col>\n                <ion-col col-8>\n                    <span class="bank-face" *ngIf="BranchCode"><img src="assets/banklogo/bank_{{BranchCode}}.png"></span>\n                    <span>{{BranchName}}</span>\n                </ion-col>\n                <ion-col text-right><ion-icon>&#xf3d1;</ion-icon></ion-col>\n            </ion-row>\n        </ion-grid>\n\n\n        <ion-grid class="grid-inforlist-default" m-b-10>\n            <ion-row class="border-last">\n                <ion-col col-3>手机号</ion-col>\n                <ion-col col-8><ion-input type=\'Tel\' placeholder="请输入银行预留手机号" formControlName="Mobile"></ion-input></ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-row justify-content-center m-t-30>\n            <ion-col col-11>\n                <button class="bgc-grad-primary bgc-header" ion-button round block f-1-6 tappable [disabled]="CompleteBtnIsDisabled" (click)="Finish()">完成</button>\n            </ion-col>\n        </ion-row>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\home\adddeposit\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth__["a" /* TAuthService */]])
    ], AdddepositPage);
    return AdddepositPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListofbankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_homeservice__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListofbankPage = (function () {
    function ListofbankPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "选择开户银行";
    }
    ListofbankPage.prototype.ngOnInit = function () {
        var _this = this;
        this.Service.GetTolBanks().then(function (res) {
            _this.BankList = res;
        });
    };
    ListofbankPage.prototype.SelectedBank = function (item) {
        App.ActiveView.dismiss({ name: item.bankName, code: item.id });
    };
    ListofbankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-listofbank',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\home\listofbank\index.html"*/'<ion-header>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list class="bankcard-list">\n        <ion-item *ngFor="let item of BankList" (click)="SelectedBank(item)">\n            <ion-avatar item-start>\n                <img src="assets/banklogo/bank_{{item.id}}.png">\n            </ion-avatar>\n            <h2>{{item.bankName}}</h2>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\home\listofbank\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_homeservice__["a" /* HomeService */]])
    ], ListofbankPage);
    return ListofbankPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var BranchcardPage = (function () {
    function BranchcardPage(navParams, Service) {
        this.navParams = navParams;
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "选择开户支行";
        this.BranchList = [];
    }
    BranchcardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.BankName = this.navParams.get('Bank');
        this.BankCode = this.navParams.get('Code');
        this.Service.GetBranchBanks(this.BankName).then(function (res) {
            _this.BranchList = res;
        });
    };
    BranchcardPage.prototype.GetKey = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var params;
            return __generator(this, function (_a) {
                params = this.BankName + ',' + this.KeyWord;
                this.Service.GetBranchBanks(params).then(function (res) {
                    _this.BranchList = res;
                });
                return [2 /*return*/];
            });
        });
    };
    BranchcardPage.prototype.SelectedBranch = function (item) {
        App.ActiveView.dismiss({ name: item.bankName, bankCode: item.bankCode });
    };
    BranchcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-branchcard',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\home\branchcard\index.html"*/'<ion-header>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar>\n    <ion-toolbar class="search-bar">\n        <ion-searchbar (ngModelChange)="GetKey()" placeholder="请输关键字搜索,如\'福田\'" [(ngModel)]="KeyWord"></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list class="bankcard-list">\n        <ion-item *ngFor="let item of BranchList" (click)="SelectedBranch(item)">\n            <ion-avatar item-start>\n                <img src="assets/banklogo/bank_{{BankCode}}.png">\n            </ion-avatar>\n            <h2>{{item.bankName}}</h2>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\home\branchcard\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_homeservice__["a" /* HomeService */]])
    ], BranchcardPage);
    return BranchcardPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsevoucherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsevoucherPage = (function () {
    function UsevoucherPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.App = window.App;
        this.HeadTitle = "使用红包礼券";
        this.ChooseId = '';
        this.Voucher = this.navParams.get('Voucher');
        this.SetVoucher();
    }
    UsevoucherPage.prototype.SetVoucher = function () {
        for (var i = 0; i < this.Voucher.length; i++) {
            this.Voucher[i].Click = false;
            if (i == 0) {
                this.Voucher[i].Click = true;
                this.ChooseId = this.Voucher[i].cashbackId;
            }
        }
        console.log(this.Voucher);
    };
    UsevoucherPage.prototype.Choose = function (index) {
        for (var i = 0; i < this.Voucher.length; i++) {
            this.Voucher[i].Click = false;
        }
        this.Voucher[index].Click = true;
        this.ChooseId = this.Voucher[index].cashbackId;
    };
    UsevoucherPage.prototype.Dismiss = function () {
        this.viewCtrl.dismiss(this.ChooseId);
    };
    UsevoucherPage.prototype.Confirm = function () {
        this.Dismiss();
    };
    UsevoucherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usevoucher',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\home\usevoucher\index.html"*/'<ion-header>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar>\n    <ion-toolbar no-padding>\n        <ion-grid class="grid-row-default" no-padding>\n            <ion-row no-padding justify-content-around>\n                <ion-col col-5 text-center>可使用抵扣券({{Voucher.length}})</ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div text-center f-1-6 m-b-15 ion-text color="light-dark">\n        <p m-b-5>温馨提示：</p>\n        <span>抵扣券所抵扣的金额将存入"我的,返现账户"中</span>\n    </div>\n    <ion-grid class="grid-card-default" no-padding padding-horizontal *ngFor = "let item of Voucher; let i = index">\n        <ion-row>\n            <ion-col col-4>\n                <div class="card-value"><label><span f-2-0>￥</span><em f-5-0>{{item.amount/100}}</em><br><span>抵扣券</span></label></div>\n            </ion-col>\n            <ion-col col-8>\n                <div class="card-description">\n                    <h2>单笔收款满<span ion-text color="orange">{{item.matchAmount/100}}</span>元可用</h2>\n                    <!-- <img src="assets/imgs/guoqi.png"> -->\n                    <ul ion-text color="gray">\n                        <li>有效期至<span>{{item.expireDate}} 00:00:00</span></li>\n                        <li>\n                            <span>{{item.source}}</span>\n                            <b class="gift-tick" m-r-10 *ngIf="item.Click" (click)="Choose(i)"><ion-icon>&#xf2bc;</ion-icon></b>\n                            <b class="gift-tick no-tick" m-r-10 *ngIf="!item.Click" (click)="Choose(i)"></b>\n                        </li>\n                    </ul>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-row justify-content-center m-t-50>\n        <ion-col col-7><button class="bgc-grad-primary bgc-header" ion-button block f-1-6 (click)="Confirm()">确认</button></ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\home\usevoucher\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], UsevoucherPage);
    return UsevoucherPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartPage = (function () {
    function StartPage() {
        this.App = window.App;
    }
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-start',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\start\index.html"*/'<ion-content>\n  <div class="start-app">\n    <div class="wall" text-center>\n        <ion-row>\n            <ion-col><b>有资金需求，自己搞定</b></ion-col>\n        </ion-row>\n        <ion-row m-v-35>\n            <ion-col><img src="assets/imgs/start.png" alt="" width="70%"></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col><p>信用卡可提现   超低手续费</p><p>资金秒到账   安全有保障</p></ion-col>\n        </ion-row>\n    </div>\n    <ion-row class="action-btn" justify-content-center>\n          <ion-col col-5>\n                <button ion-button full  [navPush]="App.RootPage.RegisterPage">注册</button>\n          </ion-col>\n          <ion-col col-5>\n              <button class="active" ion-button full [navPush]="App.RootPage.LoginPage">登录</button>\n        </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\start\index.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifypwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModifypwdPage = (function () {
    function ModifypwdPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "修改密码";
        this.VCodeText = '获取验证码';
        this.pwdVisible = false;
        this.pwdText = 'password';
        this.tel = "****";
    }
    ModifypwdPage.prototype.ngOnInit = function () {
        this.tel = App.UserInfo['mobile'].substr(0, 3) + this.tel + App.UserInfo['mobile'].substr(-4);
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            VCode: this.VCode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4)
            ]),
            pwd: this.pwd = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)
            ])
        });
    };
    //倒计时
    ModifypwdPage.prototype.times = function () {
        var _this = this;
        var count = 60;
        var timer = setInterval(function () {
            if (count > 0) {
                count--;
                _this.VCodeText = count + 's' + '后重新获取';
                if (count === 0) {
                    _this.VCodeText = '重新获取';
                    clearInterval(timer);
                }
            }
        }, 1000);
    };
    ModifypwdPage.prototype.GetTelCode = function () {
        var _this = this;
        this.Service.getPwdVericode(App.UserInfo['mobile']).then(function (res) {
            if (res.code === 1) {
                _this.times();
                return App.ShowToast('发送成功');
            }
            else {
                return App.ShowToast(res.msg);
            }
        })
            .catch(function (err) { return App.ShowToast(err.msg); });
    };
    ModifypwdPage.prototype.pwdType = function () {
        console.log(this.pwdVisible);
        this.pwdVisible = !this.pwdVisible;
        if (this.pwdVisible) {
            this.pwdText = 'text';
        }
        else {
            this.pwdText = 'password';
        }
    };
    Object.defineProperty(ModifypwdPage.prototype, "ConfirmBtnIsDisabled", {
        get: function () {
            if (this.VCode.invalid || this.pwd.invalid)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ModifypwdPage.prototype.ConfirmModify = function () {
        this.Service.GetchangePsdData(App.UserInfo['mobile'], this.Form_Group.value.pwd, this.Form_Group.value.VCode);
        // App.Nav.push(App.RootPage.LoginPage);
    };
    ModifypwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modifypwd',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\modifypwd\index.html"*/'<ion-header no-border>\n\n    <ion-toolbar no-padding>\n\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="register">\n\n        <div>\n\n            <ion-grid text-center>\n\n                <ion-row class="reg-line">\n\n                    <ion-col col-12>\n\n                        <input type="Tel" [(ngModel)]="tel" readonly>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <form novalidate [formGroup]="Form_Group" autocomplete="off">\n\n                    <ion-row class="reg-line">\n\n                        <ion-col col-7>\n\n                            <input type="text" placeholder="请输入验证码" formControlName="VCode" required>\n\n                        </ion-col>\n\n                        <ion-col col-5>\n\n                            <button class="smbtn" (click)="GetTelCode()">{{VCodeText}}</button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row class="reg-line">\n\n                        <ion-col col-12>\n\n                            <input [attr.type]="pwdText" placeholder="请设置新密码"  formControlName="pwd" required/>\n\n                            <img src="assets/imgs/nosee.png" alt="" class="eye" (click)="pwdType()" *ngIf = "!pwdVisible">\n\n                            <img src="assets/imgs/cansee.png" alt="" class="eye" (click)="pwdType()" *ngIf = "pwdVisible" >\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </form>\n\n                <ion-row m-t-30>\n\n                    <ion-col col-12>\n\n                        <button class="bgc-grad-primary bgc-header " [disabled]="ConfirmBtnIsDisabled" (click)="ConfirmModify()">确认</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n    \n\n    '/*ion-inline-end:"D:\app-project\58pay\src\pages\modifypwd\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */]])
    ], ModifypwdPage);
    return ModifypwdPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FindpwdPage = (function () {
    function FindpwdPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = '找回密码';
        this.VCodeText = '获取验证码';
    }
    FindpwdPage.prototype.ngOnInit = function () {
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            tel: this.tel = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^1[3|4|5|7|8][0-9]{9}$/)
            ]),
            VCode: this.VCode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4)
            ]),
        });
    };
    //倒计时
    FindpwdPage.prototype.times = function () {
        var _this = this;
        var count = 60;
        var timer = setInterval(function () {
            if (count > 0) {
                count--;
                _this.VCodeText = count + 's' + '后重新获取';
                if (count === 0) {
                    _this.VCodeText = '重新获取';
                    clearInterval(timer);
                }
            }
        }, 1000);
    };
    FindpwdPage.prototype.GetCode = function () {
        var _this = this;
        this.Service.GetResetPwdData(this.Form_Group.value.tel).then(function (res) {
            if (res.code === 1) {
                _this.times();
                return App.ShowToast("发送成功");
            }
            else {
                return App.ShowToast(res.msg);
            }
        })
            .catch(function (err) { return App.ShowToast(err.msg); });
    };
    FindpwdPage.prototype.GetTelCode = function () {
        this.Service.GetFindPwdData(this.Form_Group.value.tel, this.Form_Group.value.VCode);
    };
    Object.defineProperty(FindpwdPage.prototype, "FindDisabled", {
        get: function () {
            if (this.tel.invalid || this.VCode.invalid)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    FindpwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-findpwd',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\findpwd\index.html"*/'<ion-header no-border>\n\n    <ion-toolbar no-padding>\n\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="register">\n\n        <div>\n\n            <ion-grid text-center>\n\n                <form novalidate [formGroup]="Form_Group" autocomplete="off">\n\n                    <ion-row class="reg-line">\n\n                        <ion-col col-12>\n\n                            <input type="number" placeholder="请输入手机号码" formControlName="tel" required>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row class="reg-line">\n\n                        <ion-col col-7>\n\n                            <input type="text" placeholder="请输入验证码" formControlName="VCode" required>\n\n                        </ion-col>\n\n                        <ion-col col-5>\n\n                            <button class="smbtn" (click)="GetCode()" [ngClass]="{\'disabled\': tel.invalid}" [disabled]="tel.invalid">{{VCodeText}}</button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </form>\n\n                <ion-row m-t-30>\n\n                    <ion-col col-12>\n\n                        <button class="bgc-grad-primary bgc-header" [disabled]="FindDisabled" (click)=" GetTelCode()">下一步</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\app-project\58pay\src\pages\findpwd\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */]])
    ], FindpwdPage);
    return FindpwdPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetpwdPage = (function () {
    function ResetpwdPage(Service, navParams) {
        this.Service = Service;
        this.navParams = navParams;
        this.App = window.App;
        this.HeadTitle = "重置密码";
        this.tel = this.navParams.get('mobile');
        this.VCode = this.navParams.get('code');
    }
    ResetpwdPage.prototype.ngOnInit = function () {
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            pwd: this.pwd = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)
            ]),
        });
    };
    ResetpwdPage.prototype.clickgetlogin = function () {
        if (this.conpwd === this.Form_Group.value.pwd) {
            this.Service.GetchangePsdData(this.tel, this.Form_Group.value.pwd, this.VCode);
        }
        else {
            App.ShowError('两次输入密码不一致');
        }
    };
    ResetpwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resetpwd',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\home\resetpwd\index.html"*/'<ion-header no-border>\n\n    <ion-toolbar no-padding>\n\n        <app-toolbar HasBack="true" [Title]="HeadTitle" ></app-toolbar>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="register">\n\n        <div>\n\n            <ion-grid text-center>\n\n                <form novalidate [formGroup]="Form_Group" autocomplete="off">\n\n                    <ion-row class="reg-line">\n\n                        <ion-col col-12>\n\n                            <input type="password" placeholder="请输入密码" formControlName="pwd" required>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </form>\n\n                <ion-row class="reg-line">\n\n                    <ion-col col-12>\n\n                        <input type="password" placeholder="请确认密码" [(ngModel)]="conpwd" >\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row m-t-30>\n\n                    <ion-col col-12>\n\n                        <button class="bgc-grad-primary bgc-header" (click)="clickgetlogin()" [ngClass]="{\'disabled\': pwd.invalid}" [disabled]="pwd.invalid">完成</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\app-project\58pay\src\pages\home\resetpwd\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]])
    ], ResetpwdPage);
    return ResetpwdPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UcenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app_share__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UcenterPage = (function () {
    function UcenterPage(appShare) {
        this.appShare = appShare;
        this.App = window.App;
        this.HeadTitle = "我 的";
        this.ShowPhone = "****";
        this.ImgData = { ImgSrc: void 0 };
        this.Wechat = window.Wechat;
        this.InitUserInfo();
    }
    UcenterPage.prototype.ngOnInit = function () {
    };
    UcenterPage.prototype.InitUserInfo = function () {
        console.log(App.UserInfo);
        this.ShowPhone = App.UserInfo.mobile.substr(0, 3) + this.ShowPhone + App.UserInfo.mobile.substr(-4);
    };
    UcenterPage.prototype.Invite = function () {
        var _this = this;
        var ActionSheetConfig = {
            title: '分享方式',
            buttons: [
                {
                    text: '朋友圈',
                    icon: 'friends',
                    cssClass: 'action-sheet-cust action-sheet-friends',
                    role: '分享到朋友圈',
                    handler: function () {
                        _this.appShare.wxShare(1);
                    }
                },
                {
                    text: '微信好友',
                    cssClass: 'action-sheet-cust  action-sheet-wx',
                    icon: 'wx',
                    handler: function () {
                        _this.appShare.wxShare(0);
                    }
                }
            ]
        };
        App.ShowActionSheet(ActionSheetConfig);
    };
    UcenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ucenter',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\ucenter\index.html"*/'<ion-header no-border>\n  <ion-toolbar no-padding>\n    <app-toolbar [Title]="HeadTitle" AppIcon="true" BtnIcon="&#xf103;" (BtnIconEvent)="App.Nav.push(App.RootPage.UsetupPage)"></app-toolbar>\n  </ion-toolbar>\n\n  <ion-toolbar no-padding>\n    <ion-grid class="grid-mine-header bgc-grad-primary no-padding">\n      <ion-row class="header-user" [navPush]="App.RootPage.UinfoPage" align-items-center>\n        <ion-col col-3>\n          <div class="header-user-img" [class.face-default]="App.IconFace" [class.face-female]="!App.IconFace"></div>\n        </ion-col>\n        <ion-col col-8>\n          <div>\n            <h5>{{App.UserInfo.nickName}}</h5>\n            <p opacity-5 f-1-4>{{ShowPhone}}</p>\n          </div>\n        </ion-col>\n        <ion-col text-left>\n          <ion-icon color="light" f-2-0>&#xf3d1;</ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ng-template [ngIf]="App.CanTrade && App.IsAndroid">\n    <ion-grid class="list-grid-default">\n      <ion-row align-items-center p-l-15 [navPush]="App.RootPage.VIPmembersPage">\n        <ion-col col-1 text-center class="has-icon">\n          <ion-icon app-icon>&#xe910;</ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ul class="list-row-inner">\n            <li class="title">VIP会员</li>\n            <li class="note">\n              <span ion-text color="orange" headings-font-weight>开通会员,享超低费率</span>\n            </li>\n            <li class="icon-arrow">\n              <ion-icon></ion-icon>\n            </li>\n          </ul>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-template>\n\n\n  <ion-grid class="list-grid-default" m-t-10>\n    <ng-template [ngIf]="App.CanTrade || App.IsIos">\n      <ion-row align-items-center p-l-15 [navPush]="App.RootPage.RecordsPage">\n        <ion-col col-1 text-center class="has-icon">\n            <ion-icon app-icon>&#xe90a;</ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ul class="list-row-inner">\n            <li class="title">收款记录</li>\n            <li class="icon-arrow">\n              <ion-icon></ion-icon>\n            </li>\n          </ul>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n    <ion-row align-items-center p-l-15 (click)="App.IsReal(App.RootPage.MycardPage)">\n      <ion-col col-1 text-center class="has-icon">\n          <ion-icon app-icon>&#xe90f;</ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <ul class="list-row-inner">\n          <li class="title">我的银行卡</li>\n          <li class="note">\n            <span ion-text color="dark">{{App.UserInfo.creditCards}}张信用卡,{{App.UserInfo.depositCards}}张储蓄卡</span>\n          </li>\n          <li class="icon-arrow">\n            <ion-icon></ion-icon>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="list-grid-default" m-t-10>\n    <ion-row align-items-center p-l-15 [navPush]="App.RootPage.MyclientPage">\n      <ion-col col-1 text-center class="has-icon">\n          <ion-icon app-icon>&#xe90e;</ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <ul class="list-row-inner p-r-10">\n          <li class="title">我的推荐</li>\n          <li class="note">\n            <span ion-text color="dark">{{App.UserInfo.customers}}位客户</span>\n          </li>\n          <li class="icon-arrow">\n            <ion-icon></ion-icon>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n    <ng-template [ngIf]="App.CanTrade || App.IsIos">\n      <ion-row align-items-center p-l-15 [navPush]="App.RootPage.ProfitsPage">\n        <ion-col col-1 text-center class="has-icon">\n            <ion-icon app-icon>&#xe90d;</ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ul class="list-row-inner">\n            <li class="title">我的分润</li>\n            <li class="note">\n              <span ion-text color="dark">{{App.UserInfo.profit/100}}元</span>\n            </li>\n            <li class="icon-arrow">\n              <ion-icon></ion-icon>\n            </li>\n          </ul>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n  </ion-grid>\n  <ng-template [ngIf]="App.CanTrade">\n    <ion-grid class="list-grid-default" m-t-10>\n      <ion-row align-items-center p-l-15 [navPush]="App.RootPage.VoucherPage">\n        <ion-col col-1 text-center class="has-icon">\n            <ion-icon app-icon>&#xe90b;</ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ul class="list-row-inner">\n            <li class="title">红包礼券</li>\n            <li class="note">\n              <span ion-text color="dark">{{App.UserInfo.vouchers}}张</span>\n            </li>\n            <li class="icon-arrow">\n              <ion-icon></ion-icon>\n            </li>\n          </ul>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row align-items-center p-l-10 [navPush]="App.RootPage.CashbackPage">\n      <ion-col col-1 text-center class="has-icon"><img src="assets/imgs/card.png"></ion-col>\n      <ion-col col-11>\n          <ul class="list-row-inner">\n            <li class="title">返现账户</li>\n            <li class="note"><span ion-text color="dark">{{App.UserInfo.balance}}元</span></li>\n            <li class="icon-arrow"><ion-icon></ion-icon></li>\n          </ul>\n      </ion-col>\n    </ion-row> -->\n    </ion-grid>\n  </ng-template>\n\n  <ion-grid class="list-grid-default" m-t-10>\n    <!-- <ion-row align-items-center p-l-10 [navPush]="App.RootPage.InvfriendsPage"> -->\n    <ion-row align-items-center p-l-15 (click)="Invite()">\n      <ion-col col-1 text-center class="has-icon">\n          <ion-icon app-icon>&#xe90c;</ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <ul class="list-row-inner">\n          <li class="title">邀请好友</li>\n          <li class="note">\n            <span ion-text color="orange">邀请好友拿红包奖励</span>\n          </li>\n          <li class="icon-arrow">\n            <ion-icon></ion-icon>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!--    注册页面-->\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\ucenter\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_app_share__["a" /* AppShare */]])
    ], UcenterPage);
    return UcenterPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(Auth) {
        this.Auth = Auth;
        this.App = window.App;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            Tel: this.Tel = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^1[3|4|5|7|8][0-9]{9}$/)
            ]),
            Pass: this.Pass = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)
            ]),
        });
    };
    Object.defineProperty(LoginPage.prototype, "LoginDisabled", {
        get: function () {
            if (this.Tel.invalid || this.Pass.invalid)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.Login = function () {
        this.Auth.Login(this.Form_Group.value.Tel, this.Form_Group.value.Pass);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\login\index.html"*/'<ion-content>\n    <div class="register">\n        <ion-row class="bgc-grad-primary back-btn">\n            <ion-col col-12 f-1-6>\n                <span>登 录\n                    <ion-icon f-2-0 p-r-15 [navPush]="App.RootPage.StartPage" float-right tappable>&#xf2c0;</ion-icon>\n                </span>\n            </ion-col>\n        </ion-row>\n        <ion-row justify-content-center>\n            <ion-col class="col" col-3 p-v-40 text-center>\n                <img src="assets/imgs/58icon.png">\n            </ion-col>\n        </ion-row>\n        <div>\n            <ion-grid text-center>\n                <form novalidate [formGroup]="Form_Group" autocomplete="off">\n                    <ion-row class="reg-line">\n                        <ion-col col-12>\n                            <input type="Tel" placeholder="请输入手机号" formControlName="Tel" required>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class="reg-line">\n                        <ion-col col-12>\n                            <input type="password" placeholder="请输入密码" formControlName="Pass" required>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row m-t-30>\n                        <ion-col col-12>\n                            <button class="bgc-grad-primary bgc-header" (click)="Login()" [disabled]="LoginDisabled">登录</button>\n                        </ion-col>\n                    </ion-row>\n                </form>\n                <span ion-text color="primary" [navPush]="App.RootPage.FindpwdPage">忘记密码 ?</span>\n            </ion-grid>\n        </div>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\login\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth__["a" /* TAuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoanPage = (function () {
    function LoanPage(sanitizer) {
        this.sanitizer = sanitizer;
        this.browser = {
            isLoaded: false,
            proObj: null,
            progress: 0,
            secUrl: '',
            title: '加载中',
            url: '',
            share: null // 是否具有分享功能（传递一个分享对象ShareModel过来）
        };
        this.shareConfig = {
            isShow: false
        }; // 分享控制的配置
        var browser_url = 'http://www.werunpay.com/h5/carefreeFinance-ibox/index.html?source=1124';
        if (browser_url) {
            this.browser.title = '借贷';
            this.browser.url = browser_url;
            this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(browser_url);
        }
        else {
            this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.browser.url);
        }
        this.reload();
    }
    LoanPage.prototype.ionViewDidLoad = function () {
        if (!this.browser.proObj) {
            this.browser.proObj = document.getElementById('progress');
        }
        this.onprogress();
    };
    // 生成随机数
    LoanPage.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    // 网页访问进度
    LoanPage.prototype.onprogress = function () {
        var _this = this;
        // 随机时间
        var timeout = this.random(10, 30);
        var timer = setTimeout(function () {
            if (_this.browser.isLoaded) {
                _this.browser.proObj.style.width = '100%';
                clearTimeout(timer);
                return;
            }
            // 随机进度
            _this.browser.progress += _this.random(1, 5);
            // 随机进度不能超过 90%，以免页面还没加载完毕，进度已经 100% 了
            if (_this.browser.progress > 90) {
                _this.browser.progress = 90;
            }
            _this.browser.proObj.style.width = _this.browser.progress + '%';
            _this.onprogress();
        }, timeout);
    };
    // 如果iframe页面加载成功后
    LoanPage.prototype.loaded = function () {
        this.browser.isLoaded = true;
    };
    // 显示Popver选项
    LoanPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var cb = {
            refresh: function () {
                _this.reload();
            },
            close: function () {
                App.Nav.pop();
            },
            share: null
        };
        if (this.browser.share) {
            cb.share = function () {
                _this.share();
            };
        }
    };
    // 重新加载页面
    LoanPage.prototype.reload = function () {
        var _this = this;
        var title = this.browser.title;
        var url = this.browser.secUrl;
        this.browser.title = '加载中';
        this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
        setTimeout(function () {
            _this.browser.isLoaded = false;
            _this.browser.progress = 0;
            if (!_this.browser.proObj) {
                _this.browser.proObj = document.getElementById('progress');
            }
            _this.onprogress();
            _this.browser.title = title;
            _this.browser.secUrl = url;
        }, 10);
    };
    // 分享页面（作为popover的回调）
    LoanPage.prototype.share = function () {
        this.shareConfig.isShow = true;
        /*if(this.browser.share) {
          SocialSharing.share(this.browser.share.title, this.browser.share.content, '', this.browser.share.url).then(() => {
    
          }, (err) => {
            // Error!
            alert('错误：分享失败！' + err);
          });
        }*/
    };
    LoanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loan',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\loan\index.html"*/'<ion-header no-border>\n\n    <ion-navbar class="app-navbar-primary">\n\n      <ion-title>{{browser.title}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n        <div class="progress" [hidden]="browser.isLoaded">\n\n        <div class="progress-inner" id="progress"></div>\n\n        </div>\n\n\n\n        <iframe id="iframe" class="iframe"\n\n                sandbox="allow-scripts allow-top-navigation allow-pointer-lock allow-same-origin allow-popups allow-forms"\n\n                [src]="browser.secUrl"\n\n                (load)="loaded()">\n\n        </iframe>\n\n</ion-content>\n\n\n\n  '/*ion-inline-end:"D:\app-project\58pay\src\pages\loan\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], LoanPage);
    return LoanPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetPwdPage = (function () {
    function SetPwdPage(Service, navParams) {
        this.Service = Service;
        this.navParams = navParams;
        this.App = window.App;
        // ChooseAgree()
        // {
        //   this.Agree = !this.Agree;
        // }
        // public State: number = 0;
        // public VCodeText: string = "获取验证码";
        this.PassClear = false;
        this.PassWord = '';
        this.ConPassWord = '';
        // public Agree: boolean = true;
        this.PassWordType = 'password';
        this.HeadTitle = "设定密码";
        this.Tel = this.navParams.get('mobile');
        this.VCode = this.navParams.get('code');
    }
    SetPwdPage.prototype.ngOnInit = function () {
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            Pass: this.Pass = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)
            ]),
        });
    };
    //倒计时
    // times()
    // {
    //   let count: number = 60;
    //   let timer = setInterval(() =>
    //   {
    //     if (count > 0)
    //     {
    //       count --;
    //       this.VCodeText = '已发送' + count + 's';
    //       if (count === 0)
    //       {
    //         this.VCodeText = '重新获取';
    //         this.State = 0;
    //         clearInterval(timer);
    //       }
    //     }
    //   }, 1000);
    // }
    //验证手机号码以及验证码
    //   GetVeriyCode()
    //   {
    //     this.Service.GetVerifyCode(this.Form_Group.value.Tel).then(res =>
    //     {
    //       if(res.code === 1)
    //       {
    //         // this.CodeSend = true;
    //         this.State = 1;
    //         this.times();
    //         return App.ShowToast("发送成功");
    //       }
    //       else
    //       {
    //         return App.ShowToast(res.msg)
    //       }
    //     })
    //     .catch(err => App.ShowToast(err.msg));
    //   }
    SetPwdPage.prototype.PassType = function () {
        console.log(this.PassClear);
        this.PassClear = !this.PassClear;
        if (this.PassClear) {
            this.PassWordType = 'text';
        }
        else {
            this.PassWordType = "password";
        }
    };
    Object.defineProperty(SetPwdPage.prototype, "ResIsDisabled", {
        get: function () {
            if (this.Pass.invalid)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    // 注册
    SetPwdPage.prototype.OnRegister = function () {
        // if (!this.Agree)
        // {
        //   App.ShowError("同意用户协议才可以注册～");
        //   return;
        // }
        if (this.ConPassWord != this.PassWord) {
            App.ShowError("两次输入的密码不一致");
            return;
        }
        this.Service.SignIn(this.Tel, this.Form_Group.value.Pass, this.VCode);
    };
    SetPwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-SetPwd',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\SetPwd\index.html"*/'<ion-header no-border>\n\n    <ion-toolbar no-padding>\n\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="register">\n\n        <!-- <span p-l-45>*密码长度情保持在6-22位的范围内</span> -->\n\n        <div>\n\n            <ion-grid text-center>\n\n                <form novalidate [formGroup]="Form_Group" autocomplete="off">\n\n                    <ion-row class="reg-line">\n\n                    <ion-col col-12>\n\n                        <input [attr.type]="PassWordType" placeholder="请设置密码" formControlName="Pass" required [(ngModel)]="PassWord">\n\n                        <img src="assets/imgs/nosee.png" alt="" class="eye" (click)="PassType()" *ngIf="!PassClear">\n\n                        <img src="assets/imgs/cansee.png" alt="" class="eye" (click)="PassType()" *ngIf="PassClear">\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row class="reg-line">\n\n                    <ion-col col-12>\n\n                        <input [attr.type]="PassWordType" placeholder="请确认密码"  formControlName="Pass" required [(ngModel)]="ConPassWord">\n\n                        <img src="assets/imgs/nosee.png" alt="" class="eye" (click)="PassType()" *ngIf="!PassClear">\n\n                        <img src="assets/imgs/cansee.png" alt="" class="eye" (click)="PassType()" *ngIf="PassClear">\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row m-t-30>\n\n                    <ion-col col-12>\n\n                        <button class="bgc-grad-primary bgc-header" (click)="OnRegister()" [disabled]="ResIsDisabled">注册</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <!-- <ion-row>\n\n                    <ion-col col-12 class="notice" (click)="ChooseAgree()">\n\n                        <span class="check">\n\n                            <ion-icon name="checkbox-outline" *ngIf="Agree"></ion-icon>\n\n                            <ion-icon name="square-outline" *ngIf="!Agree"></ion-icon>\n\n                        </span>\n\n                        <span f-1-2>我已阅读并同意<span class="name">《58付用户使用协议》</span></span>\n\n                    </ion-col>\n\n                </ion-row> -->\n\n                </form>\n\n            </ion-grid>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\app-project\58pay\src\pages\SetPwd\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]])
    ], SetPwdPage);
    return SetPwdPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplycardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplycardPage = (function () {
    function ApplycardPage(sanitizer) {
        this.sanitizer = sanitizer;
        this.browser = {
            isLoaded: false,
            proObj: null,
            progress: 0,
            secUrl: '',
            title: '加载中',
            url: '',
            share: null // 是否具有分享功能（传递一个分享对象ShareModel过来）
        };
        this.shareConfig = {
            isShow: true
        }; // 分享控制的配置
        var browser_url = 'http://www.werunpay.com/h5/card-platform/index.html?source=1036';
        if (browser_url) {
            this.browser.title = '办卡';
            this.browser.url = browser_url;
            this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(browser_url);
        }
        else {
            this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.browser.url);
        }
        this.reload();
    }
    ApplycardPage.prototype.ionViewDidLoad = function () {
        if (!this.browser.proObj) {
            this.browser.proObj = document.getElementById('progress');
        }
        this.onprogress();
    };
    // 生成随机数
    ApplycardPage.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    // 网页访问进度
    ApplycardPage.prototype.onprogress = function () {
        var _this = this;
        // 随机时间
        var timeout = this.random(10, 30);
        var timer = setTimeout(function () {
            if (_this.browser.isLoaded) {
                _this.browser.proObj.style.width = '100%';
                clearTimeout(timer);
                return;
            }
            // 随机进度
            _this.browser.progress += _this.random(1, 5);
            // 随机进度不能超过 90%，以免页面还没加载完毕，进度已经 100% 了
            if (_this.browser.progress > 90) {
                _this.browser.progress = 90;
            }
            _this.browser.proObj.style.width = _this.browser.progress + '%';
            _this.onprogress();
        }, timeout);
    };
    // 如果iframe页面加载成功后
    ApplycardPage.prototype.loaded = function () {
        this.browser.isLoaded = true;
    };
    // 显示Popver选项
    ApplycardPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var cb = {
            refresh: function () {
                _this.reload();
            },
            close: function () {
                App.Nav.pop();
            },
            share: null
        };
        if (this.browser.share) {
            cb.share = function () {
                _this.share();
            };
        }
    };
    // 重新加载页面
    ApplycardPage.prototype.reload = function () {
        var _this = this;
        var title = this.browser.title;
        var url = this.browser.secUrl;
        this.browser.title = '加载中';
        this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
        setTimeout(function () {
            _this.browser.isLoaded = false;
            _this.browser.progress = 0;
            if (!_this.browser.proObj) {
                _this.browser.proObj = document.getElementById('progress');
            }
            _this.onprogress();
            _this.browser.title = title;
            _this.browser.secUrl = url;
        }, 10);
    };
    // 分享页面（作为popover的回调）
    ApplycardPage.prototype.share = function () {
        this.shareConfig.isShow = true;
        /*if(this.browser.share) {
          SocialSharing.share(this.browser.share.title, this.browser.share.content, '', this.browser.share.url).then(() => {
    
          }, (err) => {
            // Error!
            alert('错误：分享失败！' + err);
          });
        }*/
    };
    ApplycardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-applycard',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\applycard\index.html"*/'<ion-header no-border>\n    <ion-navbar class="app-navbar-primary">\n      <ion-title>{{browser.title}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n        <div class="progress" [hidden]="browser.isLoaded">\n        <div class="progress-inner" id="progress"></div>\n        </div>\n\n        <iframe id="iframe" class="iframe"\n                sandbox="allow-scripts allow-top-navigation allow-pointer-lock allow-same-origin allow-popups allow-forms"\n                [src]="browser.secUrl"\n                (load)="loaded()">\n        </iframe>\n</ion-content>\n\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\applycard\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ApplycardPage);
    return ApplycardPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfitsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mineservice__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ProfitsPage = (function () {
    function ProfitsPage(elementRef, zone, Service) {
        this.elementRef = elementRef;
        this.zone = zone;
        this.Service = Service;
        this.ProFitsData = Array();
        this.TabActive = 0;
        this.TopVue = 1;
        this.OpacityVue = 1;
        this.Profits = {};
        this.Count = 0;
        this.IsPanel = true;
        this.HeaderTitle = '我的分润';
        this.HeaderTitleAlign = 'center';
        this.OperationIcon = '';
        this.DomChartPanel = { IsShow: true };
        this.UpdateMonth();
        this.GetUserProfits();
        this.Service.GetProfitList('hy');
    }
    ProfitsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.InitChartData();
        var _DomChartPanel = this.ChartPanel.nativeElement;
        this.DomChartPanel.Height = _DomChartPanel.offsetHeight;
        this.DomChartPanel.Top = Math.ceil(_DomChartPanel.getBoundingClientRect().top);
        this.content.ionScroll.subscribe(function ($event) {
            _this.zone.run(function () {
                _this.TopVue = Math.ceil(_this.content.scrollTop);
                _this.OpacityVue = _this.SetOpacityVue(_this.TopVue);
            });
        });
        this.Service.GetProfitList('hy').then(function (res) { return _this.ProFitsData = res; });
    };
    ProfitsPage.prototype.ionViewDidLoad = function () {
        this.UpdateData(1);
    };
    ProfitsPage.prototype.ToggleProfits = function () {
        this.IsPanel = !this.IsPanel;
        if (!this.IsPanel) {
            for (var _i = 0, _a = this.ProFitsData; _i < _a.length; _i++) {
                var item = _a[_i];
                item.close = true;
            }
        }
        else {
            for (var _b = 0, _c = this.ProFitsData; _b < _c.length; _b++) {
                var item = _c[_b];
                item.close = false;
            }
        }
        if (!this.IsPanel)
            this.content.scrollToTop();
        if (this.IsPanel) {
            this.DomChartPanel.IsShow = true;
            this.HeaderTitle = '我的分润';
            this.HeaderTitleAlign = 'center';
            this.OperationIcon = '';
            this.content.scrollTo(0, this.DomChartPanel.Top + Math.ceil(this.ProfitList.nativeElement.getBoundingClientRect().top) - 32, 200);
        }
    };
    Object.defineProperty(ProfitsPage.prototype, "SetChartPanel", {
        get: function () {
            if (!this.IsPanel)
                return;
            if (this.TopVue >= 120) {
                this.DomChartPanel.IsShow = false;
                this.HeaderTitle = '累计分润：￥' + this.Profits.profit / 100;
                this.HeaderTitleAlign = 'left';
                this.OperationIcon = '&#xf471;';
                return 0 + 'px';
            }
            else {
                this.DomChartPanel.IsShow = true;
                this.HeaderTitle = '我的分润';
                this.HeaderTitleAlign = 'center';
                this.OperationIcon = '';
                return;
            }
        },
        enumerable: true,
        configurable: true
    });
    ProfitsPage.prototype.SetOpacityVue = function (value) {
        if (value > 0 && value <= this.DomChartPanel.Top) {
            var n = 1 - (value / this.DomChartPanel.Top);
            return parseFloat(n.toFixed(1));
        }
        return 1;
    };
    ProfitsPage.prototype.UpdateMonth = function () {
        var date = new Date();
        this.MonthNow = this.dateToW3C(date).substr(0, 7);
    };
    ProfitsPage.prototype.GetUserProfits = function () {
        var _this = this;
        this.Service.UserProfit().then(function (res) {
            _this.Profits = res;
            _this.TolAmount = '<span class="f-1-3">￥</span>' + res.balance / 100;
        });
    };
    ProfitsPage.prototype.InitChartData = function () {
        var XAxis = this.GetChartXAxis(1);
        this.chartMize = {
            Type: 'bar',
            Legend: false,
            Options: { scaleShowVerticalLines: false, responsive: true, Height: 1000 },
            Labels: XAxis,
            Colors: [{
                    backgroundColor: 'rgba(29, 131, 210, .5)'
                }],
            Data: [
                {
                    data: []
                }
            ],
            HandlerClicked: function (e) {
                console.log(e);
            },
            HandlerHovered: function (e) {
                console.log(e);
            }
        };
    };
    ProfitsPage.prototype.UpdateData = function (num) {
        return __awaiter(this, void 0, void 0, function () {
            var XAxis, ydata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (num) {
                            if (this.Count > 0) {
                                this.Count--;
                            }
                        }
                        else {
                            if (this.Count < 5) {
                                this.Count++;
                            }
                        }
                        XAxis = this.GetChartXAxis(this.Count);
                        return [4 /*yield*/, this.Service.GetProfitList('m', this.Count.toString(), XAxis.length)];
                    case 1:
                        ydata = _a.sent();
                        console.log(ydata);
                        this.chartMize.Labels = XAxis;
                        this.chartMize.Data = [
                            {
                                data: ydata
                            }
                        ];
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfitsPage.prototype.GetChartXAxis = function (num) {
        var xaxis_arr = [];
        var len = this.GetMonthLen(num);
        for (var i = 1; i < len + 1; i++) {
            var tmp_xaxis = void 0;
            if (i % 5 == 1)
                tmp_xaxis = i;
            else
                tmp_xaxis = '';
            xaxis_arr.push(tmp_xaxis);
        }
        return xaxis_arr;
    };
    ProfitsPage.prototype.dateToW3C = function (date) {
        var year = date.getFullYear();
        var mouth = date.getMonth() + 1;
        var day = date.getDate();
        if (mouth < 10)
            mouth = "0" + mouth;
        if (day < 10)
            day = "0" + day;
        var result = year + '-' + mouth + '-' + day;
        return result;
    };
    ProfitsPage.prototype.computDate = function (day, date) {
        var time_stamp = date.getTime();
        var result_stamp = time_stamp - day * 864e5;
        var result_date = new Date(result_stamp);
        var result = this.DateToShow(result_date);
        return result;
    };
    ProfitsPage.prototype.DateToShow = function (date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        if (month < 10)
            month = "0" + month;
        if (day < 10)
            day = "0" + day;
        var result = month + '/' + day;
        return result;
    };
    ProfitsPage.prototype.GetMonthLen = function (num) {
        var dateNow = new Date();
        var year = dateNow.getFullYear();
        var month = dateNow.getMonth() + 1;
        var tmp_date = new Date(year, Number(month) - num, 0);
        var t_year = tmp_date.getFullYear();
        var t_month = tmp_date.getMonth() + 1;
        if (year == t_year && month == t_month) {
            this.ShowMonth = "当月";
        }
        else {
            this.ShowMonth = t_year + '-' + t_month;
        }
        var len = tmp_date.getDate();
        return len;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], ProfitsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chartPanel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProfitsPage.prototype, "ChartPanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('profitList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProfitsPage.prototype, "ProfitList", void 0);
    ProfitsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profits',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\ucenter\profits\index.html"*/'<ion-header no-border>\n  <ion-toolbar no-padding>\n    <div class="app-toolbar-primary">\n      <div class="toolbar-buttons">\n        <button ion-button class="back-bar-button" navPop tappable></button>\n      </div>\n      <div class="toolbar-title" [ngStyle]="{\'text-align\': HeaderTitleAlign}">\n        <span>{{HeaderTitle}}</span>\n      </div>\n      <div class="toolbar-buttons">\n          <button ion-button (click)="ToggleProfits()" [ngStyle]="{\'opacity\':TopVue > 120 ? 1 : OpacityVue}" tappable>\n              <ion-icon [innerHTML]="OperationIcon"></ion-icon>\n            </button>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div [hidden]="!IsPanel">\n    <!-- <app-panel Name="余额" [Title]="TolAmount" [Opacity]="OpacityVue" BtnTxt="申请提现"></app-panel> -->\n    <app-panel Name="余额" [Title]="TolAmount" [Opacity]="OpacityVue"></app-panel>\n    <ion-grid class="bgc-grad-primary reverse" align-items-center id="bar">\n      <ion-row [ngStyle]="{\'opacity\':OpacityVue}">\n        <ion-col col-6 text-light>累计分润：￥{{Profits.profit/100}}</ion-col>\n        <ion-col col-6 text-right text-light>今日分润：￥{{Profits.today/100}}</ion-col>\n      </ion-row>\n    </ion-grid>\n    <div #chartPanel class="charts-panel" [style.height]="SetChartPanel" [class.show]="DomChartPanel.IsShow">\n      <ion-row class="" m-t-5 align-items-center>\n        <ion-col col-2>\n          <div text-center ion-text (click)="UpdateData(0)" [ngStyle]="{\'color\': Count == 5 ? \'gray\' : \'#3f96d9\'}">\n            <ion-icon>&#xf3cf;</ion-icon>\n          </div>\n        </ion-col>\n        <ion-col class="option-height selected" col-8>\n          <span>{{ShowMonth}}收益</span>\n        </ion-col>\n        <ion-col col-2>\n          <div text-center ion-text (click)="UpdateData(1)" [ngStyle]="{\'color\': Count == 0 ? \'gray\' : \'#3f96d9\'}">\n            <ion-icon>&#xf3d1;</ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n      <div style="display: block">\n        <canvas baseChart \n          [datasets]="chartMize.Data" \n          [labels]="chartMize.Labels" \n          [options]="chartMize.Options" \n          [colors]="chartMize.Colors"\n          [legend]="chartMize.Legend" \n          [chartType]="chartMize.Type" \n          (chartHover)="chartMize.HandlerClicked($event)" \n          (chartClick)="chartMize.HandlerHovered($event)">\n        </canvas>\n      </div>\n    </div>\n  </div>\n  <div #profitList>\n    <ng-container *ngFor="let items of ProFitsData">\n      <ion-grid class="list-grid-default">\n        <h6 p-h-10 [ngClass]="{\'close\': items.close}" (click)="items.close = !items.close">\n          <span *ngIf="MonthNow == items.month; then nowBlock else agoBlock"></span>\n          <ng-template #nowBlock>当月收益</ng-template>\n          <ng-template #agoBlock>{{items.month}}收益</ng-template>\n          <span class="addback" pull-right [style.width]="items.barWidth" [ngClass]="{\'close\': items.close}"></span>\n          <span pull-right>{{items.total/100}}元</span>\n        </h6>\n        <div [ngClass]="{\'bar-shrink\': items.close}">\n          <ion-row align-items-center p-l-10 *ngFor="let item of items.data" [ngClass]="{\'scale-list\': items.close}">\n            <ion-col col-1 text-center class="has-icon">\n              <img src="assets/imgs/card.png">\n            </ion-col>\n            <ion-col col-11>\n              <ul class="list-row-inner">\n                <li class="title">\n                  {{item.date}}\n                  <p>信用卡收款分润</p>\n                </li>\n                <li class="note">\n                  <span ion-text color="dark">￥{{item.profit/100}}</span>\n                </li>\n              </ul>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-grid>\n    </ng-container>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\ucenter\profits\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2__providers_mineservice__["a" /* MineService */]])
    ], ProfitsPage);
    return ProfitsPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mineservice__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersPage = (function () {
    function OrdersPage(navParams, Service) {
        this.navParams = navParams;
        this.Service = Service;
        this.HeadTitle = "订单详情";
        this.OrderDetail = {};
        var orderId = navParams.data;
        this.GetCashDetail(orderId);
    }
    OrdersPage.prototype.GetCashDetail = function (id) {
        var _this = this;
        this.Service.GetCashDetail(id).then(function (res) { return _this.OrderDetail = res; });
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orders',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\ucenter\orders\index.html"*/'<ion-header no-border>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid class="list-grid-default" m-b-10>\n        <ion-row padding-vertical>\n            <ion-col>\n                <ul class="list-row-inner">\n                    <li class="title" text-center>\n                        <div f-2-5 style="color:orange;font-weight:700;" [ngStyle]="{ \'color\': OrderDetail.status == 1 ? \'orange\' : \'red\'}"><span f-1-2>￥</span>{{OrderDetail.amount/100}}</div>\n                        <p class="text-gray-600">收款金额</p>\n                    </li>\n                    <!-- <li class="title slash" text-center><span></span></li> -->\n                    <li class="title" text-center>\n                        <div f-2-5 style="color:orange;font-weight:700;" [ngStyle]="{ \'color\': OrderDetail.status == 1 ? \'orange\' : \'red\'}"><span f-1-2>￥</span>{{OrderDetail.enterAmount/100}}</div>\n                        <p class="text-gray-600">到账金额</p>\n                    </li>\n                </ul>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid class="list-grid-default no-border">\n        <ion-row>\n            <ion-col>\n                <ul class="list-row-inner">\n                    <li class="title" text-left><span class="text-gray-600">订单编号：</span></li>\n                    <li class="title" text-right>{{OrderDetail.orderNo}}</li>\n                </ul>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ul class="list-row-inner" [ngSwitch]="OrderDetail.status">\n                    <li class="title" text-left><span class="text-gray-600">订单状态：</span></li>\n                    <li class="title" text-right *ngSwitchCase="\'1\'"><span ion-text color="orange">成功</span></li>\n                    <li class="title" text-right *ngSwitchCase="\'0\'"><span ion-text color="danger">失败</span></li>\n                    <li class="title" text-right *ngSwitchCase="\'2\'"><span ion-text color="primary">处理中</span></li>\n                </ul>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ul class="list-row-inner"  [ngSwitch]="OrderDetail.type">\n                    <li class="title" text-left><span class="text-gray-600">收款方式：</span></li>\n                    <li class="title" text-right *ngSwitchCase="\'card\'">信用卡收款</li>\n                    <li class="title" text-right *ngSwitchCase="\'alipay\'">支付宝收款</li>\n                    <li class="title" text-right *ngSwitchCase="\'wechat\'">微信收款</li>\n                </ul>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ul class="list-row-inner">\n                    <li class="title" text-left><span class="text-gray-600">收款信用卡：</span></li>\n                    <li class="title" text-right>{{OrderDetail.payCard}}</li>\n                </ul>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ul class="list-row-inner">\n                    <li class="title" text-left><span class="text-gray-600">到账储蓄卡：</span></li>\n                    <li class="title" text-right>{{OrderDetail.outCard}}</li>\n                </ul>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ul class="list-row-inner">\n                    <li class="title" text-left><span class="text-gray-600">收款时间：</span></li>\n                    <li class="title" text-right>{{OrderDetail.time}}</li>\n                </ul>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\ucenter\orders\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_mineservice__["a" /* MineService */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_mineservice__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecordsPage = (function () {
    function RecordsPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = '收款记录';
        this.GetCashList();
    }
    RecordsPage.prototype.GetCashList = function () {
        var _this = this;
        this.Service.GetCashList().then(function (res) { return _this.DataProcess(res); });
    };
    RecordsPage.prototype.DataProcess = function (data) {
        if (data.length == 0)
            return this.DataEmpty = true;
        this.DataEmpty = false;
        this.ListData = new Array();
        var tmpMonth = data[0].time.split(' ')[0].substr(0, 7);
        this.ListData = [
            {
                month: tmpMonth,
                total: 0,
                data: []
            }
        ];
        for (var i = 0; i < data.length; i++) {
            var tmpJson = data[i];
            if (tmpMonth == data[i].time.split(' ')[0].substr(0, 7)) {
                for (var j = 0; j < this.ListData.length; j++) {
                    if (this.ListData[j].month == tmpMonth) {
                        this.ListData[j].data.push(tmpJson);
                        //成功订单统计
                        if (tmpJson.status == '1') {
                            this.ListData[j].total += Number(tmpJson.amount);
                        }
                    }
                }
            }
            else {
                tmpMonth = data[i].time.split(' ')[0].substr(0, 7);
                this.ListData.push({
                    month: tmpMonth,
                    total: tmpJson.amount,
                    data: [tmpJson]
                });
            }
        }
    };
    RecordsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-records',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\ucenter\records\index.html"*/'<ion-header no-border>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ng-template [ngIf]="!DataEmpty">\n        <ion-grid class="bgc-light" no-padding>\n            <div *ngFor="let items of ListData">\n                <h5 p-h-10 p-v-5 [ngStyle]="{\'background\':\'aliceblue\',\'margin\':\'0\'}">\n                    {{items.month}}成功收款\n                    <span float-right>{{items.total/100}}元</span>\n                </h5>\n                <div *ngFor="let item of items.data">\n                    <ion-row align-items-center p-h-5 [navPush]="App.RootPage.OrdersPage" [navParams]="item.id">\n                        <ion-col col-1 text-center>\n                            <img src="assets/imgs/vip.png">\n                        </ion-col>\n                        <ion-col col-5 [ngSwitch]="item.type">\n                            <span *ngSwitchCase="\'card\'">信用卡收款</span>\n                            <span *ngSwitchCase="\'alipay\'">支付宝收款</span>\n                            <span *ngSwitchCase="\'wechat\'">微信收款</span>\n                            <p no-margin ion-text color="light-dark">{{item.time}}</p>\n                        </ion-col>\n                        <ion-col col-3 [ngSwitch]="item.status">\n                            <img *ngSwitchCase="\'0\'" src="assets/imgs/seal-3.png" style="max-width:none;width:60px;height:60px;">\n                            <img *ngSwitchCase="\'1\'" src="assets/imgs/seal-1.png" style="max-width:none;width:60px;height:60px;">\n                            <img *ngSwitchCase="\'2\'" src="assets/imgs/seal-2.png" style="max-width:none;width:60px;height:60px;">\n                        </ion-col>\n                        <ion-col col-3 text-nowrap>\n                            <span f-1-0>￥</span>{{item.amount/100}}\n                            <ion-icon [ngStyle]="{\'float\':\'right\',\'color\':\'#ccc\'}">&#xf3d1;</ion-icon>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n        </ion-grid>\n    </ng-template>\n    <ng-template [ngIf]="DataEmpty">\n        <div text-center p-t-50 p-b-50>\n            <img src="assets/imgs/nulldata.png" alt="" width="150px">\n            <p text-center text-gray-light f-1-6>你还没有收款记录哦</p>\n        </div>\n    </ng-template>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\ucenter\records\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_mineservice__["a" /* MineService */]])
    ], RecordsPage);
    return RecordsPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camera__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CropPhoto } from '../../../shared/component/crop';
var UinfoPage = (function () {
    function UinfoPage(Auth, CameraSvc) {
        this.Auth = Auth;
        this.CameraSvc = CameraSvc;
        this.App = window.App;
        this.ImgData = { ImgSrc: void 0 };
        this.HeadTitle = "个人资料";
        this.UserInfo = [];
        this.ShowPhone = "****";
        this.ShowID = "********";
        this.infoName = " ";
        this.InitUserInfo();
    }
    //电话号码与身份信息
    UinfoPage.prototype.InitUserInfo = function () {
        this.UserInfo = App.UserInfo;
        if (this.UserInfo.mobile !== null)
            this.ShowPhone = this.UserInfo.mobile.substr(0, 3) + this.ShowPhone + this.UserInfo.mobile.substr(-4);
        if (this.UserInfo.idCardNo !== null)
            this.ShowID = this.UserInfo.idCardNo.substr(0, 6) + this.ShowID + this.UserInfo.idCardNo.substr(-4);
        this.ImgData.ImgSrc = App.UserFace;
        if (this.UserInfo.name !== null) {
            this.infoName = this.UserInfo.name.substr(-1);
            var str = '';
            for (var i = 0; i < this.UserInfo.name.length - 1; i++) {
                str += '*';
            }
            this.infoName = str + this.infoName;
        }
    };
    //更改昵称
    UinfoPage.prototype.ChangeNickName = function () {
        var _this = this;
        var _alertOption = {
            title: '昵称',
            inputs: [
                {
                    name: 'nickName',
                    value: this.UserInfo.nickName
                },
            ],
            buttons: [
                {
                    text: '取消'
                },
                {
                    text: '保存',
                    handler: function (data) {
                        // 请求接口保存新昵称
                        _this.UserInfo.nickName = data.nickName;
                        _this.Auth.ModifyUserInfo({ nickName: data.nickName });
                    }
                }
            ]
        };
        App.ShowAlert(_alertOption).then(function (modal) {
            return modal.onDidDismiss(function () {
            });
        });
    };
    UinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-uinfo',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\ucenter\uinfo\index.html"*/'<ion-header no-border>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid class="list-grid-default">\n      <ion-row m-l-10>\n        <ion-col>\n            <ul class="list-row-inner">\n                <li class="title">头像</li>\n                <li text-right>                    \n                      <span [class.face-sm-default]="App.IconFace" [class.face-sm-female]="!App.IconFace" text-gray-lighter></span>\n                </li>\n                <!-- <li class="icon-arrow"><ion-icon></ion-icon></li> -->\n            </ul>\n        </ion-col>\n      </ion-row>\n      <ion-row m-l-10>\n        <ion-col>\n          <ul class="list-row-inner" (click)="ChangeNickName()">\n            <li class="title">昵称</li>\n            <li text-right class="text-gray-600">{{UserInfo.nickName}}</li>\n            <li class="icon-arrow"><ion-icon></ion-icon></li>\n          </ul>\n        </ion-col>\n      </ion-row>\n      <ion-row m-l-10>\n          <ion-col>\n            <ul class="list-row-inner">\n              <li class="title">用户ID</li>\n              <li text-right class="text-gray-600">{{UserInfo.userId}}</li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row m-l-10>\n            <ion-col>\n              <ul class="list-row-inner">\n                <li class="title">手机号</li>\n                <li text-right class="text-gray-600">{{ShowPhone}}</li>\n              </ul>\n            </ion-col>\n          </ion-row>\n    </ion-grid>\n    <ion-grid class="list-grid-default" m-t-10>\n        <ion-row m-l-10>\n          <ion-col>\n            <ul class="list-row-inner">\n              <li class="title">姓名</li>\n              <li text-right class="text-gray-600">{{infoName}}</li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row m-l-10>\n          <ion-col>\n            <ul class="list-row-inner">\n              <li class="title">身份证</li>\n              <li text-right class="text-gray-600">{{ShowID}}</li>\n            </ul>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\ucenter\uinfo\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_2__providers_camera__["a" /* TCameraService */]])
    ], UinfoPage);
    return UinfoPage;
}());

/*TakePhoto()
{
  App.ShowLoading();
  let _alertConfig =
  {
    title:'上传头像',
    buttons: [
      {
        text: '相机拍照',
        handler: () => {
          this.CameraSvc.GetPicture(0).then(imageData =>
            {
              let imgSrc = 'data:image/jpeg;base64,' + imageData;
              this.ImgData.ImgSrc = imgSrc;
              localStorage.setItem('imageface', this.ImgData.ImgSrc);
              App.UserFace;
              App.HideLoading();

            }, (error) =>
            {
                App.HideLoading();
            });
        }
      },
      {
        text: '相册',
        handler: () => {
          this.CameraSvc.GetPicture(1).then(imageData =>
            {
              let imgSrc = 'data:image/jpeg;base64,' + imageData;
              this.ImgData.ImgSrc = imgSrc;
              localStorage.setItem('imageface', this.ImgData.ImgSrc);
              App.UserFace;
              App.HideLoading();
              // this.ShowCropModal(imgSrc);
            }, (error) =>
            {
                App.HideLoading();
            });
        }
      },
      {
        text: '取消',
        role: 'cancel',
        handler: () => {
          App.HideLoading();
        }
      }
    ]
  }
  App.ShowAlert(_alertConfig);
}*/
/*
ShowCropModal(imgSrc)
{
  App.ShowModal(CropPhoto, {imgSrc: imgSrc, imgData: this.ImgData }).then((modal) =>
  {
      App.HideLoading();
      modal.onDidDismiss(() => {
        // this.Auth.UploadFace(this.ImgData.ImgSrc);
        App.HideLoading();
      });
  }).catch(error =>
  {
      App.HideLoading();
      App.ShowError(error);
  });
}
*/
/*
SavePhotoToLocal(ImgData: any)
{
    let FileName = new Date().getTime() + '.jpg';
    this.CameraSvc.CameraFile.FileName = FileName;
    alert(FileName);
    console.log('fileName = ' + FileName);
    return this.CameraSvc.WriteFile(this.CameraSvc.CameraFile.FileName, ImgData)
        .then((result) =>
        {

            ImgData.ImgSrc = void 0;
            alert(result.ImgSrc);
            console.log('write success');
            return true;
        })
        .catch((error) =>
        {
            console.log('write error = ' + error);
        });
}
*/
/*
ChangeImg() {

  let options = {
    targetWidth: 400,
   targetHeight: 400
  };

  let actionSheet = this.alertCtrl.create({
    title:'上传头像',
    buttons: [
      {
        text: '相册',
        handler: () => {

          this.native.getPictureByPhotoLibrary(options).then(imageBase64 => {
            this.getPictureSuccess(imageBase64);
          });
        }
      },
      {
        text: '相机拍照',
        handler: () => {
          this.native.getPictureByCamera(options).then(imageBase64 => {
            this.getPictureSuccess(imageBase64);
           });
        }
      },
      {
        text: '取消',
        role: 'cancel'
      }
    ]
  });

  actionSheet.present();
}

private getPictureSuccess(imageBase64) {
  this.isChange = true;
  this.imageBase64 = <string>imageBase64;
  this.avatarPath = 'data:image/jpeg;base64,' + imageBase64;
}
*/
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsetupPage = (function () {
    function UsetupPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "设 置";
    }
    UsetupPage.prototype.ChangeNickName = function () {
        var _alertOption = {
            title: '密码',
            inputs: [
                {
                    name: 'PassWord',
                },
            ],
            buttons: [
                {
                    text: '取消'
                },
                {
                    text: '保存',
                    handler: function (data) {
                        // 请求接口保存新昵称
                        // this.UserInfo.nickName = data.nickName;
                        // this.Auth.ModifyUserInfo({nickName: data.nickName});
                    }
                }
            ]
        };
        App.ShowAlert(_alertOption).then(function (modal) {
            return modal.onDidDismiss(function () {
            });
        });
    };
    UsetupPage.prototype.Logout = function () {
        this.Service.Logout();
    };
    UsetupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usetup',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\ucenter\usetup\index.html"*/'<ion-header no-border>\n  <ion-toolbar>\n    <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class="bgc-light">\n    <ion-row justify-content-center>\n      <ion-col col-3 text-center p-t-30>\n        <img src="assets/imgs/58icon.png">\n        <p no-margin p-t-10>v1.0.0</p>\n      </ion-col>\n    </ion-row>\n    <div padding-horizontal m-b-20>\n      <h5 text-center m-t-10>关于我们</h5>\n      <ng-template [ngIf]="App.CanTrade || App.IsIos">\n        <span text-left ion-text color="dark">\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 58付是一种基于信用卡的收款（收单）方式，应用于个人之间的资金往来，以及小微商户的收款（收单）场景。 公司专注用户体验、网络安全与个人隐私保护以及服务质量，打造精品，服务客户。\n        </span>\n      </ng-template>\n    </div>\n  </ion-grid>\n\n\n\n  <ion-grid class="list-grid-default" m-t-10>\n    <ion-row p-l-10 [navPush]="App.RootPage.ModifypwdPage">\n      <ion-col>\n        <ul class="list-row-inner">\n          <li class="title">登录密码</li>\n          <li class="icon-arrow">\n            <ion-icon></ion-icon>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- <ion-grid class="list-grid-default" m-t-10> -->\n    <!-- <ion-row p-l-10>\n      <ion-col>\n          <ul class="list-row-inner">\n            <li class="title">关于我们</li>\n            <li class="icon-arrow"><ion-icon></ion-icon></li>\n          </ul>\n      </ion-col>\n    </ion-row> -->\n    <!-- <ion-row p-l-10>\n      <ion-col>\n        <ul class="list-row-inner">\n          <li class="title">用户反馈</li>\n          <li class="icon-arrow">\n            <ion-icon></ion-icon>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row> -->\n  <!-- </ion-grid> -->\n  <ion-row justify-content-center margin-vertical>\n    <ion-col col-5>\n      <button class="bgc-grad-primary" ion-button block (click)="Logout()">退出账号</button>\n    </ion-col>\n  </ion-row>\n  <ion-row text-center>\n    <ion-col ion-text color="light-dark" f-1-6>\n      <p no-margin>Copyright ©2016-2018</p>\n      <span>深圳前海微融科技有限公司</span>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\ucenter\usetup\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth__["a" /* TAuthService */]])
    ], UsetupPage);
    return UsetupPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CashbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_mineservice__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CashbackPage = (function () {
    function CashbackPage(Service) {
        this.Service = Service;
        this.TitleText = "返现账户";
        this.TolAmount = "<span class='f-1-3'>￥</span>88.88";
        this.data = [];
        this.MonthNow = '';
        this.GetCashBack();
        this.NewMonth();
    }
    CashbackPage.prototype.NewMonth = function () {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1 + '';
        if (Number(month) < 10) {
            month = '0' + month;
        }
        this.MonthNow = year + '-' + month;
    };
    CashbackPage.prototype.GetCashBack = function () {
        var _this = this;
        this.Service.GetCashBack().then(function (res) {
            for (var i = 0; i < res.length; i++) {
                if (res[i].type == 1) {
                    var tmp_json = {
                        remark: res[i].remark,
                        time: res[i].time,
                        amount: res[i].amount
                    };
                    var flag = true;
                    for (var j = 0; j < _this.data.length; j++) {
                        if (tmp_json.time.substr(0, 7) == _this.data[j].month) {
                            flag = false;
                            _this.data[j].data.push(tmp_json);
                            _this.data[j].total += tmp_json.amount;
                            break;
                        }
                    }
                    if (flag) {
                        _this.data.push({ month: tmp_json.time.substr(0, 7), data: [tmp_json], total: tmp_json.amount });
                    }
                }
            }
        });
    };
    CashbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cashback',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\ucenter\cashback\index.html"*/'<ion-header no-border>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="TitleText"></app-toolbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <app-panel  [Title]="TolAmount" Name="余额"></app-panel>\n\n    <ion-grid class="bgc-grad-primary reverse" align-items-center>\n        <ion-row [ngStyle]="{\'opacity\':OpacityVue}">\n            <ion-col col-6 text-light>累计总额：￥1080.66</ion-col>\n            <ion-col col-6 text-right text-light>累计提现：￥24.56</ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <div *ngIf="data.length == 0; then nullBlock; else listBlock"></div>\n    <ng-template #nullBlock>\n        <div text-center p-t-50>\n            <img src="assets/imgs/nulldata.png" alt="" width="150px">\n            <p text-center ion-text color="gray">还没有返现记录哦～</p>\n        </div>\n    </ng-template>\n\n    <ng-template #listBlock>\n        <ng-container *ngFor="let items of data">\n            <ion-grid class="list-grid-default">\n                <h2>\n                    <span *ngIf="MonthNow == items.month; then nowBlock else agoBlock"></span>\n                    <ng-template #nowBlock>本月提现</ng-template>\n                    <ng-template #agoBlock>{{items.month}}提现</ng-template>\n                    <span>{{items.total/100}}元</span>\n                </h2>\n                <ion-row align-items-center p-l-10 *ngFor="let item of items.data">\n                <ion-col col-1 text-center class="has-icon"><img src="assets/imgs/card.png"></ion-col>\n                <ion-col col-11>\n                    <ul class="list-row-inner">\n                    <li class="title">\n                        {{item.time}}\n                        <p>{{item.remark}}</p>\n                    </li>\n                    <li class="note"><span ion-text color="dark">￥{{item.amount/100}}</span></li>\n                    </ul>\n                </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ng-container>\n    </ng-template>\n\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\ucenter\cashback\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_mineservice__["a" /* MineService */]])
    ], CashbackPage);
    return CashbackPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_mineservice__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VoucherPage = (function () {
    function VoucherPage(service) {
        this.service = service;
        this.DataToUse = []; //未使用
        this.DataUsed = []; //已使用
        this.DataOutDate = []; //已过期
        this.ActiveIndex = 0;
        this.HeadTitle = "红包礼券";
        this.ToUseEmpty = false;
        this.UsedEmpty = false;
        this.OutDateEmpty = false;
        this.voucherData();
    }
    VoucherPage.prototype.SwitchTabs = function (index) {
        this.ActiveIndex = index;
    };
    VoucherPage.prototype.voucherData = function () {
        var _this = this;
        this.service.GetVoucherList().then(function (res) { return _this.DataProcess(res); });
    };
    VoucherPage.prototype.DataProcess = function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].status == 0) {
                this.DataToUse.push(data[i]); //未使用
            }
            else if (data[i].status == 1) {
                this.DataUsed.push(data[i]); //已使用
            }
            else if (data[i].status == 2) {
                this.DataOutDate.push(data[i]); //已过期
            }
        }
        if (this.DataToUse.length == 0)
            this.ToUseEmpty = true;
        if (this.DataUsed.length == 0)
            this.UsedEmpty = true;
        if (this.DataOutDate.length == 0)
            this.OutDateEmpty = true;
    };
    VoucherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-voucher',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\ucenter\voucher\index.html"*/'<ion-header no-border>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar>\n    <ion-toolbar no-padding>\n        <ion-grid class="grid-row-default" no-padding>\n            <ion-row no-padding justify-content-around>\n                <ion-col col-3 text-center (click)="SwitchTabs(0)" [ngClass]="{\'active\':ActiveIndex == 0}">未使用<span>(</span>{{DataToUse.length}}<span>)</span></ion-col>\n                <ion-col col-3 text-center (click)="SwitchTabs(1)" [ngClass]="{\'active\':ActiveIndex == 1}">已使用<span>(</span>{{DataUsed.length}}<span>)</span></ion-col>\n                <ion-col col-3 text-center (click)="SwitchTabs(2)" [ngClass]="{\'active\':ActiveIndex == 2}">已过期<span>(</span>{{DataOutDate.length}}<span>)</span></ion-col>\n            </ion-row>\n        </ion-grid> \n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<!-- 未使用 -->\n    <div [ngSwitch]="ActiveIndex">\n        <div *ngSwitchCase="0">\n            <!-- <div padding-horizontal>\n                <ion-grid class="list-grid-default" margin-top>\n                    <ion-row align-items-center class="border-line">\n                        <ion-col col-1 text-center class="has-icon"><img src="assets/imgs/vip.png"></ion-col>\n                        <ion-col no-padding>\n                            <ul class="list-row-inner">\n                                <li class="note" text-left >您有<span ion-text color="orange"> 2 </span>张待领取的礼券</li>\n                                <li class="icon-arrow"><ion-icon ion-text f-2-5></ion-icon></li>\n                            </ul>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div> -->\n            <ion-grid class="grid-card-default" no-padding padding-horizontal margin-top>\n                <ion-row *ngFor="let item of DataToUse;">\n                    <ion-col col-4>\n                        <div class="card-value">\n                            <label>\n                                <span f-2-0>￥</span>\n                                <em f-5-0>{{item.amount/100}}</em>\n                                <br>\n                                <span>抵扣券</span>\n                            </label>\n                        </div>\n                    </ion-col>\n                    <ion-col col-8>\n                        <div class="card-description">\n                            <h6 p-l-10 m-t-5>单笔收款满<span ion-text color="orange"> {{item.matchAmt/100}} </span>元可用</h6>\n                            <!-- <img src="assets/imgs/guoqi.png"> -->\n                            <ul ion-text color="gray">\n                                <li>有效期至<span>{{item.expireDate}}</span></li>\n                                <li>{{item.source}}</li>\n                            </ul>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <ng-template [ngIf]="ToUseEmpty">\n                <div text-center p-t-50 p-b-50>\n                    <img src="assets/imgs/nulldata.png" alt="" width="150px">\n                    <p text-center text-gray-light f-1-6>暂无未使用礼券</p>\n                </div>\n            </ng-template>\n        </div>\n\n<!-- 已使用 -->\n        <div *ngSwitchCase="1">\n            <ion-grid class="grid-card-default" no-padding padding-horizontal margin-top>\n                <ion-row *ngFor = "let item of DataUsed">\n                    <ion-col col-4 class="opacity-3">\n                        <div class="card-value">\n                        <label>\n                            <span f-2-0>￥</span>\n                            <em f-5-0>{{item.amount/100}}</em>\n                            <br>\n                            <span>抵扣券</span>\n                        </label>\n                        </div>\n                    </ion-col>\n                    <ion-col col-8 ion-text color="light-dark">\n                        <div class="card-description">\n                            <h6 p-l-10 m-t-5>单笔收款满<span ion-text color="orange"> {{item.matchAmt/100}} </span>元可用</h6>\n                            <img class="img-overdue" src="assets/imgs/yishi.png">\n                            <ul>\n                                <li>有效期至<span>{{item.expireDate}}</span></li>\n                                <li> {{item.source}} </li>\n                            </ul>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <ng-template [ngIf]="UsedEmpty">\n                <div text-center p-t-50 p-b-50>\n                    <img src="assets/imgs/nulldata.png" alt="" width="150px">\n                    <p text-center text-gray-light f-1-6>暂无已使用礼券</p>\n                </div>\n            </ng-template>\n        </div>\n\n\n<!-- 已过期 -->\n        <div *ngSwitchCase="2">\n            <ion-grid class="grid-card-default" no-padding padding-horizontal  margin-top ion-text color="light-dark">\n                <ion-row *ngFor = "let item of DataOutDate;">\n                    <ion-col col-4>\n                        <div class="card-value card-overdue">\n                            <label>\n                                <span f-2-0>￥</span>\n                                <em f-5-0>{{item.amount/100}}</em>\n                                <br>\n                                <span>抵扣券</span>\n                            </label>\n                        </div>\n                    </ion-col>\n                    <ion-col col-8>\n                        <div class="card-description">\n                            <h6 p-l-10 m-t-5>单笔收款满<span ion-text color="orange"> {{item.matchAmt/100}} </span>元可用</h6>\n                            <ul>\n                                <li>有效期至2017-12-12 00:00:00</li>\n                                <li> {{item.source}} </li>\n                            </ul>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <ng-template [ngIf]="OutDateEmpty">\n                <div text-center p-t-50 p-b-50>\n                    <img src="assets/imgs/nulldata.png" alt="" width="150px">\n                    <p text-center text-gray-light f-1-6>暂无已过期礼券</p>\n                </div>\n            </ng-template>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\ucenter\voucher\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_mineservice__["a" /* MineService */]])
    ], VoucherPage);
    return VoucherPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyclientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_mineservice__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyclientPage = (function () {
    function MyclientPage(service) {
        this.service = service;
        this.App = window.App;
        this.TabActive = 0;
        this.DataClientOne = [];
        this.DataClientTwo = [];
        this.DataClientShow = [];
        this.DataClientTwoLen = 0;
        this.HeadTitle = "我的客户";
        this.ClientsNum = 0;
        this.GetMyCustomerData();
    }
    MyclientPage.prototype.ngOnInit = function () {
    };
    MyclientPage.prototype.SwitchTab = function (n) {
        this.TabActive = n;
        this.DataClientShow = this.DataClientTwo;
    };
    MyclientPage.prototype.GetMyCustomerData = function () {
        var _this = this;
        this.service.GetMyCustomer().then(function (res) {
            res.detail.forEach(function (item) {
                if (item.level == 1) {
                    _this.DataClientOne.push(item);
                }
                else {
                    _this.DataClientTwoLen++;
                    _this.DataClientsTwo(item);
                }
            });
            _this.ClientsNum = _this.DataClientOne.length + _this.DataClientTwoLen;
        });
    };
    MyclientPage.prototype.DataClientsTwo = function (data) {
        var flag = true;
        for (var i = 0; i < this.DataClientTwo.length; i++) {
            if (data.parentId == this.DataClientTwo[i].sid) {
                flag = false;
                this.DataClientTwo[i].data.push(data);
                break;
            }
        }
        if (flag) {
            this.DataClientTwo.push({ sid: data.parentId, data: [data] });
        }
    };
    MyclientPage.prototype.ShowTabTwo = function (id) {
        var flag = true;
        for (var i = 0; i < this.DataClientTwo.length; i++) {
            if (id == this.DataClientTwo[i].sid) {
                flag = false;
                this.DataClientShow = [this.DataClientTwo[i]];
                break;
            }
        }
        if (flag) {
            this.DataClientShow = [{ sid: id, data: [] }];
        }
        this.TabActive = 1;
    };
    MyclientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myclient',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\ucenter\myclient\index.html"*/'<ion-header no-border>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <app-panel [Title]="ClientsNum" Name="数量"></app-panel>\n    <div *ngIf="DataClientOne.length != 0; then hasClient else noClient"></div>\n<!-- 有客户的页面 -->\n    <ng-template #hasClient>\n        <ion-row class="range-option" m-v-10>\n            <ion-col class="option-height option-height-c" col-6 [class.selected]="TabActive === 0"  (click)="SwitchTab(0)" tappable>\n                <div>\n                    <span f-1-5>直接客户</span>\n                    <strong f-1-8>{{DataClientOne.length}}</strong>\n                    <span f-1-2>个</span>\n                </div>\n            </ion-col>\n            <ion-col class="option-height option-height-c" col-6 [class.selected]="TabActive === 1"  (click)="SwitchTab(1)" tappable>\n                <div>\n                    <span f-1-5>间接客户</span>\n                    <strong f-1-8>{{DataClientTwoLen}}</strong>\n                    <span f-1-2>个</span>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <div [ngSwitch]="TabActive">\n            <!-- 直接客户 -->\n            <div *ngSwitchCase="0">\n                <ion-grid class="list-grid-default">\n                    <ion-row *ngFor = "let item of DataClientOne" align-items-center p-l-10 (click)="ShowTabTwo(item.id)">\n                        <ion-col col-1 text-center class="has-icon"><img src="assets/imgs/yiji.png"></ion-col>\n                        <ion-col col-11>\n                            <ul class="list-row-inner">\n                                <li class="title"><span>ID:{{item.id}}</span><p>{{item.date}}</p></li>\n                                <li class="title" text-right><span>￥{{item.profit/100}}</span><p>收益贡献</p></li>\n                                <li class="icon-arrow" text-right><ion-icon></ion-icon></li>\n                            </ul>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n            <!-- 间接客户 -->\n            <div *ngSwitchCase="1">\n                <ion-grid *ngFor = "let items of DataClientShow" class="list-grid-default">\n                    <h6 p-l-20 p-r-15>\n                        ID:{{items.sid}}\n                        <span float-right>{{items.data.length}}个间接客户</span>\n                    </h6>\n                    <ion-row align-items-center p-l-10 *ngFor="let item of items.data">\n                        <ion-col col-1 text-center class="has-icon"><img src="assets/imgs/yiji.png"></ion-col>\n                        <ion-col col-11>\n                            <ul class="list-row-inner">\n                                <li class="title"><span>ID:{{item.id}}</span><p>{{item.date}}</p></li>\n                                <li class="title" text-right><span>￥{{item.profit/100}}</span><p>收益贡献</p></li>\n                            </ul>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n    </ng-template>\n\n<!-- 没有客户的页面 -->\n    <ng-template #noClient>\n        <ion-row class="range-option bgc-grad-light">\n            <ion-col class="option-height option-height-d" col-6 tappable>\n                <div ion-text color="light">\n                    <span f-1-5>直接客户</span>\n                    <strong f-1-8>0</strong>\n                    <span f-1-2>个</span>\n                </div>\n            </ion-col>\n            <ion-col class="option-height option-height-d" col-6  tappable>\n                <div ion-text color="light">\n                    <span f-1-5>间接客户</span>\n                    <strong f-1-8>0</strong>\n                    <span f-1-2>个</span>\n                </div>\n            </ion-col>\n        </ion-row>\n        <div text-center p-t-50>\n            <img src="assets/imgs/mykh.png" alt="" width="50%" height="100%">\n            <h5 f-1-8 ion-text color="light-dark">还没有客户哦~ 快去发展吧</h5>\n        </div>\n    </ng-template>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\ucenter\myclient\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_mineservice__["a" /* MineService */]])
    ], MyclientPage);
    return MyclientPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VIPmembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_mineservice__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VIPmembersPage = (function () {
    function VIPmembersPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "VIP会员";
        this.VipIndex = 0;
        this.GetVipDeadLine(10);
    }
    VIPmembersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.Service.GetVipList().then(function (res) {
            _this.VipList = res;
            console.log(res);
            for (var i = 0; i < _this.VipList.length; i++) {
                // let len = this.VipList[i].name.length;
                // this.VipList[i].name = this.VipList[i].name.substr(0, len-4);
                if (_this.VipList[i].name.indexOf(App.UserInfo['rank']) !== -1) {
                    _this.VipId = _this.VipList[i].id;
                }
            }
            _this.PayAmount = _this.VipList[_this.VipIndex].price;
            console.log(_this.PayAmount);
        });
        if (App.UserInfo['vip']) {
            this.GetVipDeadLine(App.UserInfo['packageDays']);
        }
    };
    VIPmembersPage.prototype.ChooseVIP = function (ind) {
        if (this.VipList[ind].name == App.UserInfo['rank'])
            return;
        this.VipIndex = ind;
        this.PayAmount = this.VipList[ind].price;
    };
    VIPmembersPage.prototype.Submit = function () {
        this.Service.BuyVip(this.VipList[this.VipIndex].id).then(function (res) {
            new __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]().create(res.qrCode, '_system');
        });
    };
    VIPmembersPage.prototype.GetVipDeadLine = function (days) {
        var TDate = new Date().getTime();
        var stamp = days * 864e5;
        var DeadStamp = TDate + stamp;
        var DeadTime = new Date(DeadStamp);
        var Year = DeadTime.getFullYear();
        var Month = DeadTime.getMonth() + 1;
        var Day = DeadTime.getDate();
        this.Deadline = Year + '-' + Month + '-' + Day;
    };
    VIPmembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-VIPmembers',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\ucenter\VIPmembers\index.html"*/'<ion-header no-border class="bgc-gray-light">\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n        <!-- <div class="vip-toolbar bgc-grad-primary"></div> -->\n    </ion-toolbar>\n    <ion-toolbar no-padding>\n        <ion-grid class="grid-mine-header bgc-grad-primary no-padding">\n            <ion-row justify-content-center>\n                <ion-col col-5 text-center *ngIf="App.IsVip">\n                    <img class="vipface" src="assets/imgs/hgvip.png">\n                    <span text-nowrap p-b-5>会员{{Deadline}}到期</span>\n                </ion-col>\n                <ion-col col-5 text-center *ngIf="!App.IsVip">\n                    <img class="vipface" src="assets/imgs/hgvip.png">\n                    <span text-nowrap p-b-5>你还不是VIP会员</span>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div m-h-15 m-v-15>\n        <ion-grid class="vip-list" no-padding \n        [ngClass]="{\'active\': VipIndex == i && item.name != App.UserInfo.rank}"\n        [ngClass]="{\'no-active\': item.name != App.UserInfo.rank}"\n        (click)="ChooseVIP(i)" *ngFor="let item of VipList; let i = index">\n            <ion-row class="vip-item">\n                <ion-col col-9 text-left>\n                    <h4>{{item.name}}</h4>\n                    <div m-b-10>\n                        <p>无积分{{item.rate}}%，有积分{{item.rate1}}%</p>\n                        <p>直推返利：{{item.profitRate1}}%，间推返利：{{item.profitRate2}}%</p>\n                        <!-- <p>间推返利：{{item.profitRate2}}%</p> -->\n                        <p>有效期\n                            <span *ngIf="item.days == \'-1\'; then Infinit; else Days"></span>\n                            <ng-template #Infinit>永久有效</ng-template>\n                            <ng-template #Days>{{item.days}}天</ng-template>\n                        </p>\n                    </div>\n                </ion-col>\n                <ion-col col-3 text-right>\n                    <b>￥{{item.price}}</b>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-grid class="vip-list pay list-grid-default" p-v-20 m-t-10>\n            <ion-row p-h-10>\n                <ion-col>\n                    <ul class="list-row-inner">\n                        <li class="note" text-left>\n                            <span class="bank-face"><img src="assets/imgs/zfb.png"></span>\n                            <span ion-text color="dark">支付宝支付</span>\n                        </li>\n                        <li class="title" text-right><i class="has-point active"></i></li>\n                    </ul>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <!-- <div [ngStyle]="{width: \'100%\', height: \'8%\', \'margin-top\': \'2%\'}"></div>\n    <div p-h-15>\n        <ion-grid class="grid-vip-cont grid-header-bar" p-v-20>\n            <div class="foor-face"><img src="assets/imgs/yyy.png" alt=""></div>\n            <ion-row class="face-cont face-cont-vip"\n                [ngClass]="{\'active\': VipIndex == i && item.name != App.UserInfo.rank}"\n                [ngClass]="{\'no-active\': item.name != App.UserInfo.rank}"\n                (click)="ChooseVIP(i)" *ngFor="let item of VipList; let i = index">\n                <ion-col>\n                    <b class="face-tab" [ngClass]="{\'face-active\': VipIndex == i}">\n                        <img class="face-nav" src="assets/imgs/zs{{item.id}}.png">\n                    </b>\n                </ion-col>\n                <ion-col col-2>\n                    <h5>{{item.Tname}}</h5>\n                    <h5>会员</h5>\n                </ion-col>\n                <ion-col col-2 class="border">\n                    <h6>费率</h6>\n                    <b>{{item.rate}}%</b>\n                </ion-col>\n                <ion-col col-2>\n                    <h6>有效期</h6>\n                    <b *ngIf="item.days == \'-1\'; then Infinit; else Days"></b>\n                    <ng-template #Infinit>永久有效</ng-template>\n                    <ng-template #Days>{{item.days}}天</ng-template>\n                </ion-col>\n                <ion-col col-3 ion-text color="red-dark">\n                    ￥<b f-2-5>{{item.price}}</b>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-grid class="grid-vip-cont list-grid-default" p-v-20 m-t-10>\n            <span>选择支付方式</span>\n            <ion-row>\n                <ion-col text-center>收款方式</ion-col>\n                <ion-col>\n                    <ul class="list-row-inner">\n                        <li class="note" text-left>\n                            <span class="bank-face"><img src="assets/imgs/zfb.png"></span>\n                            <span ion-text color="dark">支付宝支付</span>\n                        </li>\n                        <li class="title" text-right><i class="has-point active"></i></li>\n                    </ul>\n                </ion-col>\n                <ion-col>\n                    <ul class="list-row-inner">\n                        <li class="title" text-right><i class="has-point"></i></li>\n                        <li class="note" text-left>\n                            <span class="bank-face"><img src="assets/imgs/wx.png"></span>\n                            <span ion-text color="dark" >微信</span>\n                        </li>\n                    </ul>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div> -->\n\n</ion-content>\n<ion-footer class="bgc-gray-light">\n    <ion-row justify-content-center m-h-10>\n        <ion-col>\n            <button ion-button block round class="bgc-grad-primary" (click)="Submit()">应付金额{{PayAmount}}元，去提交</button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\ucenter\VIPmembers\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_mineservice__["a" /* MineService */]])
    ], VIPmembersPage);
    return VIPmembersPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvfriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvfriendsPage = (function () {
    function InvfriendsPage() {
        this.App = window.App;
        this.headTitle = "邀请好友";
    }
    //验证微信是否安装
    InvfriendsPage.prototype.Test = function () {
        var wechat = window.Wechat;
        wechat.isInstalled(function (installed) {
            if (!installed) {
                this.toastService.show('您没有安装微信！');
                return;
            }
        }, function (reason) {
            this.toastService.show("Failed: " + reason);
        });
    };
    // 成功 发送朋友圈 只文字
    InvfriendsPage.prototype.Text = function () {
        Wechat.share({
            text: "This is just a plain string",
            scene: Wechat.Scene.TIMELINE // share to Timeline
        }, function () {
            alert("Success");
        }, function (reason) {
            alert("Failed: " + reason);
        });
    };
    InvfriendsPage.prototype.Text2 = function () {
        var wechat = window.Wechat;
        wechat.share({
            text: "This is just a plain string",
            scene: wechat.Scene.Timeline // share to Timeline
        }, function () {
            alert("Success");
        }, function (reason) {
            alert("Failed: " + reason);
        });
    };
    InvfriendsPage.prototype.shareWxTimeLine = function () {
        var wechat = window.Wechat;
        wechat.share({
            message: {
                title: 'title',
                description: 'description',
                thumb: 'www/assets/imgs/58icon.png',
                media: {
                    type: wechat.Type.LINK,
                    webpageUrl: 'www.baidu.com'
                }
            },
            scene: wechat.Scene.SESSION // share to Timeline
        }, function () {
            alert('分享成功');
        }, function (reason) {
            alert("Failed: " + reason);
        });
    };
    InvfriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-invfriends',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\ucenter\invfriends\index.html"*/'<ion-header no-border>\n\n    <ion-toolbar no-padding>\n\n        <app-toolbar HasBack="true"  [Title]="headTitle"></app-toolbar>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <button ion-button full round (click)="Test()">测试安装</button>\n\n\n\n    <button ion-button full round (click)="Text()">朋友圈文字</button>\n\n\n\n    <button ion-button full round (click)="Text2()">朋友圈文字2</button>\n\n\n\n    <button ion-button full round (click)="shareWxTimeLine()">好友</button>\n\n</ion-content>'/*ion-inline-end:"D:\app-project\58pay\src\pages\ucenter\invfriends\index.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], InvfriendsPage);
    return InvfriendsPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_homeservice__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_addcredits_index__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_controller__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MycardPage = (function () {
    function MycardPage(Servie, Auth, navCtrl) {
        this.Servie = Servie;
        this.Auth = Auth;
        this.navCtrl = navCtrl;
        this.App = window.App;
        this.HeadTitle = "我的卡片";
        this.ActiveIndex = 0;
        if (App.UserInfo.idAuthed !== '1') {
            App.Nav.push(App.RootPage.NoldentifyPage);
        }
    }
    MycardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.CreditCarts = new Array();
        this.DepositCards = new Array();
        this.Servie.GetCardList().then(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var item = res_1[_i];
                if (item.type === '0') {
                    _this.CreditCarts.push(item);
                }
                else {
                    _this.DepositCards.push(item);
                }
            }
        });
    };
    MycardPage.prototype.DelCreditCards = function (cardId) {
        var _this = this;
        this.Servie.DelCard(cardId).then(function (res) {
            _this.CreditCarts.splice(_this.CreditCarts.indexOf(cardId), 1);
            if (res) {
                App.ShowToast('信用卡删除成功');
                App.CurrentCreditCards = {};
                _this.Auth.GetUserData();
            }
            else {
                App.ShowError('信用卡删除失败');
            }
        });
    };
    MycardPage.prototype.DelDepositCards = function (cardId) {
        var _this = this;
        this.Servie.DelCard(cardId).then(function (res) {
            _this.DepositCards.splice(_this.DepositCards.indexOf(cardId), 1);
            if (res) {
                App.ShowToast('储蓄卡删除成功');
                App.CurrentDepositCard = {};
                _this.Auth.GetUserData();
            }
            else {
                App.ShowError('信用卡删除失败');
            }
        });
    };
    MycardPage.prototype.AddCards = function () {
        App.Nav.push(__WEBPACK_IMPORTED_MODULE_2__home_addcredits_index__["a" /* AddcreditsPage */]);
    };
    MycardPage.prototype.TabsIndex = function () {
        this.navCtrl.parent.select(3);
    };
    MycardPage.prototype.SwitchTabs = function (n) {
        this.ActiveIndex = n;
    };
    MycardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mycard',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\ucenter\mycard\index.html"*/'<ion-header no-border>\n    <!-- <ion-toolbar no-padding>\n        <app-toolbar *ngIf="ActiveIndex === 0" HasBack="true" [Title]="HeadTitle" BtnIcon="&#xf273;" (BtnIconEvent)="AddCards()"></app-toolbar>\n        <app-toolbar *ngIf="ActiveIndex === 1" HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar> -->\n    <div class="register">\n        <ion-row class="bgc-grad-primary back-btn">\n            <ion-col f-1-6 p-h-15>\n                <span *ngIf="ActiveIndex === 0">\n                    <ion-icon f-2-0 float-left tappable (click)="TabsIndex()">&#xf3cf;</ion-icon>\n                    我的卡片\n                    <ion-icon f-2-0 float-right tappable (click)="AddCards()">&#xf273;</ion-icon>\n                </span>\n                <span *ngIf="ActiveIndex === 1">\n                    <ion-icon f-2-0 float-left tappable (click)="TabsIndex()">&#xf3cf;</ion-icon>\n                    我的卡片\n                </span>\n            </ion-col>\n        </ion-row>\n    </div>\n    <ion-grid class="grid-row-default" no-padding>\n        <ion-row class="justify-evenly" no-padding>\n            <ion-col text-center (click)="SwitchTabs(0)" [class.active]="ActiveIndex === 0">\n                <span>信用卡({{App.UserInfo.creditCards}}张)</span>\n            </ion-col>\n            <ion-col text-center (click)="SwitchTabs(1)" [class.active]="ActiveIndex === 1">\n                <span>储蓄卡({{App.UserInfo.depositCards}}张)</span>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n<ion-content>\n    <div [ngSwitch]="ActiveIndex">\n        <!-- 信用卡 -->\n        <div *ngSwitchCase="0">\n            <!-- 未添加 -->\n            <div padding-horizontal class="minus-margin" *ngIf="CreditCarts.length == 0">\n                <ion-grid class="grid-card-banks bgc-grad-primary bgc-top bgc-boxshadow">\n                    <ion-row class="banks-temp">\n                        <ion-col text-center>\n                            请添加付款信用卡\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class="banks-temp">\n                        <ion-col col-4 class="infc-btn" [navPush]="App.RootPage.AddcreditsPage" navParams="MycardPage">\n                            <button ion-button block >+</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n            <!-- 已添加 -->\n            <div padding-horizontal class="minus-margin" *ngFor="let item of CreditCarts">\n                <b class="card-del" (click)="DelCreditCards(item.id)">\n                    <img src="assets/imgs/laji.png" alt="" width="60%">\n                </b>\n                <ion-grid class="grid-card-banks bgc-grad-primary bgc-top bgc-boxshadow" [ngStyle]="{\'justify-content\':\'start\'}">\n                    <ion-row class="banks-contA" [ngStyle]="{\'padding-top\':\'15px\'}">\n                        <ion-col col-2 text-center>\n                            <div class="face">\n                                <img src="assets/banklogo/bank_{{item.code}}.png" alt="">\n                            </div>\n                        </ion-col>\n                        <ion-col>\n                            <h6 no-margin>{{item.bank}}</h6>\n                            <span class="opacity-5">付款信用卡</span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class="banks-contB">\n                        <ion-col></ion-col>\n                        <ion-col>****</ion-col>\n                        <ion-col>****</ion-col>\n                        <ion-col>****</ion-col>\n                        <ion-col>{{item.cardNo}}</ion-col>\n                    </ion-row>\n                    <div class="pic">\n                        <img src="assets/banklogo/bank_{{item.code}}_0.png" alt="">\n                    </div>\n                </ion-grid>\n            </div>\n        </div>\n\n\n        <!-- 储蓄卡 -->\n        <div *ngSwitchCase="1">\n            <!-- 未添加 -->\n            <div padding-horizontal class="minus-margin" *ngIf="DepositCards.length == 0">\n                <ion-grid class="grid-card-banks bgc-grad-primary bgc-top bgc-boxshadow">\n                    <ion-row class="banks-temp">\n                        <ion-col text-center>\n                            请添加收款储蓄卡\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class="banks-temp">\n                        <ion-col col-4 class="infc-btn" [navPush]="App.RootPage.AdddepositPage" navParams="MycardPage">\n                            <button ion-button block >+</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n            <!-- 已添加 -->\n            <div padding-horizontal class="minus-margin" *ngFor="let item of DepositCards">\n                <b class="card-del" (click)="DelDepositCards(item.id)">\n                    <img src="assets/imgs/laji.png" alt="" width="60%">\n                </b>\n                <ion-grid class="grid-card-banks bgc-grad-primary bgc-top bgc-boxshadow" [ngStyle]="{\'justify-content\':\'start\'}">\n                    <ion-row class="banks-contA" [ngStyle]="{\'padding-top\':\'15px\'}">\n                        <ion-col col-2 text-center>\n                            <div class="face">\n                                <img src="assets/banklogo/bank_{{item.code}}.png" alt="">\n                            </div>\n                        </ion-col>\n                        <ion-col>\n                            <h6 no-margin>{{item.bank}}</h6>\n                            <span class="opacity-5">收款储蓄卡</span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class="banks-contB">\n                        <ion-col></ion-col>\n                        <ion-col>****</ion-col>\n                        <ion-col>****</ion-col>\n                        <ion-col>****</ion-col>\n                        <ion-col>{{item.cardNo}}</ion-col>\n                    </ion-row>\n                    <ion-row class="banks-contC">\n                        <ion-col col-2 p-t-10 [navPush]="App.RootPage.AdddepositPage">\n                            <!-- <button ion-button block [navPush]="App.RootPage.ChangecardsPage" [navParams]="CardList">更换</button> -->\n                            <button ion-button block>更换</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <div class="pic">\n                    <img src="assets/banklogo/bank_{{item.code}}_0.png" alt="">\n                </div>\n            </div>\n            <div text-center f-1-7 ion-text color="light-dark">\n                <p m-b-5>温馨提示：</p>\n                <span>仅可绑定一张储蓄卡，如需变更请点击更换</span>\n            </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\ucenter\mycard\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_homeservice__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* TAuthService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_controller__["a" /* NavController */]])
    ], MycardPage);
    return MycardPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = (function () {
    function RegisterPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.State = 0;
        this.VCodeText = "获取验证码";
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            Tel: this.Tel = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^1[3|4|5|7|8][0-9]{9}$/)
            ]),
            VCode: this.VCode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(4)
            ]),
        });
    };
    //倒计时
    RegisterPage.prototype.times = function () {
        var _this = this;
        var count = 60;
        var timer = setInterval(function () {
            if (count > 0) {
                count--;
                _this.VCodeText = '已发送' + count + 's';
                if (count === 0) {
                    _this.VCodeText = '重新获取';
                    _this.State = 0;
                    clearInterval(timer);
                }
            }
        }, 1000);
    };
    //验证手机号码以及验证码
    RegisterPage.prototype.GetVeriyCode = function () {
        var _this = this;
        this.Service.GetVerifyCode(this.Form_Group.value.Tel).then(function (res) {
            if (res.code === 1) {
                // this.CodeSend = true;
                _this.State = 1;
                _this.times();
                return App.ShowToast("发送成功");
            }
            else {
                return App.ShowToast(res.msg);
            }
        })
            .catch(function (err) { return App.ShowToast(err.msg); });
    };
    RegisterPage.prototype.NextTable = function () {
        this.Service.CheckVerifyCode(this.Form_Group.value.Tel, this.Form_Group.value.VCode);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\register\index.html"*/'<ion-content>\n    <div class=" register">\n        <ion-row class="bgc-grad-primary back-btn">\n            <ion-col col-12 f-1-6>\n                <span>注 册\n                    <ion-icon f-2-0 p-r-15 [navPush]="App.RootPage.StartPage" float-right tappable>&#xf2c0;</ion-icon>\n                </span>\n            </ion-col>\n        </ion-row>\n        <ion-row justify-content-center>\n            <ion-col col-3 p-v-40 text-center>\n                <img src="assets/imgs/58icon.png">\n            </ion-col>\n        </ion-row>\n        <div>\n        <ion-grid text-center>\n            <form novalidate [formGroup]="Form_Group" autocomplete="off">\n                <ion-row class="reg-line">\n                    <ion-col col-12>\n                        <input type="Tel" placeholder="请输入手机号" formControlName="Tel" required>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="reg-line">\n                    <ion-col col-7>\n                        <input type="text" placeholder="请输入手机验证码" formControlName="VCode" required>\n                    </ion-col>\n                    <ion-col col-5>\n                        <button class="smbtn" [disabled]="Tel.invalid" (click)="GetVeriyCode()">{{VCodeText}}</button>\n                    </ion-col>\n                </ion-row>\n               <ion-row m-t-30 m-b-10>\n                    <ion-col col-12>\n                        <button class="bgc-grad-primary bgc-header" (click)="NextTable()"  [ngClass]="{\'disabled\':Tel.invalid || VCode.invalid}" [disabled]="Tel.invalid || VCode.invalid">下一步</button>\n                    </ion-col>\n                </ion-row>\n                <span f-1-0>点击"下一步"即表示您同意</span><span ion-text color="primary">《58付用户使用协议》</span>\n            </form>\n        </ion-grid>\n        </div>\n    </div>\n    <!-- <ng-template [ngIf]="RegStep === 1">\n        <form novalidate [formGroup]="Form_Group" autocomplete="off">\n          <ion-grid class="grid-form">\n            <ion-row column>\n                <ion-col>\n                    <input type="tel" formControlName="Tel" placeholder="请输入手机号" required>\n                </ion-col>\n                <ion-col>\n                    <input type="text" formControlName="VCode" placeholder="请输入验证码" required>\n                    <button class="btn-vcode" [ngClass]="{\'disabled\':Tel.invalid || state === 1}" [disabled]="Tel.invalid || state === 1" (click)="GetVeriyCode()" tappable>{{VCodeText}}</button>\n                </ion-col>\n                <ion-col padding>\n                    <button ion-button round full (click)="OnNextStep()" [disabled]="!Form_Group.valid">下一步</button>\n                </ion-col>\n                <ion-col text-center m-t-30>\n                    <span f-1-2>点击“下一步”即表示您同意<a href="#">《51付用户使用协议》</a></span>\n                </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n    </ng-template>\n\n    <ng-template [ngIf]="RegStep === 2">\n        <form novalidate [formGroup]="Form_GroupReg" autocomplete="off">\n            <ion-grid class="grid-form">\n              <ion-row column>\n                  <ion-col>\n                      <input type="password" formControlName="Pass" placeholder="输入密码" required>\n                  </ion-col>\n                  <ion-col>\n                      <input type="password" formControlName="RenterPass" placeholder="请再次输入密码" required>\n                  </ion-col>\n                  <ion-col>\n                      <input type="text" formControlName="Recommend" placeholder="请输入推荐人ID">\n                  </ion-col>\n                  <ion-col padding>\n                      <button ion-button round full (click)="OnRegister()" [disabled]="!Form_GroupReg.valid">注册</button>\n                  </ion-col>\n                  <ion-col text-center m-t-30>\n                      <span f-1-2>欢迎58金融产品，服务热线电话18888888888</span>\n                  </ion-col>\n              </ion-row>\n            </ion-grid>\n          </form>\n    </ng-template> -->\n</ion-content>\n\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\register\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* TAuthService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoldentifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_homeservice__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoldentifyPage = (function () {
    function NoldentifyPage(Service) {
        this.Service = Service;
        this.App = window.App;
        this.HeadTitle = "认证";
    }
    NoldentifyPage.prototype.ngOnInit = function () {
        this.Form_Group = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            Name: this.Name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            IdNo: this.IdNo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/)
            ])
        });
    };
    Object.defineProperty(NoldentifyPage.prototype, "BtnIsDisabled", {
        get: function () {
            if (this.Name.invalid || this.IdNo.invalid)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    NoldentifyPage.prototype.Submit = function () {
        var _this = this;
        this.Service.VerifyId(this.Form_Group.value.IdNo, this.Form_Group.value.Name, App.UserInfo.mobile).then(function (res) {
            if (res) {
                App.ShowToast('认证成功！');
                setTimeout(function () {
                    App.UserInfo['name'] = _this.Form_Group.value.Name;
                    App.UserInfo['idCardNo'] = _this.Form_Group.value.IdNo;
                    App.UserInfo['idAuthed'] = '1';
                    App.Nav.pop();
                }, 2000);
            }
            else {
                App.ShowError('认证失败！');
            }
        });
    };
    NoldentifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-Noldent',template:/*ion-inline-start:"D:\app-project\58pay\src\pages\ucenter\noIdentify\index.html"*/'<ion-header no-border>\n    <ion-toolbar no-padding>\n        <app-toolbar HasBack="true" [Title]="HeadTitle"></app-toolbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid margin-top>\n        <!-- 待输入 -->\n        <form novalidate [formGroup]="Form_Group">\n            <ion-row justify-content-center align-items-center>\n                <ion-col text-center col-3>\n                    <img src="assets/imgs/my1.png" alt="" *ngIf="BtnIsDisabled">\n                    <img src="assets/imgs/my3.png" alt="" *ngIf="!BtnIsDisabled">\n                </ion-col>\n                <ion-col col-8 text-left m-b-5>\n                    <ion-input class="auth-ipt" placeholder="请输入持卡人姓名" formControlName="Name" type="text"></ion-input>\n                    <ion-input class="auth-ipt" placeholder="请输入持卡人身份证号" formControlName="IdNo" type="text"></ion-input>\n                </ion-col>\n            </ion-row>\n\n            <ion-row justify-content-center m-b-15 m-t-30>\n                <ion-col col-10>\n                    <button ion-button round block class="bgc-grad-primary" [disabled]="BtnIsDisabled" (click)="Submit()">认证</button>\n                </ion-col>\n            </ion-row>\n        </form>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\app-project\58pay\src\pages\ucenter\noIdentify\index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_homeservice__["a" /* HomeService */]])
    ], NoldentifyPage);
    return NoldentifyPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__application_const__ = __webpack_require__(498);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AppService = (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.CreateHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var token = localStorage.getItem('token');
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    AppService.prototype.Get = function (uri) {
        var url = __WEBPACK_IMPORTED_MODULE_2__application_const__["a" /* const_data */].host_url + '/' + uri;
        var options = this.CreateHeader();
        return this.http.get(url, options).toPromise();
    };
    // 请求非接口地址使用
    AppService.prototype.Get2 = function (url) {
        var options = this.CreateHeader();
        return this.http.get(url, options).toPromise();
    };
    AppService.prototype.Post = function (data, uri) {
        var url = __WEBPACK_IMPORTED_MODULE_2__application_const__["a" /* const_data */].host_url;
        if (uri) {
            url = url + '/' + uri;
        }
        var options = this.CreateHeader();
        return this.http.post(url, data, options).toPromise();
    };
    AppService.prototype.Put = function (data, uri) {
        var url = __WEBPACK_IMPORTED_MODULE_2__application_const__["a" /* const_data */].host_url;
        if (uri) {
            url = url + '/' + uri;
        }
        var options = this.CreateHeader();
        return this.http.put(url, data, options).toPromise();
    };
    AppService.prototype.Delete = function (uri) {
        var url = __WEBPACK_IMPORTED_MODULE_2__application_const__["a" /* const_data */].host_url;
        if (uri) {
            url = url + '/' + uri;
        }
        var options = this.CreateHeader();
        return this.http.delete(url, options).toPromise();
    };
    AppService.prototype.JSON2Uri = function (data) {
        //DONE: json对象转成uri, 数据传输时，都以JSON,转成key1=value1&key2=value格式
        var result = [];
        for (var key in data) {
            result.push(key + '=' + data[key]);
        }
        return result.join('&');
    };
    AppService.prototype.Request = function (method, uri, data) {
        return __awaiter(this, void 0, void 0, function () {
            var retval, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 15, , 16]);
                        retval = null;
                        _a = method;
                        switch (_a) {
                            case 'get': return [3 /*break*/, 1];
                            case 'post': return [3 /*break*/, 6];
                            case 'post2': return [3 /*break*/, 8];
                            case 'put': return [3 /*break*/, 10];
                            case 'delete': return [3 /*break*/, 12];
                        }
                        return [3 /*break*/, 14];
                    case 1:
                        if (!(data != undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.Get(uri + '/' + data).then(function (res) { return res.json(); })];
                    case 2:
                        //data => id
                        retval = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.Get(uri).then(function (res) { return res.json(); })];
                    case 4:
                        retval = _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 14];
                    case 6: return [4 /*yield*/, this.Post(data, uri).then(function (res) { return res.json(); })];
                    case 7:
                        retval = _b.sent();
                        return [3 /*break*/, 14];
                    case 8: return [4 /*yield*/, this.Post(data, uri).then(function (res) { return res.text(); })];
                    case 9:
                        retval = _b.sent();
                        return [3 /*break*/, 14];
                    case 10: return [4 /*yield*/, this.Put(data, uri).then(function (res) { return res.json(); })];
                    case 11:
                        retval = _b.sent();
                        return [3 /*break*/, 14];
                    case 12: return [4 /*yield*/, this.Delete(uri + '/' + data).then(function (res) { return res.json(); })];
                    case 13:
                        retval = _b.sent();
                        return [3 /*break*/, 14];
                    case 14: return [2 /*return*/, retval];
                    case 15:
                        e_1 = _b.sent();
                        console.log(e_1);
                        return [2 /*return*/, null];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AppService);
    return AppService;
}());

//# sourceMappingURL=appservice.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return const_data; });
var const_data;
(function (const_data) {
    const_data.host_url = 'http://39.104.57.129';
})(const_data || (const_data = {}));
//# sourceMappingURL=application-const.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Chart_js__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_root__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["TabsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["HomePage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UcenterPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["LoginPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["LoanPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["NoldentifyPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ApplycardPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ProfitsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["OrdersPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["RecordsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UinfoPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UsetupPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["CashbackPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UsetupPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["VoucherPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["MyclientPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["RegisterPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["VIPmembersPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["MycardPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["InvfriendsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["CreditCardPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["CardInforPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["FinalpayPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ConfirminfoPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["AddcreditsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ChangecardsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["AdddepositPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ListofbankPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["BranchcardPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UsevoucherPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["StartPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ModifypwdPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["FindpwdPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ResetpwdPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["SetPwdPage"],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["TabsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["HomePage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UcenterPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["LoginPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["LoanPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["NoldentifyPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ApplycardPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ProfitsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["OrdersPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["RecordsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UinfoPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UsetupPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["CashbackPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UsetupPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["VoucherPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["MyclientPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["RegisterPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["VIPmembersPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["MycardPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["InvfriendsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["CreditCardPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["CardInforPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["FinalpayPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ConfirminfoPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["AddcreditsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ChangecardsPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["AdddepositPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ListofbankPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["BranchcardPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["UsevoucherPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["StartPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ModifypwdPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["FindpwdPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["ResetpwdPage"],
                __WEBPACK_IMPORTED_MODULE_5__shared_root__["SetPwdPage"],
            ]
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 249,
	"./af.js": 249,
	"./ar": 250,
	"./ar-dz": 251,
	"./ar-dz.js": 251,
	"./ar-kw": 252,
	"./ar-kw.js": 252,
	"./ar-ly": 253,
	"./ar-ly.js": 253,
	"./ar-ma": 254,
	"./ar-ma.js": 254,
	"./ar-sa": 255,
	"./ar-sa.js": 255,
	"./ar-tn": 256,
	"./ar-tn.js": 256,
	"./ar.js": 250,
	"./az": 257,
	"./az.js": 257,
	"./be": 258,
	"./be.js": 258,
	"./bg": 259,
	"./bg.js": 259,
	"./bn": 260,
	"./bn.js": 260,
	"./bo": 261,
	"./bo.js": 261,
	"./br": 262,
	"./br.js": 262,
	"./bs": 263,
	"./bs.js": 263,
	"./ca": 264,
	"./ca.js": 264,
	"./cs": 265,
	"./cs.js": 265,
	"./cv": 266,
	"./cv.js": 266,
	"./cy": 267,
	"./cy.js": 267,
	"./da": 268,
	"./da.js": 268,
	"./de": 269,
	"./de-at": 270,
	"./de-at.js": 270,
	"./de-ch": 271,
	"./de-ch.js": 271,
	"./de.js": 269,
	"./dv": 272,
	"./dv.js": 272,
	"./el": 273,
	"./el.js": 273,
	"./en-au": 274,
	"./en-au.js": 274,
	"./en-ca": 275,
	"./en-ca.js": 275,
	"./en-gb": 276,
	"./en-gb.js": 276,
	"./en-ie": 277,
	"./en-ie.js": 277,
	"./en-nz": 278,
	"./en-nz.js": 278,
	"./eo": 279,
	"./eo.js": 279,
	"./es": 280,
	"./es-do": 281,
	"./es-do.js": 281,
	"./es.js": 280,
	"./et": 282,
	"./et.js": 282,
	"./eu": 283,
	"./eu.js": 283,
	"./fa": 284,
	"./fa.js": 284,
	"./fi": 285,
	"./fi.js": 285,
	"./fo": 286,
	"./fo.js": 286,
	"./fr": 287,
	"./fr-ca": 288,
	"./fr-ca.js": 288,
	"./fr-ch": 289,
	"./fr-ch.js": 289,
	"./fr.js": 287,
	"./fy": 290,
	"./fy.js": 290,
	"./gd": 291,
	"./gd.js": 291,
	"./gl": 292,
	"./gl.js": 292,
	"./gom-latn": 293,
	"./gom-latn.js": 293,
	"./he": 294,
	"./he.js": 294,
	"./hi": 295,
	"./hi.js": 295,
	"./hr": 296,
	"./hr.js": 296,
	"./hu": 297,
	"./hu.js": 297,
	"./hy-am": 298,
	"./hy-am.js": 298,
	"./id": 299,
	"./id.js": 299,
	"./is": 300,
	"./is.js": 300,
	"./it": 301,
	"./it.js": 301,
	"./ja": 302,
	"./ja.js": 302,
	"./jv": 303,
	"./jv.js": 303,
	"./ka": 304,
	"./ka.js": 304,
	"./kk": 305,
	"./kk.js": 305,
	"./km": 306,
	"./km.js": 306,
	"./kn": 307,
	"./kn.js": 307,
	"./ko": 308,
	"./ko.js": 308,
	"./ky": 309,
	"./ky.js": 309,
	"./lb": 310,
	"./lb.js": 310,
	"./lo": 311,
	"./lo.js": 311,
	"./lt": 312,
	"./lt.js": 312,
	"./lv": 313,
	"./lv.js": 313,
	"./me": 314,
	"./me.js": 314,
	"./mi": 315,
	"./mi.js": 315,
	"./mk": 316,
	"./mk.js": 316,
	"./ml": 317,
	"./ml.js": 317,
	"./mr": 318,
	"./mr.js": 318,
	"./ms": 319,
	"./ms-my": 320,
	"./ms-my.js": 320,
	"./ms.js": 319,
	"./my": 321,
	"./my.js": 321,
	"./nb": 322,
	"./nb.js": 322,
	"./ne": 323,
	"./ne.js": 323,
	"./nl": 324,
	"./nl-be": 325,
	"./nl-be.js": 325,
	"./nl.js": 324,
	"./nn": 326,
	"./nn.js": 326,
	"./pa-in": 327,
	"./pa-in.js": 327,
	"./pl": 328,
	"./pl.js": 328,
	"./pt": 329,
	"./pt-br": 330,
	"./pt-br.js": 330,
	"./pt.js": 329,
	"./ro": 331,
	"./ro.js": 331,
	"./ru": 332,
	"./ru.js": 332,
	"./sd": 333,
	"./sd.js": 333,
	"./se": 334,
	"./se.js": 334,
	"./si": 335,
	"./si.js": 335,
	"./sk": 336,
	"./sk.js": 336,
	"./sl": 337,
	"./sl.js": 337,
	"./sq": 338,
	"./sq.js": 338,
	"./sr": 339,
	"./sr-cyrl": 340,
	"./sr-cyrl.js": 340,
	"./sr.js": 339,
	"./ss": 341,
	"./ss.js": 341,
	"./sv": 342,
	"./sv.js": 342,
	"./sw": 343,
	"./sw.js": 343,
	"./ta": 344,
	"./ta.js": 344,
	"./te": 345,
	"./te.js": 345,
	"./tet": 346,
	"./tet.js": 346,
	"./th": 347,
	"./th.js": 347,
	"./tl-ph": 348,
	"./tl-ph.js": 348,
	"./tlh": 349,
	"./tlh.js": 349,
	"./tr": 350,
	"./tr.js": 350,
	"./tzl": 351,
	"./tzl.js": 351,
	"./tzm": 352,
	"./tzm-latn": 353,
	"./tzm-latn.js": 353,
	"./tzm.js": 352,
	"./uk": 354,
	"./uk.js": 354,
	"./ur": 355,
	"./ur.js": 355,
	"./uz": 356,
	"./uz-latn": 357,
	"./uz-latn.js": 357,
	"./uz.js": 356,
	"./vi": 358,
	"./vi.js": 358,
	"./x-pseudo": 359,
	"./x-pseudo.js": 359,
	"./yo": 360,
	"./yo.js": 360,
	"./zh-cn": 361,
	"./zh-cn.js": 361,
	"./zh-hk": 362,
	"./zh-hk.js": 362,
	"./zh-tw": 363,
	"./zh-tw.js": 363
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 530;

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UltraCreation_ng_ion_swiper__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_marquee__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_toolbar__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_panel__ = __webpack_require__(596);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__UltraCreation_ng_ion_swiper__["a" /* SwiperComp */],
                __WEBPACK_IMPORTED_MODULE_4__component_toolbar__["a" /* PageToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__component_panel__["a" /* PagePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_3__component_marquee__["a" /* PageMarqueeComponent */],
            ],
            entryComponents: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__UltraCreation_ng_ion_swiper__["a" /* SwiperComp */],
                __WEBPACK_IMPORTED_MODULE_4__component_toolbar__["a" /* PageToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__component_panel__["a" /* PagePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_3__component_marquee__["a" /* PageMarqueeComponent */],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageMarqueeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UltraCreation_Core_TypeInfo__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageMarqueeComponent = (function () {
    function PageMarqueeComponent() {
    }
    PageMarqueeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.Animate(); });
    };
    PageMarqueeComponent.prototype.Animate = function () {
        var speed = 10;
        var _MARQUEE = this.contentRef.nativeElement, _UL = _MARQUEE.querySelector('ul');
        _UL.innerHTML = _UL.innerHTML + _UL.innerHTML + _UL.innerHTML;
        if (!__WEBPACK_IMPORTED_MODULE_1__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.Direction)) {
            var ContentWidth = _UL.getBoundingClientRect().width / 3;
            if (ContentWidth <= 0)
                return;
            _UL.style.animationDuration = ContentWidth / speed * 1000 + "ms";
        }
        else {
            var ContentHeight_1 = _UL.clientHeight, _NODES = _UL.children.length, _PERH_1 = ContentHeight_1 / _NODES, _TOP_1 = 0;
            var Animation_1 = function () {
                _TOP_1 -= _PERH_1;
                _UL.style.transform = 'translateY(' + _TOP_1 + 'px)';
                if (Math.abs(_TOP_1) === (ContentHeight_1 - _PERH_1))
                    _TOP_1 = _PERH_1;
                setTimeout(function () { return Animation_1(); }, 3000);
            };
            Animation_1();
        }
    };
    Object.defineProperty(PageMarqueeComponent.prototype, "_textColor", {
        get: function () {
            if (__WEBPACK_IMPORTED_MODULE_1__UltraCreation_Core_TypeInfo__["a" /* TypeInfo */].Assigned(this.TextColor))
                return 'text-' + this.TextColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageMarqueeComponent.prototype, "Content", {
        set: function (data) {
            this._content = data;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PageMarqueeComponent.prototype, "TextColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PageMarqueeComponent.prototype, "Direction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], PageMarqueeComponent.prototype, "Content", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PageMarqueeComponent.prototype, "contentRef", void 0);
    PageMarqueeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-marquee',template:/*ion-inline-start:"D:\app-project\58pay\src\shared\component\marquee\index.html"*/'\n\n<ion-row class="bgc-light" m-b-10>\n\n    <ion-col col-3>本日分润</ion-col>\n\n    <ion-col col-9 id="roll-bar">\n\n        <div f-1-2>￥<span f-1-6>{{item.title}}</span><span></span>{{item.content}}</div>\n\n    </ion-col>\n\n</ion-row>'/*ion-inline-end:"D:\app-project\58pay\src\shared\component\marquee\index.html"*/ }),
        __metadata("design:paramtypes", [])
    ], PageMarqueeComponent);
    return PageMarqueeComponent;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageToolbarComponent = (function () {
    function PageToolbarComponent() {
        // @Input()  FlexEnd: Boolean = false;
        this.CoverColor = false;
        this.TitleAlign = 'center';
        this.AppIcon = false;
        this.BtnTextEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.BtnIconEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PageToolbarComponent.prototype, "CoverColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PageToolbarComponent.prototype, "HasBack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PageToolbarComponent.prototype, "Title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PageToolbarComponent.prototype, "TitleAlign", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PageToolbarComponent.prototype, "AppIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PageToolbarComponent.prototype, "BtnIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PageToolbarComponent.prototype, "BtnText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PageToolbarComponent.prototype, "BtnTextEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PageToolbarComponent.prototype, "BtnIconEvent", void 0);
    PageToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'app-toolbar',template:/*ion-inline-start:"D:\app-project\58pay\src\shared\component\toolbar\index.html"*/'<div class="app-toolbar-primary" [class.cover-color]="CoverColor">\n  <div class="toolbar-buttons">\n    <ng-template [ngIf]="HasBack">\n      <button ion-button class="back-bar-button" navPop tappable></button>\n    </ng-template>\n  </div>\n  <div class="toolbar-title">\n    <span>{{Title}}</span>\n  </div>\n  <div class="toolbar-buttons">\n    <ng-template [ngIf]="BtnIcon">\n      <button ion-button (click)="BtnIconEvent.emit()" tappable>\n        <ion-icon [class.app-icon]="AppIcon" [innerHTML]="BtnIcon"></ion-icon>\n      </button>\n    </ng-template>\n    <ng-template [ngIf]="BtnText">\n      <button ion-button (click)="BtnTextEvent.emit()" tappable>\n        {{BtnText}}\n      </button>\n    </ng-template>\n  </div>\n</div>\n'/*ion-inline-end:"D:\app-project\58pay\src\shared\component\toolbar\index.html"*/ }),
        __metadata("design:paramtypes", [])
    ], PageToolbarComponent);
    return PageToolbarComponent;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagePanelComponent = (function () {
    function PagePanelComponent() {
        this.BtnEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PagePanelComponent.prototype, "Name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PagePanelComponent.prototype, "Title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PagePanelComponent.prototype, "Opacity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PagePanelComponent.prototype, "BtnTxt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PagePanelComponent.prototype, "BtnEvent", void 0);
    PagePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'app-panel',template:/*ion-inline-start:"D:\app-project\58pay\src\shared\component\panel\index.html"*/'<ion-grid class="bgc-grad-primary">\n    <ion-row column text-center class="cmp-panel" [ngStyle]="{\'opacity\':Opacity}">\n        <ion-col><span class="name">{{Name}}</span></ion-col>\n        <ion-col><span class="title" [innerHTML]="Title"></span></ion-col>\n        <ion-col>\n            <ng-template [ngIf]="BtnTxt">\n                <button ion-button small outline color="light" m-b-15 (click)="BtnEvent.emit()" tappable>{{BtnTxt}}</button>\n            </ng-template>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n'/*ion-inline-end:"D:\app-project\58pay\src\shared\component\panel\index.html"*/ }),
        __metadata("design:paramtypes", [])
    ], PagePanelComponent);
    return PagePanelComponent;
}());

//# sourceMappingURL=index.js.map

/***/ })

},[366]);
//# sourceMappingURL=main.js.map