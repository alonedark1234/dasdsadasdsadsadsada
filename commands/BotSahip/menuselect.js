const {MessageMenuOption , MessageMenu , MessageActionRow} = require("discord-buttons")
module.exports = {
  conf: {
    aliases: ["sm3","select-menu3"],
    name: "selectmenu3",
    help: "select-menu3",
    owner: true
  },
  
      run: async(client,message,args,embed) => {

        /* Select Menü  1. Rolleri*/
        const KutuRol1 = new MessageMenuOption()
        .setLabel('Sevgilim Var')
        .setDescription(`Sevgilim Var Rolünü Almak İçin Tıkla.`)
        .setEmoji("❤️")
        .setValue('couple');
       
        const KutuRol12 = new MessageMenuOption()
        .setLabel('Sevgilim Yok')
        .setDescription(`Sevgilim Yok Rolünü Almak İçin Tıkla.`)
        .setEmoji("💔")
        .setValue('alone');

        const KutuRol13 = new MessageMenuOption()
        .setLabel('LGBT')
        .setDescription(`LGBT Rolünü Almak İçin Tıkla.`)
        .setEmoji("🏳️‍🌈")
        .setValue('lgbt');

        const KutuRol14 = new MessageMenuOption()
        .setLabel('Rolsüz')
        .setDescription(`Rollerini Temizlemek İçin Tıkla.`)
        .setEmoji("🗑️")
        .setValue('rolsuz');
      

        /* Select Menü 1 Tanım*/
        const Menu = new MessageMenu()
        .setID("relation")
        .setPlaceholder("İlişki Rolleri")
        .addOption(KutuRol1)
        .addOption(KutuRol12)
        .addOption(KutuRol13)
        .addOption(KutuRol14)


        /* Select Menü 2. Rolleri */
        const KutuRol15 = new MessageMenuOption()
        .setLabel('LoL')
        .setDescription(`League of LegendsRolü Almak İçin Tıkla`)
        .setEmoji("909381330939306035")
        .setValue('lol');

        const KutuRol16 = new MessageMenuOption()
        .setLabel('Cs:Go')
        .setDescription(`Cs:Go Rolü Almak İçin Tıkla.`)
        .setEmoji("909381188882399272")
        .setValue('csgo');

        const KutuRol17 = new MessageMenuOption()
        .setLabel('Valorant')
        .setDescription(`Valorant Rolü Almak İçin Tıkla.`)
        .setEmoji("909381480050987029")
        .setValue('valorant');

        const KutuRol18 = new MessageMenuOption()
        .setLabel('Rolsüz')
        .setDescription(`Rollerini Temizlemek İçin Tıkla.`)
        .setEmoji("🗑️")
        .setValue('rolsuzz');

        /* Select Menü 2 Tanım */

        const Menu2 = new MessageMenu()
        .setID("oyun")
        .setPlaceholder(`Oyun Rolleri`)
        .addOption(KutuRol15)
        .addOption(KutuRol16)
        .addOption(KutuRol17)
        .addOption(KutuRol18)

        /* Select Menü 3 Rolleri */

        const KutuRol19 = new MessageMenuOption()
        .setLabel('Turuncu')
        .setDescription(`Turuncu Renk Rolü Almak İçin Tıkla.`)
        .setEmoji("928383524652871721")
        .setValue('turuncu');

        const KutuRol20 = new MessageMenuOption()
        .setLabel('Sarı')
        .setDescription(`Sarı Renk Rolü Almak İçin Tıkla.`)
        .setEmoji("928398297142546452")
        .setValue('sari');

        const KutuRol21 = new MessageMenuOption()
        .setLabel('Mavi')
        .setDescription(`Mavi Renk Rolü Almak İçin Tıkla.`)
        .setEmoji("928383571129958480")
        .setValue('mavi');

        const KutuRol22 = new MessageMenuOption()
        .setLabel('Mor')
        .setDescription(`Mor Renk Rolü Almak İçin Tıkla.`)
        .setEmoji("928383482734972949")
        .setValue('mor');

        const KutuRol23 = new MessageMenuOption()
        .setLabel('Yeşil')
        .setDescription(`Yeşil Renk Rolü Almak İçin Tıkla.`)
        .setEmoji("928383321765974036")
        .setValue('yesil');

        const KutuRol25 = new MessageMenuOption()
        .setLabel('Rolsüz')
        .setDescription(`Rollerini Temizlemek İçin Tıkla.`)
        .setEmoji("🗑️")
        .setValue('rolsuzzz');

        /* Select Menü 3 Tanım */

        const Menu3 = new MessageMenu()
        .setID("renk")
        .setPlaceholder(`Renk Rolleri`)
        .addOption(KutuRol19)
        .addOption(KutuRol20)
        .addOption(KutuRol21)
        .addOption(KutuRol22)
        .addOption(KutuRol23)
        .addOption(KutuRol25)

       /* Select Menü 4 Rolleri */

       const KutuRol26 = new MessageMenuOption()
       .setLabel('İkizler')
       .setDescription(`İkizler Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("928657510867566673")
       .setValue('ikizler');

       const KutuRol27 = new MessageMenuOption()
       .setLabel('Yengeç')
       .setDescription(`Yengeç Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("928657797627932713")
       .setValue('yengeç');

       const KutuRol28 = new MessageMenuOption()
       .setLabel('Boğa')
       .setDescription(`Boğa Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("928657376842756156")
       .setValue('boğa');

       const KutuRol29 = new MessageMenuOption()
       .setLabel('Koç')
       .setDescription(`Koç Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("928657411319943229")
       .setValue('koç');

       const KutuRol30 = new MessageMenuOption()
       .setLabel('Akrep')
       .setDescription(`Akrep Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("928657198832312380")
       .setValue('akrep');

       const KutuRol31 = new MessageMenuOption()
       .setLabel('Terazi')
       .setDescription(`Terazi Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("928657554014359623")
       .setValue('terazi');

       const KutuRol32 = new MessageMenuOption()
       .setLabel('Başak')
       .setDescription(`Başak Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("928657293359325294")
       .setValue('başak');

       const KutuRol33 = new MessageMenuOption()
       .setLabel('Aslan')
       .setDescription(`Aslan Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("928657220986617916")
       .setValue('aslan');

       const KutuRol34 = new MessageMenuOption()
       .setLabel('Balık')
       .setDescription(`Balık Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("928657335734390785")
       .setValue('balık');

       const KutuRol35 = new MessageMenuOption()
       .setLabel('Kova')
       .setDescription(`Kova Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("928659009563664384")
       .setValue('kova');

       const KutuRol36 = new MessageMenuOption()
       .setLabel('Oğlak')
       .setDescription(`Oğlak Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("928657449655861289")
       .setValue('oğlak');

       const KutuRol37 = new MessageMenuOption()
       .setLabel('Yay')
       .setDescription(`Yay Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("928657148978823190")
       .setValue('yay');

 const KutuRol38 = new MessageMenuOption()
        .setLabel('Rolsüz')
        .setDescription(`Rollerini Temizlemek İçin Tıkla.`)
        .setEmoji("🗑️")
        .setValue('rolsuzzzz');
       /* Select Menü 4 Tanım */

       const Menu4 = new MessageMenu()
       .setID("burç")
       .setPlaceholder(`Burç Rolleri`)
       .addOption(KutuRol26)
       .addOption(KutuRol27)
       .addOption(KutuRol28)
       .addOption(KutuRol29)
       .addOption(KutuRol30)
       .addOption(KutuRol31)
       .addOption(KutuRol32)
       .addOption(KutuRol33)
       .addOption(KutuRol34)
       .addOption(KutuRol35)
       .addOption(KutuRol36)
       .addOption(KutuRol37)
       .addOption(KutuRol38)

        /* Select Menü 1 */
        const RoleMenu = new MessageActionRow()
        .addComponent(Menu)

        /* Select Menu 2 */
        const RoleMenu2 = new MessageActionRow()
        .addComponent(Menu2)

        /* Select Menu 3 */
        const RoleMenu3 = new MessageActionRow()
        .addComponent(Menu3)

         /* Select Menu 4 */
        const RoleMenu4 = new MessageActionRow()
        .addComponent(Menu4)

        message.channel.send(`**✯ Astenia**, Sunucusunda rol seçmek için aşağıdaki menüyü kullanabilirsiniz.`, {
          components: [
            RoleMenu,
            RoleMenu2,
            RoleMenu3,
            RoleMenu4],
        });
  }}