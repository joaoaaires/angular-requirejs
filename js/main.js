require.config({
    paths: {
        'angular': '../lib/angular/angular.min',
        'angular-route': '../lib/angular/angular-route.min'
    },
    shim: {
        'angular-route': {
            deps: ['angular']
        },
        'angular': {
            exports: 'angular'
        }
    }
});

require(['angular', 'app'], function (angular) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
});