exports.run = (bot, message, args) => {
const config = require('../config.json');
const adminRole = message.guild.roles.find("name", "Admin");
const adminCmd = [`${config.prefix}ban, ${config.prefix}bleep, ${config.prefix}delete, ${config.prefix}happy, ${config.prefix}help, ${config.prefix}invite, ${config.prefix}kick, ${config.prefix}prefix and ${config.prefix}repeat`];
const modRole = message.guild.roles.find("name", "Mods");
const modCmd = [`${config.prefix}bleep, ${config.prefix}delete, ${config.prefix}happy, ${config.prefix}help, ${config.prefix}invite, ${config.prefix}kick and ${config.prefix}repeat`];
const memberCmd = [`${config.prefix}bleep, ${config.prefix}happy, ${config.prefix}help and ${config.prefix}repeat`];

if(message.member.roles.has(adminRole.id)){
  message.channel.send(`Available commands for Admins: ${adminCmd}`);
  }
else if(message.member.roles.has(modRole.id)){
  message.channel.send(`Available commands for Mods: ${modCmd}`);
  }
  else {
    message.channel.send(`Available commands for Members: ${memberCmd}`);
  }
}