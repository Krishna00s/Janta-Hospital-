import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-xs sm:text-sm font-semibold text-[#3B524E] ${className}`}
    >
      <ol
        className="flex flex-wrap items-center gap-1.5 sm:gap-2"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center"
        >
          <Link
            href="/"
            prefetch={false}
            itemProp="item"
            className="flex items-center gap-1 hover:text-[#0A5C4F] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] rounded font-bold"
          >
            <Home className="w-3.5 h-3.5 text-[#0A5C4F]" aria-hidden="true" />
            <span itemProp="name" className="sr-only sm:not-sr-only">
              Home
            </span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => {
          const position = index + 2;
          const isLast = index === items.length - 1;

          return (
            <li
              key={item.label}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-1.5 sm:gap-2"
            >
              <ChevronRight
                className="w-3 h-3 text-[#A0B8B0] shrink-0"
                aria-hidden="true"
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  itemProp="item"
                  className="hover:text-[#0A5C4F] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C4F] rounded font-medium"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span
                  itemProp="name"
                  aria-current={isLast ? "page" : undefined}
                  className="text-[#122421] font-semibold"
                >
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(position)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
