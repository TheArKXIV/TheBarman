module.exports = {
    name: "dehors",
    category: "admin",
    description: "Kicks the user",
    run: async (client, message, args) => {
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (message.member.roles.some(role => role.name === 'Patron' || role.name === 'Modérateurs' )) {
        if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
            /**
             * Kick the member
             * Make sure you run this on a member, not a user!
             * There are big differences between a user and a member
             */
            member.kick('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.channel.send(`Allez ! Dehors ${user.tag} !`);
            }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('Je ne peux pas mettre cette personne dehors');
            // Log the error
            console.error(err);
            });
        } else {
            // The mentioned user isn't in this guild
            message.reply('Cette personne n\'est pas dans le Pub');
        }
        // Otherwise, if no user was mentioned
        } else {
        message.reply('Pardon? Vous ne m\'avez pas donné de nom.');
        }
    } else{
        message.reply('Désolé, mais vous n\'avez pas le droit de virer quelqu\'un du bar. Vous n\'étes ni Patron, ni Modérateur.');
    }
    message.delete();
    }

}