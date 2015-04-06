'use strict'

angular.module('coCode')

.controller('PostsController', function ($state, $firebaseObject, $scope, $firebaseArray, $stateParams, Auth, $modal) {
    var vm = this;
    var userInfo = new Firebase('https://co-code.firebaseio.com/users');

    vm.obj = $firebaseArray(userInfo);
    vm.logOut = Auth.logout;

    vm.userArray = {};

    $scope.posts = function (size) {

        var modalInstance = $modal.open({
            templateUrl: '/app/posts/posts.modal.html',
            controller: 'PostsModalController',
            size: size,

        });
        console.log('austin');
    };

    vm.ghLogin = Auth.ghLogin;


    Auth.onAuth(function (user) {
        self.user = user;
        if (user === null) {
            console.log('null')
        } else {
            console.log(user)
        }
    });



});
