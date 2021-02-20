import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { PokemonBadge, Pokemon } from './pokemonBadgeStorie';

export default {
  title: 'Design System/Components/Pokemon Badge',
  component: PokemonBadge,
  argsType: {
    area: {
      control: {
        type: 'select',
        options: ['Pokemon1', 'Pokemon2', 'Pokemon3'],
      },
    },
  },
} as Meta;

const Template: Story<Pokemon> = (args) => <PokemonBadge {...args} />;

export const PokemonStorie = Template.bind({});
PokemonStorie.args = {
  area: 'Pokemon1',
};
