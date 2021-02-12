import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputStyled } from './inputStories';

export default {
  title: 'Design System/Components/Styled Input',
  component: Input,
} as Meta;

const Template: Story<InputStyled> = (args) => <Input {...args} />;

export const Component = Template.bind({});
Component.args = {
  placeholder: 'Hello World',
};
