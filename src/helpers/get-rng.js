const RandomOrg = require("random-org");
const config = require("../../private/config.json");

module.exports = async function get_rng(max, min, n) {
    const random = new RandomOrg({
        apiKey: config["random.org"].key.key
    });

    const moment = random.generateIntegers({
        min: min,
        max: max,
        n: n
    }).then(function (r) { return r.random.data });

    return moment;
}