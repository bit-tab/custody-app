import { Card } from "../../ui/Card";
import type { Event } from "../types/events";

type Props = {
  event: Event;
};

export function EventCard({ event }: Props) {
  return (
    <Card>
      <h3 className="font-bold">{event.title}</h3>
      <p>{event.date}</p>
      <p className="text-sm text-gray-500">{event.type}</p>
    </Card>
  );
}