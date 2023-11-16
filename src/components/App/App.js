import EventBoard from '../EventBoard/EventBoard';
import PageTitle from '../PageTitle/PageTitle';
import upcomingEvents from 'upcoming-events.json';
import SectionBusiness from '../SectionBusiness/SectionBusiness';
import { Container } from './App.styled';
import { CustomerSupport } from 'components/CustomerSupport/CustomerSupport';
export default function App() {
  return (
    <div>
      <SectionBusiness />
      <Container>
        <PageTitle title="24th Core Worlds Coalition Conference (CSS-module)" />
        <EventBoard events={upcomingEvents} />
      </Container>
      <CustomerSupport/>
    </div>
  );
}
