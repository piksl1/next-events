"use client";

import { useSearchParams } from "next/navigation";
import React, { Fragment } from "react";
import { getEventById } from "../../../dummy-data";
import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";
import ErrorAlert from "../../../components/ui/error-alert";

const EventDetailsPage = () => {
  const searchParams = useSearchParams();

  const eventId = searchParams.get("eventId");
  const event = getEventById(eventId);
  if (!event) {
    return (
      <ErrorAlert>
        <p>no event found</p>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};
export default EventDetailsPage;
