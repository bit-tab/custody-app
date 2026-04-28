import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../index.css";

import { useEventsContext } from "../context/EventsContext";
import { useCustodyContext } from "../context/CustodyContext";
import { getCustody } from "../utils/getCustody";

export function CalendarPage() {
  const [date, setDate] = useState(new Date());

  const { events } = useEventsContext();
  const { config, overrides, setOverrides } = useCustodyContext();

  // 👇 NUEVO: seleccionar a quién forzar
  const [overrideOwner, setOverrideOwner] = useState<"madre" | "padre">("madre");

  // 📋 eventos del día
  const eventsOfDay = events.filter(
    (e) => new Date(e.date).toDateString() === date.toDateString()
  );

  return (
    <div className="w-full min-h-screen">
      <h2 className="text-xl font-bold mb-4">Calendario</h2>

      <Calendar
        onChange={(value) => setDate(value as Date)}
        value={date}
        className="w-full"

        // 🔵 PUNTITOS
        tileContent={({ date, view }) => {
          if (view === "month") {
            const hasEvent = events.some(
              (e) =>
                new Date(e.date).toDateString() === date.toDateString()
            );

            return hasEvent ? (
              <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mt-1"></div>
            ) : null;
          }
        }}

        // 🎨 COLORES CUSTODIA
        tileClassName={({ date, view }) => {
          if (view === "month") {
            const owner = getCustody(date, config, overrides);

            if (owner === "madre") return "custody-madre";
            if (owner === "padre") return "custody-padre";
          }
        }}
      />

      {/* 📋 EVENTOS */}
      <div className="mt-6">
        <h3 className="font-bold mb-2">Eventos del día</h3>

        {eventsOfDay.length === 0 ? (
          <p className="text-gray-500">No hay eventos</p>
        ) : (
          <ul className="space-y-2">
            {eventsOfDay.map((e, i) => (
              <li key={i} className="p-2 bg-gray-100 rounded">
                {e.time} - {e.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 🟣 SELECTOR DE OVERRIDE */}
      <div className="mt-6">
        <label className="mr-2 font-medium">Forzar custodia:</label>

        <select
          value={overrideOwner}
          onChange={(e) =>
            setOverrideOwner(e.target.value as "madre" | "padre")
          }
          className="border p-1 rounded"
        >
          <option value="madre">Madre</option>
          <option value="padre">Padre</option>
        </select>
      </div>

      {/* 🟣 BOTÓN OVERRIDE */}
      <button
        onClick={() => {
          const dateStr = date.toISOString().slice(0, 10);

          setOverrides((prev) => [
            ...prev,
            {
              date: dateStr,
              owner: overrideOwner,
            },
          ]);
        }}
        className="mt-2 bg-purple-600 text-white px-4 py-2 rounded"
      >
        Aplicar excepción
      </button>
    </div>
  );

console.log(config);
}