//const { Configuration, OpenAIApi } = require('openai');
const { OpenAI } = require('openai');
//const configuration = new Configuration({apiKey: "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"});
const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
  });

export async function sendMsgToOpenAI(message) {
    const res = await openai.chat.completions.create({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presense_penalty: 0
    });

    return res.data.choices[0].text;
}