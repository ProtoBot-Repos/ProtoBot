const { SlashCommandBuilder } = require("@discordjs/builders");
const child = require("node:child_process");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("restart")
        .setDescription("at least i won\'t die!!")
    ,

    devOnly: true,

    async execute(interaction) {
        await interaction.reply("Restarting");

        const awaawrwr = child.fork("./start.ps1");

        interaction.client.destroy();
        process.exit(0);
    }
}