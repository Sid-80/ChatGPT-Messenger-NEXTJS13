import { async } from "@firebase/util";
import { Configuration, OpenAIApi } from "openai";

const query = async (prompt : string, chatId : string) => {

    const configuration = new Configuration({
        apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY!,
      });
      const openai = new OpenAIApi(configuration);

    const res =  await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        temperature: 0.9,
        max_tokens: 2048,
        frequency_penalty: 0.5,
        presence_penalty: 0,
    }).then(res => res.data.choices[0].text)
    .catch(err=>console.log(`ChatGPT cannot find it.Error : ${err.message}`));
    return res;
}

export default query;