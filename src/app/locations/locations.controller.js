'use strict'

angular.module('coCode')

.controller('LocationsController', function ($state, $firebaseObject, $scope, $firebaseArray, $stateParams, Auth) {
    var vm = this;
    var userInfo = new Firebase('https://co-code.firebaseio.com/users');


    $scope.slides = [
        {
            image: 'https://orlando-life.com/sites/default/files/Stardust_20120402_0009.jpg'
        },
        {
            image: 'http://static1.squarespace.com/static/53050553e4b07e4708f6858c/t/5318b4dfe4b0fa5080a9f8aa/1394128095934/4613916-Stardust_Coffee_and_Video_Orlando.jpg'
        },
        {
            image: 'http://francisbcookin.com/content/images/2014/Jul/DSC_0192-1.JPG'
        },
        {
            image: 'http://a4.urbancdn.com/w/s/Qo/4FVmu6amvhEjZF-640m.jpg'
        }
    ];

    $scope.slides2 = [
        {
            image: 'http://amplifiedculture.com/wp-content/uploads/2011/02/Austins_Coffee-1-e1301102123170.jpg'
        },
        {
            image: 'http://amplifiedculture.com/wp-content/uploads/2011/02/Austins_Coffee-6-e1301101795213.jpg'
        },
        {
            image: 'http://rivista-cdn.orlandomagazine.com/Orlando-Magazine/April-2014/A-Way-With-Words/Open-Words-099.jpg?ver=1395082914'
        },
        {
            image: 'http://writingandrhetoric.cah.ucf.edu/imprint/wp-content/uploads/2014/11/AustinsCoffee.jpg'
        }
    ];

    $scope.slides3 = [
        {
            image: 'http://honestcooking.com/wp-content/uploads/2013/10/IMG_1146b.jpg'
        },
        {
            image: 'http://rooteddeepbook.com/wp-content/uploads/2013/10/downtown_credo-4-e1300742742565.jpg'
        },
        {
            image: 'http://mealsandmiles.com/wp-content/uploads/2011/10/IMG_0142.jpg'
        },
        {
            image: 'http://amplifiedculture.com/wp-content/uploads/2011/02/downtown_credo-6.jpg'
        }
    ];

    $scope.slides4 = [
        {
            image: 'http://mealsandmiles.com/wp-content/uploads/2011/03/IMG_5009.jpg'
        },
        {
            image: 'http://www.orlandosentinel.com/media/photo/2009-07/48352153.jpg'
        },
        {
            image: 'http://vp.cdn.cityvoterinc.com/g/00-00-00-49-10-21-491021_388557.jpg'
        },
        {
            image: 'http://www.orlandoweekly.com/binary/0431/1472263.jpg'
        }
    ];



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
