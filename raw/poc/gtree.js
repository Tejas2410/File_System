let root = {
    name: "d10",
    children: [
        {
            name: "d20",
            children: [{
                name: "d50",
                children: []
            }, {
                name: "d60",
                children: []
            }]
        },
        {
            name: "d30",
            children: [{
                name: "d70",
                children: []
            }]
        },
        {
            name: "d40",
            children: [

            ]
        }
    ]
}

// print
// logic -> folders
// expectation
function displayGtree(node) {
    let menMyCh = "" + node.name + "=>";
    for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        menMyCh += child.name + ",";
    }
    console.log(menMyCh);
     // faith-> children ,base case ?? childreen zero hoge toh stop
     for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        displayGtree(child)
    }
}
    displayGtree(root);



let fs = require("fs");

function checkFileOrFolder(path){
    return fs.lstatSync(path).isFile() 
}

function contentReader(path){
    return fs.readdirSync(path);
}





//printGTree(root,"");
function printFlat(path){
let isFile = checkFileOrFolder(path);
//if this function is file or directory
//isFile -> true
//isfile -> false
if(isFile == true){
    //console.log("path is a file");
    //print file
    console.log(path, "*");
} else {
    //console.log("path is a dir");
    //name print
    console.log(path);
    // may it can contain something
    //contain read
    let childrens = contentReader(path);
    //console.log(childrens); // it contains root ka children inside array
    //call
    for(let i = 0;i < childrens.length;i++){
        printFlat(path + "\\" + childrens[i]);
    }
 }
}
printFlat("C:\\Users\\Tejas Patil\\Desktop\\PAB\\02_File_System_10_02_2021\\raw\\poc\\f10");