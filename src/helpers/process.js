const child = require("node:child_process");
const fs = require("node:fs");

class Process {
    /**
     * @param {fs.PathLike} path
     * path to target file 
     */
    constructor(path) {
        this.path = path
    }

    #path_exists() {
        return fs.existsSync(this.path);
    }

    from_file() {
        const ptf = this.path;

        if (!this.#check_exists()) return new Error("File or path doesn\'t exist.");
        
        const f = child.execFileSync(path);
    }
}

module.exports = Process;