const regstats = require("../../schemas/registerStats");
const ayar = require("../../configs/sunucuayar.json")
const taggeds = require("../../schemas/taggeds");
const { red, green } = require("../../configs/emojis.json")
const taggesLimit = new Map();
const moment = require("moment")
moment.locale("tr");
const settings = require("../../configs/settings.json")
module.exports = {
  conf: {
    aliases: ["tagges", "t", "family"],
    name: "tagges",
    help: "tagges"
  },
  run: async (client, message, args, embed, prefix) => { 
    if (!message.member.hasPermission("ADMINISTRATOR") && ayar.teyitciRolleri.some(s => !message.member.roles.cache.has(s))) return message.channel.send(embed.setDescription(`${message.member}, Bu komutu kullanmak için gerekli yetkiye sahip değilsin! ${red}`))
    let member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))

    if (!member) return message.channel.send(embed.setDescription(`${message.member}, Geçerli bir üye belirtmelisin. ${red}`))
    if (member.id === message.author.id) return message.channel.send(embed.setDescription(`${message.member}, Kendine tagges rolü veremezsin! ${red}`))
    if (member.user.bot) return message.channel.send(embed.setDescription(`${message.member}, belirttiğin üye bir bot olamaz! ${red}`))
    if (member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(embed.setDescription(`${message.member}, Belirttiğin üye senden üst/aynı pozisyonda! ${red}`))
     if (settings.taggeslimit > 0 && taggesLimit.has(message.author.id) && taggesLimit.get(message.author.id) == settings.taggeslimit) return message.channel.send(`Saatlik tagges verme sınırına ulaştın! ${red}`).then(x=>x.delete({timeout:5000}))

    if (member.roles.cache.has("908743668238803031")) {
        await member.roles.remove("908743668238803031").catch(err => {});
        message.channel.send(embed.setDescription(`${member}, üyesinden <@&908743668238803031> rolü alındı. ${green}`))

    } else {

        await member.roles.add("908743668238803031").catch(err => {});
        message.channel.send(embed.setDescription(`${member}, üyesine <@&908743668238803031> rolü verildi. ${green}`))
    }
    message.react(green).catch(e => {})

   if (settings.taggeslimit > 0) {
      if (!taggesLimit.has(message.author.id)) taggesLimit.set(message.author.id, 1);
      else taggesLimit.set(message.author.id, taggesLimit.get(message.author.id) + 1);
      setTimeout(() => {
        if (taggesLimit.has(message.author.id)) taggesLimit.delete(message.author.id);
      }, 1000 * 60 * 60);
    }
  },
};