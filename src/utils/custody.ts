import type { CustodyConfig } from "../types/custody";

export function getCustodyForDate(
  date: string,
  config: CustodyConfig
): "madre" | "padre" {
  const start = new Date(config.startDate);
  const current = new Date(date);

  const diffDays = Math.floor(
    (current.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );

  const blockSize = config.type === "weekly" ? 7 : 14;

  const blockIndex = Math.floor(diffDays / blockSize);

  if (blockIndex % 2 === 0) {
    return config.firstParent;
  } else {
    return config.firstParent === "madre" ? "padre" : "madre";
  }
}