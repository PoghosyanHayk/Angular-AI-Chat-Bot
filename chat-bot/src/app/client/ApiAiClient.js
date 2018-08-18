"use strict";
exports.__esModule = true;
var ApiAiConstants_1 = require("./ApiAiConstants");
var TextRequest_1 = require("./TextRequest");
var Errors_1 = require("./Errors");
var ApiAiConstants_2 = require("./ApiAiConstants");
exports.ApiAiConstants = ApiAiConstants_2.ApiAiConstants;
var ApiAiClient = /** @class */ (function () {
    function ApiAiClient(options) {
        if (!options || !options.accessToken) {
            throw new Errors_1.ApiAiClientConfigurationError("Access token is required for new ApiAi.Client instance");
        }
        this.accessToken = options.accessToken;
        this.apiLang = options.lang || ApiAiConstants_1.ApiAiConstants.DEFAULT_CLIENT_LANG;
        this.apiVersion = options.version || ApiAiConstants_1.ApiAiConstants.DEFAULT_API_VERSION;
        this.apiBaseUrl = options.baseUrl || ApiAiConstants_1.ApiAiConstants.DEFAULT_BASE_URL;
        this.sessionId = options.sessionId || this.guid();
    }
    ApiAiClient.prototype.textRequest = function (query, options) {
        if (options === void 0) { options = {}; }
        if (!query) {
            throw new Errors_1.ApiAiClientConfigurationError("Query should not be empty");
        }
        options.query = query;
        return new TextRequest_1["default"](this, options).perform();
    };
    ApiAiClient.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ApiAiClient.prototype.getApiVersion = function () {
        return (this.apiVersion) ? this.apiVersion : ApiAiConstants_1.ApiAiConstants.DEFAULT_API_VERSION;
    };
    ApiAiClient.prototype.getApiLang = function () {
        return (this.apiLang) ? this.apiLang : ApiAiConstants_1.ApiAiConstants.DEFAULT_CLIENT_LANG;
    };
    ApiAiClient.prototype.getApiBaseUrl = function () {
        return (this.apiBaseUrl) ? this.apiBaseUrl : ApiAiConstants_1.ApiAiConstants.DEFAULT_BASE_URL;
    };
    ApiAiClient.prototype.setSessionId = function (sessionId) {
        this.sessionId = sessionId;
    };
    ApiAiClient.prototype.getSessionId = function () {
        return this.sessionId;
    };
    /**
     * generates new random UUID
     * @returns {string}
     */
    ApiAiClient.prototype.guid = function () {
        var s4 = function () { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); };
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
            s4() + "-" + s4() + s4() + s4();
    };
    return ApiAiClient;
}());
exports.ApiAiClient = ApiAiClient;
