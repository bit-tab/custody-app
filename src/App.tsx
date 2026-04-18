import { useState, useMemo } from "react";
import { Layout } from "./components/layout/Layout";
import { EventList } from "./components/events/EventList";
import { EventForm } from "./components/forms/EventForm";
import { useEvents } from "./hooks/useEvents";

function App() {
  const { events, addEvent } = useEvents();

  const [showForm, setShowForm] = useState(false);

  // eventos médicos (optimización)
  const medicalEvents = useMemo(() => {
    return events.filter((e) => e.type === "medico");
  }, [events]);

  return (
    <Layout>
      <div className="space-y-4">

        {/* HEADER */}
        <h1 className="text-2xl font-bold">
          🪢 Custody App 🪢
        </h1>

        <p className="text-sm text-gray-500">
          Gestión de custodias, eventos y organización familiar
        </p>

        {/* BOTÓN TOGGLE */}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "Cerrar formulario" : "+ Añadir evento"}
        </button>

        {/* FORMULARIO */}
        {showForm && (
          <EventForm
            onAdd={(event) => {
              addEvent(event);
              setShowForm(false);
            }}
          />
        )}

        {/* INFO */}
        <p className="text-sm">
          Eventos médicos: {medicalEvents.length}
        </p>

        {/* LISTA */}
        <EventList events={events} />

      </div>
    </Layout>
  );
}

export default App;