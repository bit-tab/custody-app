export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday";

export type CustodyConfig = {
  type: "weekly" | "biweekly" | "exclusive";
  startDate: string;
  firstParent: "madre" | "padre";

  visits?: {
    enabled: boolean;
    visitor: "madre" | "padre";

    weekend?: {
      saturday: "none" | "all" | "alternate";
      sunday: "none" | "all" | "alternate";
    };

    weekdays?: Weekday[];
  };
};

/*export type CustodyOverride = {
  date: string; // "2026-04-25"
  owner: "madre" | "padre";
};*/