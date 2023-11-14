import {
  Section,
  Container,
  Context,
  Title,
  Text,
  Button,
  Image,
} from './CustomerSupport.styled';

export function CustomerSupport() {
  return (
    <Section>
      <Container>
        <Image src='https://fastly.picsum.photos/id/341/5000/3337.jpg?hmac=au9Ex3OCaHWkfF3Ttoe4sXkQOsGPGeA1vrRwhmB2aug' width='500'/>
        <Context>
          <Title>24/7 Customer Support</Title>
          <Text>
            Our team is here to give you personalized support within the hour
            available 24/7. In accordance with our commitment to providing
            superior and professional service. Join daily live webinars, watch
            our tutorials, or browse through our knowledge base
          </Text>
          <Button>Read More</Button>
        </Context>
      </Container>
    </Section>
  );
}
