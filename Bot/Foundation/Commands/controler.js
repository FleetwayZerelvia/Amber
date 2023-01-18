const helpCommand = require('./Help');
const multiplyCommand = require('./Multiply');
const presCommand = require('./About');
const pingCommand = require('./Ping');
const timeCommand = require('./Time');
const ytCommand = require('./YouTube');



module.exports = (receivedMessage) => {
    let fullCommand = receivedMessage.content.substr(1); // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" "); // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0]; // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1); // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand);
    console.log("Arguments: " + arguments); // There may not be any arguments

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage);
    } else if (primaryCommand == "multiply") {
        multiplyCommand(arguments, receivedMessage);
    } else if (primaryCommand == "about") {
        presCommand(arguments, receivedMessage);
    } else if (primaryCommand == "ping") {
        pingCommand(arguments, receivedMessage);
    } else if (primaryCommand == "time") {
        timeCommand(arguments, receivedMessage);
    } else if (primaryCommand == "youtube", "yt") {
        ytCommand(arguments, receivedMessage);
    } else {
        receivedMessage.channel.send("I don't understand that command. Try `!help` for the general list of commands");
    }
}