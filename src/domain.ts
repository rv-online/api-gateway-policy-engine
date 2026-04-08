
export interface RecordItem {
  [key: string]: string | number | boolean;
}

export class ApiGatewayPolicyEngine {
  constructor(private readonly items: RecordItem[]) {}

  list(): RecordItem[] {
    return [...this.items];
  }

  score(item: RecordItem): number {
    let score = 0;
    for (const value of Object.values(item)) {
      if (typeof value === "number") score += value;
      if (typeof value === "boolean") score += value ? 0 : 20;
    }
    return score;
  }

  priorities(): Array<RecordItem & { priority: "low" | "medium" | "high" }> {
    return this.items.map((item) => {
      const score = this.score(item);
      const priority = score >= 100 ? "high" : score >= 20 ? "medium" : "low";
      return { ...item, priority };
    });
  }
}

export const seedData: RecordItem[] = [
  {
    "route": "/billing/export",
    "principal": "analyst",
    "risk": 8,
    "allowed": false
  },
  {
    "route": "/health",
    "principal": "anonymous",
    "risk": 1,
    "allowed": true
  },
  {
    "route": "/admin/users",
    "principal": "admin",
    "risk": 5,
    "allowed": true
  }
];
