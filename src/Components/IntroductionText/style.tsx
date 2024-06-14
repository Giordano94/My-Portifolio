import styled from 'styled-components';

export const Container = styled.section`
  @media (max-width: 600px) {
    margin: 40px 0px;
    padding: 30px;
    height: 100vh;
  }
  height: 100vh;
  background: rgb(12, 12, 12);
  background: linear-gradient(
    90deg,
    rgba(12, 12, 12, 1) 48%,
    rgba(29, 57, 52, 1) 100%
  );
`;

export const TextSectionOne = styled.div`
  @media (max-width: 600px) {
    font-size: 14px;
  }
  font-family: 'Times New Roman', Times, serif;
  color: #50c8ab;
`;

export const TextSectionTwo = styled.div`
  @media (max-width: 600px) {
    font-size: 20px;
  }
  font-family: 'Courier New', Courier, monospace;
  color: #ebebeb;
`;

export const TextSectionThree = styled.div`
  @media (max-width: 600px) {
    font-size: 16px;
  }
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #ccd6f6;
`;
