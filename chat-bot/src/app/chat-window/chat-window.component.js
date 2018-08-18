"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/internal/operators");
var ChatWindowComponent = /** @class */ (function () {
    function ChatWindowComponent(dataService) {
        this.dataService = dataService;
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.init(this.token);
        this.allMessages = this.dataService.conversation.asObservable()
            .pipe(operators_1.scan(function (acc, val) {
            setTimeout(function () {
                _this.msgArea.nativeElement.scrollTop = _this.msgArea.nativeElement.scrollHeight;
            });
            return acc.concat(val);
        }));
        this.msg.subscribe(function (msg) {
            _this.dataService.converse(msg);
        });
    };
    __decorate([
        core_1.ContentChild(core_1.TemplateRef)
    ], ChatWindowComponent.prototype, "template");
    __decorate([
        core_1.Input()
    ], ChatWindowComponent.prototype, "msgTemplate");
    __decorate([
        core_1.Input()
    ], ChatWindowComponent.prototype, "inputTemplate");
    __decorate([
        core_1.Input()
    ], ChatWindowComponent.prototype, "msg");
    __decorate([
        core_1.Input()
    ], ChatWindowComponent.prototype, "token");
    __decorate([
        core_1.ViewChild('msgArea')
    ], ChatWindowComponent.prototype, "msgArea");
    ChatWindowComponent = __decorate([
        core_1.Component({
            selector: 'app-chat-window',
            templateUrl: './chat-window.component.html',
            styleUrls: ['./chat-window.component.css']
        })
    ], ChatWindowComponent);
    return ChatWindowComponent;
}());
exports.ChatWindowComponent = ChatWindowComponent;
