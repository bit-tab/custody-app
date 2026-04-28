import { createContext, useContext } from "react";
import { useEvents } from "../hooks/useEvents";
import type { AppEvent } from "../types/events";

type EventsContextType = {
  events: AppEvent[];
  addEvent: (event: AppEvent) => void;
  deleteEvent: (index: number) => void;
  updateEvent: (index: number, event: AppEvent) => void;
};

const EventsContext = createContext<EventsContextType | null>(null);

export function EventsProvider({ children }: { children: React.ReactNode }) {
  const eventsState = useEvents();

  return (
    <EventsContext.Provider value={eventsState}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEventsContext() {
  const context = useContext(EventsContext);

  if (!context) {
    throw new Error("useEventsContext debe usarse dentro de EventsProvider");
  }

  return context;
}