"use client";
import { useNotes } from "@/hooks/useNotes";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { Spinner } from "../spinner";

const DisplayNotes = ({ userId }: { userId: string }) => {
  const { isPending, error, data: notes } = useNotes(userId);

  if (isPending)
    return (
      <div className="w-full">
        <Spinner size={"large"} />
      </div>
    );

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {isPending ? (
        <div className="w-full">
          <Spinner size={"large"} />
        </div>
      ) : (
        notes.map((entry) => (
          <Link href={`/dashboard/${entry.id}`}>
            <Card
              key={entry.id}
              className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-lg">{entry.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {new Date(entry.created_at).toLocaleString()}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground mb-2">
                  {entry.content?.slice(0, 100) || "No content available."}
                  {entry.content && entry.content.length > 100 && "..."}
                </p>
                <p className="text-xs text-muted-foreground break-words">
                  User ID: {entry.user_id}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))
      )}
    </div>
  );
};

export default DisplayNotes;
