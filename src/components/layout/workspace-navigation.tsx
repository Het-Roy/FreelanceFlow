
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "Dashboard", href: "/" },
  { label: "Clients", href: "/clients" },
  { label: "Projects", href: "/projects" },
  { label: "Tasks", href: "/tasks" },
  { label: "Deliverables", href: "/deliverables" },
  { label: "Payments", href: "/payments" },
  { label: "Reports", href: "/reports" },
];

export function WorkspaceNavigation() {
  const pathname = usePathname();

  return (
    <nav
      className="workspace-navigation"
      aria-label="Main navigation"
    >
      {navigationItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link ${
              isActive ? "nav-link-active" : ""
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
