import React from 'react';
import styled from 'styled-components';

const App = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-color: ${(props) => props.theme.palette.common.black};
  color: ${({ theme }) => theme.palette.common.white};
  box-sizing: border-box;
`;

export default App;
