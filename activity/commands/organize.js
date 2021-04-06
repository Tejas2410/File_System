let organize = require("C:\\Users\\Tejas Patil\\Desktop\\PAB\\02_File_System_10_02_2021\\raw\\poc\\organizeFile.js");
function organizeFn(dirname){
    if(dirname == undefined){
        dirname = process.cwd();
    }
    organize.fn(dirname);
}

// nodejs -> exports
module.exports = {
    fn:organizeFn
}
