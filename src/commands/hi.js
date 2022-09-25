const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hi")
        .setDescription("hewwo")
    ,
    devOnly: true,

    async execute(interaction) {
        return interaction.reply("hewwoooo!!!! :3");
    },
}