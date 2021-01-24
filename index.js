require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  console.log(msg.text);
  bot.sendMessage(chatId, "Obrigado por sua mensagem");
});
