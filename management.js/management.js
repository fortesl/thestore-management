/**
 * Name: management-app.js
 * Created by lfortes on 2/8/2015.
 */

(function () {
    'use strict';

    angular
        .module('management', ['ngRoute', 'pascalprecht.translate', 'ui.bootstrap', 'angularSpinner', 'lfFirebaseAuth', 'firebase', 'directives.inputMatch'])

        .constant('FIREBASE_URL',  'https://thestore.firebaseio.com')

        .config(['$routeProvider', '$httpProvider', '$translateProvider',
            function($routeProvider, $httpProvider, $translateProvider) {

                $routeProvider.
                    when('/add-product', {
                        //resolve:  {
                        //    isLoggedIn: ['$q', 'lfFirebaseAuthService', function($q, lfFirebaseAuthService) {
                        //        if (!lfFirebaseAuthService.isLoggedIn()) {
                        //            return $q(function(resolve, reject) {
                        //                reject('user is not logged in');
                        //            });
                        //        }
                        //    }]
                        //},
                        templateUrl: 'modules/management-module/views/add-product.html',
                        controller: 'AddProductController as addProductCtrl'
                    }).
                    otherwise({
                        redirectTo: '/add-product'
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
/**
 * Name: add-product-controller.js
 * Created by lfortes on 2/13/2015.
 */

(function () {
    'use strict';

    angular.module('management').controller('AddProductController', [ 'ProductManagementService', 'ManagementLabels',
        function(ProductManagementService, ManagementLabels) {
        var self = this;

        self.init = function () {

            self.labels = ManagementLabels;
            self.departments = [];
            self.categories = [];

            ProductManagementService.getDepartments().then(function(result) {
                self.departments = result;
                localizeOther(self.departments);
            });

            ProductManagementService.getCategories().then(function(result) {
                self.categories = result;
                localizeOther(self.categories);
            });

            self.submitFormLabel = self.labels.continueForm();

        };

        var localizeOther = function(list) {
            var listOther = false;
            angular.forEach(list, function(item) {
                if (item.id) {
                    item.label = self.labels.others();
                    listOther = true;
                }
            });

            //if (!listOther) {
            //    ProductManagementService.addListItem(list, {label: 'Other', id: 2000});
            //}
        };

        self.add = function() {

            if (self.selectedDepartment && !self.selectedCategory) {
                if (self.newDepartmentName) {
                    ProductManagementService.addListItem(self.departments, {label: self.newDepartmentName}, self.selectedDepartment);
                }
            }
        };

        self.init();
    }]);

})();
/**
 * Name: management-labels.js
 * Created by lfortes on 2/13/2015.
 */

(function () {
    'use strict';

    angular.module('management').factory('ManagementLabels', ['$translate', function($translate) {

        function continueForm() {
            return $translate.instant('CONTINUE');
        }

        function finishForm() {
            return $translate.instant('ADD');
        }

        function other() {
            return $translate.instant('OTHER');
        }
        function yes() {
            return $translate.instant('YES');
        }
        function no() {
            return $translate.instant('NO');
        }

        function addDepartment() {
            return $translate.instant('ADD_DEPARTMENT');
        }

        function confirmNewDepartment() {
            return $translate.instant(('CONFIRM_NEW_DEPARTMENT'));
        }

        function enterNewDepartment() {
            return $translate.instant(('ENTER_NEW_DEPARTMENT'));
        }

        function repeatNewDepartment() {
            return $translate.instant(('REPEAT_NEW_DEPARTMENT'));
        }

        function departmentTooltip() {
            return $translate.instant(('DEPARTMENT_TOOLTIP'));
        }
        function newDepartment() {
            return $translate.instant(('NEW_DEPARTMENT'));
        }
        function departmentMismatch() {
            return $translate.instant(('DEPARTMENT_MISMATCH'));
        }


        function addCategory() {
            return $translate.instant('ADD_CATEGORY');
        }

        function confirmNewCategory() {
            return $translate.instant(('CONFIRM_NEW_CATEGORY'));
        }

        function enterNewCategory() {
            return $translate.instant(('ENTER_NEW_CATEGORY'));
        }

        function repeatNewCategory() {
            return $translate.instant(('REPEAT_NEW_CATEGORY'));
        }

        function categoryTooltip() {
            return $translate.instant(('CATEGORY_TOOLTIP'));
        }
        function newCategory() {
            return $translate.instant(('NEW_CATEGORY'));
        }
        function categoryMismatch() {
            return $translate.instant(('CATEGORY_MISMATCH'));
        }

        function selectCategory() {
            return $translate.instant('SELECT_CATEGORY');
        }

        return {
            addProduct: function() { return $translate.instant('ADD_PRODUCT'); },
            finishForm: finishForm,
            continueForm: continueForm,
            other: other,
            yes: yes,
            no: no,

            selectDepartment: function() { return $translate.instant('SELECT_DEPARTMENT'); },
            addDepartment: addDepartment,
            confirmNewDepartment: confirmNewDepartment,
            enterNewDepartment: enterNewDepartment,
            repeatNewDepartment: repeatNewDepartment,
            newDepartment: newDepartment,
            departmentTooltip: departmentTooltip,
            departmentMismatch: departmentMismatch,

            selectCategory: selectCategory,
            addCategory: addCategory,
            confirmNewCategory: confirmNewCategory,
            enterNewCategory: enterNewCategory,
            repeatNewCategory: repeatNewCategory,
            newCategory: newCategory,
            categoryTooltip: categoryTooltip,
            categoryMismatch: categoryMismatch

        };
    }]);

})();
/**
 * Name: product-management-sevice.js
 * Created by lfortes on 2/13/2015.
 */

(function () {
    'use strict';

    angular.module('management').factory('ProductManagementService', ['$q', 'FIREBASE_URL', '$firebase', function($q, FIREBASE_URL, $firebase) {

        //function getDepartmentsM() {
        //    return $q(function(resolve) {
        //        resolve({status: 'success', departments: [{'label': 'Electronics', id: '1'}, {'label': 'Books', id: '2'}]});
        //    });
        //}

        function getDepartments() {
            return $q(function(resolve) {
                var ref = new Firebase(FIREBASE_URL + '/departments');
                var departments = $firebase(ref).$asArray();
                resolve(departments);
            });

        }

        function addListItem(list, item, selected) {
            list.$add(item).then(function(ref) {
                if (selected) {
                    selected = list[list.$indexFor(ref.key())];
                }
            });
        }

        function getCategories() {
            return $q(function(resolve) {
                var ref = new Firebase(FIREBASE_URL + '/categories');
                var categories = $firebase(ref).$asArray();
                resolve(categories);
            });

        }

        return {
            getDepartments: getDepartments,
            addListItem: addListItem,
            getCategories: getCategories
        };
    }]);


})();
/**
 * Name: select-category.js
 * Created by lfortes on 3/16/15.
 */

(function () {
    'use strict';

    angular.module('management').directive('stSelectCategory', function() {
        return {
            restrict: 'E',
            templateUrl: 'modules/management-module/views/select-category.html'
        };
    });


})();
/**
 * Name: select-department.js
 * Created by lfortes on 2/13/2015.
 */

(function () {
    'use strict';

    angular.module('management').directive('stSelectDepartment', function() {
        return {
            restrict: 'E',
            templateUrl: 'modules/management-module/views/select-department.html'
        };
    });


})();