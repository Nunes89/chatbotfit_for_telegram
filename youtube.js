require("dotenv").config();
const YouTube = require("youtube-node");

const youtube = new YouTube();
youtube.setKey(process.env.YOUTUBE_API_KEY);

youtube.search("Exercício em casa para bíceps", 2, function (error, result) {
  if (!error) {
    console.log(JSON.stringify(result, nul, 2));
  } else {
    console.log("Deu erro!");
  }
});
