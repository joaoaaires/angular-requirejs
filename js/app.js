define(['amd', 'angular-route'], function (amd) {
    var app = angular.module('app', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
                .when('/login', amd.route({
                    templateUrl: 'views/home.html', controller: 'login', controllerUrl: 'controller/login'
                }))
                .when('/', amd.route({
                    templateUrl: 'views/home.html', controller: 'home', controllerUrl: 'controller/home'
                }))
                .otherwise({redirectTo: '/login'});
    });
    return amd.bootstrap(app);
});