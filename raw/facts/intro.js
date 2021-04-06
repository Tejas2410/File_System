// No main
// left to right top to bottom
console.log("Hello Pab :)");
//variable declaration
// a is variable that can only contain an integer
//Statically typed language
//int a;
//dynamically typed language
// let -> a is a variable that initially contain undefined
// primitive types : numbers, string, boolean, undefined, null
let a;
//Number
a = 10;
a = 10.1;
//String
a = "String";
a = "also string";
a = null;
console.log("a is", a);

// Javascript -> Brenden Eich (10 days)-> Netscape browser(25 year) ->
// Js syntax-> Java
// loops,contionals,classes,functions,arrays,
//input -> array
let input = process.argv.slice(2); // slice(2) node intro.js ko nhi lega in array
console.log(input);
let num = input[0];
let flag = true;
for (let div = 2; div * div <= num; div++) {
  if (num % div == 0) {
    flag = false;
    break;
  }

}
if (flag == true) {
  console.log(num, "is prime");
} else {
  console.log(num, "is not prime");
}
