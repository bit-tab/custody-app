import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEvents } from "../hooks/useEvents";
import "../index.css";

export function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const { events } = useEvents();
    // 🔍 eventos del día seleccionado
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

        // 🔵 PUNTITOS EN DÍAS CON EVENTOS
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
      />

      {/* 📋 EVENTOS DEL DÍA */}
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
    </div>
  );
}