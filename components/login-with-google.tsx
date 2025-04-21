"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";

const supabase = createClient();

export function GoogleLoginButton() {
  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <Button
      variant={"outline"}
      onClick={handleGoogleLogin}
      className="flex gap-2 items-center justify-center"
    >
      <FcGoogle size={25} /> Continue with Google
    </Button>
  );
}
