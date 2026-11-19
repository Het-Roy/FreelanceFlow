import type {WorkspaceModule} from "../types"

export const WorkspaceModules : WorkspaceModule[] = [
    {
    id: "clients",
    name: "Clients",
    description:
      "Organize client profiles and contact information.",
  },
  {
    id: "projects",
    name: "Projects",
    description:
      "Manage project budgets, deadlines and progress.",
  },
  {
    id: "tasks",
    name: "Tasks & Milestones",
    description:
      "Break projects into manageable tasks and milestones.",
  },
  {
    id: "deliverables",
    name: "Deliverables",
    description:
      "Manage submissions, files and approval workflows.",
  },
  {
    id: "payments",
    name: "Payments",
    description:
      "Track received payments and outstanding balances.",
  },
  {
    id: "reports",
    name: "Reports",
    description:
      "Monitor earnings, deadlines and project performance.",
  },
]