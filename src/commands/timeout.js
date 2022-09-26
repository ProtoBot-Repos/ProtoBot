const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("timeout")
        .setDescription("times out a user")
        .addUserOption(o => o.setName("user").setDescription("The user to time out").setRequired(true))
        .addNumberOption(o => o.setName("time").setDescription("The amount of time").setRequired(true))
        .addStringOption(o => o.setName("unit").setDescription("unit of time to use").addChoices(
            {
                name: "seconds",
                value: "second"
            },
            {
                name: "minutes",
                value: "minute"
            },
            {
                name: "hours",
                value: "hour"
            },
            {
                name: "days",
                value: "day"
            }
        ).setRequired(true))
        .addStringOption(o => o.setName("reason").setDescription("reason for timeout").setRequired(false))
        .setDefaultMemberPermissions(0x10000000000)
    ,
    devOnly: false,

    async execute(interaction) {
        const user = interaction.options.getMember("user");
        const timeO = interaction.options.getNumber("time");
        const unit = interaction.options.getString("unit");
        const reason = interaction.options?.getString("reason");

        let time = timeO;

        if (!interaction.guild.members.me.permissions.has(0x10000000000)) return await interaction.reply({ content: "I don\'t have the correct permissions to use this command.", ephemeral: true });

        if(unit === "second") time = time * 1000;
        else if(unit === "minute") time = time * (1000*60);
        else if(unit === "hour") time = time * (1000*60*60);
        else if(unit === "day") time = time * (1000*60*60*24);

        if(time > 2419200000) return interaction.reply({
            content: "You cannot timeout someone for more than 28 days :(",
            ephemeral: true
        });

        try {
            user.timeout(time, reason === null ? "no reason given" : reason);

            return interaction.reply(reason === null ? `Member ${user.user.tag} has been timed out without a reason given` : `Member \`${user.user.tag}\` has been timed out for ${timeO} ${
                time != 1000 || 
                time != 60000 || 
                time != 3600000 ||
                time != 86400000 ?
                unit.concat("s") :
                unit
            } for ${reason}`);
        } catch(err) {
            console.error(err);
        }
    }
}