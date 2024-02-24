// server/utils/ai.js
import { OpenAI } from "openai";
const openai = new OpenAI({ apiKey: process.env.NUXT_OPEN_AI_SECRET_KEY });

export const getChatStream = async ({ messages }) => {

    // Define the function to generate quiz questions
    const functions = [
        {
            name: "generateQuiz",
            description: "Generate a list of quiz questions.",
            parameters: {
                type: "object",
                properties: {
                    questions: {
                        type: "array",
                        description: "A list of questions for a quiz",
                        items: {
                            type: "object",
                            properties: {
                                question: {
                                    type: "string",
                                    description: "The question to be asked",
                                },
                                answer: {
                                    type: "string",
                                    description: "The answer to the question",
                                },
                            },
                        },
                    },
                },
            },
        },
    ];

    const stream = await openai.chat.completions.create(
        {
            max_tokens: 2048,
            model: "gpt-3.5-turbo",
            temperature: 0.5,
            functions,
            // Force the result to be a function call
            function_call: { name: "generateQuiz" },
            messages,
            stream: true,
        },
        { responseType: "stream" }
    );

    return response.data;
};