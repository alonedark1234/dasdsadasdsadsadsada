const moment = require("moment");
require("moment-duration-format");
const coin = require("../../schemas/coin");
const conf = require("../../configs/sunucuayar.json");
const {  rewards, miniicon, mesaj2, staff, galp, maviyildiz, maviicon, kirmiziok , green, red2, Muhabbet ,star , fill, empty, fillStart, emptyEnd, fillEnd, red } = require("../../configs/emojis.json");
const { TeamMember, MessageEmbed } = require("discord.js");
const { MessageButton,MessageActionRow } = require('discord-buttons');

module.exports = {
  conf: {
    aliases: ["ranks","yetkis", "rankliste"],
    name: "ranks",
    help: "ranks"
  },

  run: async (client, message, args, embed) => {

       if(!conf.teyitciRolleri.some(oku => message.member.roles.cache.has(oku)) && !conf.sahipRolu.some(oku => message.member.roles.cache.has(oku)) && !message.member.hasPermission('ADMINISTRATOR')) 
    {
      message.react(red)
      return
    } 
    
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const coinData = await coin.findOne({ guildID: message.guild.id, userID: member.user.id });
    const maxValue = client.ranks[client.ranks.indexOf(client.ranks.find(x => x.coin >= (coinData ? coinData.coin : 0)))] || client.ranks[client.ranks.length-1];
    let currentRank = client.ranks.filter(x => (coinData ? coinData.coin : 0) >= x.coin);
    currentRank = currentRank[currentRank.length-1];
    const coinStatus = message.member.hasRole(conf.staffs, false) && client.ranks.length > 0 ?
      `${currentRank ?`
      ${currentRank !== client.ranks[client.ranks.length-1] ? `Şu an ${Array.isArray(currentRank.role) ? currentRank.role.map(x => `<@&${x}>`).join(", ") : `<@&${currentRank.role}>`} rolündesiniz. ${Array.isArray(maxValue.role) ? maxValue.role.length > 1 ? maxValue.role.slice(0, -1).map(x => `<@&${x}>`).join(', ') + ' ve ' + maxValue.role.map(x => `<@&${x}>`).slice(-1) : maxValue.role.map(x => `<@&${x}>`).join("") : `<@&${maxValue.role}>`} rolüne ulaşmak için \`${maxValue.coin-coinData.coin}\` puan daha kazanmanız gerekiyor!` : "Şu an son yetkidesiniz! Emekleriniz için teşekkür ederiz. :)"}` : ` 
      Şuan ${message.member.roles.highest} rolündesiniz. ${Array.isArray(maxValue.role) ? maxValue.role.length > 1 ? maxValue.role.slice(0, -1).map(x => `<@&${x}>`).join(', ') + ' ve ' + maxValue.role.map(x => `<@&${x}>`).slice(-1) : maxValue.role.map(x => `<@&${x}>`).join("") : `<@&${maxValue.role}>`} rolüne ulaşmak için \`${maxValue.coin - (coinData ? coinData.coin : 0)}\`  Puan daha kazanmanız gerekiyor!`}` : ""
      

    var AnaSayfa = new MessageButton()
    .setLabel("Ana Sayfa")
    .setID("anasayfa")
    .setStyle("gray")
    .setEmoji("909159478597918811")

      var HelpPuan = new MessageButton()
    .setLabel("Nasıl Puan Kazanırım")
    .setID("help_puan")
    .setStyle("gray")
    .setEmoji("909485177389064222")

    var Ranks = new MessageButton()
    .setLabel("Ranks")
    .setID("ranks")
    .setStyle("gray")
    .setEmoji("913434112424046674")


    const row = new MessageActionRow()
    .addComponents(AnaSayfa, HelpPuan, Ranks)

embed.setDescription(`${message.author} üyesinin puan bilgi tablosu aşağıdadır.`)

.addField(`${star} **Puan Durumu:**`, `
Puanınız: \`${coinData ? Math.floor(coinData.coin) : 0}\`, Gereken Puan: \`${maxValue.coin}\`
${progressBar(coinData ? coinData.coin : 0, maxValue.coin, 9)} \`${coinData ? coinData.coin : 0} / ${maxValue.coin}\`
 `, false)

.addField(`${star} **Yetki Durumu:**`, `
      ${coinStatus}
       `, false); 


    let msg = await message.channel.send(embed, { components: [row] });
    var filter = (button) => button.clicker.user.id === message.author.id;

    let collector = await msg.createButtonCollector(filter, { time: 99999999 })
    collector.on("collect", async (button) => {
      if(button.id === "help_puan") {
        await button.reply.defer()
      const puan = new MessageEmbed()
.setDescription(`${star} **Puan Detayları:**\n${maviicon} Kayıt işlemi yaparak, +5.5 puan kazanırsın.
${maviicon} Taglı üye belirleyerek, +20 puan kazanırsınız.
${maviicon} İnsanları davet ederek, +15 puan kazanırsın
${maviicon} İnsanları yetkili yaparak, +30 puan kazanırsın
${maviicon} Seste kalarak, ortalama olarak +1 puan kazanırsınız.
${maviicon} Yazı yazarak, ortalama olarak, +1 puan kazanırsınız.`)


msg.edit({
  embed : puan,
  components : row
})
      
      }

  if(button.id === "ranks") {
    await button.reply.defer()
    const button2 = new MessageEmbed()
.setDescription(`${star} **Yetkili Rolleri**\n
**${maviicon} <@&908743668406550589>: 800 Coin
${maviicon} <@&908743668406550590>: 1600 Coin
${maviicon} <@&908743668406550591>: 2400 Coin
${maviicon} <@&908743668406550592>: 3200 Coin
${maviicon} <@&908743668406550594>: 4300 Coin

${maviicon} <@&908743668406550595>: 5400 Coin
${maviicon} <@&908743668406550596>: 6500 Coin
${maviicon} <@&908743668406550597>: 7600 Coin
${maviicon} <@&908743668427530270>: 8700 Coin
${maviicon} <@&908743668427530271>: 9800 Coin

${maviicon} <@&908743668427530273>: 11300 Coin
${maviicon} <@&908743668427530274>: 13300 Coin
${maviicon} <@&908743668427530275>: 15300 Coin
${maviicon} <@&908743668427530277>: 17300 Coin
${maviicon} <@&908743668427530278>: 19300 Coin
${maviicon} <@&908743668427530279>: 21300 Coin

${maviicon} <@&908743668456898580>: 25000 Coin **`) 


msg.edit({
  embed: button2,
  components : row
})  
    }
 if(button.id === "anasayfa") {   
    const button3 = new MessageEmbed()
    .setDescription(`${message.author} üyesinin puan bilgi tablosu aşağıdadır.`)
.addField(`${star} **Puan Durumu:**`, `
Puanınız: \`${coinData ? Math.floor(coinData.coin) : 0}\`, Gereken Puan: \`${maxValue.coin}\`
${progressBar(coinData ? coinData.coin : 0, maxValue.coin, 9)} \`${coinData ? coinData.coin : 0} / ${maxValue.coin}\`
 `, false)


.addField(`${star} **Yetki Durumu:**`, `
      ${coinStatus}
       `, false); 

msg.edit({
  embed: button3,
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