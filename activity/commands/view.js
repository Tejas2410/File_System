let fs = require("fs");
let path = require("path");

function viewHelper(dirname,mode){
if(mode == "flat"){
   // console.log("flat view will be shown for this ", dirname);
   printFlat(dirname);
}else if(mode == "tree"){
   // console.log(" tree view will be shown for this", dirname);
   printTree(dirname,"");
}else{
    console.log("invalid view entered");
}
}

module.exports = {
    fn : viewHelper
}
function checkFileOrFolder(src){
    return fs.lstatSync(src).isFile();
}

function contentReader(src){
    return fs.readdirSync(src);
}


function printFlat(src){
    let isFile = checkFileOrFolder(src);
    //if this function is file or directory
    //isFile -> true
    //isfile -> false
    if(isFile == true){
        //console.log("path is a file");
        //print file
        console.log(src, "*");
    } else {
        //console.log("path is a dir");
        //name print
        console.log(src);
        // may it can contain something
        //contain read
        let fdirname = contentReader(src);
        //console.log(fdirname); // it contains folder ka childrens inside array
        //call
        for(let i = 0; i < fdirname.length; i++){
            let child = fdirname[i];

            //let dirNamepath = src + "\\" + child;
            let dirNamepath = path.join(src,child);
            
            printFlat(dirNamepath);
        }
    }
}
//printFlat(process.argv.slice(2)[0]);
//let input = process.argv.slice(2);
//printFlat(input[0]);

function printTree(src , indent){
    let isFile = checkFileOrFolder(src);
    //if this function is file or directory
    //isFile -> true
    //isfile -> false
    if(isFile == true){
        //console.log("path is a file");
        //print file
        console.log(indent + path.basename(src), "*");
    } else {
        //console.log("path is a dir");
        //name print
        console.log(indent + path.basename(src));
        // may it can contain something
        //contain read
        let fdirname = contentReader(src);
        //console.log(fdirname); // it contains folder ka childrens inside array
        //call
        for(let i = 0; i < fdirname.length; i++){
            let child = fdirname[i];

            //for good practice don't use \\
            //let dirNamepath = src + "\\" + child;
            let dirNamepath = path.join(src,child);
            
            printTree(dirNamepath , indent + "\t");
        }
    }
}
//let input = process.argv.slice(2);
//printTree(input[0] , "");

//let path = "C:\Users\Tejas Patil\Desktop\PAB\02_File_System_10_02_2021\activity";
//let pathArray = path.split("\\");
//console.log(pathArray[pathArray.length-1]);//pathArray.pop();

