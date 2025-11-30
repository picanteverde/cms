import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    width: {
      control: 'text',
      description: 'Image width',
    },
    height: {
      control: 'text',
      description: 'Image height',
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Placeholder image',
  },
};

export const Rounded: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Rounded image',
    className: 'rounded-lg',
  },
};

export const Circle: Story = {
  args: {
    src: 'https://via.placeholder.com/200x200',
    alt: 'Circle image',
    className: 'rounded-full',
    width: 200,
    height: 200,
  },
};

export const WithShadow: Story = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Image with shadow',
    className: 'rounded-lg shadow-lg',
  },
};

export const Thumbnail: Story = {
  args: {
    src: 'https://via.placeholder.com/150x150',
    alt: 'Thumbnail',
    className: 'rounded border-2 border-gray-300',
    width: 150,
    height: 150,
  },
};
