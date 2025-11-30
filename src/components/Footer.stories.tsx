import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    background: {
      control: 'text',
      description: 'Tailwind CSS background classes',
    },
    mail: {
      control: 'text',
      description: 'Contact email',
    },
    text: {
      control: 'text',
      description: 'Footer text',
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mail: 'contact@example.com',
    text: 'All rights reserved © 2024',
    background: 'bg-gray-100',
  },
};

export const Dark: Story = {
  args: {
    mail: 'hello@company.com',
    text: '© 2024 Company Name. All rights reserved.',
    background: 'bg-gray-900 text-white',
  },
};

export const Gradient: Story = {
  args: {
    mail: 'support@platform.io',
    text: 'Made with ❤️ by our team',
    background: 'bg-gradient-radial from-blue-50 via-blue-50 to-blue-100/50',
  },
};

export const Minimal: Story = {
  args: {
    text: '© 2024',
    background: 'bg-white border-t',
  },
};
