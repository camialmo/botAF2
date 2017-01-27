const Discord = require("discord.js");
const client = new Discord.Client();
const token = "Mjc0NTY3MDE1NzQ4ODYxOTUy.C2z-AA.9iyEUFeF0WencodY6cxVA8QSaTU";
var prefix = ".";
var mention = "<@1930903359700619264>";
var membreCount = client.users.size;
var servercount = client.guilds.size;
var guildrank;

client.on("ready",()=>{
	var servers = client.guilds.array().map(g => g.name).join(',');
	console.log("................................................");
	console.log('[!] Connexion en cours ... \n[!]Patience \n Les prefix actuelle sont :' +prefix+ "\n [!] Mentions :" + mention+ "\n [!] Nb membre :"+ membreCount+"\n");
});

var request = require('request');
request("http://www.wowprogress.com/guild/eu/archimonde/Archi_Family/json_rank", function (error, response, body) {
  if (!error && response.statusCode == 200) {
     var importedJSON = JSON.parse(body);
	 
     console.log(importedJSON);
	 
	 guildrank=importedJSON.realm_rank;
  }
})

var request = require('request');
request("http://eu.api.battle.net/wow/guild/Archimonde/Archi%20family?fields=members&locale=fr_FR&apikey=4p35gsnpg8m3zsm49aj2jc4phvwvj82e",function(error, response, body){
	
	for(var i in body[7]){
    obj = body[7][i];
     console.log("nom persos : "+i);
    for(var key in obj){
        console.log("NOM : "+obj[key]);
    }
}
	
});
client.on('message',message => {
	
	switch(message.content){
		case "!logs": message.reply('Les logs du dernier raid : https://www.warcraftlogs.com/reports/fwbnrFDmhtvYJ9yj/#boss=-2&difficulty=0'); break;
		case "!loot": message.reply("Le google doc : https://docs.google.com/spreadsheets/d/1KZ7ShzVsZgYYu3p6egUGYdhzDxnrBaOP2duTf2LQ6z0/edit?usp=sharing"); break;
		case "!ping": message.reply("!pong"); break;
		case "!rank": message.reply(guildrank+" eme serveur"); break;
		case "!forum": message.reply("Le forum de la guilde : http://archifamily.cla.fr"); break;
		case "!rand": message.reply(Math.floor(Math.random()*(100-1))+1); break;
		case "!commande": message.reply("\n!logs : Lien vers les logs de la guilde\n"+
										"!loot : Lien vers le googledoc\n"+
										"!rank : Rang de la guilde (Serveur)\n"+
										"!ping : !pong\n"+
										"!forum : Lien du forum");
		default: break;
	}
	
	if(message.content.startsWith('/tts')){ webhook.sendTTSMessage('Bah alors on fait mumuse ?');}
	/*if(message.content == "!logs"){
		message.reply('Les logs du dernier raid :https://www.warcraftlogs.com/reports/fwbnrFDmhtvYJ9yj/#boss=-2&difficulty=0');
	}else if(message.content =="!loot"){
		message.reply("Le google doc : https://docs.google.com/spreadsheets/d/1KZ7ShzVsZgYYu3p6egUGYdhzDxnrBaOP2duTf2LQ6z0/edit?usp=sharing");
	}else if(message.content =="!ping"){
		message.reply("!pong");
		
	}*/
});
client.login(token);
