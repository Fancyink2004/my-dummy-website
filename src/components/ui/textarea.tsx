import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-36 w-full rounded-lg border border-ink/15 bg-paper px-3.5 py-3 text-base text-ink shadow-border transition-[border-color,box-shadow] duration-150 ease-out placeholder:text-clay",
        "focus-visible:border-ink/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxblood",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
