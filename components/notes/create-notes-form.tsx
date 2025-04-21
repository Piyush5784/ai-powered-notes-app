"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateNote, useNotesById, useUpdateNote } from "@/hooks/useNotes";
import { useChat } from "@ai-sdk/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import FilteredMessage from "./filtered-message";
import { Check, Loader, LoaderCircle, Send } from "lucide-react";
import { formSchema } from "./form-schema";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import FetchNoteByID from "@/app/dashboard/[id]/page";

export default function CreateNoteForm({
  userId,
  onSuccess,
  defaultValues,
  noteId,
}: {
  userId: string;
  onSuccess: () => void;
  defaultValues?: Partial<z.infer<typeof formSchema>>;
  noteId?: string;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues,
  });

  const [summary, setSummary] = useState("");
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState("");

  const createNote = useCreateNote();
  const updateNote = useUpdateNote(noteId || "");

  const { data, error, refetch } = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => useNotesById(noteId || ""),
    enabled: !!noteId,
  });

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    isLoading,
  } = useChat({
    api: "/api/chat",
    onFinish: (message) => {
      if (!message.parts) return;
      const text = message?.parts
        .map((part) => (part.type === "text" ? part.text : ""))
        .join("");

      setSummary(text);
      // form.setValue("summary", text);
    },
  });
  const queryClient = useQueryClient();
  function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = { ...values, user_id: userId };

    if (defaultValues && noteId) {
      updateNote.mutate(
        { ...payload },
        {
          onSuccess: () => {
            toast.success("Note successfully updated");
            onSuccess();
            refetch();
            queryClient.invalidateQueries({ queryKey: ["note", noteId] });
          },
          onError: () => {
            toast.error("Failed to update note");
          },
        }
      );
    } else {
      createNote.mutate(
        { ...values, user_id: userId },
        {
          onSuccess: () => {
            toast.success("Note successfully created");
            onSuccess();
            form.reset();
          },
          onError: () => {
            toast.error("Failed to create note");
          },
        }
      );
    }
  }

  function InsertText() {
    form.setValue("summary", summary);
  }

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    await append({
      role: "user",
      content: message,
    });
    setMessage("");
  };

  async function generateData() {
    const content = form.getValues("content");
    const title = form.getValues("title");
    if (!content || content.length < 3) {
      toast.error("Please enter content before generating summary");
      return;
    }
    let prompt = `You are a summarization assistant. Your task is to read a given title and content, and return a clean, professional summary.

    ## Input Format
    - Title: ${title}
    - Content: ${content}
    
    ## Output Format
    Only respond with the following format and nothing else:
    Summary: <Your summarized content here without any formatting characters like *, ", \`, or special symbols. Keep it plain text.>
    
    Example:
    Summary: This article discusses the impact of climate change on polar bear populations, citing recent studies on melting ice caps and food scarcity.
    
    Begin now.`;

    setPrompt(prompt);

    await append({
      role: "user",
      content: prompt,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full mx-auto py-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title *</FormLabel>
              <FormControl>
                <Input
                  placeholder="This is a title of the note"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormDescription>Enter the title of the note</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content *</FormLabel>
              <FormControl>
                <Textarea placeholder="Go to gym at 6.00 clock" {...field} />
              </FormControl>
              <FormDescription>Enter the content of the Note</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between mb-2">
                <FormLabel className="m-0">Summarized text</FormLabel>
              </div>
              <FormControl>
                <Textarea placeholder="Click on generate" {...field} />
              </FormControl>
              <FormDescription>
                AI will generate summarized content
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Sheet>
          <SheetTrigger>
            <span
              className="border px-3 py-2.5 rounded-lg"
              onClick={generateData}
            >
              Generate
            </span>
          </SheetTrigger>{" "}
          <SheetContent className="flex flex-col h-full justify-between">
            <div className="overflow-y-auto pr-2">
              <SheetHeader>
                <SheetTitle>AI Generate Response</SheetTitle>
              </SheetHeader>
              <SheetDescription className="mt-4">
                <div className="border p-3 rounded-md">Prompt:- {prompt}</div>
                <div className="text-muted-foreground text-sm flex items-center gap-2">
                  {isLoading ? (
                    <>
                      Generating summary...
                      <LoaderCircle className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Summary generated
                      <Check className="text-green-500" />
                    </>
                  )}
                </div>

                <FilteredMessage messages={messages} />
              </SheetDescription>
            </div>

            <SheetFooter className="pt-4 border-t">
              <div className="flex flex-col gap-2 w-full">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Update content"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                {message ? (
                  <Button variant="secondary" onClick={handleSendMessage}>
                    <Send className="h-4 w-4 mr-1" /> Send
                  </Button>
                ) : (
                  <Button>Close</Button>
                )}
                <SheetClose asChild>
                  <Button variant="outline" onClick={InsertText}>
                    Save Response & Close
                  </Button>
                </SheetClose>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <Button type="submit">
          <Button type="submit">
            {(noteId ? updateNote.isPending : createNote.isPending)
              ? noteId
                ? "Updating..."
                : "Creating..."
              : noteId
                ? "Update Note"
                : "Create Note"}
          </Button>
        </Button>

        {/* </div> */}
      </form>
    </Form>
  );
}
