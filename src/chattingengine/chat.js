import { getRandomLoading } from "../utils/random";
const { NlpManager } = require("node-nlp");
const data = require("../data/chattingdata.json");
const manager = new NlpManager({ languages: ["en"] });

const init = async () => {
  // manager.addDocument("en", "goodbye for now", "greetings.bye");
  // manager.addDocument("en", "bye bye take care", "greetings.bye");
  // manager.addDocument("en", "okay see you later", "greetings.bye");
  // manager.addDocument("en", "bye for now", "greetings.bye");
  // manager.addDocument("en", "i must go", "greetings.bye");
  // manager.addDocument("en", "hello", "greetings.hello");
  // manager.addDocument("en", "hi", "greetings.hello");
  // manager.addDocument("en", "howdy", "greetings.hello");
  //
  // // Train also the NLG
  // manager.addAnswer("en", "greetings.bye", "Till next time");
  // manager.addAnswer("en", "greetings.bye", "see you soon!");
  // manager.addAnswer("en", "greetings.hello", "Hey there!");
  // manager.addAnswer("en", "greetings.hello", "Greetings!");

  await manager.train();
  // manager.save();
};

export const nlpBot = async question => {
  await init();
  const response = await manager.process("en", question);
  console.log(response);
  return response;
};

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

export const asyncAnswer = async question => {
  const result = await answerInChat(question).catch(e => {
    console.log(e);
  });
  console.log(result);
  return result;
};
