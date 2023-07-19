const { Client, Collection, Discord } = require("discord.js");
require("discord-reply")
const client = (global.client = new Client({ fetchAllMembers: true }));
require('discord-buttons')(client)
const mySecret = process.env['token']
const settings = require("./src/configs/settings.json");
const conf = require("./src/configs/sunucuayar.json");
const fs = require("fs");
const matthe = require('discord-buttons')
client.commands = new Collection();
client.aliases = new Collection();
client.invites = new Collection();
client.cooldown = new Map();

const map = new Map();
const lımıt = 4;
const TIME = 180000;
const DIFF = 2000;

//RANK KISMI//
client.ranks = [
  { role: "908743668406550589", coin: 800 },
  { role: "908743668406550590", coin: 1600 },
  { role: "908743668406550591", coin: 2400 },
  { role: "908743668406550592", coin: 3200 },
  { role: "908743668406550594", coin: 4300 },
  { role: "908743668406550595", coin: 5400 },
  { role: "908743668406550596", coin: 6500 },
  { role: "908743668406550597", coin: 7600 },
  { role: "908743668427530270", coin: 8700 },
  { role: "908743668427530271", coin: 9800 },
  { role: "908743668427530273", coin: 11300 },
  { role: "908743668427530274", coin: 13300 },
  { role: "908743668427530275", coin: 15300 },
  { role: "908743668427530277", coin: 17300 },
  { role: "908743668427530278", coin: 19300 },
  { role: "908743668427530279", coin: 21300 },
  { role: "908743668456898580", coin: 25000 },
  ]
//KOMUT ÇALIŞTIRMA
fs.readdir('./src/commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`[ALONE] ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    fs.readdir("./src/commands/" + f, (err2, files2) => {
      files2.forEach(file => {
        let props = require(`./src/commands/${f}/` + file);
        console.log(`[ALONE KOMUT] ${props.conf.name} komutu yüklendi!`);
        client.commands.set(props.conf.name, props);
        props.conf.aliases.forEach(alias => {
          client.aliases.set(alias, props.conf.name);
        });
      })
    })
  });
});
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");
require("./src/handlers/functionHandler")(client);

client
  .login(process.env.token)
  .then(() => console.log("Bot Başarıyla Bağlandı!"))
  .catch(() => console.log("[HATA] Bot Bağlanamadı!"));

setInterval(() => {
  let GuildID = "908743668045852712"
  let OneMonth = "909111366487527474"
  let ThreeMonth = "909111518543638558"
  let SixMonth = "909111566367076373"
  let NineMonth = "909111993422716972"
  let OneYear = "909111731752697958"
  const server = client.guilds.cache.get(GuildID); 
  server.members.cache.forEach(async member => {
if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 30) {await member.roles.add(OneMonth)}

if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 90) {await member.roles.remove(OneMonth)
  await member.roles.add(ThreeMonth)}

if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 180) {await member.roles.remove(ThreeMonth)
await member.roles.add(SixMonth)}

if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 270) {await member.roles.remove(SixMonth)
  await member.roles.add(NineMonth)}

  if(Date.now() - member.joinedAt > 1000 * 60 * 60 * 24 * 365) {await member.roles.remove(NineMonth)
    await member.roles.add(OneYear)}

        })
  }, 1000 * 60 * 60 * 24 * 7)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", msg => {
       let InviteGuardReg = /(https:\/\/)?(www\.)?(discord\.gg|discord\.me|discordapp\.com\/invite|discord\.com\/invite)\/([a-z0-9-.]+)?/i;  
         if (InviteGuardReg.test(msg.content)) {
           try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                   msg.delete();
                   msg.delete();
                   msg.delete();
                     return msg.reply('Reklam yapman yasak!').then(ozixd => ozixd.delete({ timeout: 3000 }));
    
             }              
           } catch(err) {
             console.log(err);
           }
         }
     });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-----------------------------------------------------------------------------------------------------------\



//-----------------------TAG-ROL----------------------\\

client.on("userUpdate", async (stg, yeni) => {
  var sunucu = client.guilds.cache.get("908743668045852712");
  var uye = sunucu.members.cache.get(yeni.id);
  var ekipTag = "✯";
  var ekipRolü = "908743668238803031";
  var logKanali = "908743673028706329";

  if (!sunucu.members.cache.has(yeni.id) || yeni.bot || stg.username === yeni.username)
    return;

  if (yeni.username.includes(ekipTag) && !uye.roles.cache.has(ekipRolü)) {
    try {
      await uye.roles.add(ekipRolü);
      await uye.send(`**Tagımızı aldığın için teşekkürler! Aramıza hoş geldin.**`);
      await client.channels.cache.get("908743673028706329").send(`**${yeni} (\`${yeni.id}\`) adlı üye tagımızı alarak aramıza katıldı!**`);
    } catch (err) {
      console.error(err);
    }
  }

  if (!yeni.username.includes(ekipTag) && uye.roles.cache.has(ekipRolü)) {
    try {
      await uye.roles.remove(
        uye.roles.cache.filter(
          rol => rol.position >= sunucu.roles.cache.get(ekipRolü).position
        )
      );
      await uye.send(`**Tagımızı bıraktığın için **✯ Family Of Astenia** rolün alındı! Tagımızı tekrar alıp aramıza katılmak istersen;\nTagımız: **${ekipTag}**`);
      await client.channels.cache.get("908743673028706329").send(`**${yeni} (\`${yeni.id}\`) adlı üye tagımızı bırakarak aramızdan ayrıldı!**`);
    } catch (err) {
      console.error(err);
    }
  }
});