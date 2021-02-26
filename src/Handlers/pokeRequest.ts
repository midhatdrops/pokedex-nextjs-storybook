import axios from 'axios';

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
export interface PokemonData {
  name: string;
  types: Type[];
}

export async function GetPokemon(id = 1) {
  const PokemonData = await axios
    .get<PokemonData>('https://pokeapi.co/api/v2/pokemon/1')
    .then((res) => res.data);
  return PokemonData;
}
