const child = require("child_process");
const fs = require("fs");

console.log(`Current running node version: ${process.version}`);

// (async () => {
//     const config = fs.readFileSync("./private/config.json").toString();

//     if (process.argv[2] == "1")
//         //await fs.writeFile("./private/config.json")
    
//         console.log(config.split("\n").find(token => token.includes("OD")).replace());
// })();

console.log("clearing response times");

fs.existsSync("./private/res.pbf") ? fs.unlinkSync("./private/res.pbf") : 0;

console.log("deploying commands");
child.fork("./src/deploy-commands.js");

child.fork("./src/main.js");
