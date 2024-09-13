import React from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface CustomLinkProps {
  href: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  hideIcon?: boolean;
}

function CustomLink({ href, title, children, className, hideIcon = false }: CustomLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("https");

  const linkProps = {
    href,
    title,
    className: `underline text-blue-500 dark:text-orange-400 hover:text-blue-600 dark:hover:text-orange-500 ${
      isExternal ? "inline-flex items-center gap-1" : ""
    } ${className || ""}`.trim(),
    ...(isExternal && { target: "_blank", rel: "noopener noreferrer" }),
  };

  return (
    <Link {...linkProps}>
      {children}
      {isExternal && !hideIcon && <ExternalLinkIcon aria-hidden="true" />}
    </Link>
  );
}

export default CustomLink;
