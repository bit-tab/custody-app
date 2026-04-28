import { useState, useEffect } from "react";
import type { CustodyConfig } from "../types/custody";

export function useCustody() {
  const [config, setConfig] = useState<CustodyConfig>(() => {
    const stored = localStorage.getItem("custody");

    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        // si hay error, usamos valores por defecto
      }
    }

    return {
      type: "weekly",
      startDate: "2026-01-01",
      firstParent: "madre",
    };
  });

  // guardar cada vez que cambie
  useEffect(() => {
    localStorage.setItem("custody", JSON.stringify(config));
  }, [config]);

  return {
    config,
    setConfig,
  };
  
}
