const regstats = require("../../schemas/registerStats");
const ayar = require("../../configs/sunucuayar.json")
const taggeds = require("../../schemas/taggeds");
const { red, green } = require("../../configs/emojis.json")
const vipLimit = new Map();
const moment = require("moment")
moment.locale("tr");
const settings = require("../../configs/settings.json")
module.exports = {
  conf: {
    aliases: ["vip", "v", "vıp"],
    name: "vip",
    help: "vip"
  },
  run: async (client, message, args, embed, prefix) => { 
    if (!message.member.hasPermission("ADMINISTRATOR") && ayar.teyitciRolleri.some(s => !message.member.roles.cache.has(s))) return message.channel.send(embed.setDescription(`${message.member}, Bu komutu kullanmak için gerekli yetkiye sahip değilsin! ${red}`))
    let member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))

    if (!member) return message.channel.send(embed.setDescription(`${message.member}, Geçerli bir üye belirtmelisin. ${red}`))
    if (member.id === message.author.id) return message.channel.send(embed.setDescription(`${message.member}, Kendine vip veremezsin! ${red}`))
    if (member.user.bot) return message.channel.send(embed.setDescription(`${message.member}, belirttiğin üye bir bot olamaz! ${red}`))
    if (member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(embed.setDescription(`${message.member}, Belirttiğin üye senden üst/aynı pozisyonda! ${red}`))
    if (settings.viplimit > 0 && vipLimit.has(message.author.id) && vipLimit.get(message.author.id) == settings.viplimit) return message.channel.send(`Saatlik vip verme sınırına ulaştın! ${red}`).then(x=>x.delete({timeout:5000}))

    if (member.roles.cache.has(ayar.vipRole)) {
        await member.roles.remove(ayar.vipRole).catch(err => {});
        message.channel.send(embed.setDescription(`${member}, üyesinden ${message.guild.roles.cache.get(ayar.vipRole)} rolü alındı. ${green}`))

    } else {

        await member.roles.add(ayar.vipRole).catch(err => {});
        message.channel.send(embed.setDescription(`${member}, üyesine ${message.guild.roles.cache.get(ayar.vipRole)} rolü verildi. ${green}`))
    }
    message.react(green).catch(e => {})
   if (settings.viplimit > 0) {
      if (!vipLimit.has(message.author.id)) vipLimit.set(message.author.id, 1);
      else vipLimit.set(message.author.id, vipLimit.get(message.author.id) + 1);
      setTimeout(() => {
        if (vipLimit.has(message.author.id)) vipLimit.delete(message.author.id);
      }, 1000 * 60 * 60);
    }
  },
};