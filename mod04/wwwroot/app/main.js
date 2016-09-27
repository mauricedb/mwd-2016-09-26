(function(){

    angular.module('myApp', [])
        .service('CatsService', function() {
                    return {
                        getData: function(){
                            return {
                                name: 'Diego'
                            };
                        }
                    }
        })
        .controller('DemoController', ['$scope', 'CatsService', function(a, b) {
            console.log('In the controller');

            a.cat = b.getData();

            a.cats = [
                 a.cat,
                {
                    name: 'Zorro'
                },
            ]
        }])

}());