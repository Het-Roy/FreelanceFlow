
import Link from "next/link";
import { notFound } from "next/navigation";

import { demoProjects } from "@/features/projects/data";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  const project = demoProjects.find(
    (item) => item.id === projectId
  );

  if (!project) {
    notFound();
  }

  return (
    <section className="page-content">
      <Link href="/projects" className="back-link">
        ← Back to Projects
      </Link>

      <div className="page-heading">
        <p className="eyebrow">PROJECT DETAILS</p>

        <h1>{project.name}</h1>

        <p>Project information and current status.</p>
      </div>

      <div className="detail-card">
        <div>
          <span className="detail-label">Project ID</span>
          <p>{project.id}</p>
        </div>

        <div>
          <span className="detail-label">Project Name</span>
          <p>{project.name}</p>
        </div>

        <div>
          <span className="detail-label">Client</span>
          <p>{project.clientName}</p>
        </div>

        <div>
          <span className="detail-label">Status</span>
          <p>{project.status}</p>
        </div>
      </div>
    </section>
  );
}
