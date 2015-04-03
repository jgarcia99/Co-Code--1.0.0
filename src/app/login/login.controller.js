'use strict'

angular.module('coCode')

.controller('LoginController', function ($firebaseArray, $firebaseObject, Auth) {
    var vm = this;
    var userInfo = new Firebase('https://co-code.firebaseio.com/users');

    vm.obj = $firebaseArray(userInfo);
    vm.logOut = Auth.logout;

    vm.userArray = {};



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
