const sleep = require("../helpers/sleep");

module.exports = {
  name: "ready",
  once: true,

  async execute(client) {
    console.log("ready!!!!");

    client.user.setPresence({
      status: "online",
      afk: false,
      activities: 
    });
  },
};
