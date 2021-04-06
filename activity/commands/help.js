function helperFn(){
    console.log(`List of all commands:
    node mycli.js view <dir-name> Flat
    node mycli.js view <dir-name> view
    node mycli.js organize <dir-name>
    node mycli.js organize
    node mycli.js help
    `);
}

// nodejs -> exports
module.exports = {
    fn:helperFn
}

