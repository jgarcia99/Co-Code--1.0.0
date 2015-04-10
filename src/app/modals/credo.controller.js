(function () {

    'use strict';

    angular.module('coCode')

    .controller('CredoModalController', function ($state, $firebaseObject, $firebaseArray, $stateParams, Auth, $modal, $scope, $log, $modalInstance) {
        var vm = this;
        var userInfo = new Firebase('https://co-code.firebaseio.com/users');


        $scope.ok = function () {
            $modalInstance.close($scope);
        };

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

})();
