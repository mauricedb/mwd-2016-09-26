(function() {
    // "use strict";
    console.log('Functional JavaScript');
    

    itterate([1,2,3], console.log);

    var sum = 0
    itterate([1,'2' ,3], function(x) {
        sum += x;
    });
    console.log('Sum', sum);

    var product = 1;
    var data2 = [1,2,'3', 4];
    data2[11] = 12;
    itterate(data2, function(x) {
        product *= x;
    });
    console.log('Product', product);

    function itterate(data, fn) {
        for (var i = 0; i < data.length; i++){
            if (data[i]) {
                fn(parseInt(data[i], 10));
            }
        }
    }

console.log(sumFn(1))
console.log(sumFn(1,2))
console.log(sumFn(1,2, 3))

console.log('sumFn.length', sumFn.length);

    function sumFn(){
        // console.log(arguments)
        // return x + y;
// console.log(arguments.callee);
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }



    var people = [

        {city: 'Paris'},
        {city: 'Paris'},
        {city: 'Paris'},
        {city: 'Zoetermeer'},
                {city: 'London'},
                {city: 'London'},

    ];

//    var result =  people.map(function(person){
//         return {
//             city: person.city,
//             count: 1
//         }

//     }).reduce(function(previous, row) {
//         console.log(previous, row);
//         if (previous[row.city]) {
//             previous[row.city].count = previous[row.city].count + row.count;
//         } else {
//             previous[row.city] = row.count;
//         }
//     }, {});

//     console.log(result);



    var xxx = {};

    xxx.bla = 2;
    console.log(xxx.bla);


    var o1 = {
        x: 123,
        fn : function(){
            console.log(this.x);
        }
    }

    o1.fn();

    var fn = o1.fn;
    fn();

    var o2 = {
        x: 'abc',
        f: fn.bind(o1)
    }

    o2.f();


    var f1 = function() {
        return 1;
    }

    var f2 = () => 1;

} ());