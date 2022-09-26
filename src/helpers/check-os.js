const os = require("os");

module.exports = function checkIsWindows() {
    if(os.type == "Windows_NT") return true;
    else return false;
}

// idk what i will use this for but i will keep