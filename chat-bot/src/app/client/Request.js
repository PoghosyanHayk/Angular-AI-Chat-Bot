"use strict";
exports.__esModule = true;
var Errors_1 = require("./Errors");
var XhrRequest_1 = require("./XhrRequest");
var Request = /** @class */ (function () {
    function Request(apiAiClient, options) {
        this.apiAiClient = apiAiClient;
        this.options = options;
        this.uri = this.apiAiClient.getApiBaseUrl() + "query?v=" + this.apiAiClient.getApiVersion();
        this.requestMethod = XhrRequest_1["default"].Method.POST;
        this.headers = {
            Authorization: "Bearer " + this.apiAiClient.getAccessToken()
        };
        this.options.lang = this.apiAiClient.getApiLang();
        this.options.sessionId = this.apiAiClient.getSessionId();
    }
    Request.handleSuccess = function (xhr) {
        return Promise.resolve(JSON.parse(xhr.responseText));
    };
    Request.handleError = function (xhr) {
        var error = new Errors_1.ApiAiRequestError(null);
        try {
            var serverResponse = JSON.parse(xhr.responseText);
            if (serverResponse.status && serverResponse.status.errorDetails) {
                error = new Errors_1.ApiAiRequestError(serverResponse.status.errorDetails, serverResponse.status.code);
            }
            else {
                error = new Errors_1.ApiAiRequestError(xhr.statusText, xhr.status);
            }
        }
        catch (e) {
            error = new Errors_1.ApiAiRequestError(xhr.statusText, xhr.status);
        }
        return Promise.reject(error);
    };
    Request.prototype.perform = function (overrideOptions) {
        if (overrideOptions === void 0) { overrideOptions = null; }
        var options = overrideOptions ? overrideOptions : this.options;
        return XhrRequest_1["default"].ajax(this.requestMethod, this.uri, options, this.headers)
            .then(Request.handleSuccess.bind(this))["catch"](Request.handleError.bind(this));
    };
    return Request;
}());
exports["default"] = Request;
