#!/usr/bin/env node
//command line me convert hone k baad nodejs k through compile ho

//shebang line correct executable file banane k liye 
//ignored by windows me js file banega
// global
// npm init -y
// bin property

//npm link and npm unlink



let helpFile = require("./commands/help");
let viewFile = require("./commands/view");
let organizeFile = require("./commands/organize");

let input = process.argv.slice(2);
//node mycli.js [view,dirname,mode]
let command = input[0];
//path
switch(command){
    case "view":
       // console.log("view command is entered");
        viewFile.fn(input[1], input[2]);
        break;
    case "organize":
        // console.log("organize command is entered");
        organizeFile.fn(input[1]);
        break;
    case "help":
        //console.log("help command is entered");
        helpFile.fn();
        break;
    default:
        console.log("wrong command type help for all the commands");
        break;
}