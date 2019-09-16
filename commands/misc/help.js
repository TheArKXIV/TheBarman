module.exports = {
    name: "help",
    category: "misc",
    description: "PM Help on commands",
    run: async (client, message, args) => {
        message.author.send("__**Voici une liste des commandes disponibles**__\n - **!roll *{max}* *{nombre}* :** Lance un dé a *{max}* faces *{nombre}* fois. Sans arguments, lance un dé 100. Avec *{max}* seulement, lance un dé a *{max}* faces.");
        if (message.member.roles.some(role => role.name === 'MJ' )) {
            message.author.send("__**Commandes de Maitre du Jeu**__\n - **!createjdr :** TBD");
        }        
        if (message.member.roles.some(role => role.name === 'Patron' || role.name === 'Modérateurs' )) {
            message.author.send("__**Commandes d'administration**__\n - **!dehors [@Utilisateur]** : Kick l'utilisateur du serveur.");
        }
        message.author.send("`*{arg}* : Argument facultatif\n*[arg]* : Argument obligatoire`\n----------------------------------------------------");
        message.delete();
    }
}