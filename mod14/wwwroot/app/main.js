(function(){

    angular
        .module('myApp', [])
        .controller('CatsController', function($scope) {
            $scope.cats = [];
            $scope.newCat = '';

            localforage.iterate(function(cat){
                 $scope.cats.push(cat);
            }).then(function(){
                $scope.$apply();
            })

            $scope.add = function() {
                var cat = {
                    name: $scope.newCat
                };
            
                $scope.cats.push(cat);
                $scope.newCat = '';

                localforage.setItem(cat.name, cat);
            }
        });

}());