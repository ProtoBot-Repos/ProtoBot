const { SlashCommandBuilder } = require("@discordjs/builders");
const child = require("node:child_process");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("restart")
        .setDescription("at least i won\'t die!!")
    ,

    devOnly: true,

    async execute(interaction) {
        interaction.client.destroy();

        child.fork()
    }
}