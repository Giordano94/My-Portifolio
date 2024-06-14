import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
  body {
    margin: 0px;
    padding: 30;
    
  }

  @media (max-width: 600px) {
    body {
      margin: 0px; 
    } 
  }
`;

export default GlobalStyles;
