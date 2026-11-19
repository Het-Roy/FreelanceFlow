
export type DemoClient = {
  id: string;
  name: string;
  email: string;
  company: string;
};

export const demoClients: DemoClient[] = [
  {
    id: "client-001",
    name: "John Smith",
    email: "john@example.com",
    company: "Smith Technologies",
  },
  {
    id: "client-002",
    name: "Alex Johnson",
    email: "alex@example.com",
    company: "Creative Studio",
  },
  {
    id: "client-003",
    name: "David Wilson",
    email: "david@example.com",
    company: "Wilson Solutions",
  },
];
