//functions,arrays,objects
//function defination
function sayHi(param) {
  //console.log("Hello from fn");
  console.log("Param is ", param);
  let rVal = Math.random() > 0.5 ? "good" : "false";
  return rVal;
}
// function invoke
//sayHi(10);
//sayHi("fshsjaka");
let rVal = sayHi([1, 2, 3, 4, 5, 6]);
console.log("function send " + rVal);

//arrays
//arrays-> array is a collection of homogeneous data types
//array -> array is a collection of any valid js type
// array declare
//let arr=[];
let arr = [
  1,
  1.1,
  "string",
  "single quotes",
  null,
  true,
  [1, 2, 3, 4, 5, 6],
  function inside(param) {
    console.log("Hello from an array");
    console.log("I received", param);
    return "some value";
  },
  {
    name: "Jasbir",
    lastName: "Singh",
  },
];
//console.log(arr);
console.log("val at index 4", arr[4]);
console.log("val at index 6", arr[6][3]);
console.log("last val", arr[arr.length - 1]);
console.log("last val", arr[arr.length - 1].name);
//function
console.log(arr[arr.length - 2]);
console.log(arr[arr.length - 2]+""); // stringify 

console.log("returned value", arr[arr.length - 2]("hola"));

//console.log(arr.length);
//console.log(arr[arr.length]); undefined aayega arr k bhar

// push -> add Last , pop -> remove last
console.log(arr);
console.log("''''''''''''''''''''''''''''''''''");
arr.push("last val");

//unshift -> add first , shift -> remove first
arr.shift();
console.log(arr);

//slice -> starting index, end index
let slicedArr = arr.slice(2, 5);
console.log("sliced arr", slicedArr);
console.log("array", arr);

//Splice -> Starting Index, Delete count
console.log("''''''''''''''''''''''''");
let removedElemArr = arr.splice(2, 1);
console.log("removed elemArr", removedElemArr);

//loop
for (let i = 0; i < arr.length; i++) {
  console.log("Index :", i, "value :", arr[i]);
}
