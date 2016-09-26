var sum = 0.1 + 0.2;

console.log(sum)

if (sum == 0.3) {
    console.log('is 0.3');
} else {
    console.log('is not 0.3');
}


var obj= {};

if (obj) {
    console.log(obj);
}


var arr = [1];

arr[5] = 2;

if (arr.length) {
    console.log(arr);
    console.log(arr.length)
    console.log(arr[100]);
    
}

console.log(1 == '1');
console.log(false == 'false');
console.log(true == 'true');


console.log(new Date(2016, 1, 31));


var stuff = {};
console.log(!!stuff);



function test() {
    return {
        name: 'Maurice'
    }
}




console.log(test());

[].forEach(function() {})








var me = {
    firstName :'Maurice',
    lastName: 'de Beijer'
};

console.log(me.firstName);

console.log(me['firstName']);

console.log(Object.keys(me));


console.log(window.xx1);

function scopes() {
    // 'use strict';
     xx1 = 1; // This is a global

    console.log(xx2);

    if (false) {
        var xx2 = 12;
    }
    console.log(xx2);
}

scopes();


console.log(xx1);
console.log(window.xx1);



(function(){
    'use strict';
    var xx3 = 13;

    console.log(xx3);
    
}())



function outer() {
    var counter = 0;

    return{
        print: function(){
            console.log(counter);
        },
        add: function(){
            counter++;
        }
    }
}

var o  = outer();
o.print();
o.add();
o.print();
o.add();
o.print();
o.add();
o.print();
o = undefined;

+31617836226
