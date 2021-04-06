let fs = require("fs");
let path = require("path");
let types = require("../poc/util");

// let types = {
//   media: ["mp4", "mkv", "mp3"],
//   archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
//   documents: ["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex",],
//   app: ["exe", "dmg", "pkg", "deb"],
// };

function isFileOrNot(src) {
    return fs.lstatSync(src).isFile();
}

 function readContent(src) {
    return fs.readdirSync(src);
}

function checkExtension(src){
    // C:\Users\Ritik Singh\Desktop\Batches\PAB\2_File_System_10_02_2021\activity\mycli.js 
    let ext = src.split(".").pop();
    //console.log(ext);

    for(let type in types){//types
        for(let i = 0; i < types[type].length; i++){
            if(ext == types[type][i]){
               // console.log(type);
                return type;
            }
        }
    }
    return "others";
}

function sendFile(src,dest,folderName){
    let folderToMake = path.join(dest,folderName);

    if(fs.existsSync(folderToMake) == false){
        fs.mkdirSync(folderToMake);
    }

    let destFilePath = path.join(folderToMake,path.basename(src));
    // src-> f1.txt
    // dest -> f1.txt

    //destFilPath exits or not
    //  if(fs.existsSync(destFilePath) == false){
        fs.copyFileSync(src,destFilePath);
    //  } else { 
        
        // destFile = Math.random() + path.basename(destFilePath);
        // destFilePath = path.join(folderToMake,destFile);

   //    fs.copyFileSync(src,destFilePath);
   //     //console.log(destFilePath);
   // }
    
}

function organizeFiles(src) {
  //src -> create folder
  let folderToMake = path.join(src, "Organized_Files");

  // not present ->  create a directory
  if (fs.existsSync(folderToMake) == false) {
    fs.mkdirSync(folderToMake);
  }
  // abstraction
  organize(src, folderToMake);
  // organize -> files inside different folders
}


function organize(src, dest) {
  //content read
  isFile = isFileOrNot(src);

  if (isFile == true) {
      //console.log(src);
      //file ->
      let folderName = checkExtension(src);
//console.log(fileName, " -> ", path.basename(src));
      //extension check
      sendFile(src,dest,folderName);
      //copy file
  } else {
      //console.log(src);
      //content read from os
    let fDirNames = readContent(src);
    for (let i = 0; i < fDirNames.length; i++) {
        let child = fDirNames[i];
        let pathOfChild = path.join(src,child);// dirNamePath
        organize(pathOfChild,dest)
    }
  }
}
//organizeFiles(process.argv.slice(2)[0]);
//checkExtension(process.argv[2]);

module.exports = {
    fn:organizeFiles
}
