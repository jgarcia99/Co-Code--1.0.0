angular.module('coCode')
    .controller('ProfileController', function ($state, $firebaseObject, $scope, $firebaseArray, $stateParams, Auth) {
        Auth.onAuth(function (user) {
            $scope.user = user;
            if (user === null) {
                console.log('null')
            } else {
                console.log(user)

            }
        });
    });
