import { createContext, useContext, useState, useEffect } from "react";
import type { CustodyConfig } from "../types/custody";

type Override = {
  date: string;
  owner: "madre" | "padre";
};

type CustodyContextType = {
  config: CustodyConfig;
  setConfig: (config: CustodyConfig) => void;
  overrides: Override[];
  setOverrides: React.Dispatch<React.SetStateAction<Override[]>>;
};

const CustodyContext = createContext<CustodyContextType | null>(null);

export function CustodyProvider({ children }: { children: React.ReactNode }) {

  // 🔵 CONFIG
  const [config, setConfigState] = useState<CustodyConfig>(() => {
    const stored = localStorage.getItem("custodyConfig");

    return stored
      ? JSON.parse(stored)
      : {
          type: "weekly",
          startDate: new Date().toISOString().slice(0, 10),
          firstParent: "madre",
        };
  });

  // 🔵 OVERRIDES
  const [overrides, setOverrides] = useState<Override[]>(() => {
    const stored = localStorage.getItem("custodyOverrides");
    return stored ? JSON.parse(stored) : [];
  });

  // 🔵 GUARDAR CONFIG
  useEffect(() => {
    localStorage.setItem("custodyConfig", JSON.stringify(config));
  }, [config]);

  // 🔵 GUARDAR OVERRIDES
  useEffect(() => {
    localStorage.setItem("custodyOverrides", JSON.stringify(overrides));
  }, [overrides]);

  // 🔥 SET CONFIG (IMPORTANTE)
  const setConfig = (newConfig: CustodyConfig) => {
    setConfigState(newConfig);

    // 👉 limpiar excepciones al cambiar custodia
    setOverrides([]);
  };

  return (
    <CustodyContext.Provider
      value={{
        config,
        setConfig,
        overrides,
        setOverrides,
      }}
    >
      {children}
    </CustodyContext.Provider>
  );
}

export function useCustodyContext() {
  const context = useContext(CustodyContext);

  if (!context) {
    throw new Error("useCustodyContext debe usarse dentro de CustodyProvider");
  }

  return context;
}