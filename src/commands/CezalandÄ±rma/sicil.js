const moment = require("moment");
require("moment-duration-format");
const nameData = require("../../schemas/names")
const ceza = require("../../schemas/ceza")
const cezapuan = require("../../schemas/cezapuan")
const penals = require("../../schemas/penals");
const { red, green, star } = require("../../configs/emojis.json")
const conf = require("../../configs/sunucuayar.json");
const settings = require("../../configs/settings.json")
const { TeamMember, MessageEmbed } = require("discord.js");
const { MessageButton,MessageActionRow } = require('discord-buttons');

module.exports = {
  conf: {
    aliases: ["sicil"],
    name: "sicil",
    help: "sicil"
  },

  run: async (client, message, args, embed) => {
    
  let üye = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  if (üye.user.bot) return;
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

var anasayfaa = new MessageButton().setLabel("Ana sayfa").setID("anasayfaa").setStyle("blurple")
var cezapuann = new MessageButton().setLabel("Ceza Puan").setID("cezapuann").setStyle("green")
var sicill = new MessageButton().setLabel("Sicil").setID("sicill").setStyle("red")
var isimms = new MessageButton().setLabel("İsimler").setID("isimms").setStyle("gray")
    
const row = new MessageActionRow().addComponents(anasayfaa , cezapuann , sicill , isimms)

embed.setDescription(`${member} Üyesinin hesap verileri aşağıda belirtilmiştir.Sunucu içerisi verilerini öğrenmek için aşağıda bulunan butonları kullanınız!

**<a:astenia_yildiz12:927526366348476457> __Kullanıcı Bilgisi__**
\`\`\`py
• Hesap: ${member.user.tag}

• Kullanıcı ID: ${member.id}

• Durum: ${member.user.presence.activities.length > 0 ? member.user.presence.activities.map(e => e.name).join(", ") : "Aktivite Bulunmamakta"}

• Kuruluş Tarihi: ${moment(member.user.createdAt).format(`DD/MM/YYYY | HH:mm`)} (${moment(member.user.createdAt).add(5, 'gün').fromNow().replace("birkaç saniye önce", " ")}.)
\`\`\`
`)

const user = message.mentions.users.first() || await client.fetchUser(args[0]);
const cezaData = await ceza.findOne({ guildID: settings.guildID, userID: member.id });
const data2 = await nameData.findOne({ guildID: message.guild.id, userID: member.user.id });
const cezapuanData = await cezapuan.findOne({ guildID: settings.guildID, userID: member.user.id });
    let msg = await message.channel.send(embed, { components: [row] });
    var filter = (button) => button.clicker.user.id === message.author.id; 
    let datas = await nameData.findOne({ guildID: message.guild.id, userID: member.user.id });
    let collector = await msg.createButtonCollector(filter, { time: 99999999 })
    collector.on("collect", async (button) => {

      if(button.id === "cezapuann") {
      await button.reply.defer()
const cezapuan2 = new MessageEmbed().setDescription(`
<a:astenia_yildiz12:927526366348476457> ${member} kişisinin toplamda ${cezapuanData ? cezapuanData.cezapuan : 0} ceza puanı ve (Toplam ${cezaData ? cezaData.ceza.length : 0} Ceza) olarak gözükmekte!`)
msg.edit({
  embed : cezapuan2,
  components : row
})
      
      }
  if(button.id === "isimms") {
      await button.reply.defer()
const isim = new MessageEmbed().setDescription(`
<a:astenia_yildiz12:927526366348476457> Üyesinin toplamda **${datas ? `${datas.names.length}` : "0"}** isim bilgisi bulunmakta.
${datas ? datas.names.splice(0).map((x, i) => `\`${x.name}\` (${x.rol}) (<@${x.yetkili}>)`).join("\n") : "İsim bilgisi bulunamadı."}`)
msg.edit({
  embed : isim,
  components : row
})

  }
if(button.id === "sicill") {
  await button.reply.defer()   
  let data = await penals.find({ guildID: message.guild.id, userID: member.user.id, }).sort({ date: -1 });
if (data.length === 0) return message.channel.send(`${green} ${member.toString()} üyesinin sicili temiz!`).then(x=>x.delete({timeout:5000}))
data = data.map((x) => `
#${x.id} ${x.active ? green : red} **[${x.type}]** ${moment(x.date).format("LLL")} tarihinde, <@${x.staff}> tarafından, \`${x.reason}\` nedeniyle, ${x.type.toLowerCase().replace("-", " ")} cezası almış.\n`).join("─────────────────");
    for (var i = 0; i < Math.floor(data.length / 2000); i++) {
      
const sicil2 = new MessageEmbed().setDescription(data.slice(0, 2000));
data = data.slice(2000);

msg.edit({
  embed: sicil2,
  components : row
})  
   }
    if (data.length > 0) message.channel.send(embed.setDescription(data));
    }
  if(button.id === "anasayfaa") {
      await button.reply.defer()
const isimm = new MessageEmbed().setDescription(`
${member} Üyesinin hesap verileri aşağıda belirtilmiştir. Sunucu içerisi verilerini öğrenmek için aşağıda bulunan butonları kullanınız!`)
.setFooter(`Astenia`)
.setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true, size: 2048 }))
.setColor("RANDOM")
.addFields(
 { name:"<a:astenia_yildiz12:927526366348476457>  __**Kullanıcı Bilgisi**__",  value: `
\`\`\`py
• Hesap: ${member.user.tag}

• Kullanıcı ID: ${member.id}

• Durum: ${member.user.presence.activities.length > 0 ? member.user.presence.activities.map(e => e.name).join(", ") : "Aktivite Bulunmamakta"}

• Kuruluş Tarihi: ${moment(member.user.createdAt).format(`DD/MM/YYYY | HH:mm`)} (${moment(member.user.createdAt).add(5, 'gün').fromNow().replace("birkaç saniye önce", " ")}.)
\`\`\`
`, inline: true },)
msg.edit({
  embed : isimm,
  components : row
})

  }

  })
  }
};