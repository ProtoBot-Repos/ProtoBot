const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("timeout")
        .setDescription("times out a user")
        .addUserOption(o => o.setName("user").setDescription("The user to time out"))
        .addNumberOption(o => o.setName("time").setDescription("The amount of time"))
        .addStringOption(o => o.setName("unit").setDescription("unit of time to use").addChoices(["seconds", "hours", "days"]))
        .setDefaultMemberPermissions(0x10000000000)
    ,
    devOnly: false,

    async execute(interaction) {
        const user = interaction.options.getUser("user");
        const time = interaction.options.getUser("time");
        const unit = interaction.options.getUser("unit");

        if (!interaction.guild.members.me.permissions.has(0x10000000000)) return await interaction.reply({ content: "I don\'t have the correct permissions to use this command.", ephemeral: true });


    }
}