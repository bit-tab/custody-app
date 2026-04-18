import { useState, useEffect } from "react";
import type { Event } from "../src/types/events";

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);

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

  const addEvent = (event: Event) => {
    setEvents((prev) => [...prev, event]);
  };

  return {
    events,
    addEvent,
  };
}