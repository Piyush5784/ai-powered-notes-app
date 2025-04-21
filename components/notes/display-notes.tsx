"use client";

import { useNotes } from "@/hooks/useNotes";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Spinner } from "../spinner";
import { cn } from "@/lib/utils";
import { FileText, User } from "lucide-react";

const DisplayNotes = ({ userId }: { userId: string }) => {
  const { isPending, error, data: notes } = useNotes(userId);

  if (isPending)
    return (
      <div className="w-full flex justify-center items-center py-20">
        <Spinner size={"large"} />
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center py-10">
        An error has occurred: {error.message}
      </div>
    );

  if (!notes || notes.length === 0)
    return (
      <div className="text-center text-muted-foreground py-20 border rounded-lg mt-10">
        📝 You have no notes yet. Start by creating one!
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {notes.map((entry) => (
        <Link key={entry.id} href={`/dashboard/${entry.id}`}>
          <Card
            className={cn(
              "rounded-2xl shadow-sm border border-zinc-200/60 dark:border-zinc-800 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-zinc-900"
            )}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl font-semibold line-clamp-1 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  {entry.title}
                </CardTitle>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {new Date(entry.created_at).toLocaleDateString()}{" "}
                {new Date(entry.created_at).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </CardHeader>
            <CardContent className="mt-2">
              <p className="text-sm text-foreground line-clamp-3">
                {entry.content || "No content available."}
              </p>
              <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
                <User className="w-3 h-3" />
                {entry.user_id}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default DisplayNotes;
