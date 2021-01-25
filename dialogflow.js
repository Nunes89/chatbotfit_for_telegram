require("dotenv").config();
const dialogflow = require("dialogflow");

const sessionClient = new dialogflow.SessionsClient({
  projectId: process.env.PROJECT_ID,
  credentials: {
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
  },
});

async function sendMessage(chatId, message) {
  const sessionPath = sessionClient.sessionPath(process.env.PROJECT_ID, chatId);
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: "pt-BR",
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  return {
    text: result.fulfillementText,
    intent: result.intent.displayName,
    fields: result.parameters.fields,
  };
}

module.exports.sendMessage = sendMessage;
