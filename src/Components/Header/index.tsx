import { FC } from 'react';

import {
  AvatarContainer,
  Container,
  Name,
  Avatar,
  PagesContainer,
} from './style';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <Container>
      <AvatarContainer>
        <Link to={'/'}>
          <Avatar
            alt="Gandalf"
            src="https://i1.sndcdn.com/avatars-PigHYxlLNiqpLSQ0-ei6hGw-t240x240.jpg"
            sx={{ width: 80, height: 80 }}
          />
        </Link>

        <Name>Giordano Mendes</Name>
      </AvatarContainer>
      <PagesContainer>
        <p>About me</p>
        <p>Projects</p>
        <p>Contact</p>
      </PagesContainer>
    </Container>
  );
};
