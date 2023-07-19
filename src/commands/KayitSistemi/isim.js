const ayar = require("../../configs/sunucuayar.json")
const Ayarlar = require("../../configs/sunucuayar.json");
const { red , green } = require("../../configs/emojis.json")
const isimler = require("../../schemas/names");
const isimLimit = new Map();
const moment = require("moment")
moment.locale("tr");
const settings = require("../../configs/settings.json")

module.exports = {
  conf: {
    aliases: ["isim", "i", "nick"],
    name: "isim",
    help: "isim [üye] [isim] [yaş]"
  },
run: async (client, message, args, embed, prefix) => { 
    let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!Ayarlar.teyitciRolleri.some(oku => message.member.roles.cache.has(oku)) && !Ayarlar.sahipRolu.some(oku => message.member.roles.cache.has(oku)) && !message.member.hasPermission('ADMINISTRATOR')) 
    {
    message.react(red)
    message.lineReply(`Yetkin bulunmamakta.`).then(x=> x.delete({timeout: 5000})) 
    return }
    if(!uye) 
    {
    message.react(red)
    message.lineReply(`\`${prefix}isim <@Alone/ID> <Isim> <Yaş>\``).then(x=>x.delete({timeout:5000})) 
    return }
    if(message.author.id === uye.id) 
    {
    message.react(red)
    message.lineReply(`Kendi ismini değiştiremezsin. Booster isen \`${prefix}zengin\``).then(x => x.delete({timeout: 5000})); 
    return }
    if(!uye.manageable) 
    {
    message.react(red)
    message.lineReply(`Böyle birisinin ismini değiştiremiyorum.`).then(x => x.delete({timeout: 5000})); 
    return }
    if(message.member.roles.highest.position <= uye.roles.highest.position) 
    {
    message.react(red)
    message.lineReply(`Senden yüksekte olan birisinin ismini değiştiremezsin.`).then(x => x.delete({timeout: 5000})); 
    return }
    if (settings.isimlimit > 0 && isimLimit.has(message.author.id) && isimLimit.get(message.author.id) == settings.isimlimit) 
    {
    message.react(red)
  return message.lineReply(`Saatlik isim değiştirme sınırına ulaştın!`).then(x=>x.delete({timeout:5000}))
    }
    const data = await isimler.findOne({ guildID: message.guild.id, userID: uye.user.id });
    args = args.filter(a => a !== "" && a !== " ").splice(1);
    let setName;
    let isim = args.filter(arg => isNaN(arg)).map(arg => arg.charAt(0).replace('i', "İ").toUpperCase()+arg.slice(1)).join(" ");
    let yaş = args.filter(arg => !isNaN(arg))[0] || "";
    if(!isim && !yaş) 
    {
    message.react(red)
    message.lineReply(`\`${prefix}isim <@Alone/ID> <Isim> <Yaş>\``).then(x=>x.delete({timeout:5000})) 
    return }
    if(!yaş) 
    { setName = `${uye.user.username.includes(ayar.tag) ? ayar.tag : (ayar.ikinciTag ? ayar.ikinciTag : (ayar.tag || ""))} ${isim}`;
    } else { setName = `${uye.user.username.includes(ayar.tag) ? ayar.tag : (ayar.ikinciTag ? ayar.ikinciTag : (ayar.tag || ""))} ${isim} | ${yaş}`;
  } uye.setNickname(`${setName}`).catch(err => message.lineReply(`İsim çok uzun.`))

    message.react(green)
    message.lineReply(embed.setDescription(`
${uye.toString()} üyesinin ismi başarıyla \`"${setName}"\` olarak değiştirildi

${red} Üyesinin toplamda **${data ? `${data.names.length}` : "0"}** isim bilgisi 
${data ? data.names.splice(0, 3).map((x, i) => `\`${x.name}\` (${x.rol}) (<@${x.yetkili}>)`).join("\n") : "İsim bilgisi bulunamadı."}
`)
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true, size: 2048 }))
.setFooter(`İşlemi gerçekleştiren yetkili: ${message.member.displayName}`))

await isimler.findOneAndUpdate({ guildID: message.guild.id, userID: uye.user.id }, { $push: { names: { name: setName, yetkili: message.author.id,  rol: "İsim Değiştirme", date: Date.now() } } }, { upsert: true });


    if (settings.isimlimit > 0) {
      if (!isimLimit.has(message.author.id)) isimLimit.set(message.author.id, 1);
      else isimLimit.set(message.author.id, isimLimit.get(message.author.id) + 1);
      setTimeout(() => {
        if (isimLimit.has(message.author.id)) isimLimit.delete(message.author.id);
      }, 1000 * 60 * 60);
    }
  },
};