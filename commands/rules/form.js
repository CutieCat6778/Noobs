const newEmbed = require("../../classes/newEmbed")

module.exports = {
    config: {
        name: "form",
        aliases: ['submission', 'setup', 'apply'],
        category: "rules",
        usage: [],
        perms: ['SEND_MESSAGES'],
        bot: ['SEND_MESSAGES']
    },
    async execute(client, message, args, guild) {
        const id = require('../../tools/string/mention')(args[0]);
        if(id){
            message.channel.send(`<@${id}>`);
            message.delete();
        }
        const embed = new newEmbed()
            .setDescription(`Bạn hãy điền vào cái **[form](https://forms.gle/mBcYCqQNv5ugXSUW7)** giúp bọn mình nhé <3`)
        return message.channel.send(embed);
    }
}