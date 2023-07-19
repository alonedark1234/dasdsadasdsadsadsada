const moment = require("moment");
require("moment-duration-format");
const conf = require("../../configs/sunucuayar.json");
const inviteMemberSchema = require("../../schemas/inviteMember");
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
const {  xp, gulucuk, mesaj2, altin, altin2 ,rewards ,star , fill, empty, fillStart, emptyEnd, fillEnd, red } = require("../../configs/emojis.json");
const { TeamMember, MessageEmbed } = require("discord.js");
const { MessageButton,MessageActionRow } = require('discord-buttons');

module.exports = {
  conf: {
    aliases: ["ystat"],
    name: "yetkim",
    help: "yetkim | .ystat [user]"
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

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
      
    var PuanDetaylari = new MessageButton()
    .setLabel("Puan Detayları")
    .setID("puan_detaylari")
    .setStyle("green")
    .setEmoji("916011925316456481")

    var GenelPuanDetaylari = new MessageButton()
    .setLabel("Genel Puan Detayları")
    .setID("genel_puan_detaylari")
    .setStyle("blurple")
    .setEmoji("909485167977037824")

    var İnvites = new MessageButton()
    .setLabel("İnvites")
    .setID("invite_sayim")
    .setStyle("gray")
    .setEmoji("917144183142240326")


    var Iptal = new MessageButton()
    .setLabel("İptal")
    .setID("iptal_button")
    .setStyle("red")
    .setEmoji("909485171240218634")

    const row = new MessageActionRow()
    .addComponents(PuanDetaylari, GenelPuanDetaylari, İnvites, Iptal)

embed.setDescription(`
${member.toString()}, (${member.roles.highest}) üyesinin \`${moment(Date.now()).format("LLL")}\` tarihinden  itibaren \`${message.guild.name}\` sunucusunda toplam ses ve mesaj bilgileri aşağıda belirtilmiştir.
`)

.addFields(
{ name: "<a:astenia_yildiz12:927526366348476457> __**Toplam Ses**__",  value: `
\`\`\`fix
${moment.duration(voiceData ? voiceData.topStat : 0).format("H [saat], m [dakika]")}
\`\`\`
`, inline: true },
{ name: "<a:astenia_yildiz12:927526366348476457> __**Toplam Mesaj**__",  value: `
\`\`\`fix
${messageData ? messageData.topStat : 0} mesaj
\`\`\`
`, inline: true },
{ name:"<a:astenia_yildiz12:927526366348476457> __**Toplam Kayıt**__",  value: `
\`\`\`fix
${toplamData ? `${toplamData.toplams.length} kişi`: "Veri bulunmuyor."} 
\`\`\`
`, inline: true },
)
  
.addFields(
{ name: "<a:astenia_yildiz12:927526366348476457> __**Toplam Davet**__", value: `
\`\`\`fix
${inviterData ? `${total} regular`: "Veri bulunmuyor."} 
\`\`\`
`, inline: true },
{ name: "<a:astenia_yildiz12:927526366348476457> __**Toplam Taglı**__", value: `
\`\`\`fix
${taggedData ? `${taggedData.taggeds.length} kişi`: "Veri bulunmuyor."} 
\`\`\`
`, inline: true },
{ name: "<a:astenia_yildiz12:927526366348476457> __**Toplam Yetkili**__", value: `
\`\`\`fix
${yetkiData ? `${yetkiData.yetkis.length} kişi` : "Veri bulunmuyor."}
\`\`\`
`, inline: true }
)
  
  
embed.addField("<:astenia_isaretle:927526078208147487> **Sesli Sohbet İstatistiği**", `
<:astenia_nokta:927528579137425449> Toplam: \`${moment.duration(voiceData ? voiceData.topStat : 0).format("H [saat], m [dakika]")}\`
<:astenia_nokta:927528579137425449> Public Odalar: \`${await category(conf.publicParents)}\`
<:astenia_nokta:927528579137425449> Secret Odalar: \`${await category(conf.privateParents)}\`
<:astenia_nokta:927528579137425449> Alone Odalar: \`${await category(conf.aloneParents)}\`
<:astenia_nokta:927528579137425449> Yönetim Yetkili Odaları: \`${await category(conf.funParents)}\`
<:astenia_nokta:927528579137425449> Kayıt Odaları: \`${await category(conf.registerParents)}\`
`, false);
  
  
embed.addField("<:astenia_isaretle:927526078208147487> **Mesaj İstatistiği**", `
<:astenia_nokta:927528579137425449> Toplam: \`${messageData ? messageData.topStat : 0}\`
<:astenia_nokta:927528579137425449> Haftalık Mesaj: \`${Number(messageWeekly).toLocaleString()} mesaj\`
<:astenia_nokta:927528579137425449> Günlük Mesaj: \`${Number(messageDaily).toLocaleString()} mesaj\`
`, false);

   

    let msg = await message.channel.send(embed, { components: [row] });
    var filter = (button) => button.clicker.user.id === message.author.id;
   
    let collector = await msg.createButtonCollector(filter, { time: 99999999 })
    collector.on("collect", async (button) => {
      if(button.id === "puan_detaylari") {
        await button.reply.defer()
      const puan = new MessageEmbed()
.setDescription(`
${member.toString()}, (${member.roles.highest}) üyesinin \`${moment(Date.now()).format("LLL")}\` tarihinden  itibaren \`${message.guild.name}\` sunucusunda puanlama tablosu aşağıda belirtilmiştir.
`) 
      
.addField("<:astenia_isaretle:927526078208147487> **Puan Durumu:**", `
<:astenia_nokta:927528579137425449> Puanınız: \`${coinData ? Math.floor(coinData.coin) : 0}\`, Gereken Puan: \`${maxValue.coin}\`
${progressBar(coinData ? coinData.coin : 0, maxValue.coin, 9)} \`${coinData ? coinData.coin : 0} / ${maxValue.coin}\`
`, false)
      
.addField("<:astenia_isaretle:927526078208147487> **Puan Detayları:**", `
<:astenia_nokta:927528579137425449> Kayıtlar: \`${toplamData ? toplamData.toplams.length : 0} (Puan Etkisi: +${toplamData ? toplamData.toplams.length*5.5 : 0})\`
<:astenia_nokta:927528579137425449> Taglılar: \`${taggedData ? taggedData.taggeds.length : 0} (Puan Etkisi: +${taggedData ? taggedData.taggeds.length*20 : 0})\`
<:astenia_nokta:927528579137425449> Davetler: \`${total} (Puan Etkisi: +${total*10})\`
<:astenia_nokta:927528579137425449> Yetkililer: \`${yetkiData ? yetkiData.yetkis.length : 0} kişi (Puan Etkisi: +${yetkiData ? yetkiData.yetkis.length*30 : 0})\`
<:astenia_nokta:927528579137425449> Chat Puan: \`${messageData ? messageData.topStat : 0} mesaj (Puan Etkisi: +${messageData ? messageData.topStat*1 : 0})\`
<:astenia_nokta:927528579137425449> Sesli Puan: \`${moment.duration(voiceData ? voiceData.topStat : 0).format("m")} dakika (Puan Etkisi: +${moment.duration(voiceData ? voiceData.topStat*1 : 0).format("m")})\`
`, false)
      
.addField("<:astenia_isaretle:927526078208147487> **Yetki Durumu:** ", `
      ${coinStatus}
       `, false);  

msg.edit({
  embed : puan,
  components : row
})
      
      }

  if(button.id === "genel_puan_detaylari") {
    await button.reply.defer()
    const ceza = new MessageEmbed()
    .setDescription(`
    ${member.toString()}, (${member.roles.highest}) üyesinin \`${moment(Date.now()).format("LLL")}\` tarihinden itibaren \`${message.guild.name}\` sunucusunda genel puanlama tablosu aşağıda belirtilmiştir.
`) 
.addField("<:astenia_isaretle:927526078208147487> **Puan Detayları:**", `
<:astenia_nokta:927528579137425449> Kayıt: (\`Puan Etkisi: +${toplamData ? toplamData.toplams.length*5.5 : 0}\`)
<:astenia_nokta:927528579137425449> Taglı: (\`Puan Etkisi: +${taggedData ? taggedData.taggeds.length*20 : 0}\`)
<:astenia_nokta:927528579137425449> Davet: (\`Puan Etkisi: +${total*10}\`)
<:astenia_nokta:927528579137425449> Yetkili: (\`Puan Etkisi: +${yetkiData ? yetkiData.yetkis.length*30 : 0}\`)
<:astenia_nokta:927528579137425449> Toplam Ses: (\`Puan Etkisi: +${moment.duration(voiceData ? voiceData.topStat*1 : 0).format("m")}\`)
<:astenia_nokta:927528579137425449> Toplam Mesaj: (\`Puan Etkisi: +${messageData ? messageData.topStat*1 : 0}\`)
<:astenia_nokta:927528579137425449> Toplam Aldığın Cezalar : ${cezapuanData ? cezapuanData.cezapuan.length : 0} (\`Toplam ${cezaData ? cezaData.ceza.length : 0}\`)
 `, false)

.addField("<:astenia_isaretle:927526078208147487> **Net Puanlama Bilgisi**", `
<:astenia_nokta:927528579137425449> Kayıt işlemi yaparak, \`+5.5\` puan kazanırsın.
<:astenia_nokta:927528579137425449> Taglı üye belirleyerek, \`+20\` puan kazanırsınız.
<:astenia_nokta:927528579137425449> İnsanları davet ederek, \`+10\` puan kazanırsın.
<:astenia_nokta:927528579137425449> İnsanları yetkili yaparak, \`+30\` puan kazanırsın.
<:astenia_nokta:927528579137425449> Seste kalarak, ortalama olarak \`+1\` puan kazanırsınız.
<:astenia_nokta:927528579137425449> Yazı yazarak, ortalama olarak, \`+1\` puan kazanırsınız.
 `, false)

.addField("<:astenia_isaretle:927526078208147487> **Puan Durumu:**", `
<:astenia_nokta:927528579137425449> Puanınız: \`${coinData ? Math.floor(coinData.coin) : 0}\`, Gereken Puan: \`${maxValue.coin}\`
${progressBar(coinData ? coinData.coin : 0, maxValue.coin, 9)} \`${coinData ? coinData.coin : 0} / ${maxValue.coin}\`
 `, false)

.addField("<:astenia_isaretle:927526078208147487> **Yetki Durumu:** ", `
${coinStatus}
 `, false)

msg.edit({
  embed: ceza,
  components : row
})  
    }

    if(button.id === "invite_sayim") {   
    await button.reply.defer()
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const inviterData = await inviterSchema.findOne({ guildID: message.guild.id, userID: member.user.id });
    const top = inviterData ? inviterData.total : 0;
    const regular = inviterData ? inviterData.regular : 0;
    const bonus = inviterData ? inviterData.bonus : 0;
    const leaved = inviterData ? inviterData.leave : 0;
    const süpheli = inviterData ? inviterData.fake : 0;
    const bonus2 = inviterData ? inviterData.bonus : 0;;
   const invMember = await inviteMemberSchema.find({ guildID: message.guild.id, inviter: member.user.id });
    const günlük = invMember ? message.guild.members.cache.filter((m) => invMember.some((x) => x.userID === m.user.id) && Date.now() - m.joinedTimestamp < 1000 * 60 * 60 * 24).size : 0;
    const haftalik = invMember ? message.guild.members.cache.filter((m) => invMember.some((x) => x.userID === m.user.id) && Date.now() - m.joinedTimestamp < 1000 * 60 * 60 * 24 * 7).size : 0;
    let tagges;
    if (conf.tag && conf.tag.length > 0) tagges = invMember ? message.guild.members.cache.filter((m) => invMember.some((x) => x.userID === m.user.id) && m.user.username.includes(conf.tag)).size : 0;
    else tagges = 0;
    const ceza = new MessageEmbed()

    .setDescription(`<:astenia_isaretle:927526078208147487> **Toplam invite sayınız: ${top}**\n Diğer invite bilgileri aşağıda detaylı olarak belirtilmiştir.`) 

.addField(`<:astenia_isaretle:927526078208147487> İnvite`,`Toplam Davet: \`${top}\`
Gerçek: \`${regular}\`, Çıkan: \`${leaved}\`, Şüpheli: \`${süpheli}\`
Günlük Davet: \`${günlük}\`, Haftalık Davet: \`${haftalik}\`, Tagges: \`${tagges}\`, Bonus Davet: \`${bonus2}\`

       `)
.addField(`<:astenia_isaretle:927526078208147487> Puan Bilgisi`,`İnsanları davet ederek, \`+15\` puan kazanırsın.\n Davet Puan: \`${top} davet Puan Etkisi: +${total*15}\` `)

.addField(`<:astenia_isaretle:927526078208147487> **Puan Durumu:**`, `
Puanınız: \`${coinData ? Math.floor(coinData.coin) : 0}\`, Gereken Puan: \`${maxValue.coin}\`
${progressBar(coinData ? coinData.coin : 0, maxValue.coin, 9)} \`${coinData ? coinData.coin : 0} / ${maxValue.coin}\`
`, false)

msg.edit({
  embed: ceza,
  components : row
})  
    }


      if(button.id === "iptal_button") {
        await button.reply.defer()
        const iptal = new MessageEmbed()
.setDescription(`
${member.toString()}, (${member.roles.highest}) üyesinin \`${moment(Date.now()).format("LLL")}\` tarihinden  itibaren \`${message.guild.name}\` sunucusunda toplam ses ve mesaj bilgileri aşağıda belirtilmiştir.
`)

.addFields(
{ name: "<a:astenia_yildiz12:927526366348476457> __**Toplam Ses**__",  value: `
\`\`\`fix
${moment.duration(voiceData ? voiceData.topStat : 0).format("H [saat], m [dakika]")}
\`\`\`
`, inline: true },
{ name: "<a:astenia_yildiz12:927526366348476457> __**Toplam Mesaj**__",  value: `
\`\`\`fix
${messageData ? messageData.topStat : 0} mesaj
\`\`\`
`, inline: true },
{ name:"<a:astenia_yildiz12:927526366348476457> __**Toplam Kayıt**__",  value: `
\`\`\`fix
 ${toplamData ? `${toplamData.toplams.length} kişi`: "Veri bulunmuyor."} 
\`\`\`
`, inline: true },
)
  
.addFields(
{ name: "<a:astenia_yildiz12:927526366348476457> __**Toplam Davet**__", value: `
\`\`\`fix
${inviterData ? `${total} regular`: "Veri bulunmuyor."} 
\`\`\`
`, inline: true },
{ name: "<a:astenia_yildiz12:927526366348476457> __**Toplam Taglı**__", value: `
\`\`\`fix
${taggedData ? `${taggedData.taggeds.length} kişi`: "Veri bulunmuyor."} 
\`\`\`
`, inline: true },
{ name: "<a:astenia_yildiz12:927526366348476457> __**Toplam Yetkili**__", value: `
\`\`\`fix
${yetkiData ? `${yetkiData.yetkis.length} kişi` : "Veri bulunmuyor."}
\`\`\`
`, inline: true }
)
  
  
iptal.addField("<:astenia_isaretle:927526078208147487> **Sesli Sohbet İstatistiği**", `
<:astenia_nokta:927528579137425449> Toplam: \`${moment.duration(voiceData ? voiceData.topStat : 0).format("H [saat], m [dakika]")}\`
<:astenia_nokta:927528579137425449> Public Odalar: \`${await category(conf.publicParents)}\`
<:astenia_nokta:927528579137425449> Secret Odalar: \`${await category(conf.privateParents)}\`
<:astenia_nokta:927528579137425449> Alone Odalar: \`${await category(conf.aloneParents)}\`
<:astenia_nokta:927528579137425449> Yönetim Yetkili Odaları: \`${await category(conf.funParents)}\`
<:astenia_nokta:927528579137425449> Kayıt Odaları: \`${await category(conf.registerParents)}\`
`, false);
  
  
iptal.addField("<:astenia_isaretle:927526078208147487> **Mesaj İstatistiği**", `
<:astenia_nokta:927528579137425449> Toplam: \`${messageData ? messageData.topStat : 0}\`
<:astenia_nokta:927528579137425449> Haftalık Mesaj: \`${Number(messageWeekly).toLocaleString()} mesaj\`
<:astenia_nokta:927528579137425449> Günlük Mesaj: \`${Number(messageDaily).toLocaleString()} mesaj\`
   `, false);

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
