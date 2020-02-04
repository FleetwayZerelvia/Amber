module.exports = connexion.js;

function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send("Here's the help with the following topic: " + arguments)
    } else {
        receivedMessage.channel.send("Here is a list of the following commands: \n-!presentation \n-!help (Command list) \n\nCommands: \n-!Twitter \n-!Twitch \n-!Iam \n-!Iamnot \n-!Timezones \n-!8ball \n-!Weather \n-!Time \n-!Youtube \n-!Meow \n-!Yum \n-!Google \n-!Urbandict \n-!Define \n-!Wikipedia \n-!Wiki \n-!Pokemon \n-!Pokemonability \n-!Translate \n-!Autotranslang \n-!Ping \n-!Serverinfo \n-!Userinfo \n\nMod/Admin: \n-!Ban \n-!Kick \n-!Mute \n-!Purge \n-!Softban \n-!Unban \n-!Unmute \n-!Warn \n-!Warnpunish/Warnp (1 - Mute 10min, 2 - Mute 30min, 3 - 60min, 4 - Kick, 5 Temp.ban, 6 - Def.ban) \n-!Logserver \n-!Antiraid \n-!Reactionroles \n-!Asar \n-!Greet \n-!Bye \n-!Say? \n-!Streamadd \n-!Streamremove \n\nSplatoon: \n-!Rotation \n-!Profile \n-!Scrim (3/5/7/9) \n\nChat with bot: \n-!Give \n-!Tchat (Don't know yet) \n\nOwner: \n-!Leave \n-!Sleep \n-!Wakeup \n-!Setstatus \n-!Setavatar \n-!Setgame \n-!Setstream \n-!Listservers");
    }
}
