function f3(){
    console.log("I am in f3");
   //while(true){ };
    return "returned from f3";
}

function f2(){
    console.log("I am in f2");
    f3()
    return "returned from f2";
}

function f1(){
    console.log("I am in f1");
    f2()
    return "returned from f1";
}

console.log("Before");
console.log("returned is",f1());//,f2(),f3());// starting me evaluate hota hai left to right
console.log("After");
