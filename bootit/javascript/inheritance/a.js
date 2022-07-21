class tata{
    car1;
    car2;
    car3;
    constructor(car1, car2, car3 ){
        this.car1 = car1;
        this.car2 = car2;
        this.car3 = car3;

    }

}

let t1 = new tata("Etios", "nexon", "altroz");

console.log(t1);

class land_rover extends tata{
    constructor(car1, car2, car3, car4, car5, car6 ){
        super(car1 ,car2, car3 );
        this.car4 = car4;
        this.car5 = car5;
        this.car6 = car6;

    }

}
let t2 = new land_rover("Etios", "nexon", "altroz", "discovery", "range_rover", "jaguar");
console.log(t2);