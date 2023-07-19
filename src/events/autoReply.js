const conf = require("../configs/sunucuayar.json")
const { green } = require("../configs/emojis.json");

module.exports = async (message) => {
  if (message.content.toLowerCase() === "tag" || message.content.toLowerCase() === "!tag" || message.content.toLowerCase() === ".tag") {
    message.react(green);
    message.lineReply(`

✯`);
    }

    if (message.content.toLowerCase() === "sa" || message.content.toLowerCase() === "Selamun Aleyküm" || message.content.toLowerCase() === "selam") {
    message.lineReply(`**Aleyküm Selam Hoş geldin.**`);
  }
};
module.exports.conf = {
  name: "message"
};