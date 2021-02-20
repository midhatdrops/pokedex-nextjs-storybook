import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ItemTree, IProps } from './itemTreeStories';

export default {
  title: 'Design System/Components/Item Tree',
  component: ItemTree,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [0, 1],
      },
    },
  },
} as Meta;

const Template: Story<IProps> = (args) => <ItemTree {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  variant: 0,
};

export const Light = Template.bind({});
Light.args = {
  variant: 1,
};
