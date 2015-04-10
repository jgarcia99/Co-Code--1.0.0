(function () {

    'use strict';

    angular.module('coCode')

    .controller('PostsController', function ($state, $firebaseObject, $scope, $firebaseArray, $stateParams, Auth, $modal) {
        var vm = this;
        var userInfo = new Firebase('https://co-code.firebaseio.com/users');

        vm.obj = $firebaseArray(userInfo);
        vm.logOut = Auth.logout;

        vm.userArray = {};

        $scope.posts = {};

        $scope.post = function (size) {

            var modalInstance = $modal.open({
                templateUrl: '/app/posts/posts.modal.html',
                controller: 'PostsModalController',
                size: size,
                resolve: {
                    data: function () {
                        return {
                            tech: $scope.tech,
                            reason: $scope.reason,
                            location: $scope.location,
                            checkin: $scope.checkin,
                            checkout: $scope.checkout
                        };
                    }
                }
            })



            modalInstance.result.then(function (userInfo) {

                $scope.obj = $firebaseArray(userInfo);
                console.log($scope.obj)

                $scope.userInfo = {};

                $scope.userInfo = {
                    reason: " ",
                    tech: " ",
                    location: "",
                    checkin: "",
                    checkout: ""
                };

                $scope.addUserInfo = function () {
                    userInfo.update({
                        reason: $scope.reason,
                        tech: $scope.tech,
                        location: $scope.location,
                        checkin: $scope.checkin,
                        checkout: $scope.checkout

                    })

                };


            });
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

})();
