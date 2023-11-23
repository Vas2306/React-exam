
import EventBoard from '../EventBoard/EventBoard';
import PageTitle from '../PageTitle/PageTitle';
import upcomingEvents from 'upcoming-events.json';
import SectionBusiness from '../SectionBusiness/SectionBusiness';
import { Container } from './App.styled';
import { CustomerSupport } from 'components/CustomerSupport/CustomerSupport';
import Counter from 'components/Counter/Counter';
import Dropdown from "components/Dropdown/Dropdown";

export default function App() {
  return (
    <div>
      <SectionBusiness />
      <Container>
        <PageTitle title="24th Core Worlds Coalition Conference (CSS-module, EventBoard)" />
        <EventBoard events={upcomingEvents} />
      </Container>
      <CustomerSupport/>
      <Counter initialValue={0}/>
<Dropdown/>
    </div>
  );
}
