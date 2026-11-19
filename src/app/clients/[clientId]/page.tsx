
import Link from "next/link";
import { notFound } from "next/navigation";

import { demoClients } from "@/features/clients/data";

export default async function ClientDetailsPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = await params;

  const client = demoClients.find(
    (item) => item.id === clientId
  );

  if (!client) {
    notFound();
  }

  return (
    <section className="page-content">
      <Link href="/clients" className="back-link">
        ← Back to Clients
      </Link>

      <div className="page-heading">
        <p className="eyebrow">CLIENT DETAILS</p>

        <h1>{client.name}</h1>

        <p>Client information and company details.</p>
      </div>

      <div className="detail-card">
        <div>
          <span className="detail-label">Client ID</span>
          <p>{client.id}</p>
        </div>

        <div>
          <span className="detail-label">Name</span>
          <p>{client.name}</p>
        </div>

        <div>
          <span className="detail-label">Email</span>
          <p>{client.email}</p>
        </div>

        <div>
          <span className="detail-label">Company</span>
          <p>{client.company}</p>
        </div>
      </div>
    </section>
  );
}
