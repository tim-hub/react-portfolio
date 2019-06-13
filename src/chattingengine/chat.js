import path from "path";
const data = require(path.join(__dirname, "./data.json"));

const answer = question => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let reply =
          data.greetings[Math.floor(Math.random() * data.greetings.length) + 1];
        console.log("resolve" + question);
        resolve(reply["content"]);
      } catch (e) {
        console.log("reject" + question);
        reject(e);
      }
    }, Math.floor(Math.random() * 100) + 1);
  });
};

async function asyncAnswer(question) {
  const result = await answer(question).catch(e => {
    console.log(e);
  });
  console.log(result);
  return result;
}

export default asyncAnswer;
