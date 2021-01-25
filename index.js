require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const dialogflow = require("./dialogflow");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async function (msg) {
  const chatId = msg.chat.id;
  console.log(msg.text);

  const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);

  bot.sendMessage(chatId, dfResponse.text);
});
