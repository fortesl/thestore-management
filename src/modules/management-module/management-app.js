/**
 * Name: management-app.js
 * Created by lfortes on 2/8/2015.
 */

(function () {
    'use strict';

    angular
        .module('management', ['ngRoute', 'pascalprecht.translate', 'angularSpinner'])

        .constant('FIREBASE_URL',  'https://thestore.firebaseio.com')

        .config(['$routeProvider', '$httpProvider', '$translateProvider',
            function($routeProvider, $httpProvider, $translateProvider) {

                $routeProvider.
                    when('/add-product', {
                        templateUrl: 'modules/management-module/views/add-product.html',
                        controller: 'AddProductController as addProductCtrl'
                    });

                // enable http caching
                $httpProvider.defaults.cache = true;

                //language - localization
                $translateProvider.useStaticFilesLoader({
                    prefix: 'i18n/messages_',
                    suffix: '.json'
                });
                $translateProvider.preferredLanguage('en');
            }
        ]);

})();