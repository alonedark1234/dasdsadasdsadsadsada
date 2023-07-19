const { MessageEmbed } = require("discord.js");
const client = global.client;
const bannedTag = require("../schemas/bannedTag");
const conf = require("../configs/sunucuayar.json");
const settings = require("../configs/settings.json")
const regstats = require("../schemas/registerStats");

module.exports = async (oldUser, newUser) => {
    if (oldUser.bot || newUser.bot || (oldUser.username === newUser.username)) return;
    const guild = client.guilds.cache.get(settings.guildID);
    if (!guild) return;
    const member = guild.members.cache.get(oldUser.id);
    if (!member) return;

      
     const data = await bannedTag.findOne({ guildID: settings.guildID });
    if (!data || !data.taglar.length) return;
    if (data.taglar.some((x) => !oldUser.username.includes(x.tag) && newUser.username.includes(x.tag))) {
      member.setRoles(conf.jailRole);
      guild.channels.cache.get("").send(`${member.toString()}, sunucumuzdaki yasaklı taglardan birini aldığın için cezalıya atıldın!`);
    } else if (data.taglar.some((x) => oldUser.username.includes(x.tag) && !newUser.username.includes(x.tag))) {
      member.setRoles(conf.unregister);
    }

};

module.exports.conf = {
  name: "userUpdate",
};