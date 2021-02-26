import React, { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import Reset from 'styled-reset';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const Global = createGlobalStyle`
  ${Reset}
`;

export default function Home() {
  const [id, setId] = useState(0);
  const [state, setState] = useState('LOADING');
  console.log(state);
  useEffect(() => {
    setTimeout(() => {
      setState('LOADED');
    }, 2000);
  });

  function renderRow(rowNumber: number, pokemonIndex: number) {
    let mapping = [];
    let id = pokemonIndex;
    for (let x = 1; x <= 4; x++) {
      id++;
      mapping.push(<PokemonBadge row={rowNumber} col={x} id={id} key={id} />);
    }
    return mapping;
  }

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
              <ItemTree variant={0} onClick={() => setId(id + 12)}>
                <FontAwesomeIcon icon="arrow-right" size="6x" />
                Avançar
              </ItemTree>
              <ItemTree
                variant={0}
                onClick={() => (id === 0 ? setId(0) : setId(id - 12))}
              >
                <i className="fas fa-arrow-right"></i>
                Voltar
              </ItemTree>
            </MenuTree>
          </Sidebar>
          {state === 'LOADING' && ''}
          {state === 'LOADED' && (
            <>
              <PokemonGrid>
                {renderRow(1, id).map((e) => e)}
                {renderRow(2, id + 4).map((e) => e)}
                {renderRow(3, id + 8).map((e) => e)}
              </PokemonGrid>
            </>
          )}
        </App>
      </ThemeProvider>
    </>
  );
}
