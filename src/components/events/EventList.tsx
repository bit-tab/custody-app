import { EventCard } from "./EventCard";
import type { AppEvent } from "../../types/events";

type Props = {
  events: AppEvent[];
  onDelete: (index: number) => void;
};

export function EventList({ events, onDelete }: Props) {
  return (
    <div className="grid gap-3">
      {events.map((event, index) => (
        <EventCard
          key={index}
          event={event}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}