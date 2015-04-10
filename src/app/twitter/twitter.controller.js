(function () {
    'use strict';

    angular
        .module('coCode')
        .controller('TwitterController', function ($state, $firebaseObject, $firebaseArray, $stateParams, Auth, $modal, $scope, $log, Restangular) {

            var vm = this;
            vm.twitLogin = Auth.twitLogin;


            var statuses = Restangular.one('statuses');

            var baseStatuses = Restangular.all('/api.twitter.com/1.1/' + user_id);
            baseStatuses.getList().then(function (statuses) {
                vm.allStatuses = statuses;
            });

        });






})();
