import React from 'react';

let id = 0;
const PokemonPage: React.FC = (props) => {
  return <h1>Hello World</h1>;
};

export default PokemonPage;

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
