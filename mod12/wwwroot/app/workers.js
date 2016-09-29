$(function(){

    $('#start').click(function(){

        // for (var i = 2; i < 10000; i++) {
        //     var isPrime = true;

        //     for (var j = 2; j < i; j++) {
        //         if (i % j === 0) {
        //             isPrime = false;
        //         }
        //     }

        //     if (isPrime) {
        //         $('<li>').text(i).prependTo('#primes');            
        //     }
        // }

        var w = new Worker('/app/primes.js');
        w.onmessage = function(e){
            $('<li>').text(e.data).prependTo('#primes');
        }
    });    
});
