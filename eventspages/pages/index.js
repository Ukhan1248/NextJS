import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function Homepage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default Homepage;
