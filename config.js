const fs = require("fs");
const chalk = require("chalk");

// Other
let gg = process.env.MODS;
if (!gg) {
  gg = "917003213983";
}

global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "none";
global.pgdb = process.env.DATABASE_URL || "none";
global.port = process.env.PORT || 8080;
(global.packname = process.env.PACKNAME || "kaguya"),
  (global.prefix = process.env.PREFIX || "-"),
  (global.author = process.env.AUTHOR || "ARUS"),
  (global.sessionName = "arus"),
  (global.name = process.env.NAME || "Mizuhara"),
  (global.thumb = fs.readFileSync("./src/info.jpeg"));

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
