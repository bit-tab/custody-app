import { useState } from "react";
import { useEvents } from "../hooks/useEvents";
import { EventForm } from "../components/forms/EventForm";
import { EventList } from "../components/events/EventList";
import type { AppEvent } from "../types/events";

export function EventsPage() {
  const { events, addEvent, deleteEvent, updateEvent } = useEvents();

  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<AppEvent | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Eventos</h2>

      <button
        onClick={() => {
          if (showForm) {
            setEditingEvent(null);
            setEditingIndex(null);
          }
          setShowForm((prev) => !prev);
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {showForm ? "Cerrar formulario" : "+ Añadir evento"}
      </button>

      {showForm && (
        <EventForm
          initialData={editingEvent}
          onAdd={(event) => {
            if (editingIndex !== null) {
              updateEvent(editingIndex, event);
              setEditingIndex(null);
              setEditingEvent(null);
            } else {
              addEvent(event);
            }
            setShowForm(false);
          }}
        />
      )}

      <EventList
        events={events}
        onDelete={deleteEvent}
        onEdit={(index: number) => {
          setEditingIndex(index);
          setEditingEvent(events[index]);
          setShowForm(true);
        }}
      />
    </div>
  );
}