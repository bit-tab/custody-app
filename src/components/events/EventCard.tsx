import { Card } from "../../ui/Card";
import type { AppEvent } from "../../types/events";

type Props = {
  event: AppEvent;
  onDelete: () => void;
  onEdit: () => void; 
};

export function EventCard({ event, onDelete, onEdit }: Props) {
  return (
    <Card>
      <h3 className="font-bold">{event.title}</h3>
      <p>{event.date} {event.time}</p>
      <p className="text-sm text-gray-500">{event.type}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={onEdit}
          className="text-blue-500 text-sm"
        >
          Editar
        </button>

        <button
          onClick={onDelete}
          className="text-red-500 text-sm"
        >
          Eliminar
        </button>
      </div>
    </Card>
  );
}