const { SlashCommandBuilder } = require("@discordjs/builders");
const get_rng = require("../helpers/get-rng");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("8-ball")
        .setDescription("The Magic 8 Ball has the answer to all of your questions")
        .addStringOption(o => o.setName("question").setDescription("your question to the 8 Ball").setRequired(true))
    ,
    devOnly: false,

    async execute(interaction) {
        const q = interaction.options.getString("question");
        let certainty;
        const answers = [
            ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes."],
            ["Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again."],
            ["Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."],
        ];
        const rand1 = await get_rng(2, 0, 1);
        const rand2 = await get_rng(rand1 === 0 ? 9 : 4, 0, 1);

        return await interaction.reply({
            content: `Question: \`\`\`${q}\`\`\`\nAnswer: \`\`\`${answers[rand1][rand2]}\`\`\``
        });
    }
}
