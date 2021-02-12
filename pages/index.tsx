import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../src/theme.json';
import Reset from 'styled-reset';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;
const Global = createGlobalStyle`
  ${Reset}

`;

export default function Home() {
  return (
    <div id="App">
      <Global />
      <ThemeProvider theme={theme}>Hello World</ThemeProvider>
    </div>
  );
}
