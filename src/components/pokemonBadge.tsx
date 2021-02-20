import React from 'react';
import styled from 'styled-components';

export interface Pokemon {
  area: String;
}

const Component = styled.div<Pokemon>`
  width: 200px;
  height: 70px;
  background-color: #222831;
  border: 1px solid whitesmoke;
  border-radius: 5px;
  color: whitesmoke;
  margin-left: 10px;
  ${(props) => `grid-area: ${props.area}`}
`;

export const PokemonBadge: React.FC<Pokemon> = ({ area, ...props }) => (
  <Component area={area} />
);

export default PokemonBadge;
