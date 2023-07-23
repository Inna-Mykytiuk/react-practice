import { Container } from 'components/App.styled';
import { Title, Section, Text } from '../components/App.styled';
import { MoreInfoWrapper, MoreInfoHeader, List, ListItem, StyledLink } from 'components/About/About.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LoadingIndicator } from '../components/Layout/LoadingDots';


const About = () => {

  return (
    <Section>
      <Container>
      <Title>About</Title>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</Text>
      <MoreInfoWrapper>
        <MoreInfoHeader>Additional information</MoreInfoHeader>
        <List>
          <ListItem>
          <StyledLink to="/about/contacts" state={{ fromAbout: true }}>
            Contacts
          </StyledLink>
          </ListItem>
        </List>
      </MoreInfoWrapper>
      <Suspense fallback={<LoadingIndicator />}>
        <Outlet />
      </Suspense>
    </Container>
    </Section>

  );
};

export default About;


// import { useLocation } from 'react-router-dom';
// const location = useLocation();
  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])
