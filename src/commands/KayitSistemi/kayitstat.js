const regstats = require("../../schemas/registerStats");
const ayar = require("../../configs/sunucuayar.json")
const taggeds = require("../../schemas/taggeds");
const { red, green } = require("../../configs/emojis.json")
module.exports = {
  conf: {
    aliases: ["kayıtlar", "teyitbilgi", "kbilgi", "kb"],
    name: "teyitler",
    help: "teyitler"
  },
  run: async (client, message, args, embed, prefix) => { 
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    if(!ayar.teyitciRolleri.some(rol => message.member.roles.cache.has(rol)) && !message.member.hasPermission('ADMINISTRATOR')) 
    {
    message.react(red)
    message.lineReply(`Yetkin bulunmamakta.\Yetkili olmak istersen başvurabilirsin.`).then(x=> x.delete({timeout: 5000})) 
    return }
    if (args[0] === "top") {
      let registerTop = await regstats.find({ guildID: message.guild.id }).sort({ top: -1 });

      if (!registerTop.length) 
      {
      message.react(red)
      message.lineReply("Herhangi bir kayıt verisi bulunamadı!").then(x=>x.delete({timeout:5000})) 
      return }
      registerTop = registerTop.filter((x) => message.guild.members.cache.has(x.userID)).splice(0, 10);
      message.react(green)
      message.lineReply(embed.setDescription(registerTop.map((x, i) => `\`${i + 1}.\` <@${x.userID}> Toplam **${x.top}** (\`${x.erkek} Erkek, ${x.kız} Kız\`)`)));
    } else if (!args[0]) {
      const data = await regstats.findOne({ guildID: message.guild.id, userID: member.id });
    const taggedData = await taggeds.findOne({ guildID: message.guild.id, userID: member.user.id });
      message.react(green)
message.lineReply(embed.setDescription(` 
\`\`\`fix
• Toplam tag aldırma bilgisi: ${taggedData ? `${taggedData.taggeds.length} `: "0"} 
• Toplam kayıt bilgisi: ${data ? data.top : 0}
• Toplam erkek kayıt bilgisi: ${data ? data.erkek : 0}
• Toplam kız kayıt bilgisi: ${data ? data.kız : 0}
\`\`\``));
    }
  },
};