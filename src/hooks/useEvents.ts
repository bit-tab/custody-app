import { useState, useEffect } from "react";
import type { AppEvent } from "../types/events";

export function useEvents() {
  const [events, setEvents] = useState<AppEvent[]>(() => {
    const stored = localStorage.getItem("events");

    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return [];
      }
    }

    return [];
  });

  // guardar en localStorage
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