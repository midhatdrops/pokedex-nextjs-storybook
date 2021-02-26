import Head from 'next/head';

function IndexPage() {
  return (
    <Head>
      <title>PokeDex NextJS/Storybook</title>
      <meta name="title" content="PokeDex NextJS/Storybook" />
      <meta
        name="description"
        content="App built with NextJS, Storybook , Styled Components and Typescript. This website is a fan version of Pokedex, all credits to Pokemon inc."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@300;400&family=Roboto:wght@100;300;400&family=Ubuntu:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {/* twitter */}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="PokeDex NextJS/Storybook" />
      <meta
        property="twitter:description"
        content="App built with NextJS, Storybook , Styled Components and Typescript. This website is a fan version of Pokedex, all credits to Pokemon inc."
      />

      {/* font-awesome */}
    </Head>
  );
}

export default IndexPage;
