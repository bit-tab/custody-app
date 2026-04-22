import { useState } from "react";
import { Button } from "../../ui/Button";
import type { AppEvent } from "../../types/events";

type Props = {
  onAdd: (event: AppEvent) => void;
};

export function EventForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState<AppEvent["type"]>("otro");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    if (!title || !date) return;

    onAdd({
      title,
      date,
      time,
      type,
      notes,
    });

    // limpiar
    setTitle("");
    setDate("");
    setTime("");
    setType("otro");
    setNotes("");
  };

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold mb-2">
  Nuevo evento
</h2>
      <input
        className="border p-2 w-full rounded"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        className="border p-2 w-full rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="time"
        className="border p-2 w-full rounded"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

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
        Guardar evento
      </Button>
    </div>
  );
}