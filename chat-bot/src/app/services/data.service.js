"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
// Ai api Client
var ApiAiClient_1 = require("../client/ApiAiClient");
// RxJs modules
var rxjs_1 = require("rxjs");
var Message = /** @class */ (function () {
    function Message(content, sentBy) {
        this.content = content;
        this.sentBy = sentBy;
    }
    return Message;
}());
exports.Message = Message;
var ESendBy;
(function (ESendBy) {
    ESendBy["user"] = "user";
    ESendBy["bot"] = "bot";
})(ESendBy = exports.ESendBy || (exports.ESendBy = {}));
var DataService = /** @class */ (function () {
    function DataService() {
        this.conversation = new rxjs_1.BehaviorSubject([]);
    }
    DataService.prototype.converse = function (msg) {
        var _this = this;
        var userMessage = new Message(msg, ESendBy.user);
        this.update(userMessage);
        return this.client.textRequest(msg)
            .then(function (res) {
            var speech = res.result.fulfillment.speech;
            var botMessage = new Message(speech, ESendBy.bot);
            _this.update(botMessage);
        });
    };
    DataService.prototype.update = function (msg) {
        this.conversation.next([msg]);
    };
    DataService.prototype.init = function (token) {
        this.client = new ApiAiClient_1.ApiAiClient({ accessToken: token });
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
