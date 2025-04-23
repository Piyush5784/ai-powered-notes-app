import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import QueryProvider from "@/providers/query-provider";
import { Toaster } from "sonner";
import BreadcrumbsHeader from "@/components/beardcumps";

const defaultUrl = process.env.VERCEL_URL
  ? `${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "AI Powered Notes App",
  description: "A Simple Notes App with AI summarized feature",
  openGraph: {
    title: "AI Powered Notes App",
    description: "A Simple Notes App with AI summarized feature",
    images: [`/image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Powered Notes App",
    description: "A Simple Notes App with AI summarized feature",
    images: [`/image.png`],
  },
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <QueryProvider>
          <Toaster richColors />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className=" flex flex-col items-center  w-full">
              <div className="w-full max-w-5xl border min-h-screen">
                <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                  <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                    <div className="flex gap-5 items-center font-semibold">
                      <Link href={"/"} className="hidden md:block">
                        Ai Powered Notes app
                      </Link>
                      {/* <Link
                        href={"/"}
                        className="hidden sm:block md:hidden lg:hidden "
                      >
                        AI
                      </Link> */}
                    </div>
                    <div className="flex gap-3">
                      {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                      <ThemeSwitcher />
                    </div>
                  </div>
                </nav>

                <div className="flex flex-col gap-10 p-5 ">
                  <BreadcrumbsHeader />
                  {children}
                </div>
              </div>
            </main>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
