import React from "react";
import { getFeaturedEvents, Event } from "../dummy-data";
import EventList from "../components/events/event-list";

const HomePage: React.FC = () => {
  const featuredEvents: Event[] = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
