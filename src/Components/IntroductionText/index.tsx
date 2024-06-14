import { FC } from 'react';
import {
  TextSectionOne,
  TextSectionTwo,
  TextSectionThree,
  Container,
} from './style';

const IntroductionText: FC = () => {
  return (
    <Container>
      <TextSectionOne>
        <h1>Hey there,</h1>
      </TextSectionOne>
      <TextSectionTwo>
        <h2>my name is Giordano Mendes</h2>
      </TextSectionTwo>
      <TextSectionThree>
        <h3>
          I'm a frontend developer who transforms designs into dynamic and
          interactive web experiences.
        </h3>
      </TextSectionThree>
    </Container>
  );
};

export default IntroductionText;
