const ozi = require("../../schemas/dolar");
let limit = new Map();
const ms = require("parse-ms");
const { altin, altin2 } = require("../../configs/emojis.json")

module.exports = {
    conf: {
      aliases: ["cf"],
      name: "coinflip",
      help: "coinflip"
    },
  
run: async (client, message, args, embed, prefix) => {

  if (!message.guild) return;

		let kanallar = ["coin-komut"]
	
	  let data = limit.get(message.author.id) || {dailyCoinTime: 0};
    let timeout = 1000*8
    let gunluk = data.dailyCoinTime
    if (gunluk !== null && timeout - (Date.now() - gunluk) > 0) {
        let time = ms(timeout - (Date.now() - gunluk));
        message.lineReply(`:stopwatch: **|** Hata! **${message.author.username}** Bu komutu ${time.seconds} saniye sonra kullanabilirsin.`)
	} else {
	limit.set(message.author.id, {dailyCoinTime: Date.now()})
	setTimeout(() => {
		limit.delete(message.author.id)
	}, 1000*8)


       let sec = args[0];
        if(!sec || !Number(args[0])) return message.lineReply(`Kaç dolar ile oynamak istiyorsun?`)
        if(sec >= 50000) return message.lineReply("50.000 dolardan fazla bir dolar ile oyun oynamayazsın")

    let data = await ozi.findOne({guildID: message.guild.id, userID: message.author.id}, async(err, res) => {
    if(!res.dolar) return message.lineReply(`Hiç doların yok!`) 
    if(res.dolar < sec) return message.lineReply(`:no_entry: | **${message.author.username}**, Yeterli miktar da paran yoktur!\nBelirttiğin miktarda dolar ile oynayabilmek için \`${sec - res.dolar}\` daha dolar ihtiyacın var. Dolarınız: (**${res.dolar}** ${altin})`) 

            let mesaj = await message.lineReply(`
**${message.member.displayName}, \`${sec}\`** dolar ile madeni para döndürüyor ${altin2}`)

            setTimeout(() => { 
            //    mesaj.delete();

            let randomizeCoinCal = Math.floor(Math.random() * 10) + 1;
            if(randomizeCoinCal <= 4) {
                res.dolar = (res.dolar - sec)
                res.save();
                mesaj.edit(`
${message.author}, oynadığın **${sec}** doları kayıp ettin >:C`)
            } else {
                let carpma = sec * 1
                res.dolar = (res.dolar + carpma)
                res.save();
                mesaj.edit(`
${message.author}, **${carpma}** dolar kazandın! ${altin}`)

                
            }


            }, 2000)
        })
}
}}
