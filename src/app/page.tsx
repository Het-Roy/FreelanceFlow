import Link from "next/link";

const modules = [
  {
    name: "Clients",
    description: "Organize client profiles and contact information.",
  },
  {
    name: "Projects",
    description: "Manage project budgets, deadlines and progress.",
  },
  {
    name: "Tasks & Milestones",
    description: "Break projects into manageable tasks and milestones.",
  },
  {
    name: "Deliverables",
    description: "Manage submissions, files and approval workflows.",
  },
  {
    name: "Payments",
    description: "Track received payments and outstanding balances.",
  },
  {
    name: "Reports",
    description: "Monitor earnings, deadlines and project performance.",
  },
];

export default function HomePage() {
  return (
    <main className="app-shell">
      <header className="site-header">
        <Link href="/" className="brand">
          <span className="brand-mark">FF</span>
          <span>FreelanceFlow</span>
        </Link>

        <span className="header-note">
          FREELANCER WORKSPACE
        </span>
      </header>

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

      <section
        className="modules-section"
        aria-labelledby="modules-heading"
      >
        <div className="section-header">
          <h2 id="modules-heading">
            Workspace modules
          </h2>

          <span>OUR DEVELOPMENT ROADMAP</span>
        </div>

        <div className="module-grid">
          {modules.map((module, index) => (
            <article
              className="module-card"
              key={module.name}
            >
              <div className="module-card-header">
                <span className="module-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="module-status">
                  PLANNED
                </span>
              </div>

              <h3>{module.name}</h3>

              <p>{module.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        FreelanceFlow · Built with Next.js
      </footer>
    </main>
  );
}