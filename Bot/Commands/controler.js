const helpCommand = require('./help');
const multiplyCommand = require('./multiply');
const presCommand = require('./presentation');
const pingCommand = require('./ping');
const timeCommand = require('./time');
const ytCommand = require('./youtube');



module.exports = (receivedMessage) => {
    let fullCommand = receivedMessage.content.substr(1); // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" "); // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0]; // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1); // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand);
    console.log("Arguments: " + arguments); // There may not be any arguments

    if (primaryCommand == "helpg") {
        helpCommand(arguments, receivedMessage);
    } else if (primaryCommand == "multiply") {
        multiplyCommand(arguments, receivedMessage);
    } else if (primaryCommand == "presentation") {
        presCommand(arguments, receivedMessage);
    } else if (primaryCommand == "ping") {
        pingCommand(arguments, receivedMessage);
    } else if (primaryCommand == "time") {
        timeCommand(arguments, receivedMessage);
    } else if (primaryCommand == "youtube") {
        ytCommand(arguments, receivedMessage);
    } else {
        receivedMessage.channel.send("I don't understand the command. Try `!helpg` for the general list of commands");
    }
}