const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kill")
        .setDescription("Kills me D:")
    ,
    devOnly: true,

    async execute(interaction) {
        await interaction.reply({ content: ":<", emphemeral: true });

        interaction.client.destroy();

        process.exit(0);
    }
}