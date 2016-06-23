define(['angular', 'angular-route'], function (angular) {
    'use strict';

    var app = angular.module('app', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
                .when('/login', {template: "/views/home/login.html", controller: 'LoginController'})
                .when('/', {template: "/home"})
                .otherwise({redirectTo: '/login'});
    });
    return app;
});