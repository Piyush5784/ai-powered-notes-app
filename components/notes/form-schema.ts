import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(60),
  content: z.string().min(3).max(200),
  summary: z.string().optional(),
});
