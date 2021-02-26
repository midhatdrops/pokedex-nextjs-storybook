import React from 'react';

import styled from 'styled-components';

const Component = styled.div`
  width: 80%;
  height: calc(100% - 30px);
  display: grid;
  position: fixed;
  left: 400px;
  top: 90px;
  grid-column-gap: 10px;
  grid-row-gap: 2px;
  grid-template-rows: repeat(3, 0.5fr);
  grid-template-columns: repeat(4, 1fr);
`;

export const PokemonGrid: React.FC = (props) => (
  <Component>{props.children}</Component>
);

export default PokemonGrid;
