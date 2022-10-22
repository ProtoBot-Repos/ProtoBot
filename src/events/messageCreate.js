const config = require("../../private/config.json");

module.exports = {
    name: "messageCreate",
   
    async execute(message, client) {
        if (message.author.bot) return;
        if (message.webhookId) return;

        //const args = message.content.substring(config.Discord.prefix.length).split(/ +/);
        // const command = client.msgCommands.get()

        // command.run(message, args, client);

        // if (args[0] == "test") 
        // {
        //     ;    
        // }
    }
}
