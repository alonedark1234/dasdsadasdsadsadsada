const {MessageMenuOption , MessageMenu , MessageActionRow} = require("discord-buttons")
module.exports = {
  conf: {
    aliases: ["kpanel"],
    name: "kpanel",
    help: "kpanel",
    owner: true
  },
  
      run: async(client, message, args) => {

     client.api.channels(message.channel.id).messages.post({
            data: {
                "content": `**✯ Astenia** Sunucu içerisi;\nUlaşmak istediğiniz bilgilere menüden tıklamanız yeterli olucaktır.`,
                "components": [{
                        "type": 1, "components": [{
                        "type": 3, "custom_id": "kpanel", "options": [
                            { "label": "Sunucuya Katılma Tarihiniz", "value": "I", "emoji": { "id": "909477151571607623", "name": "ict_I" }, },
                            { "label": "Üzerinde Bulunan Rollerin Listesi", "value": "II", "emoji": { "id": "909477151571607623", "name": "ict_II" }, },
                            { "label": "Hesabınızın Açılış Tarihi", "value": "III", "emoji": { "id": "909477151571607623", "name": "ict_III" }, },
                            { "label": "Toplam invite Bilgileri", "value": "IV", "emoji": { "id": "909477151571607623", "name": "ict_IV" }, },
                            { "label": "Tekrar Kayıt Olma", "value": "V", "emoji": { "id": "909477151571607623", "name": "ict_V" }, },
                            { "label": "Sunucu Bilgileri", "value": "VI", "emoji": { "id": "909477151571607623", "name": "ict_VI" }, },
                            { "label": "İsim Bilgileri", "value": "VII", "emoji": { "id": "909477151571607623", "name": "ict_VII" }, },
                            { "label": "Toplam Mesaj Bilgileri", "value": "VIII", "emoji": { "id": "909477151571607623", "name": "ict_VIII" }, },
                            { "label": "Toplam Ses Bilgileri", "value": "IX", "emoji": { "id": "909477151571607623", "name": "ict_IX" }, }

                        ], "placeholder": "Kullanıcı Menüsü", "min_values": 1, "max_values": 1
                    }],
                }
                ]
            }
        })

  }}