const moment = require("moment");
moment.locale("tr");
const {red, green} = require("../../configs/emojis.json")
module.exports = {
    conf: {
      aliases: ["çek"],
      name: "çek",
      help: "çek"
    },
  
run: async (client, message, args, embed, prefix) => {
  if (!message.member.voice.channelID) return message.lineReply("Bir ses kanalında olmalısın!", message.author, message.channel);
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  if (!member) return  message.lineReply("Bir üye etiketle ve tekrardan dene!", message.author, message.channel);
  if (!member.voice.channelID) return message.lineReply("Bu kullanıcı herhangi bir ses kanalında bulunmuyor!", message.author, message.channel);
  if (message.member.voice.channelID === member.voice.channelID) return message.lineReply("Zaten aynı kanaldasınız!", message.author, message.channel);

  if (message.member.permissions.has("ADMINISTRATOR")) {
      member.voice.setChannel(message.member.voice.channelID);
      message.react("<a:Onay:908973524994109451>")
      message.lineReply(embed.setThumbnail(message.author.avatarURL({dynamic: true, size: 2048})).setDescription(`${message.author}, ${member} kişisini yanınıza taşıdınız.`))
      const log = embed
      .setColor("#2f3136")
      .setDescription(`
      Bir Transport işlemi gerçekleşti.
    
      Odaya Taşınan Kullanıcı: ${member} - \`${member.id}\`
      Odasına Taşıyan Yetkili: ${message.author} - \`${message.author.id}\`
      `)
      .setFooter(`${moment(Date.now()).format("LLL")}`)
    message.guild.channels.cache.get("899666284709564416").wsend(log);
  } else {
  const question = await message.lineReply(member.toString(),embed.setThumbnail(message.author.avatarURL({dynamic: true, size: 2048})).setDescription(`${member}, ${message.author} \`${message.member.voice.channel.name}\` seni odasına çekmek istiyor. Kabul ediyor musun?`));
  await question.react("<a:Onay:908973524994109451>");
  await question.react("<a:red:932024433399435364>");
  const answer = await question.awaitReactions((reaction, user) => ["<a:Onay:908973524994109451>", "<a:red:932024433399435364>"].includes(reaction.emoji.toString()) && user.id === member.user.id, { max: 1, time: 60000, errors: ["time"] }).catch(() => { question.edit(embed.setDescription("İşlem iptal edildi!")) });
  if (answer.first().emoji.toString() === "<a:Onay:908973524994109451>") {
    question.delete();
    message.lineReply(embed.setThumbnail(message.author.avatarURL({dynamic: true, size: 2048})).setDescription(`${message.author}, ${member} kişisini yanınıza taşıdınız.`))
    member.voice.setChannel(message.member.voice.channelID);
  } else {
    question.delete();
  }
}
    }
  }