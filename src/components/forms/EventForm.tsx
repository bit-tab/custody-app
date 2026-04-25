import { useState, useEffect } from "react";
import { Button } from "../../ui/Button";
import type { AppEvent } from "../../types/events";

type Props = {
  onAdd: (event: AppEvent) => void;
  initialData?: AppEvent | null;
};

export function EventForm({ onAdd, initialData }: Props) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [date, setDate] = useState(initialData?.date || "");
  const [time, setTime] = useState(initialData?.time || "");
  const [type, setType] = useState<AppEvent["type"]>(initialData?.type || "otro");
  const [notes, setNotes] = useState(initialData?.notes || "");

  // 1. Efecto para actualizar el formulario cuando cambia initialData (al editar)
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDate(initialData.date);
      setTime(initialData.time);
      setType(initialData.type);
      setNotes(initialData.notes || "");
    }
  }, [initialData]);

  // 2. Manejador del envío
  const handleSubmit = () => {
    if (!title || !date) return;

    onAdd({
      title,
      date,
      time,
      type,
      notes,
    });

    // Opcional: Limpiar el formulario si no hay initialData
    if (!initialData) {
      setTitle("");
      setDate("");
      setTime("");
      setType("otro");
      setNotes("");
    }
  };

  // 3. El RETURN siempre debe estar al final del cuerpo del componente
  return (
    <div className="space-y-3 p-4 border rounded-lg bg-white">
      <h2 className="text-lg font-bold mb-2">
        {initialData ? "Editar evento" : "Nuevo evento"}
      </h2>
      
      <input
        className="border p-2 w-full rounded"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="flex gap-2">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
          className="border p-2 rounded w-1/2"
        />

        <input
          type="time"
          className="border p-2 rounded w-1/2"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <select
        className="border p-2 w-full rounded"
        value={type}
        onChange={(e) => setType(e.target.value as AppEvent["type"])}
      >
        <option value="medico">Médico</option>
        <option value="escolar">Escolar</option>
        <option value="otro">Otro</option>
      </select>

      <textarea
        className="border p-2 w-full rounded"
        placeholder="Observaciones"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <Button onClick={handleSubmit}>
        {initialData ? "Guardar cambios" : "Añadir evento"}
      </Button>
    </div>
  );
}