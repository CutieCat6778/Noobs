const { WebhookClient } = require("discord.js");
const MessageEmbed = require('../../classes/newEmbed');
const StringTools = require("string-toolkit");
const stringTools = new StringTools;
module.exports = async (error, message, text) => {
        const hook = new WebhookClient(process.env.hookId, process.env.hookToken);
    try {
        await hook.send("<@!762749432658788384>, there is an error");
        let e;
        if (!error) e = "Unknown error"
        if (error) e = error.stack;
        if (!e) e = error.toString();
        if (message) {
            var name;
            name = message.content.split(" ")[0];
            name = name.slice(0, 1).toUpperCase() + name.slice(1);
        }
        if (e) {
            if (text) {
                let embed1 = new MessageEmbed()
                    .setTitle(`:x: Error`)
                    .setColor("#40598F")
                    .setDescription(`Oh no, tôi đang có vấn đề. \n\n __Error message:__\n \`${text}\``)
                    .setTimestamp()
                message.channel.send(embed1);
                let array = stringTools.toChunks(e, 5);
                const narary = array.slice(0, Math.floor((1000 / 5))).join('');
                console.log(error);
                let embed = new MessageEmbed()
                    .setColor("#40598F")
                    .addField(name ? name : "none", `
                    \`\`\`console\n${narary} \n\n ${text}\`\`\`
                `)
                    .addField("command", `${message.content ? message.content : "Client error, no commands info"}`)
                    .setTimestamp()
                return hook.send(embed);
            } else if (message) {
                let embed1 = new MessageEmbed()
                    .setTitle(":x: Error")
                    .setColor("#40598F")
                    .setDescription("Oh no, tôi đang có vấn đề, hãy kêu thằng **Cat_#9289** để sửa lỗi!")
                    .setTimestamp()
                message.channel.send(embed1);
                let array = stringTools.toChunks(e, 5);
                const narary = array.slice(0, Math.floor((1000 / 5))).join('');
                console.log(error);
                let embed = new MessageEmbed()
                    .setColor("#40598F")
                    .addField(name ? name : "none", `
                    \`\`\`console\n${narary}\`\`\`
                `)
                    .addField("command", `${message.content ? message.content : "Client error, no commands info"}`)
                    .setTimestamp()
                return hook.send(embed);
            } else if (!message) {
                console.log(error);
                let array = stringTools.toChunks(e, 5);
                const narary = array.slice(0, Math.floor((1000 / 5))).join('');
                let embed = new MessageEmbed()
                    .setColor("#40598F")
                    .addField(":x: Client error", `
                    \`\`\`console\n${narary}\`\`\`
                `)
                    .setTimestamp()
                return hook.send(embed);
            }

        } else {
            return hook.send("No error logs channel found");
        }
    } catch (error) {
        console.log(error);
        let array = stringTools.toChunks(error.stack, 5);
        const narary = array.slice(0, Math.floor((1000 / 5))).join('');
        console.log(error);
        let embed = new MessageEmbed()
            .setColor("#40598F")
            .addField("Client error", `
                    \`\`\`console\n${narary}\`\`\`
                `)
            .setTimestamp()
        return hook.send(embed);
    }
}