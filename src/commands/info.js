const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const { add_res, avg_res } = require("../helpers/time");
const fs = require("fs");
const si = require("systeminformation");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("info")
        .setDescription("various infos about ProtoBot") //this description sucks lmao
    ,

    devOnly: false,

    async execute(interaction) {
        await interaction.reply({
            embeds: [new Discord.EmbedBuilder()
                .setTitle("")
                .setDescription(`\`\`\`\n
Node Version:\t${process.version}\n\n
Message Response Time (Avg):\t${fs.existsSync("./private/res.pbf") ? avg_res() : -(Date.now() - interaction.createdTimestamp)} ms\n\n
Discord API Latency:\t${interaction.client.ws.ping} ms\n\n
Bot Uptime: ${process.uptime()} secs\n\n
GitHub Repository: https://github.com/ProtoBot-Repos/ProtoBot\n\n
Hardware Information:\n\n
\t- CPU -
${si.c}

\`\`\``) //fix uptime later
        // i need to do more stuff
                .setColor(0x6CFC89)
            ]
        });

        return add_res(interaction.createdTimestamp);
    }
}
