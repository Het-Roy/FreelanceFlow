
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/layout/site-header";
import { WorkspaceNavigation } from "@/components/layout/workspace-navigation";

import "./globals.css";

export const metadata: Metadata = {
  title: "FreelanceFlow",
  description:
    "Manage freelance clients, projects, tasks and payments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <SiteHeader />

          <WorkspaceNavigation />

          <main className="app-content">
            {children}
          </main>

          <footer className="site-footer">
            FreelanceFlow · Built with Next.js
          </footer>
        </div>
      </body>
    </html>
  );
}
