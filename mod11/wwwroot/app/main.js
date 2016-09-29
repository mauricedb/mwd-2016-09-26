(function(){

    angular
        .module('myApp', [])
        .controller('CatsController', function($scope) {
            $scope.cats = [];
            $scope.newCat = '';

            // if (sessionStorage.cats){
            //     $scope.cats = JSON.parse(sessionStorage.cats);
            // }
            // for(var i = 0 ; i< localStorage.length; i++){
            //     try {
            //         $scope.cats.push(JSON.parse(localStorage[localStorage.key(i)]));
            //     }
            //     catch (err) {
            //         console.error(err);
            //     }
            // }
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

                // localStorage[cat.name] = JSON.stringify(cat);
                // sessionStorage.cats= JSON.stringify($scope.cats);

                localforage.setItem(cat.name, cat);
            }
        });

}());