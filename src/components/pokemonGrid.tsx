import React from 'react';

import styled from 'styled-components';

const Component = styled.div`
  width: 80%;
  height: calc(100% - 30px);
  margin-top: 30px;
  display: grid;
  position: fixed;
  left: 200px;
  top: 20px;
  grid-gap: 10px;
  grid-template-rows: 3;
  grid-template-columns: 3;
  grid-template-areas: 'Pokemon1 Pokemon2 Pokemon3
  Pokemon4 Pokemon5 Pokemon6
  Pokemon7 Pokemon8 Pokemon9 ';
`;

export const PokemonGrid: React.FC = (props) => (
  <Component>{props.children}</Component>
);

export default PokemonGrid;
