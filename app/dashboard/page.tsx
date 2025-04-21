import CreateNotesDialog from "@/components/notes/create-notes-dialog";
import DisplayNotes from "@/components/notes/display-notes";
import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="">
      <div className="flex justify-end">
        <CreateNotesDialog userId={user.id} />
      </div>
      <DisplayNotes userId={user.id} />
    </div>
  );
}
