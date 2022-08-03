const fruits = new Map ([
    ["apples", 500],
    ["bananas", 200],
    ["oranges", 300]
]);
let text = "";
let f = fruits.forEach((key, value) => {
    text += key + ' = ' + value

});
    

console.log(f);