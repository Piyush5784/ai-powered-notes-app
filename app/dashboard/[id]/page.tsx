"use client";

import { useDeleteNote, useNotesById } from "@/hooks/useNotes";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useState } from "react";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import CreateNoteForm from "@/components/notes/create-notes-form";
import CreateNotesDialog from "@/components/notes/create-notes-dialog";
import { toast } from "sonner";
import NoteDeleteDialog from "@/components/notes/note-delete-dialog";

const FetchNoteByID = () => {
  const params = useParams() as { id: string };

  if (!params.id) return null;

  const { isPending, error, data: note } = useNotesById(params.id);
  const deleteNote = useDeleteNote(note?.id || "");

  const [open, setOpen] = useState(false);

  // Handle delete
  function handleDeleteNote() {
    if (!note?.id) return;

    deleteNote.mutate(note.id, {
      onSuccess: () => {
        toast.success("Note successfully deleted");
        setOpen(false); // Close the dialog on success
      },
      onError: () => {
        toast.error("Failed to delete note");
      },
    });
  }

  return (
    <div className="p-6 md:p-8 max-w-3xl mx-auto">
      {isPending ? (
        <Spinner size="large" />
      ) : error || !note ? (
        <div className="text-red-500 text-center">
          {error?.message || "Note not found."}
        </div>
      ) : (
        <>
          <div className="flex items-center justify-end gap-2 p-3">
            <CreateNotesDialog
              userId={note.user_id}
              NoteId={note.id}
              defaultValues={{
                title: note.title,
                content: note.content,
                summary: note.summary ? note.summary : "",
              }}
            />
            <NoteDeleteDialog
              open={open}
              setOpen={setOpen}
              deleteFn={handleDeleteNote} // Pass delete function
            />
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-muted rounded-2xl shadow-md p-4 sm:p-6 md:p-8 max-w-3xl w-full mx-auto flex flex-col gap-4">
            <Badge variant="outline" className="w-fit">
              Note ID: {note.id}
            </Badge>
            <h1 className="text-2xl sm:text-3xl font-bold">{note.title}</h1>
            <div className="text-muted-foreground text-base sm:text-lg whitespace-pre-line">
              {note.content || "No content available."}
            </div>
            <div className="text-muted-foreground text-base sm:text-lg whitespace-pre-line">
              {note.summary || "No summary available."}
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Created on {new Date(note.created_at).toDateString()}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FetchNoteByID;
