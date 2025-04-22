# 🧠 Mini AI-Powered Notes App

A simple yet powerful AI-integrated notes app built with **Next.js**, **TailwindCSS**, **Shadcn UI**, **Supabase**, and **React Query**. Users can create, edit, delete, and summarize notes with AI assistance.

## 🔗 Live Demo
https://github.com/user-attachments/assets/03302c5d-1f45-4402-a291-0b2e6d90b921

[Check out the deployed app on Vercel](https://ai-powered-notes-app-pied.vercel.app/)  

## How I build this app step by step :- 
[Pdf Link ](https://drive.google.com/file/d/1zN1SdJUmJdnGYHNr2H7M8r0DMYJx4WJE/view?usp=sharing)
---

## ✨ Features

-  **User Authentication**
  Email & Password
  Google OAuth (via Supabase)
-  **Note Management**
  Create, edit, and delete notes
-  **AI Summarization**
    Uses note title and content to generate concise summaries via DeepSeek/Groq/OpenAI
-  **React Query**
   Handles data fetching, caching, and mutation
-  **Shadcn UI**
   Polished, accessible components
-  **Supabase Backend**
   Handles auth and data storage
---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 + TypeScript
- **Styling**: TailwindCSS + TailwindCSS Animate
- **UI Components**: Shadcn, Radix UI, Lucide Icons
- **State Management**: React Query (TanStack)
- **Backend**: Supabase
- **AI Integration**: DeepSeek 
- **Deployment**: Vercel

---

## ⚙️ Environment Variables

Create a `.env` file at the root of your project:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
LLM_AI_KEY=your-llm-api-key
VERCEL_URL=your-vercel-url
```
## Lighthouse Score

![image](https://github.com/user-attachments/assets/329cfd70-ed8a-4ae1-ba4c-9b7a28333454)

## Database Table 

![image](https://github.com/user-attachments/assets/c4565156-3265-4faa-ae0a-b9b691f5ca73)

## Flow Diagram 

![image](https://github.com/user-attachments/assets/f76e9c33-1274-4fe5-b0df-29e840695138)

