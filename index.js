const telegarmApi = require('node-telegram-bot-api');

const token = "7106204662:AAERrCqi81JQwpJvxWb5KcM-nvbDrJuktU4";

const bot = new telegarmApi(token, {polling: true});

bot.on("polling_error", console.log);
bot.on('message', msg=> {
    const chatId = msg.chat.id;
    const text = msg.text;

    bot.sendMessage(chatId, `Text: ${text}`)

})