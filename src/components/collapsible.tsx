"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
}

export function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
  icon,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (defaultOpen) {
      setIsOpen(true);
    }
  }, [defaultOpen]);

  return (
    <div className="mb-6">
      <Collapsible.Root open={mounted ? isOpen : false} onOpenChange={setIsOpen}>
        <Collapsible.Trigger asChild>
          <button
            className={twMerge(
              "group flex w-full items-center justify-between gap-2 rounded-lg border bg-fd-card px-4 py-3 text-left shadow-sm transition-all duration-200",
              "hover:bg-fd-muted/50 hover:shadow-md",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-primary focus-visible:ring-offset-2",
              "data-[state=open]:rounded-b-none data-[state=open]:border-b-0"
            )}
          >
            <div className="flex items-center gap-2">
              {icon && (
                <span className="text-fd-muted-foreground transition-colors group-hover:text-fd-foreground">
                  {icon}
                </span>
              )}
              <span className="font-semibold text-fd-foreground">{title}</span>
            </div>
            <ChevronDown
              className={twMerge(
                "h-5 w-5 shrink-0 text-fd-muted-foreground transition-transform duration-300 ease-out",
                isOpen && "rotate-180"
              )}
            />
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content className="collapsible-content overflow-hidden">
          <div
            className={twMerge(
              "rounded-b-lg border border-t-0 bg-fd-card p-4 shadow-sm",
              "[&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
            )}
          >
            {children}
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
}
