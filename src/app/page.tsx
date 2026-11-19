import { SiteHeader } from "@/components/layout/site-header";
import { WorkspaceModule } from "@/features/workspace/components/workspace-modules";

export default function HomePage() {
  return (
    <main className="app-shell">
      
      
      <SiteHeader />

      <section className="hero">
        <p className="eyebrow">
          Freelance Work
        </p>

        <h1>
          One place to manage your freelance work.
        </h1>

        <p className="hero-description">
          Organize clients, projects, tasks, deliverables
          and payments in one simple workspace.
        </p>
      </section>

      <WorkspaceModule />

      <footer className="site-footer">
        FreelanceFlow · Built with Next.js
      </footer>
    </main>
  );
}