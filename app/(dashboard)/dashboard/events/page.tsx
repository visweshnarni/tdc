"use client";
// tdc/app/(dashboard)/dashboard/events/page.tsx
import Events from "@/app/components/dashboard/Events";
import { events } from "@/app/data/events";

export default function EventsPage() {
  return (
    <div >
      <Events entries={events} />
    </div>
  );
}
