const { MessageEmbed } = require("discord.js");
const inviterSchema = require("../../schemas/inviter");
const inviteMemberSchema = require("../../schemas/inviteMember");
const conf = require("../../configs/sunucuayar.json")
module.exports = {
  conf: {
    aliases: ["invites", "invite"],
    name: "invites",
    help: "invites"
  },

  run: async (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const inviterData = await inviterSchema.findOne({ guildID: message.guild.id, userID: member.user.id });
    const total = inviterData ? inviterData.total : 0;
    const regular = inviterData ? inviterData.regular : 0;
    const bonus = inviterData ? inviterData.bonus : 0;
    const leave = inviterData ? inviterData.leave : 0;
    const fake = inviterData ? inviterData.fake : 0;
    const invMember = await inviteMemberSchema.find({ guildID: message.guild.id, inviter: member.user.id });
    const daily = invMember ? message.guild.members.cache.filter((m) => invMember.some((x) => x.userID === m.user.id) && Date.now() - m.joinedTimestamp < 1000 * 60 * 60 * 24).size : 0;
    const weekly = invMember ? message.guild.members.cache.filter((m) => invMember.some((x) => x.userID === m.user.id) && Date.now() - m.joinedTimestamp < 1000 * 60 * 60 * 24 * 7).size : 0;
    let tagged;
    if (conf.tag && conf.tag.length > 0) tagged = invMember ? message.guild.members.cache.filter((m) => invMember.some((x) => x.userID === m.user.id) && m.user.username.includes(conf.tag)).size : 0;
    else tagged = 0;

    const embed = new MessageEmbed()
      .setAuthor(member.user.username, member.user.avatarURL({ dynamic: true }))
      .setColor(`BLUE`)
      .setThumbnail(member.user.avatarURL({ dynamic: true, size: 2048 }))
.setDescription(`
<a:astenia_yildiz12:927526366348476457> Toplam **${total}** davet. 
<:astenia_nokta:927528579137425449> ${regular} Gerçek 
<:astenia_nokta:927528579137425449> ${leave} Ayrılmış
<:astenia_nokta:927528579137425449> ${fake} Fake

<a:astenia_yildiz12:927526366348476457> Günlük: \`${daily}\`, Haftalık: \`${weekly}\`, Taglı: \`${tagged}\``);

    message.channel.send(embed);
  },
};