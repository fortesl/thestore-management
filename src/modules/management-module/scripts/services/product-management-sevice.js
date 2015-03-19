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

        function getList(path) {
            return $q(function(resolve, reject) {
                var ref = new Firebase(FIREBASE_URL + path);
                var list = $firebase(ref).$asArray();
                list.$loaded().then(function(rlist) {
                    resolve(rlist);
                })
                .catch(function(error) {
                    reject(error);
                });
            });

        }

        function addListItem(list, item, selected) {
            list.$add(item).then(function(ref) {
                if (selected) {
                    selected = list[list.$indexFor(ref.key())];
                }
            });
        }

        return {
            getList: getList,
            addListItem: addListItem
        };
    }]);


})();