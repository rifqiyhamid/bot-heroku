const Discord = require("discord.js")
const bot = new Discord.Client()

const token = "NjkyOTU2NDc3NDIxMjU2Nzc2.Xn2EGQ.32HBxRcV5HaeP3MxDOeshfXOhkA"

bot.on("ready", () => {
	console.log("this bot is online")
})

// command

bot.on("message", async message => {
    const PREFIX = "!"
    let msg ;
	let args = message.content.substring(PREFIX.length).split(" ")

	switch (args[0]) {
		case "ping":
			 msg = await message.channel.send(`🏓 cek ping bentar...`)

			msg.edit(
				`🏓 Pong\n Latency  is ${Math.floor(
					msg.createdTimestamp - message.createdTimestamp
				)}ms`
			)
			break

		case "kegantengan":
            let kegantengan = ['Maaf anda Jelek 😋 ','Muka anda terlihat Lumayan 😮 ','Ganteng e poll 😎 ','Sepertinya anda memang Super Ganteng 😍😍😍 ','Maaf anda Super Jelek awokawok 🤣🤣🤣'];

            let ganteng = kegantengan[Math.floor(Math.random()*kegantengan.length)];

             msg = await message.channel.send(`😀 kalkulasi kegantengan anda. bentar...`);

			msg.edit(
				`${ganteng}`
			)
			break
	}
})
bot.login(token)
