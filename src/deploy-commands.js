const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const config = require("../private/config.json");

const commands = [];
const command_f = fs.readdirSync(process.cwd() + "\\src\\commands").filter(f => f.endsWith(".js"));

for (const file of command_f) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(config.Discord.token);

rest.put(Routes.applicationCommands(config.Discord.app_id), { body: commands })
    .then(() => console.log("registered commands :D"))
    .catch(console.error);