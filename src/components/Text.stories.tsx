import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content',
    },
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      description: 'HTML element type',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      description: 'Text size',
    },
    weight: {
      control: 'select',
      options: ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
      description: 'Font weight',
    },
    color: {
      control: 'text',
      description: 'Tailwind text color class',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paragraph: Story = {
  args: {
    text: 'This is a paragraph of text with base size and normal weight.',
    level: 'p',
    size: 'base',
    weight: 'normal',
    color: 'text-gray-900',
  },
};

export const Heading: Story = {
  args: {
    text: 'Large Heading',
    level: 'h1',
    size: '4xl',
    weight: 'bold',
    color: 'text-gray-900',
  },
};

export const Small: Story = {
  args: {
    text: 'Small text for footnotes or captions',
    level: 'span',
    size: 'sm',
    weight: 'light',
    color: 'text-gray-600',
  },
};

export const Bold: Story = {
  args: {
    text: 'Bold and prominent text',
    level: 'p',
    size: 'xl',
    weight: 'black',
    color: 'text-gray-900',
  },
};

export const Colored: Story = {
  args: {
    text: 'Colorful text for emphasis',
    level: 'p',
    size: 'lg',
    weight: 'semibold',
    color: 'text-blue-600',
  },
};
