const conf = require("../configs/sunucuayar.json")
module.exports = async (menu) => {

    await menu.clicker.fetch();
    menu.reply.think(true)

    if (menu.values[0] === "invite") {
     setTimeout(() => {
        menu.reply.edit(`
**<:astenia_isaretle:927526078208147487> Davet Komutları**
> <:astenia_nokta:927528579137425449> .invite (stat [user])
> <:astenia_nokta:927528579137425449> .topdavet (topdavet)
`)
     },750) 
    }

    if (menu.values[0] === "genel") {
     setTimeout(() => {
        menu.reply.edit(`
**<:astenia_isaretle:927526078208147487> Genel Komutlar**
> <:astenia_nokta:927528579137425449> .afk (afk [sebep])
> <:astenia_nokta:927528579137425449> .avatar (avatar [UserID/@User])
> <:astenia_nokta:927528579137425449> .booster (boost [nick])
> <:astenia_nokta:927528579137425449> .profil (profil / [@üye])
> <:astenia_nokta:927528579137425449> .tag (tag)
> <:astenia_nokta:927528579137425449> .yardım (yardım)
> <:astenia_nokta:927528579137425449> .çek (çek [@üye])
> <:astenia_nokta:927528579137425449> .git (git [@üye])
> <:astenia_nokta:927528579137425449> .market (coinmarket) 
> <:astenia_nokta:927528579137425449> .satınal (satınal) 
> <:astenia_nokta:927528579137425449> .görev (görev [user])
> <:astenia_nokta:927528579137425449> .coin [ekle/sil/gönder] [kullanıcı] [sayı]
`)
     },750) 
    }


    if (menu.values[0] === "kurucu") {
     setTimeout(() => {
        menu.reply.edit(`
**<:astenia_isaretle:927526078208147487> Kurucu Komutları**
> <:astenia_nokta:927528579137425449> .kilit ([aç/kapat])
> <:astenia_nokta:927528579137425449> .banliste (banlist)
> <:astenia_nokta:927528579137425449> .rolbilgi (@role)
> <:astenia_nokta:927528579137425449> .cezapuansil ([user])
> <:astenia_nokta:927528579137425449> .isimsil ([user])
> <:astenia_nokta:927528579137425449> .sicilsil ([user])
> <:astenia_nokta:927528579137425449> .yasaklı-tag (ekle/sil/liste [yasaklıtag])
> <:astenia_nokta:927528579137425449> .yetkilises (yetkilises)
> <:astenia_nokta:927528579137425449> .yoklama (toplantı)
> <:astenia_nokta:927528579137425449> .allmute (allmute [kanal])
> <:astenia_nokta:927528579137425449> .allunmute (allunmute [kanal])
> <:astenia_nokta:927528579137425449> .toplutaşı (toplutaşı [kanal])
`)
     },750) 
    }

if (menu.values[0] === "kayıt") {
     setTimeout(() => {
        menu.reply.edit(`
**<:astenia_isaretle:927526078208147487> Kayıt Komutları** 

> <:astenia_nokta:927528579137425449> .kayıt [user] [İsim] [Yaş]
> <:astenia_nokta:927528579137425449> .isim (isim [user] [name | age])
> <:astenia_nokta:927528579137425449> .isimler (isimler [user])
> <:astenia_nokta:927528579137425449> .kayıtsız (unregister [user])
> <:astenia_nokta:927528579137425449> .teyitler (kayıt bilginizi gösterir)
`)
     },750) 
    }


    if (menu.values[0] === "moderasyon") {
     setTimeout(() => {
        menu.reply.edit(`
**<:astenia_isaretle:927526078208147487> Moderasyon Komutları**
> <:astenia_nokta:927528579137425449> .ban (yargı [user] [reason])
> <:astenia_nokta:927528579137425449> .jail (jail [user] [reason])
> <:astenia_nokta:927528579137425449> .vmute (vmute [user] [time] [reason])
> <:astenia_nokta:927528579137425449> .mute (mute [user] [time] [reason])
> <:astenia_nokta:927528579137425449> .tempjail (jail [user] [time] [reason])
> <:astenia_nokta:927528579137425449> .unban (unban [userID])
> <:astenia_nokta:927528579137425449> .unmute (unmute [user] / [userID])
> <:astenia_nokta:927528579137425449> .unvmute (unvmute [user] / [userID])
> <:astenia_nokta:927528579137425449> .unjail (unjail [user] / [userID])
> <:astenia_nokta:927528579137425449> .sicil (sicil [user])
> <:astenia_nokta:927528579137425449> .topceza (topceza)
> <:astenia_nokta:927528579137425449> .cezapuan (cezapuan [user])
> <:astenia_nokta:927528579137425449> .cezasorgu (cezasorgu [Ceza ID])
> <:astenia_nokta:927528579137425449>.banlist (banliste)
> <:astenia_nokta:927528579137425449> .allmute (allmute [kanal])
> <:astenia_nokta:927528579137425449> .allunmute (allunmute [kanal])
> <:astenia_nokta:927528579137425449> .toplutaşı (toplutaşı [kanal])
`)
     },750) 
    }

    if (menu.values[0] === "stat") {
     setTimeout(() => {
        menu.reply.edit(`
**<:astenia_isaretle:927526078208147487> Stat Komutları**
> <:astenia_nokta:927528579137425449> .stat (stat [user])
> <:astenia_nokta:927528579137425449> .top (top)
> <:astenia_nokta:927528579137425449> .nerede (sesbilgi)
> <:astenia_nokta:927528579137425449> .topcoin (topcoin)
`)
     },750) 
    }

    if (menu.values[0] === "yetkili") {
     setTimeout(() => {
        menu.reply.edit(`
**<:astenia_isaretle:927526078208147487> Yetkili Komutları**
> <:astenia_nokta:927528579137425449> .ystat (yetkim [user])
> <:astenia_nokta:927528579137425449> .puan (puan [user])
> <:astenia_nokta:927528579137425449> .cezapuan (cezapuan [user])
> <:astenia_nokta:927528579137425449> .kes (kes [user])
> <:astenia_nokta:927528579137425449> .rolsüz (rolsüz)
> <:astenia_nokta:927528579137425449> .say (say)
> <:astenia_nokta:927528579137425449> .snipe (snipe)
> <:astenia_nokta:927528579137425449> .sesli (sesli)
> <:astenia_nokta:927528579137425449> .sicil (sicil [user])
> <:astenia_nokta:927528579137425449> .yetkili (yetkili [user])
> <:astenia_nokta:927528579137425449> .taglı (taglı [user])
> <:astenia_nokta:927528579137425449> .rol (r [al/ver] [user] [@role])
> <:astenia_nokta:927528579137425449>> .rollog (rollog [user])
> <:astenia_nokta:927528579137425449> .seslisay (sesli)
> <:astenia_nokta:927528579137425449> .sil (sil [miktar])
`)
     },750) 
    }
}
module.exports.conf = {
    name: "clickMenu",
  };