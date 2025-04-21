"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { Button } from "../ui/button";
import CreateNoteForm from "./create-notes-form";
import { formSchema } from "./form-schema";
import { z } from "zod";
import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";

const CreateNotesDialog = ({
  userId,
  defaultValues,
  NoteId,
  refetch,
}: {
  userId: string;
  defaultValues?: Partial<z.infer<typeof formSchema>>;
  NoteId?: string;
  refetch?: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
}) => {
  const [open, setOpen] = useState(false);

  function onSuccess() {
    setOpen(false);
    refetch && refetch();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mr-5">
          {defaultValues ? "Edit Note" : "Create Note"}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full border">
        <DialogHeader>
          <DialogTitle>Create Note Form</DialogTitle>
        </DialogHeader>
        <CreateNoteForm
          userId={userId}
          noteId={NoteId}
          onSuccess={onSuccess}
          defaultValues={defaultValues}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateNotesDialog;
