(function(){

    angular
        .module('myApp', [])
        .controller('CatsController', function($scope) {
            $scope.cats = [];
            $scope.newCat = '';
            
            $scope.add = function() {
                var cat = {
                    name: $scope.newCat
                };
            
                $scope.cats.push(cat);
                $scope.newCat = '';
            }
        });

}());