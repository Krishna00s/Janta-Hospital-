import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "mint" | "outline" | "subtle" | "emergency";
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
    emergency: "bg-[#F9EDEE] text-[#A63F45] border border-[#ECCDD0] font-bold shadow-2xs",
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
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0",
            variant === "emergency" ? "bg-[#A63F45]" : "bg-[#0A5C4F]"
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
