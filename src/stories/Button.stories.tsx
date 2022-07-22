import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { control: false },
    type: { control: false },
    outlined: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large', 'full'],
      },

      defaultValue: 'medium',
    },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);
Default.args = {
  children: 'Click me!',
};

export const Outlined: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);
Outlined.args = {
  ...Default.args,
  outlined: true,
};

export const Disabled: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);
Disabled.args = {
  ...Default.args,
  disabled: true,
};
