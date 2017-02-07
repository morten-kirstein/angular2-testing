"use strict";
var testing_1 = require('@angular/core/testing');
var my_app_component_1 = require('../app/my-app.component');
testing_1.beforeEachProviders(function () { return [my_app_component_1.MyAppAppComponent]; });
testing_1.describe('App: MyApp', function () {
    testing_1.it('should create the app', testing_1.inject([my_app_component_1.MyAppAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'my-app works!\'', testing_1.inject([my_app_component_1.MyAppAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('my-app works!');
    }));
});
