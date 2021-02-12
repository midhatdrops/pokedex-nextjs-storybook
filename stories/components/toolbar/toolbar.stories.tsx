import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Toolbar, Iprops } from '../toolbar/toolbarStories';

export default {
  title: 'Design System/Components/Toolbar',
  component: Toolbar,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [0, 1],
      },
    },
  },
} as Meta;

const Template: Story<Iprops> = (args) => <Toolbar {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  variant: 0,
};

export const Light = Template.bind({});
Light.args = {
  variant: 1,
};
