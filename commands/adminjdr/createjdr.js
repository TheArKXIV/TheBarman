module.exports = {
    name: "createjdr",
    category: "adminjdr",
    description: "Create a new RPG Category and all the needed stuff",
    run: async (client, message, args) => {
        var discirl = "";
        var abrev = "";
        if (message.member.roles.some(role => role.name === "MJ" )) {         
            if (args[0] == null || args[1] == null || args[2] == null || args[3] == null){
                message.channel.send("Syntaxe de la commande : !createjdr [Nom du JDR] [Abreviation (2 a 6 lettres)] [IRL/DISCORD] [Nombre de Joueurs maximum]");
            } else {
                discirl = args[2];
                discirl = discirl.toLowerCase();
                if (discirl != "discord"  && discirl != "irl" ){
                    message.channel.send("Veuillez préciser si le JDR se déroulera sur Discord ou IRL.");
                } else {
                    abrev = args[1];
                    if (abrev.length<2 || abrev.length>6 ){
                        message.channel.send("Veuillez choisir une autre abreviation.");
                    } else {
                        message.guild.createRole({
                            name: 'roliste-' + args[1]
                        })
                        .then(role => console.log(`Created new role with name ${role.name}`))
                        .catch(console.error)

                        message.channel.send(""+test);

                        message.guild.createChannel(args[0], {
                            type: 'category',
                            permissionsOverwrites: [
                            {
                            id: "621425553530159105",
                            deny: ['VIEW_CHANNEL'],
                            },
                            {
                               id: "",
                               allow: ['VIEW_CHANNEL'],
                            }]
                        })
                            .then(console.log)
                            .catch(console.error);
                    }
                }
            }
        } else {
            message.reply("Désolé, mais vous n'étes pas Maitre du Jeu.");
        }
        message.delete();
    }   
}