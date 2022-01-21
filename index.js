const Discord = require("discord.js");
require("dotenv").config()
const TOKEN = "OTMzOTkwOTE5OTIzOTU3Nzcw.Yepk1A.DjAx7Yvzbshm2F_EROlU9cgxsl0";

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as stamzie`)
    client.user.setActivity("hnk is the best")
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("hello")
    }
})

client.login(process.env.TOKEN)