import { getRandomLoading } from "../utils/random";
const data = require("../data/chattingdata.json");

export const answerInChat = question => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let reply =
          data.greetings[Math.floor(Math.random() * data.greetings.length)];
        console.log("resolve" + question);
        resolve(reply["content"]);
      } catch (e) {
        console.log("reject" + question);
        reject(e);
      }
    }, getRandomLoading(3800));
  });
};

export async function asyncAnswer(question) {
  const result = await answerInChat(question).catch(e => {
    console.log(e);
  });
  console.log(result);
  return result;
}
