import EventBoard from '../EventBoard/EventBoard';
import PageTitle from '../PageTitle/PageTitle';
import upcomingEvents from 'upcoming-events.json';
import SectionBusiness from '../SectionBusiness/SectionBusiness';
import { Container } from './App.styled';
import { ContainerForThree } from './App.styled';
import { CustomerSupport } from 'components/CustomerSupport/CustomerSupport';
import Counter from 'components/Counter/Counter';
import Dropdown from 'components/Dropdown/Dropdown';
import ColorPicker from 'components/ColorPicker/Colorpiker';

const colorPickerOptions = [
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
  { label: 'red', color: '#F44336' },
];

export default function App() {
  return (
    <div>
      <SectionBusiness />
      <Container>
        <PageTitle title="24th Core Worlds Coalition Conference (CSS-module, EventBoard)" />
        <EventBoard events={upcomingEvents} />
      </Container>
       <CustomerSupport />
      <ContainerForThree>
       
        <Counter initialValue={0} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
      </ContainerForThree>
    </div>
  );
}
