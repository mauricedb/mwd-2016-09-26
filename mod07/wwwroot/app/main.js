(function(){

    angular
        .module('myApp', [])
        .controller('OneController', function($scope, $rootScope) {
            $scope.msg = 'I am one';

            $scope.switch = function() {
                $rootScope.page = 2;
            }
        })
        .controller('TwoController', function($scope, $rootScope) {
            $scope.msg = 'I am two';

            $scope.switch = function() {
                $rootScope.page = 1;
            }
        })

}());