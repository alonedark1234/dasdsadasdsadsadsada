const coin = require("../../schemas/coin");
const taggeds = require("../../schemas/taggeds");
const tagli = require("../../schemas/taggorev");
const conf = require("../../configs/sunucuayar.json")
const settings = require("../../configs/settings.json")
const { red, green} = require("../../configs/emojis.json")
module.exports = {
  conf: {
    aliases: ["tag-aldır", "taglıaldır", "taglı"],
    name: "tagaldır",
    help: "tagaldır [kullanıcı]"
  },

  run: async (client, message, args, embed) => {
    if (!conf.staffs.some(x => message.member.roles.cache.has(x))) return message.react(red)
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) 
    {
    message.react(red)
    message.channel.send("Bir üye belirtmelisin!")
    return }
    if (!member.user.username.includes(conf.tag) && member.user.username.includes(conf.tag2) && member.user.username.includes(conf.tag2)) 
    {
    message.react(red)
    message.channel.send("Bu üye taglı değil!")
    return }
    const taggedData = await taggeds.findOne({ guildID: message.guild.id, userID: message.author.id });
    if (taggedData && taggedData.taggeds.includes(member.user.id)) 
    {
    message.react(red)
    message.channel.send("Bu üyeye zaten daha önce tag aldırmışsın!")
    return }

    const msg = await message.channel.send( `${member.toString()}, ${message.member.toString()} üyesi sana tag aldırmak istiyor. Kabul ediyor musun?`);
    msg.react("<a:Onay:908973524994109451>");
    msg.react("<a:Iptal:908973586075750410>");

    msg.awaitReactions((reaction, user) => ["Onay", "Iptal"].includes(reaction.emoji.name) && user.id === member.user.id, {
      max: 1,
      time: 30000,
      errors: ['time']
    }).then(async collected => {
      const reaction = collected.first();
      if (reaction.emoji.name === 'Onay') {
        await coin.findOneAndUpdate({ guildID: member.guild.id, userID: message.author.id }, { $inc: { coin: settings.taggedCoin } }, { upsert: true });
        const tagData = await tagli.findOne({ guildID: message.guild.id, userID: message.author.id });
        if (tagData)
        {
        await tagli.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { tagli: 1 } }, { upsert: true });
        }
        msg.edit(`${member.toString()} üyesine başarıyla tag aldırıldı! <a:Onay:908973524994109451>`)
        await taggeds.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $push: { taggeds: member.user.id } }, { upsert: true });
      } else {
        msg.edit(`${member.toString()} üyesi, tag aldırma teklifini reddetti! <a:Iptal:908973586075750410>`)
      }
    }).catch(() => msg.edit("<a:Iptal:908973586075750410> Tag aldırma işlemi iptal edildi!"))
  }
}