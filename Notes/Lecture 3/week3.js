// function declaration
function add1(n1, n2) {
    return n1+n2;
}
console.log(add1(2,3));

// function expression
var add2 = function (n1, n2) {
    return n1+n2;
}
console.log(add2(2,3));

// arrow functions
var add3 = (n1,n2) => n1+n2;
console.log(add3(2,3));

var multby2 = n1 => n1*2;
console.log(multby2(3));

var str = "Hello World";
console.log(str);

var str2 = "Hello Sam!"
console.log(str2);

// Creating objects using 
var str3 = new String("See You");
console.log(str3);

// Using dot operater methods/functions on string "Hello World!"
console.log(str.length);
console.log(str.charAt(2));
console.log(str.charCodeAt(2));

var str4 = "Hello " .concat("Tom and "). concat("Sam")
console.log(str4);

str5 = "Hello ".concat(str2, " Welcome");
console.log(str5);

var str1 = "Welcome to Toronto";
console.log(str1.indexOf('to'));
console.log(str1.lastIndexOf('to'));
console.log(str1.lastIndexOf('Hello'));

var words = str1.split(' ');
console.log(words);

var words1 = str1.split(/\s+/);
console.log(words1);

// Cascading
var str1 = "Welcome to Toronto";
console.log(str1.substr(3,6));
console.log(str1.substring(3,6));
console.log(str1.substring(3));
console.log(str1.toUpperCase());
console.log("      Hello       ".trim());
console.log("      Hello       ".trim().toUpperCase().charAt(1));

// Prototype
String.prototype.greeting = function(){
    return "Hello " + this
};

console.log("Sam".greeting())

// Regular expressions
// Anything between forward slashes (//) is a regular expression.
var str1 = "Welcome to Toronto"
var reg1 = /to/;
console.log(reg1.test(str1));
var reg2 = /TO/;
console.log(reg2.test(str1));
var reg3 = /TO/i;
console.log(reg3.test(str1));
var reg4 = /Toronto/;
console.log(reg4.test(str1));
var reg5 = /^Toronto/;
console.log(reg5.test(str1));
var reg6 = /Toronto$/;
console.log(reg6.test(str1));
var reg7 = /^W.*e/;
console.log(reg7.test(str1));
var reg8 = /^W.+e/;
console.log(reg8.test(str1));
var reg9 = /c.+ome/;
console.log(reg9.test(str1));
var reg10 = /W.{3,}e/;
console.log(reg10.test(str1));
var reg11 = /[Ww]elcome/;
console.log(reg11.test(str1));
var reg12 = /to/ig;
console.log(reg12.test(str1));

// match and replace using regular expressions
var result = str.match(reg12);
// *this is incomplete please refer to presentation*

var pat1 = /^[a-zA-Z]{4,}$/
console.log(pat1.test("A"));
console.log(pat1.test("ABcd"));     

var pat2 = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/
console.log(pat2.test("123-12-123"));
console.log(pat2.test("123-123-1234"));
// also
var pat3 = /^([0-9]{3}[-]){2}[0-9]{4}$/
console.log(pat3.test("123-12-123"));
console.log(pat3.test("123-123-1234"));

str = "Sampreet, 18;Canada"
var arr = str.split(/[ ,;]/)
console.log(arr);