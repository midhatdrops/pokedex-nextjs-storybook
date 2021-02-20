import axios from 'axios';

interface PokemonData {
  name: string;
}

async function GetPokemon(id = 1) {
  const PokemonData: PokemonData = await axios
    .get('https://pokeapi.co/api/v2/pokemon/1')
    .then((res) => res.data.name);
  return PokemonData;
}

export default GetPokemon;
