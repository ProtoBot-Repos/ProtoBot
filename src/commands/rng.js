const { SlashCommandBuilder } = require("@discordjs/builders");
const get_rng = require("../helpers/get-rng");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rng")
        .setDescription("generates a true random number")
        .addNumberOption(o => o.setName("max").setDescription("maximum number that can be generated").setRequired(true))
        .addNumberOption(o => o.setName("min").setDescription("minimum number that can be produced").setRequired(true))
        .addNumberOption(o => o.setName("amount").setDescription("amount of numbers to generate").setRequired(false))
    ,
    devOnly: false,

    async execute(interaction) {
        const max = interaction.options.getNumber("max");
        const min = interaction.options.getNumber("min");
        const amount = interaction.options?.getNumber("amount");

        const g_rng = await get_rng(max, min, amount === null?1:amount);

        return await interaction.reply({
            content: `your randomly generated number(s) are: \`${g_rng.join(", ")}\`.`
        });
    }
}
