const child = require("child_process");

console.log(`Current running node version: ${process.version}`);

console.log("deploying commands");
child.fork("./src/deploy-commands.js");

child.fork("./src/main.js");