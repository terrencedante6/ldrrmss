import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/application"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/application/requests"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Requests
      </Link>
      <Link
        href="/application/stocks"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Stocks
      </Link>
      <Link
        href="/application/announcement"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Announcement
      </Link>
      <Link
        href="/application/employees"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Employee Lists
      </Link>
      <Link
        href="/application/settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
}
