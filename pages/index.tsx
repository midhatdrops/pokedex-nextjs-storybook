import React, { useEffect } from 'react';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import Reset from 'styled-reset';
import axios from 'axios';

import Head from '../src/components/header';

//Components
import App from '../src/App';
import { Toolbar } from '../src/components/toolbar';
import Sidebar from '../src/components/sidebar';
import MenuTree from '../src/components/menuTree';
import ItemTree from '../src/components/itemTree';
import Input from '../src/components/input';
import FlexGrow from '../src/components/flexGrow';

import PokemonGrid from '../src/components/pokemonGrid';
import PokemonBadge from '../src/components/pokemonBadge';

// Handlers

import GetPokemon from '../src/Handlers/pokeRequest';

const Global = createGlobalStyle`
  ${Reset}
`;

export default function Home() {
  return (
    <>
      <Head />
      <Global />
      <ThemeProvider theme={theme}>
        <App>
          <Toolbar variant={0}>
            <FlexGrow />
            <Input placeholder="Pesquise seu Pokemon" />
          </Toolbar>
          <Sidebar variant={0}>
            <MenuTree>
              <ItemTree variant={0}>
                <i className="fas fa-arrow-right"></i>
                Avançar
              </ItemTree>
              <ItemTree variant={0}>
                <i className="fas fa-arrow-right"></i>
                Retroceder
              </ItemTree>
            </MenuTree>
          </Sidebar>
          <PokemonGrid>
            <PokemonBadge area="Pokemon1" />
            <PokemonBadge area="Pokemon2" />
            <PokemonBadge area="Pokemon3" />
          </PokemonGrid>
        </App>
      </ThemeProvider>
    </>
  );
}
