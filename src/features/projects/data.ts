
export type DemoProject = {
  id: string;
  name: string;
  clientName: string;
  status: string;
};

export const demoProjects: DemoProject[] = [
  {
    id: "project-001",
    name: "Company Website Development",
    clientName: "John Smith",
    status: "In Progress",
  },
  {
    id: "project-002",
    name: "Portfolio Website",
    clientName: "Alex Johnson",
    status: "Planning",
  },
  {
    id: "project-003",
    name: "E-commerce Platform",
    clientName: "David Wilson",
    status: "Completed",
  },
];
