"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MyAppAppComponent = (function () {
    function MyAppAppComponent() {
        this.title = 'my-app works!';
    }
    MyAppAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app-app',
            templateUrl: 'my-app.component.html',
            styleUrls: ['my-app.component.css']
        })
    ], MyAppAppComponent);
    return MyAppAppComponent;
}());
exports.MyAppAppComponent = MyAppAppComponent;
