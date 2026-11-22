import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "emergency" | "emergency-white";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs min-h-[36px]",
    md: "px-5 py-2.5 text-sm min-h-[44px]",
    lg: "px-6 py-3.5 text-base min-h-[48px]",
  };

  const variantStyles = {
    primary:
      "bg-[#0A5C4F] hover:bg-[#074B40] text-white shadow-sm shadow-[#0A5C4F]/20 hover:shadow-md",
    secondary:
      "bg-white hover:bg-[#F4FAF7] text-[#0A5C4F] border border-[#C2EADB] shadow-sm hover:border-[#0A5C4F]",
    ghost: "bg-transparent hover:bg-[#F4FAF7] text-[#0A5C4F]",
    emergency:
      "bg-[#A63F45] hover:bg-[#8E3339] text-white font-bold border border-[#A63F45] shadow-sm shadow-[#A63F45]/20 focus-visible:ring-[#A63F45]",
    "emergency-white":
      "bg-white hover:bg-[#F9EDEE] text-[#A63F45] font-bold border border-[#ECCDD0] shadow-sm focus-visible:ring-[#A63F45]",
  };

  const combinedClassName = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, external, ...linkProps } = props as ButtonAsLink;

    if (external || href.startsWith("http") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          className={combinedClassName}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...linkProps}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName} {...linkProps}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
