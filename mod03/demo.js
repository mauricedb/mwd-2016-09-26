(function() {
    "use strict";
    console.log('Object Oriented JavaScript');
    

    function Cat(name) {
        if (!(this instanceof Cat)) throw new Error('Please use new')

        this.name = name;

    }

    Cat.prototype.sleep = function() {
        console.log(this.name + ' is sleeping');
    }

    var zorro =  new Cat('Zorro');
    zorro.sleep();

} ());