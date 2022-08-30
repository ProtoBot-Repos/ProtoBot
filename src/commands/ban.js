const { SlashCommandBuilder } = require("@discordjs/builders");
const { userInfo } = require("os");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Bans a user from this guild")
        .addUserOption(o => o.setName("user").setDescription("The user to ban.").setRequired(true))
        .addStringOption(o => o.setName("reason").setDescription("The reason this user is being banned"))
        .setDefaultMemberPermissions(4)
    ,
    devOnly: false,

    async execute(interaction) {
        const badman = interaction.options.getUser("user");
        var whyareyoubanned = interaction.options.getString("reason");

        if (whyareyoubanned == null || whyareyoubanned == undefined) whyareyoubanned = "No reason given.";
        if (!interaction.guild.members.me.permissions.has(4)) return await interaction.reply({ content: "I do not have the permission `BAN_MEMBERS` <:deval:811990530706636820>", emphemeral: true });
        
        try {
            interaction.guild.members.cache.get(badman.id).ban({
                reason: whyareyoubanned
            });

            return await interaction.reply(`User: \`${badman.tag}\` has been banned for \`${whyareyoubanned}\``);
        } catch (err) {
            console.error(err);

            return await interaction.reply({ content: `There has been an error while banning that user.\n returned error: \`${err}\`\n If this issue keeps happening, please make an issue with the tag \`Bug\` at  https://github.com/ProtoBot-Repos/ProtoBot/issues`, emphemeral: true });
        }
    }
}