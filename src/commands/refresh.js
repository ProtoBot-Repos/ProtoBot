const { SlashCommandBuilder } = require("@discordjs/builders");
const child_process = require("node:child_process");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("refresh")
        .setDescription("reloads commands")
    ,
    devOnly: true,

    async execute(interaction) {
        await interaction.deferReply({ content: "Restarting..." ,  emphemeral: true });

        const rel = child_process.fork("./src/deploy-commands.js");

        await interaction.editReply("Successfully registered commands");
    }
}