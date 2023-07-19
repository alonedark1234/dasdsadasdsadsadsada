const conf = require("../configs/sunucuayar.json")
module.exports = async (menu) => {

    await menu.clicker.fetch();
    menu.reply.think(true)

    if (menu.values[0] === "couple") {
     await menu.clicker.member.roles.add("908743668213628974") 
      await menu.clicker.member.roles.remove(["908743668213628973" , "927913985867665478"])
               
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668213628974> rolünü aldın!`)
    }
    if(menu.values[0] === "alone") {
        await menu.clicker.member.roles.add("908743668213628973") 
      await menu.clicker.member.roles.remove(["908743668213628974" , "927913985867665478"])
               
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668213628973> rolünü aldın!`)
    }
    if(menu.values[0] === "lgbt") {
        await menu.clicker.member.roles.add("927913985867665478") 
      await menu.clicker.member.roles.remove(["908743668213628974" , "908743668213628973"])
               
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&927913985867665478> rolünü aldın!`)
    }
    if(menu.values[0] === "rolsuz") {
      await menu.clicker.member.roles.remove(["927913985867665478" , "908743668213628974", "908743668213628973"]) 
       await menu.clicker.member.roles.remove(["927913985867665478" , "908743668213628974", "908743668213628973"]) 
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla üstünüzdeki Bütün rolleri aldım!`)
    }


    if(menu.values[0] === "lol") {
      await menu.clicker.member.roles.add("908743668045852718")   
      await menu.clicker.member.roles.add("908743668045852718")
      menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668045852718> rolünü aldın!`)
    }

    if(menu.values[0] === "csgo") {
      await menu.clicker.member.roles.add("908743668045852721") 
      await menu.clicker.member.roles.add("908743668045852721")
      menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668045852721> rolünü aldın!`)
    }

    if(menu.values[0] === "valorant") {
      await menu.clicker.member.roles.add("908743668045852716")
      await menu.clicker.member.roles.add("908743668045852716")
      menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668045852716> rolünü aldın!`)
    }

    if(menu.values[0] === "rolsuzz") {
      await menu.clicker.member.roles.remove(["908743668045852716", "908743668045852721", "908743668045852718"])
       await menu.clicker.member.roles.remove(["908743668045852716", "908743668045852721", "908743668045852718"])
      menu.reply.edit(`<@!${menu.clicker.id}> başarıyla üstünüzdeki Bütün rolleri aldım!`)
    }


    if (menu.values[0] === "turuncu") {
        if(!conf.renkrolüalcaklar.some(x => menu.clicker.member.roles.cache.has(x)))
        {
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
        return }
        await menu.clicker.member.roles.add("908743668352036864") 
        await menu.clicker.member.roles.remove(["908743668331069447", "908743668331069446", "908743668331069445", "908743668331069449"])

        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668352036864> rolünü aldın!`)
    }
    if (menu.values[0] === "sari") {
        if(!conf.renkrolüalcaklar.some(x => menu.clicker.member.roles.cache.has(x)))
        {
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
        return }
        await menu.clicker.member.roles.add("908743668331069447") 
        await menu.clicker.member.roles.remove(["908743668331069446", "908743668331069445", "908743668331069449", "908743668352036864"])

        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668331069447> rolünü aldın!`)
    }
    if (menu.values[0] === "mavi") {
        if(!conf.renkrolüalcaklar.some(x => menu.clicker.member.roles.cache.has(x)))
        {
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
        return }
        await menu.clicker.member.roles.add("908743668331069446") 
        await menu.clicker.member.roles.remove(["908743668331069445", "908743668331069449", "908743668352036864", "908743668331069447"])

        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668331069446> rolünü aldın!`)
    }
    if (menu.values[0] === "mor") {
        if(!conf.renkrolüalcaklar.some(x => menu.clicker.member.roles.cache.has(x)))
        {
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
        return }
        await menu.clicker.member.roles.add("908743668331069445") 
        await menu.clicker.member.roles.remove(["908743668331069449", "908743668352036864", "908743668331069447", "908743668331069446"])

        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668331069445> rolünü aldın!`)
    }
    if (menu.values[0] === "yesil") {
        if(!conf.renkrolüalcaklar.some(x => menu.clicker.member.roles.cache.has(x)))
        {
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
        return }
        await menu.clicker.member.roles.add("908743668331069449") 
        await menu.clicker.member.roles.remove(["908743668352036864", "908743668331069447", "908743668331069446", "908743668331069445"])

        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668331069449> rolünü aldın!`)
    }
    if(menu.values[0] === "rolsuzzz") {
        await menu.clicker.member.roles.remove(["908743668352036864", "908743668331069447", "908743668331069446", "908743668331069445", "908743668331069449"])
         await menu.clicker.member.roles.remove(["908743668352036864", "908743668331069447", "908743668331069446", "908743668331069445", "908743668331069449"])
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla üstünüzdeki Bütün rolleri aldım!`)
    }
/////////////////////////////////////////////////////////
    if (menu.values[0] === "ikizler") {
        await menu.clicker.member.roles.add("908743668112953354") 
        await menu.clicker.member.roles.remove(["908743668112953358", "908743668112953357", "908743668112953356", "908743668112953355", "908743668066832443", "908743668066832442", "908743668066832441", "908743668066832440", "908743668066832439", "908743668112953360","908743668112953359"])
            ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668112953354> rolünü aldın!`)
    }
    if(menu.values[0] === "yengeç") {
        await menu.clicker.member.roles.add("908743668066832442") 
        await menu.clicker.member.roles.remove(["908743668112953358", "908743668112953357", "908743668112953356", "908743668112953355", "908743668066832443", "908743668112953354", "908743668066832441", "908743668066832440", "908743668066832439", "908743668112953360","908743668112953359"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668066832442> rolünü aldın!`)

    }
    if(menu.values[0] === "boğa") {
        await menu.clicker.member.roles.add("908743668112953356") 
        await menu.clicker.member.roles.remove(["908743668112953358", "908743668112953357", "908743668066832442", "908743668112953355", "908743668066832443", "908743668112953354", "908743668066832441", "908743668066832440", "908743668066832439", "908743668112953360","908743668112953359"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////   
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668112953356> rolünü aldın!`)
    }
    if (menu.values[0] === "koç") {
        await menu.clicker.member.roles.add("908743668112953357") 
        await menu.clicker.member.roles.remove(["908743668112953358", "908743668112953356", "908743668066832442", "908743668112953355", "908743668066832443", "908743668112953354", "908743668066832441", "908743668066832440", "908743668066832439", "908743668112953360","908743668112953359"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////   

        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668112953357> rolünü aldın!`)
    }
    if (menu.values[0] === "akrep") {
        await menu.clicker.member.roles.add("908743668066832440") 
        await menu.clicker.member.roles.remove(["908743668112953358", "908743668112953356", "908743668066832442", "908743668112953355", "908743668066832443", "908743668112953354", "908743668066832441", "908743668112953357", "908743668066832439", "908743668112953360","908743668112953359"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////          
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668066832440> rolünü aldın!`)
    }
    if (menu.values[0] === "terazi") {
        await menu.clicker.member.roles.add("908743668066832443") 
        await menu.clicker.member.roles.remove(["908743668112953358", "908743668112953356", "908743668066832442", "908743668112953355", "908743668066832440", "908743668112953354", "908743668066832441", "908743668112953357", "908743668066832439", "908743668112953360","908743668112953359"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////  
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668066832443> rolünü aldın!`)
    }
    if (menu.values[0] === "başak") {
        await menu.clicker.member.roles.add("908743668112953355") 
        await menu.clicker.member.roles.remove(["908743668112953358", "908743668112953356", "908743668066832442", "908743668066832443", "908743668066832440", "908743668112953354", "908743668066832441", "908743668112953357", "908743668066832439", "908743668112953360","908743668112953359"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////  
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668112953355> rolünü aldın!`)
    }
    if(menu.values[0] === "aslan") {
        await menu.clicker.member.roles.add("908743668066832441") 
        await menu.clicker.member.roles.remove(["908743668112953358", "908743668112953356", "908743668066832442", "908743668066832443", "908743668066832440", "908743668112953354", "908743668112953355", "908743668112953357", "908743668066832439", "908743668112953360","908743668112953359"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////  
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668066832441> rolünü aldın!`)

    }
    if(menu.values[0] === "balık") {
        await menu.clicker.member.roles.add("908743668112953358") 
        await menu.clicker.member.roles.remove(["908743668066832441", "908743668112953356", "908743668066832442", "908743668066832443", "908743668066832440", "908743668112953354", "908743668112953355", "908743668112953357", "908743668066832439", "908743668112953360","908743668112953359"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////  
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668112953358> rolünü aldın!`)
    }
    if (menu.values[0] === "kova") {
        await menu.clicker.member.roles.add("908743668112953359") 
        await menu.clicker.member.roles.remove(["908743668066832441", "908743668112953356", "908743668066832442", "908743668066832443", "908743668066832440", "908743668112953354", "908743668112953355", "908743668112953357", "908743668066832439", "908743668112953360","908743668112953358"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////  
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668112953359> rolünü aldın!`)
    }
    if (menu.values[0] === "oğlak") {
        await menu.clicker.member.roles.add("908743668112953360") 
        await menu.clicker.member.roles.remove(["908743668066832441", "908743668112953356", "908743668066832442", "908743668066832443", "908743668066832440", "908743668112953354", "908743668112953355", "908743668112953357", "908743668066832439", "908743668112953359","908743668112953358"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////  
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668112953360> rolünü aldın!`)
    }
    if (menu.values[0] === "yay") {
        await menu.clicker.member.roles.add("908743668066832439") 
        await menu.clicker.member.roles.remove(["908743668066832441", "908743668112953356", "908743668066832442", "908743668066832443", "908743668066832440", "908743668112953354", "908743668112953355", "908743668112953357", "908743668112953360", "908743668112953359","908743668112953358"])
                ////ilk rol ////////////////// ikinci rol /////////// 3. rol //////////// 4. rol ///////////// 5. rol//////////////// 6. rol////////////////// 7. rol/////////////// 8. rol ///////////// 9. rol /////////////// onuncu rol /////// on birinci ////////// on ikincirol ////  
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&908743668066832439> rolünü aldın!`)
 }
  if(menu.values[0] === "rolsuzzzz") {
        await menu.clicker.member.roles.remove(["908743668066832441", "908743668112953356", "908743668066832442", "908743668066832443", "908743668066832440", "908743668112953354", "908743668112953355", "908743668112953357", "908743668112953360", "908743668112953359","908743668112953358", "908743668066832439"])
         await menu.clicker.member.roles.remove(["908743668066832441", "908743668112953356", "908743668066832442", "908743668066832443", "908743668066832440", "908743668112953354", "908743668112953355", "908743668112953357", "908743668112953360", "908743668112953359","908743668112953358", "908743668066832439"])
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla üstünüzdeki Bütün rolleri aldım!`)
   }
        
    }

module.exports.conf = {
    name: "clickMenu",
  };
