const fs = require("fs");
const luxon = require("luxon");

function add_res(message_timestamp) {
    const r_time = (Date.now() - message_timestamp);

    if (!fs.existsSync("./private/res.pbf")) {
        fs.writeFileSync("./private/res.pbf", `${r_time}`);
    } else {
        fs.appendFileSync("./private/res.pbf", `\n${r_time}`);
    }
}

function avg_res() {
    let times = fs.readFileSync("./private/res.pbf").toString().split("\n");
    let avg = 0;

    for (let i = 0; i < times.length - 1; i++) {
        avg += Number(times[i]);
    }

    return Math.round((avg / (times.length)));
}

function process_uptime() {
    const u_time = new Date()
}

module.exports = { add_res, avg_res }
