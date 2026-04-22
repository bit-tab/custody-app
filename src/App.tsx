import { useState, useMemo } from "react";
import { Layout } from "./components/layout/Layout";
import { EventList } from "./components/events/EventList";
import { EventForm } from "./components/forms/EventForm";
import { useEvents } from "./hooks/useEvents";

function App() {
  const { events, addEvent, deleteEvent } = useEvents();

  const [showForm, setShowForm] = useState(false);

  const medicalEvents = useMemo(() => {
    return events.filter((e) => e.type === "medico");
  }, [events]);

  return (
    <Layout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">
          🪢 Custody App 🪢
        </h1>

        <p className="text-sm text-gray-500">
          Gestión de custodias, eventos y organización familiar
        </p>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "Cerrar formulario" : "+ Añadir evento"}
        </button>

        {showForm && (
          <EventForm
            onAdd={(event) => {
              addEvent(event);
              setShowForm(false);
            }}
          />
        )}

        <p className="text-sm">
          Eventos médicos: {medicalEvents.length}
        </p>

        {/* 👇 AQUÍ PASAMOS delete */}
        <EventList events={events} onDelete={deleteEvent} />
      </div>
    </Layout>
  );
}

export default App;