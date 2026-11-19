
import Link from "next/link";

const dashboardSections = [
  {
    title: "Clients",
    description: "Manage your client information.",
    href: "/clients",
  },
  {
    title: "Projects",
    description: "Organize projects and deadlines.",
    href: "/projects",
  },
  {
    title: "Tasks & Milestones",
    description: "Manage project activities.",
    href: "/tasks",
  },
  {
    title: "Deliverables",
    description: "Track submitted work.",
    href: "/deliverables",
  },
  {
    title: "Payments",
    description: "Track payments and balances.",
    href: "/payments",
  },
  {
    title: "Reports",
    description: "View business performance.",
    href: "/reports",
  },
];

export default function HomePage() {
  return (
    <section className="page-content">
      <div className="page-heading">
        <p className="eyebrow">OVERVIEW</p>

        <h1>Dashboard</h1>

        <p>
          Manage your freelance business from one workspace.
        </p>
      </div>

      <div className="quick-links">
        {dashboardSections.map((section) => (
          <Link
            href={section.href}
            key={section.href}
            className="quick-link"
          >
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
