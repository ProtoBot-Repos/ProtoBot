const { SlashCommandBuilder } = require("@discordjs/builders");
const owo = require("@zuzak/owo");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("owoify")
        .setDescription(owo.translate("owoifies your text"))
        .addStringOption(o => o.setName("text").setDescription(owo.translate("text to owoify")).setRequired(true))
    ,
    devOnly: false,

    async execute(interaction) {
        const hmm = interaction.options.getString("text")

        return await interaction.reply({
            content: `Your owoified text: \`${owo.translate(hmm)}\``,
            ephemeral: false
        })
    }
}