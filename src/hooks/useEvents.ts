import { useState, useEffect } from "react";
import type { AppEvent } from "../types/events";

export function useEvents() {
  const [events, setEvents] = useState<AppEvent[]>([]);

  // Cargar desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem("events");

    if (stored) {
      setEvents(JSON.parse(stored));
    }
  }, []);

  // Guardar cada vez que cambian
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (event: AppEvent) => {
    setEvents((prev) => [...prev, event]);
  };

  const deleteEvent = (index: number) => {
    setEvents((prev) => prev.filter((_, i) => i !== index));
  };

  const updateEvent = (index: number, updated: AppEvent) => {
  setEvents((prev) =>
    prev.map((e, i) => (i === index ? updated : e))
  );
};

  return {
    events,
    addEvent,
    deleteEvent,
    updateEvent,
  };
}