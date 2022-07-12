var x = 300;
var y = 39;
var z = 803;
if (x < y && x < z) {
    console.log(x);
    if (y < z) {
        console.log(y);
        console.log(z);
    } else {                 
        console.log(z);
        console.log(y);
    }
} else if (y < z && y < x) {
    console.log(y);
    if (z < x) {
        console.log(z);
        console.log(x);
    } else {                  
        console.log(z);
    }
} else {                      
    console.log(z);       
    if (x < y) {
        console.log(x);
        console.log(y);
    } else {                  
        console.log(y);
        console.log(x);
    }
}
