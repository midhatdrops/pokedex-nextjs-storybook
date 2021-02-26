import React, { useEffect, useState } from 'react';
import styled, { StyledComponent } from 'styled-components';
import axios from 'axios';

import { PokemonData } from '../Handlers/pokeRequest';

export interface Pokemon {
  row: number;
  col: number;
  id?: number;
}

const Component = styled.div<Pokemon>`
  width: 200px;
  height: 70px;
  background-color: #222831;
  border: 1px solid whitesmoke;
  border-radius: 5px;
  color: whitesmoke;
  margin-left: 10px;
  ${(props) => `grid-row: ${props.row}`}
  ${(props) => `grid-col: ${props.col}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PokemonName = styled.div`
  width: 60%;
  height: 20px;
  border-radius: 4px;
  background-color: whitesmoke;
  border: 1px solid #222831;
  font-family: 'Ubuntu', sans-serif;
  font-size: 13px;
  color: black;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 20px;
  margin-left: 8px;
`;

const PokemonTypeArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PokemonType = styled.div`
  width: 30%;
  height: 15px;
  border-radius: 4px;
  background-color: whitesmoke;
  border: 1px solid #222831;
  font-family: 'Ubuntu', sans-serif;
  font-size: 11px;
  font-weight: 200;
  color: black;
  letter-spacing: 3px;
  text-align: center;
  display: inline-flex;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
`;

export const PokemonBadge: React.FC<Pokemon> = ({
  row,
  col,
  id = 1,
  ...props
}) => {
  const [Pokemon, setPokemon] = useState<PokemonData>();
  useEffect(() => {
    axios
      .get<PokemonData>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  });
  useEffect(() => {
    axios
      .get<PokemonData>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, [id]);

  return (
    <Component row={row} col={col}>
      <PokemonName>{Pokemon?.name}</PokemonName>
      <PokemonTypeArea>
        {Pokemon?.types.map((e) => (
          <PokemonType
            style={{ backgroundColor: e.type.name === 'grass' ? 'green' : '' }}
          >
            {e.type.name}
          </PokemonType>
        ))}
      </PokemonTypeArea>
    </Component>
  );
};

export default PokemonBadge;
