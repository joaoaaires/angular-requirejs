require.config({
    paths: {
        'angular': '../lib/angular/angular.min',
        'angular-route': '../lib/angular/angular-route.min',
        'amd': '../lib/amd/angularAMD.min'
    },
    shim: {
        'amd': ['angular'],
        'angular-route': ['angular']
    },
    deps: ['app']
});
