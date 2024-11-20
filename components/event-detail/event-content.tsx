import classes from "./event-content.module.css";

interface EventContentProps {
  children: React.ReactNode;
}

const EventContent: React.FC<EventContentProps> = ({ children }) => {
  return <section className={classes.content}>{children}</section>;
};

export default EventContent;
