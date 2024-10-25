import {Hono} from "hono";
import {stream, streamSSE, streamText} from 'hono/streaming'
import {serveStatic} from 'hono/bun'

import OpenAI from "openai";

const app = new Hono();

const openai = new OpenAI({
    baseURL: process.env.OPENAI_BASE_URL,
    apiKey: process.env.OPENAI_API_KEY
});

const chat = async (content: string) => {
    return await openai.chat.completions.create({
        model: 'deepseek-chat',
        messages: [
            {role: "system", content: "You are a helpful assistant."},
            {role: 'user', content}
        ],
        stream: true,
    });
}

app.get("/", serveStatic({path: './index.html'}));

app.get('/streamText', (c) => {
    return streamText(c, async (stream) => {
        // Write a text with a new line ('\n').
        await stream.writeln('Hello')
        // Wait 1 second.
        await stream.sleep(1000)
        // Write a text without a new line.
        await stream.write(`Hono!`)
    })
})

app.get('/chat', async (c) => {
    const {prompt} = c.req.query();
    const chatStream = await chat(prompt);

    return streamSSE(c, async (stream) => {
        for await (const chunk of chatStream) {
            await stream.writeSSE({
                data: chunk.choices[0]?.delta?.content || '',
            })
        }
        await stream.writeSSE({data: '[DONE]'})
    })
})

export default app

