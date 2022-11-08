const fs = require("fs");

function add_res(message_timestamp) {
    const r_time = -(Date.now() - message_timestamp);

    fs.appendFileSync("./private/res.pbf", `${r_time}\n`);
}

function avg_res() {
    let times = fs.readFileSync("./private/res.pbf").toString().split("\n");

    let avg = 0;

    for (let i = 0; i < times.length; i++) {
        avg += Number(times[i]);
    }

    console.log(avg / (times.length-1))

    return ~(avg / (times.length-1));
}

function process_uptime() {
    const date = new Date(process.uptime() * 1000);

    
}

module.exports = { add_res, avg_res }
