import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 30;

const SYSTEM_PROMPT = `You are an AI fitness assistant helping users with their wellness journey. 
You provide helpful, encouraging advice about workouts, nutrition, and general fitness.
Keep responses concise and actionable. Use an encouraging, professional tone.
When discussing exercises, prioritize proper form and safety.

If you don't know the answer to a question, suggest consulting with a qualified fitness professional.`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4-turbo"),
    system: SYSTEM_PROMPT,
    messages,
  });

  return result.toDataStreamResponse();
}
