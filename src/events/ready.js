module.exports = {
    name: "ready",
    once: true,

    async execute(client) {
        console.log("ready!!!!");

        client.user.setPresence({
            activities: [{ name: "soon..." }],
            status: "idle"
        });
    }
}