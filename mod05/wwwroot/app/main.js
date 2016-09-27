(function(){

    angular
        .module('myApp', [])
        .directive('myDemo', function(){

            return {
                restrict: 'AE',
                transclude: true,
                scope: true,
                templateUrl: '/app/my-demo.html',
                link:  function(scope, element){
                    console.log('myDemo is linking');
                    element.bind('click', function(){
                        console.log('I was clicked');
                    })
            }
            }
        })

}());