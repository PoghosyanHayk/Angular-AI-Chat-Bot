"use strict";
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
exports.__esModule = true;
var ApiAiBaseError = /** @class */ (function (_super) {
    __extends(ApiAiBaseError, _super);
    function ApiAiBaseError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.stack = new Error().stack;
        return _this;
    }
    return ApiAiBaseError;
}(Error));
exports.ApiAiBaseError = ApiAiBaseError;
var ApiAiClientConfigurationError = /** @class */ (function (_super) {
    __extends(ApiAiClientConfigurationError, _super);
    function ApiAiClientConfigurationError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ApiAiClientConfigurationError";
        return _this;
    }
    return ApiAiClientConfigurationError;
}(ApiAiBaseError));
exports.ApiAiClientConfigurationError = ApiAiClientConfigurationError;
var ApiAiRequestError = /** @class */ (function (_super) {
    __extends(ApiAiRequestError, _super);
    function ApiAiRequestError(message, code) {
        if (code === void 0) { code = null; }
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = code;
        _this.name = "ApiAiRequestError";
        return _this;
    }
    return ApiAiRequestError;
}(ApiAiBaseError));
exports.ApiAiRequestError = ApiAiRequestError;
