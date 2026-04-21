import { EventCard } from "./EventCard";
import type { Event } from "../../types/events";

type Props = {
  events: Event[];
};

export function EventList({ events }: Props) {
  return (
    <div className="grid gap-3">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
}