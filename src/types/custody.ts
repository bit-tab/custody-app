export type CustodyType = "weekly" | "biweekly";

export type CustodyConfig = {
  type: CustodyType;
  startDate: string; // inicio del patrón
  firstParent: "madre" | "padre";
};