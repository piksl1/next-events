import EventItem from "./event-item";
import styles from "./event-list.module.css";

interface Event {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
}

interface EventListProps {
  items: Event[];
}

const EventList: React.FC<EventListProps> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;
