import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Button text',
    },
    href: {
      control: 'text',
      description: 'Link URL (makes button a link)',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    text: 'Outline Button',
    variant: 'outline',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    text: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    text: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
};

export const AsLink: Story = {
  args: {
    text: 'Link Button',
    href: '#',
    variant: 'primary',
    size: 'md',
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Button with Icon',
    variant: 'primary',
    size: 'md',
  },
  render: (args) => <Button {...args} icon={<span>🚀</span>} />,
};
