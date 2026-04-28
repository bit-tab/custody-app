import type { CustodyConfig } from "../types/custody";

type Override = {
  date: string;
  owner: "madre" | "padre";
};

export function getCustody(
  date: Date,
  config: CustodyConfig,
  overrides: Override[] = []
): "madre" | "padre" {
  const dateStr = date.toISOString().slice(0, 10);

  // 🔴 overrides primero
  const override = overrides.find((o) => o.date === dateStr);
  if (override) return override.owner;

  const [year, month, day] = config.startDate.split("-").map(Number);
  const start = new Date(year, month - 1, day);

  const diffTime = date.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const week = Math.floor(diffDays / 7);

  // 🔵 EXCLUSIVA
  if (config.type === "exclusive") {
    if (config.visits?.enabled) {
      const day = date.getDay(); // 0 domingo, 6 sábado

      const isSaturday = day === 6;
      const isSunday = day === 0;

      // 🟣 FINES DE SEMANA
      if (config.visits.weekend) {
        if (isSaturday) {
          const rule = config.visits.weekend.saturday;

          if (rule === "all") return config.visits.visitor;
          if (rule === "alternate") {
            return week % 2 === 0
              ? config.visits.visitor
              : config.firstParent;
          }
        }

        if (isSunday) {
          const rule = config.visits.weekend.sunday;

          if (rule === "all") return config.visits.visitor;
          if (rule === "alternate") {
            return week % 2 === 0
              ? config.visits.visitor
              : config.firstParent;
          }
        }
      }

      // 🟣 ENTRE SEMANA
      const weekdayMap = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ];

      const currentDay = weekdayMap[day];

      if (
        config.visits.weekdays?.includes(currentDay as any)
      ) {
        return config.visits.visitor;
      }
    }

    return config.firstParent;
  }

  // 🔵 SEMANAL
  if (config.type === "weekly") {
    return week % 2 === 0
      ? config.firstParent
      : config.firstParent === "madre"
      ? "padre"
      : "madre";
  }

  // 🔵 QUINCENAL
  if (config.type === "biweekly") {
    const period = Math.floor(diffDays / 14);

    return period % 2 === 0
      ? config.firstParent
      : config.firstParent === "madre"
      ? "padre"
      : "madre";
  }

  return config.firstParent;
}