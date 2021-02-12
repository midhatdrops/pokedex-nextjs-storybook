import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Sidebar, sidebarProps } from '../sidebar/sidebarStories';

export default {
  title: 'Design System/Components/Sidebar',
  component: Sidebar,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [0, 1],
      },
    },
  },
} as Meta;

const Template: Story<sidebarProps> = (args) => <Sidebar {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  variant: 0,
};

export const Light = Template.bind({});
Light.args = {
  variant: 1,
};
