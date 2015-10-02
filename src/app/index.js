'use strict';

angular.module('coCode', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'firebase'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm',
            })

        .state('locations', {
            url: '/locations',
            templateUrl: 'app/locations/locations.html',
            controller: 'LocationsController',
            controllerAs: 'vm',
        })

        .state('posts', {
            url: '/posts',
            templateUrl: 'app/posts/posts.html',
            controller: 'PostsController',
            controllerAs: 'vm',
        })

        .state('profile', {
            url: '/profile',
            templateUrl: 'app/profile/profile.html',
            controller: 'ProfileController'
        });

        $urlRouterProvider.otherwise('/');
    });



