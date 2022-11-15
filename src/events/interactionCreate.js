const config = require('../../private/config.json');
const Discord = require("discord.js");
const { add_res } = require("../helpers/time");

module.exports = {
    name: "interactionCreate",

    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            if (command.devOnly && !config.Discord.devs.includes(interaction.user.id)) return await interaction.reply({
                content: "You are not a developer of this bot. That means you cannot use this command",
                emphemeral: true
            });

            await command.execute(interaction);

            add_res(interaction.createdTimestamp);
        } catch (err) {
            new Discord.WebhookClient({
                id: config.Discord.webhooks.errors.id,
                token: config.Discord.webhooks.errors.token
            }).send({
                embeds:
                    [
                        new Discord.EmbedBuilder()
                            .setColor(0xFF0000)
                            .setTitle("Uncaught Exception")
                            .setDescription(`\`\`\`${err.name}\n${err.message}\n\n${err.stack}\`\`\``)
                    ]
            });

            await interaction.reply({
                content: `There was an issue executing the command \`${interaction.commandName}\`.\nThe returned error is \`\`\`\n${err}\`\`\`\nIf this error keeps happening, please create an issue at https://github.com/ProtoBot-Repos/Protobot/Issues with the error message.`,
                ephemeral: true
            }); //strange error with this happening. fix this latre

            return add_res(interaction.createdTimestamp);
        }
    }
}
