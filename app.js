const Discord = require('discord.js');
const client = new Discord.Client();
const guildId = '854806722061008931'; //First param from discord web
const channelId = '854806722061008934'; //Second param from discord web
const getInviteLink = async ()=>{
  const p = new Promise((resolve, reject)=>{
    client.on('ready', async () => {
      try {
       const guild = await client.guilds.fetch(guildId);
       const channel = await guild.channels.cache.get(channelId);
       const invite = await channel.createInvite({
         maxUses: 1
       });
       resolve(`https://discord.gg/${invite.code}`);
      } catch(e){
       reject(e);
      }
    });
    client.login('ODU0ODA2NDQ4MzgxNzU1Mzky.YMpSig.yUAMTKfD0yrploAAAzMG66hPLOg')
  });
  return p;
}
getInviteLink().then(link => console.log(`${link}`))