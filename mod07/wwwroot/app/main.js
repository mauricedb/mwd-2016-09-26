(function(){

    angular
        .module('myApp', ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider.when('/one', {
                controller: 'OneController',
                templateUrl: '/one.html' 
            });

            $routeProvider.when('/two', {
                controller: 'TwoController',
                templateUrl: '/two.html' 
            });
            
            $routeProvider.otherwise({
                redirectTo: '/one'
            }); 
        })
        .controller('OneController', function($scope, $location) {
            $scope.msg = 'I am one';

            $scope.switch = function() {
                $location.path('/two')
            }
        })
        .controller('TwoController', function($scope, $location) {
            $scope.msg = 'I am two';

            $scope.switch = function() {
                $location.path('/one')
            }
        })

}());