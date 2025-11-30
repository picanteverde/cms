import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Title text',
    },
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Heading level',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      description: 'Title size',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    text: 'Heading 1',
    level: 'h1',
    size: '4xl',
  },
};

export const H2: Story = {
  args: {
    text: 'Heading 2',
    level: 'h2',
    size: '3xl',
  },
};

export const H3: Story = {
  args: {
    text: 'Heading 3',
    level: 'h3',
    size: '2xl',
  },
};

export const H4: Story = {
  args: {
    text: 'Heading 4',
    level: 'h4',
    size: 'xl',
  },
};

export const WithMargin: Story = {
  args: {
    text: 'Title with Bottom Margin',
    level: 'h2',
    size: '3xl',
    className: 'mb-6',
  },
};

export const Colored: Story = {
  args: {
    text: 'Colored Title',
    level: 'h2',
    size: '3xl',
    className: 'text-blue-600',
  },
};

export const Underlined: Story = {
  args: {
    text: 'Underlined Title',
    level: 'h2',
    size: '2xl',
    className: 'border-b-4 border-blue-500 pb-2',
  },
};
