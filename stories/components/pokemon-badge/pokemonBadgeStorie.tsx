import React from 'react';
import styled from 'styled-components';

export interface Pokemon {
  /**
   * Area refere-se a àrea na PokemonGrid
   */
  area: String;
}

const Component = styled.div<Pokemon>`
  width: 200px;
  height: 70px;
  background-color: #222831;
  border: 1px solid whitesmoke;
  border-radius: 5px;
  color: whitesmoke;
  ${(props) => `grid-area: ${props.area}`}
`;

export const PokemonBadge: React.FC<Pokemon> = ({ area, ...props }) => (
  <Component area={area} />
);
