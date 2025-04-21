"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadcrumbsHeader() {
  const pathname = usePathname();

  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment.length > 0);

  return (
    <nav className="flex items-center text-sm text-muted-foreground">
      <Link href="/" className="hover:text-primary">
        Home
      </Link>
      {pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        const isLast = index === pathSegments.length - 1;

        return (
          <span key={href} className="flex items-center">
            <ChevronRight className="mx-2 h-4 w-4 text-gray-500" />
            <Link
              href={href}
              className={cn(
                "capitalize hover:text-primary",
                isLast && "text-primary font-medium"
              )}
            >
              {decodeURIComponent(segment.replace(/-/g, " "))}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
