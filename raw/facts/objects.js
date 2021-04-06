// key : value pair

// to declare an object
// let obj={}
//hashmap, dict, unordered map
// JSON -> javascript object notation (js se inspired data to represent karne ka tarika hota hai )

//function fn(){
// console.log("outer");
// }
//
//object ->variables-> property
//object -> functions -> methods

let cap = {
    name : "Steave",
    lastName : "Rogers",
    friends: ["tony", "peter", "bruce"],
    isAvenger: true,
    age: 35,
    address:{
        state: "New York",
        city: "Manhatten"
    },
    abc : null,
    saysHi: function fn() {
        console.log("Cap say's Hi");
        return "cap send blessings"
    }
}

//print
console.log(cap);

//get
console.log(cap.lastName);
console.log("My friend is", cap.friends[1]);
console.log("city name is",cap.address.city);
console.log("address is",cap.address);
cap.saysHi();

console.log("Before");
console.log("Returned val is", cap.saysHi());
console.log("After");
console.log(cap.abc);


let name = "lastName";
//cap[name] -> cap.lastName; square bracket notation
//cap.name -> cap.name 
console.log("address is",cap[name]);// Rogers
console.log("address is", cap.name); //Steave



//loops 
//for in
//let key -> variable // object.key -> property
for(let key in cap){
    console.log("key : ", key ,"value : ",cap[key]);
}

//create update
console.log(cap);
console.log("'''''''''''''''");
cap.isAvenger = false;
cap.movies = ["First Avenger", "Civil War", "Age of Ultrons"];


//delete
delete cap.age;
console.log(cap);