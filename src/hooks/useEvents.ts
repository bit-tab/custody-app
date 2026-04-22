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

  return {
    events,
    addEvent,
    deleteEvent,
  };
}