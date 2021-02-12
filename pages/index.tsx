import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import Reset from 'styled-reset';

//Components
import App from '../src/App';
import { Toolbar } from '../src/components/toolbar';
import Sidebar from '../src/components/sidebar';

const Global = createGlobalStyle`
  ${Reset}
`;

export default function Home() {
  return (
    <>
      <Global />
      <ThemeProvider theme={theme}>
        <App>
          <Toolbar variant={0} />
          <Sidebar variant={0} />
        </App>
      </ThemeProvider>
    </>
  );
}
