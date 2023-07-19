const moment = require("moment");
require("moment-duration-format");
const conf = require("../../configs/sunucuayar.json");
const voiceUserParent = require("../../schemas/voiceUserParent");
const messageUser = require("../../schemas/messageUser");
const voiceUser = require("../../schemas/voiceUser");
const cezapuan = require("../../schemas/cezapuan");
const coin = require("../../schemas/coin");
const taggeds = require("../../schemas/taggeds");
const yetkis = require("../../schemas/yetkis");
const ceza = require("../../schemas/ceza");
const toplams = require("../../schemas/toplams");
const inviterSchema = require("../../schemas/inviter");
const gorev = require("../../schemas/invite");
const mesaj = require("../../schemas/mesajgorev");
const tagli = require("../../schemas/taggorev");
const {  xp, gulucuk, mesaj2, altin, altin2 ,rewards ,star , fill, empty, fillStart, emptyEnd, fillEnd, red } = require("../../configs/emojis.json");
const { TeamMember, MessageEmbed } = require("discord.js");
const { MessageButton,MessageActionRow } = require('discord-buttons');

module.exports = {
  conf: {
    aliases: ["puan"],
    name: "puan",
    help: "puan"
  },

  run: async (client, message, args, embed) => {
    if(!conf.staffs.some(rol => message.member.roles.cache.has(rol))) return message.react(red)
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    if(!conf.staffs.some(rol => member.roles.cache.has(rol))) return message.react(red)

    const messageData = await messageUser.findOne({ guildID: message.guild.id, userID: member.user.id });
    const voiceData = await voiceUser.findOne({ guildID: message.guild.id, userID: member.user.id });
    const messageWeekly = messageData ? messageData.weeklyStat : 0;
    const messageDaily = messageData ? messageData.dailyStat : 0;
    
    const coinData = await coin.findOne({ guildID: message.guild.id, userID: member.user.id });
    const cezapuanData = await cezapuan.findOne({ guildID: message.guild.id, userID: member.user.id });

 

    const maxValue = client.ranks[client.ranks.indexOf(client.ranks.find(x => x.coin >= (coinData ? coinData.coin : 0)))] || client.ranks[client.ranks.length-1];
    const taggedData = await taggeds.findOne({ guildID: message.guild.id, userID: member.user.id });
    const toplamData = await toplams.findOne({ guildID: message.guild.id, userID: member.user.id });
    const yetkiData = await yetkis.findOne({ guildID: message.guild.id, userID: member.user.id });
    const cezaData = await ceza.findOne({ guildID: message.guild.id, userID: member.user.id });


const inviterData = await inviterSchema.findOne({ guildID: message.guild.id, userID: member.user.id });
    const total = inviterData ? inviterData.total : 0;

        const category = async (parentsArray) => {
        const data = await voiceUserParent.find({ guildID: message.guild.id, userID: member.id });
        const voiceUserParentData = data.filter((x) => parentsArray.includes(x.parentID));
        let voiceStat = 0;
        for (var i = 0; i <= voiceUserParentData.length; i++) {
          voiceStat += voiceUserParentData[i] ? voiceUserParentData[i].parentData : 0;
        }
        return moment.duration(voiceStat).format("H [saat], m [dakika] s [saniye]");
      };
      
      let currentRank = client.ranks.filter(x => (coinData ? coinData.coin : 0) >= x.coin);
      currentRank = currentRank[currentRank.length-1];

      const coinStatus = message.member.hasRole(conf.staffs, false) && client.ranks.length > 0 ?
      `${currentRank ?`
      ${currentRank !== client.ranks[client.ranks.length-1] ? `Şu an ${Array.isArray(currentRank.role) ? currentRank.role.map(x => `<@&${x}>`).join(", ") : `<@&${currentRank.role}>`} rolündesiniz. ${Array.isArray(maxValue.role) ? maxValue.role.length > 1 ? maxValue.role.slice(0, -1).map(x => `<@&${x}>`).join(', ') + ' ve ' + maxValue.role.map(x => `<@&${x}>`).slice(-1) : maxValue.role.map(x => `<@&${x}>`).join("") : `<@&${maxValue.role}>`} rolüne ulaşmak için \`${maxValue.coin-coinData.coin}\` puan daha kazanmanız gerekiyor!` : "Şu an son yetkidesiniz! Emekleriniz için teşekkür ederiz. :)"}` : ` 
      Şuan ${message.member.roles.highest} rolündesiniz. ${Array.isArray(maxValue.role) ? maxValue.role.length > 1 ? maxValue.role.slice(0, -1).map(x => `<@&${x}>`).join(', ') + ' ve ' + maxValue.role.map(x => `<@&${x}>`).slice(-1) : maxValue.role.map(x => `<@&${x}>`).join("") : `<@&${maxValue.role}>`} rolüne ulaşmak için \`${maxValue.coin - (coinData ? coinData.coin : 0)}\`  Puan daha kazanmanız gerekiyor!`}` : ""
      
    var Puanlama = new MessageButton()
    .setLabel("Puanlama Bilgisi")
    .setID("puan")
    .setStyle("red")
    .setEmoji("909485177389064222")

    var AlinanPuan = new MessageButton()
    .setLabel("Alınan Puan")
    .setID("rewards_puan")
    .setStyle("red")
    .setEmoji("909485177389064222")

    var AnaSayfa = new MessageButton()
    .setLabel("Ana Sayfa")
    .setID("ana_sayfa")
    .setStyle("red")
    .setEmoji("🏠")

    const row = new MessageActionRow()
    .addComponents(AnaSayfa, AlinanPuan, Puanlama)

embed.setDescription(`${member.toString()} Yetkilisinin Puan bilgisi`)

      
.addField(`<:astenia_isaretle:927526078208147487> **Puan Durumu:**`, `
<:astenia_nokta:927528579137425449> Puanınız: \`${coinData ? Math.floor(coinData.coin) : 0}\`, Gereken Puan: \`${maxValue.coin}\`
${progressBar(coinData ? coinData.coin : 0, maxValue.coin, 9)} \`${coinData ? coinData.coin : 0} / ${maxValue.coin}\`
       `, false)
   

    let msg = await message.channel.send(embed, { components: [row] });
    var filter = (button) => button.clicker.user.id === message.author.id;
   
    let collector = await msg.createButtonCollector(filter, { time: 99999999 })
    collector.on("collect", async (button) => {
      if(button.id === "puan") {
        await button.reply.defer()
      const puan = new MessageEmbed()

.addField(`<:astenia_isaretle:927526078208147487>
 **Net Puanlama Bilgisi**`, `
<:astenia_nokta:927528579137425449> Kayıt işlemi yaparak, \`+5.5\` puan kazanırsın.
<:astenia_nokta:927528579137425449> Taglı üye belirleyerek, \`+20\` puan kazanırsınız.
<:astenia_nokta:927528579137425449> İnsanları davet ederek, \`+15\` puan kazanırsın.
<:astenia_nokta:927528579137425449> İnsanları yetkili yaparak, \`+30\` puan kazanırsın.
<:astenia_nokta:927528579137425449> Seste kalarak, ortalama olarak \`+1\` puan kazanırsınız.
<:astenia_nokta:927528579137425449> Yazı yazarak, ortalama olarak, \`+1\` puan kazanırsınız.
 `, false)

msg.edit({
  embed : puan,
  components : row
})
      
      }

  if(button.id === "rewards_puan") {
    await button.reply.defer()
    const ceza = new MessageEmbed()
.setDescription(`
${member.toString()}, (${member.roles.highest}) üyesinin \`${moment(Date.now()).format("LLL")}\` tarihinden itibaren \`${message.guild.name}\` sunucusunda yaptığı işlemlerden aldığı puan bilgi tablosu aşağıda belirtilmiştir.
`) 
.addField(`<:astenia_isaretle:927526078208147487> **Puan Detayları:**`, `
<:astenia_nokta:927528579137425449> Kayıt: (\`Puan Etkisi: +${toplamData ? toplamData.toplams.length*5.5 : 0}\`)
<:astenia_nokta:927528579137425449> Taglı: (\`Puan Etkisi: +${taggedData ? taggedData.taggeds.length*20 : 0}\`)
<:astenia_nokta:927528579137425449> Davet: (\`Puan Etkisi: +${total*15}\`)
<:astenia_nokta:927528579137425449> Yetkili: (\`Puan Etkisi: +${yetkiData ? yetkiData.yetkis.length*30 : 0}\`)
<:astenia_nokta:927528579137425449> Chat Puan: \`${messageData ? messageData.topStat : 0} mesaj (Puan Etkisi: +${messageData ? messageData.topStat*1 : 0})\`
<:astenia_nokta:927528579137425449> Sesli Puan: \`${moment.duration(voiceData ? voiceData.topStat : 0).format("m")} dakika (Puan Etkisi: +${moment.duration(voiceData ? voiceData.topStat*1 : 0).format("m")})\`
 `, false)


msg.edit({
  embed: ceza,
  components : row
})  
    }


      if(button.id === "ana_sayfa") {
        await button.reply.defer()
        const iptal = new MessageEmbed()
    .setDescription(`${member.toString()} Yetkilisinin Puan bilgisi`)
    
.addField(`<:astenia_isaretle:927526078208147487> **Puan Durumu:**`, `
<:astenia_nokta:927528579137425449> Puanınız: \`${coinData ? Math.floor(coinData.coin) : 0}\`, Gereken Puan: \`${maxValue.coin}\`
      ${progressBar(coinData ? coinData.coin : 0, maxValue.coin, 9)} \`${coinData ? coinData.coin : 0} / ${maxValue.coin}\`
       `, false)

    msg.edit({
      embed: iptal,
      components : row
    })
        
        }

  })
  }
};

function progressBar(value, maxValue, size) {
const progress = Math.round(size * ((value / maxValue) > 1 ? 1 : (value / maxValue)));
const emptyProgress = size - progress > 0 ? size - progress : 0;

const progressText = fill.repeat(progress);
const emptyProgressText = empty.repeat(emptyProgress);

return emptyProgress > 0 ? fillStart+progressText+emptyProgressText+emptyEnd : fillStart+progressText+emptyProgressText+fillEnd;
};