(function () {

    'use strict';

    angular.module('coCode', ['ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'firebase', ])
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
            })

            .state('tweets', {
                url: '/tweets',
                templateUrl: 'app/twitter/twitter.html',
                controller: 'TwitterController',
                controllerAs: 'vm'
            });

            $urlRouterProvider.otherwise('/');
        })

    .factory('Auth', function ($firebaseObject, $state) {
        var auth = new Firebase('https://co-code.firebaseio.com/users');
        return {
            /**
             * Wrapper for `onAuth` that filters the `auth` object
             * through the `updateUser()` function
             */
            onAuth: function (creds) {
                auth.onAuth(function (data) {
                    creds(updateUser(data));
                });
            },

            twitLogin: function () {

                return auth.authWithOAuthPopup("twitter", function (error, authData) {
                    console.log(authData)
                    if (error) {
                        console.log("Login Failed!", error);
                    } else {
                        console.log("Authenticated successfully with payload:", authData);
                    }
                }, {
                    remember: "sessionOnly"
                })
            },

            ghLogin: function () {

                return auth.authWithOAuthPopup("github", function (error, authData) {
                    console.log(authData)
                    if (error) {
                        console.log("Login Failed!", error);
                    } else {
                        $state.go('posts');
                        console.log("Authenticated successfully with payload:", authData);
                    }
                }, {
                    remember: "sessionOnly"
                })
            },
            /** Wrapper for the unauth() functionality to logout
             */
            logout: function () {
                auth.unauth();
                $state.go('login')
                console.log("loggedout")
            },
            /** Wrapper to allow the main controller to check if a user is currently
             * Logged in currently
             */
            loggedIn: function () {
                if (auth.getAuth()) {
                    return true;
                }
            }
        }; // end of return block



        function updateUser(authdUser) {
            console.log(authdUser)
            if (authdUser === null) {
                return null;
            };


            var user = auth.child(authdUser.github.id);

            var ghCach = authdUser.github.cachedUserProfile;

            user.update({

                uid: authdUser.github.id,

                gh: authdUser.github,

                name: authdUser.github.displayName,

                handle: authdUser.github.username,

                photo: authdUser.github.cachedUserProfile.avatar_url,

                email: authdUser.github.cachedUserProfile.email,

                followers: authdUser.github.cachedUserProfile.followers,

                following: authdUser.github.cachedUserProfile.following,

                company: authdUser.github.cachedUserProfile.company,

                location: authdUser.github.cachedUserProfile.location,

                url: authdUser.github.cachedUserProfile.html_url,


            });

            user = $firebaseObject(

                auth.child(authdUser.github.id)
            );

            return user;
        }
    });

})();
