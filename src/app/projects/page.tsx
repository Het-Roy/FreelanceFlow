
import Link from "next/link";

import { demoProjects } from "@/features/projects/data";

export default function ProjectsPage() {
  return (
    <section className="page-content">
      <div className="page-heading">
        <p className="eyebrow">WORKSPACE</p>

        <h1>Projects</h1>

        <p>View your freelance projects.</p>
      </div>

      <div className="data-list">
        {demoProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="data-row"
          >
            <div>
              <h2>{project.name}</h2>
              <p>Client: {project.clientName}</p>
              <p>Status: {project.status}</p>
            </div>

            <span>View details →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
