import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreelanceFlow | Freelancer Workspace",
  description: "Manage freelance clients, projects, tasks, deliverables and payments in one place.",
};

export default function RootLayout({children} : Readonly<{children : ReactNode}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
