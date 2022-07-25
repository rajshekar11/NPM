

var { Command } = require('commander');
var program = new Command();

program.version("0.0.1")


program.argument("<userName>","To login")
.argument("[password]","Password required")
.action((userName,password)=>{
  console.log("Username",userName)
  console.log("password",password)

})
program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
console.log('pizza details:');
if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);

// var QRCode = require('qrcode')

// QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
//   console.log(url)
// })