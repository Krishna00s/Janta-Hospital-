import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "mint" | "outline" | "subtle";
  dot?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = "mint",
  dot = false,
  className,
}: BadgeProps) {
  const variantStyles = {
    mint: "bg-[#E8F5F1] text-[#0A5C4F] border border-[#C2EADB]/60",
    outline: "bg-white text-[#0A5C4F] border border-[#C2EADB]",
    subtle: "bg-black/[0.04] text-[#475B57] border border-black/[0.06]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-sans",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#0A5C4F] shrink-0"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
