import styled from 'styled-components';

export const Container = styled.section`
  @media (max-width: 600px) {
    margin: 40px 40px;
    height: 100vh;
  }
  height: 100vh;
`;

export const TextSectionOne = styled.div`
  @media (max-width: 600px) {
    font-size: 14px;
  }
  font-family: 'Times New Roman', Times, serif;
  color: #64ffda;
`;

export const TextSectionTwo = styled.div`
  @media (max-width: 600px) {
    font-size: 20px;
  }
  font-family: 'Courier New', Courier, monospace;
  color: #ccd6f6;
`;

export const TextSectionThree = styled.div`
  @media (max-width: 600px) {
    font-size: 16px;
  }
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: blueviolet;
`;
