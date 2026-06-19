"use client";

import { ChevronRight } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Generate breadcrumbs from pathname if items not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;

    const paths = pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Home", href: "/" },
    ];

    let currentPath = "";
    paths.forEach((path) => {
      currentPath += `/${path}`;
      
      // Convert path to readable label
      const label = path
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      breadcrumbs.push({
        label,
        href: currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = generateBreadcrumbs();

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://www.spentaengineers.com${item.href}`,
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-2 text-sm ${className}`}
        style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
      >
        <ol className="flex items-center gap-2 flex-wrap">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            
            return (
              <li
                key={item.href}
                className="flex items-center gap-2"
              >
                {isLast ? (
                  <span
                    className="text-gray-600 font-medium"
                  >
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className="text-accent hover:text-blue-700 transition-colors"
                    >
                      <span>{item.label}</span>
                    </Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" strokeWidth={2} />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

