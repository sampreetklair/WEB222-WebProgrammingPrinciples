// function declareation
function greeting1(){
    console.log("Hello");
}

greeting1();

function greeting2() {
    return "Hello";
}

greeting2();

var str = greeting2();
console.log(str);
console.log(greeting2());

function greeting3(name){
    return "Hello " + name;
}

console.log(greeting3("Sampreet"));

function sum(n1 = 0,n2 = 0) {
    return n1+n2;
}

// function calling
console.log(sum(3,5));
console.log(sum("3","5"));
console.log(sum(3));
console.log(sum(3,5,8));
console.log(sum());

function sum2() {
    var s = 0;
    for (var i=0; i<arguments.length; i++) {
        s+=arguments[i];
        
    }
    return s;
}

console.log(sum2(3,5,9));

// fucntion expression
console.log(typeof(sum2));

var m = sum2();
console.log(m);
console.log(typeof(m));
var f = sum2;
console.log(typeof(f));
console.log(f(2,3));
f = 22;
console.log(f);

var f2 = function () {
    return "Good Morning";
};

console.log(f2());

// anonymous function
const fun3 = function (n1, n2) {
    return n1+ n2;
};

console.log(fun3(3,5));

// declaring and calling function at the same time
var fun4 = function(n1, n2){
    return n1+ n2;
}(6,9);

console.log(fun4);

// build-in functions
// parseFloat();
console.log(parseFloat("13.40935"));
// parseInt();
console.log(parseInt("123ABC"));
console.log(parseInt(" 1 2 3 4"));
// Number();
console.log(Number("123ABC"));
// String();
console.log((String(1234)));
// isNaN();
console.log(isNaN("1234"));
// isFinite();
console.log(isFinite(Infinity));
console.log(isFinite(28));
// eval();
var x=2;
var y=3;
console.log(x+y);
console.log("x+y");
console.log(eval("x+y"));
// toFixed();
var amount = 165.2546
console.log(amount.toFixed());
console.log(amount.toFixed(2));
console.log(amount.toFixed(5));

// SCOPE
// GLOBAL SCOPE
// If a variable is declared with VAR keyword outside the function, then it will have Global scope.
// If a variable is declared *without* any keyword (var or let), then it has Global Scope. (can come in exam as in the code)

// LOCAL SCOPE
// If a varible is declared with VAR keyword inside the fucntion, then it will have Local Scope.

// var vs let
// LET has block scope, VAR has function scope.
// Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared.

function outer(name){
    function modify(name1){
        name1 = name1.toUpperCase();
        return name1;
    }
    return "Hi "+ modify(name);
}

console.log(outer("Sam"));

count = 0;
function increment() {
    count++;
    return count;
}

// or 
// function increment() {
//     return ++count;
// }

// to secure count by having a local scope
function increment(){
    function inc() {
        count++;
        return count;
    }
    return inc;
}

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());