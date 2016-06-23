define(['angular', 'angular-route'], function (angular) {
    'use strict';

    var app = angular.module('app', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
                .when('/login', {templateUrl: "views/home.html", controller: 'login'})
                .when('/', {templateUrl: "views/home.html"})
                .otherwise({redirectTo: '/login'});
    });
    return app;
});