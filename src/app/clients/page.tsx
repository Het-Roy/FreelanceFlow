
import Link from "next/link";

import { demoClients } from "@/features/clients/data";

export default function ClientsPage() {
  return (
    <section className="page-content">
      <div className="page-heading">
        <p className="eyebrow">WORKSPACE</p>

        <h1>Clients</h1>

        <p>View and manage your client directory.</p>
      </div>

      <div className="data-list">
        {demoClients.map((client) => (
          <Link
            key={client.id}
            href={`/clients/${client.id}`}
            className="data-row"
          >
            <div>
              <h2>{client.name}</h2>
              <p>{client.email}</p>
              <p>{client.company}</p>
            </div>

            <span>View details →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
