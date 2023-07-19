const ayar = require("../../configs/sunucuayar.json")
const conf = require("../../configs/sunucuayar.json")
const { red, green } = require("../../configs/emojis.json")
const kayıtsızLimit = new Map();
const moment = require("moment")
moment.locale("tr");
const settings = require("../../configs/settings.json")

module.exports = {
  conf: {
    aliases: ["kayıtsız","ks","kayitsiz","unreg","unregister"],
    name: "kayitsiz",
    help: "kayitsiz"
  },
  run: async (client, message, args, embed, prefix) => { 
    if(!ayar.teyitciRolleri.some(rol => message.member.roles.cache.has(rol)) && !message.member.hasPermission('ADMINISTRATOR')) 
    {
    message.react(red)
    message.lineReply(`Yetkin bulunmamakta.`).then(x=> x.delete({timeout: 5000})) 
    return }
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) 
    {
    message.react(red)
    message.lineReply("Bir üye belirtmelisin!").then(x=>x.delete({timeout:5000})) 
    return }
    if (!message.member.hasPermission(8) && member.roles.highest.position >= message.member.roles.highest.position) 
    {
    message.react(red) 
    message.lineReply("Kendinle aynı yetkide ya da daha yetkili olan birini kayıtsıza atamazsın!").then(x=>x.delete({timeout:5000})) 
    return }
    if (!member.manageable) 
    {
    message.react(red)
    message.lineReply( "Bu üyeyi kayıtsıza atamıyorum!").then(x=>x.delete({timeout:5000})) 
    return }
   if (settings.kayıtsızlimit > 0 && kayıtsızLimit.has(message.author.id) && kayıtsızLimit.get(message.author.id) == settings.kayıtsızlimit) 
    {
    message.react(red)
  return message.lineReply(`Saatlik kayıtsız atma sınırına ulaştın!`).then(x=>x.delete({timeout:5000}))
    }

    message.react(green)
    member.roles.set(conf.unregRoles);
    member.setNickname(`${ayar.ikinciTag} İsim | Yaş`)
    message.lineReply(`${member} üyesi, ${message.author} tarafından, kayıtsıza atıldı! ${green}`).then(x=>x.delete({timeout:5000}))
 

    if (settings.kayıtsızlimit > 0) {
      if (!kayıtsızLimit.has(message.author.id)) kayıtsızLimit.set(message.author.id, 1);
      else kayıtsızLimit.set(message.author.id, kayıtsızLimit.get(message.author.id) + 1);
      setTimeout(() => {
        if (kayıtsızLimit.has(message.author.id)) kayıtsızLimit.delete(message.author.id);
      }, 1000 * 60 * 60);
    }
  },
};