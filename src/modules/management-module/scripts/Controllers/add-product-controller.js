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