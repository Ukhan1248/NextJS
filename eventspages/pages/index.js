import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

function Homepage() {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default Homepage;
