(function(){

    angular
        .module('myApp', [])
        .controller('MoviesController', function($http, $scope){

            $http.get('api/movies')
                .then(function(rsp) { 
                    $scope.movies = rsp.data;
                    console.table(rsp.data)
                })

        })
        

}());