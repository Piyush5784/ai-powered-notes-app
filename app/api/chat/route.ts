import { NextRequest } from "next/server";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const openrouter = createOpenRouter({
    apiKey: process.env.LLM_AI_KEY!,
  });

  const response = await streamText({
    model: openrouter("nvidia/llama-3.3-nemotron-super-49b-v1:free"),
    messages,
  });

  return response.toDataStreamResponse();
}
