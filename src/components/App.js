import EventBoard from "./EventBoard/EventBoard";
import PageTitle from "./PageTitle/PageTitle";
import upcomingEvents from '../upcoming-events.json';

export default function App() {
  return (
    <div>
      <PageTitle title='24th Core Worlds Coalition Conference' />
      <EventBoard events={upcomingEvents}/>
    </div>
  );
}
