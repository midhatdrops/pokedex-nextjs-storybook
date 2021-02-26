import { GetServerSideProps } from 'next';

const PokemonPage: React.FC = (props) => {
  return <h1>Hello World</h1>;
};

type Data = {};

export default PokemonPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://.../data');
  const data: Data = await res.json();

  return {
    props: {
      data,
    },
  };
};
