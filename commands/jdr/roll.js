const { RichEmbed } = require("discord.js");

module.exports = {
    name: "roll",
    category: "jdr",
    description: "Rolls a Dice",
    run: async (client, message, args) => {
        var res;

        if (args[0] != null) {
            if (args[0]<2){
                message.reply("Choisissez un D2 au Minimum");
            } else 
            if (args[0] > 100) {
                message.reply("Dé trop grand, D100 Max");
            }else 
            if (isNaN(args[0])) {
                message.reply("Votre dé est invalide (ce n'est pas un nombre)");
            } else 
            if (args[1] != null) {
                if (args[1]<1){
                    message.reply("Lancez au moins un dé ");
                } else 
                if (args[1] > 10) {
                    message.reply("Vous ne pouvez pas lancer plus de 10 dés, et c'est deja beaucoup.");
                }else
                if (isNaN(args[1])) {
                    message.reply("Votre nombre de dés est invalide (ce n'est pas un nombre)");
                } else  
                if (args[2] != null){
                    message.channel.send("Désolé, mais vous avez donnés trop d'arguments.")
                } else {
                    var arraysultat = [];
                    var somme = 0;
                    for (var i = 0; i < args[1]; i++){
                        res = Math.random() * (args[0] - 1) + 1;
                        res = Math.round(res)
                        arraysultat.push(res);
                        somme = somme + res;
                    }
                    const RollEmbed = new RichEmbed()
                    .setColor('#0099ff')
                    .setAuthor(message.author.username)
                    .setTitle('Roll the dices ! ('+ args[1] +'D'+ args[0]+')' )
                    .addField('Resultats', arraysultat, true)
                    .addField('Somme', somme, true)
                    .setTimestamp()
                    message.channel.send(RollEmbed);
                }
            } else {
                res = Math.random() * (args[0] - 1) + 1;
                const RollEmbed = new RichEmbed()
                .setColor('#0099ff')
                .setAuthor(message.author.username)
                .setTitle('Roll the dices ! (1D'+ args[0]+')' )
                .addField('Resultats', Math.round(res), true)
                .setTimestamp()
                message.channel.send(RollEmbed);
            }
        } else {
            res = Math.random() * (100 - 1) + 1;
            const RollEmbed = new RichEmbed()
                .setColor('#0099ff')
                .setAuthor(message.author.username)
                .setTitle('Roll the dices ! (1D100)')
                .addField('Resultats', Math.round(res), true)
                .setTimestamp()
            message.channel.send(RollEmbed);
        }
        message.delete();
    }
}