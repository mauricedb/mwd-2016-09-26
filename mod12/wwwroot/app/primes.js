for (var i = 2; i < 1000000; i++) {
    var isPrime = true;

    for (var j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
    //     $('<li>').text(i).prependTo('#primes');         
        postMessage(i);
    }
}
