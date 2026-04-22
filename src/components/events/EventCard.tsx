import { Card } from "../../ui/Card";
import type { AppEvent } from "../../types/events";

type Props = {
  event: AppEvent;
  onDelete: () => void;
};

export function EventCard({ event, onDelete }: Props) {
  return (
    <Card>
      <h3 className="font-bold">{event.title}</h3>
      <p>{event.date}</p>
      <p className="text-sm text-gray-500">{event.type}</p>

      <button
        onClick={onDelete}
        className="text-red-500 text-sm mt-2"
      >
        Eliminar
      </button>
    </Card>
  );
}