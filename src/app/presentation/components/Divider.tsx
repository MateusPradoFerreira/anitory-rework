import { cn } from "@/app/core/lib/utils";

export type DividerProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export function Divider({ className, orientation = "vertical" }: DividerProps) {
  return (
    <div className={cn("rounded bg-zinc-100", orientation === "vertical"? "w-0.5 h-6 mx-2" : "h-0.5 w-full my-2", className )} />
  )
}