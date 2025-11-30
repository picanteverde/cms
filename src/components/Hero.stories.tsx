import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    background: {
      control: 'text',
      description: 'Tailwind CSS background classes',
    },
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Padding size',
    },
    title: {
      control: 'text',
      description: 'Hero title',
    },
    subtitle: {
      control: 'text',
      description: 'Hero subtitle',
    },
    call_to_action: {
      control: 'text',
      description: 'Call to action button text',
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Welcome to Our Platform',
    subtitle: 'Build amazing experiences with our powerful CMS',
    call_to_action: 'Get Started',
    background: 'bg-gradient-radial from-blue-50 via-blue-50 to-blue-100/50',
    padding: 'lg',
  },
};

export const Large: Story = {
  args: {
    title: 'Enterprise Solutions',
    subtitle: 'Scale your business with confidence using our enterprise-grade platform',
    call_to_action: 'Schedule a Demo',
    background: 'bg-gradient-radial from-purple-50 via-purple-50 to-purple-100/50',
    padding: 'xl',
  },
};

export const Simple: Story = {
  args: {
    title: 'Simple Hero',
    subtitle: 'Clean and minimal design',
    background: 'bg-white',
    padding: 'md',
  },
};

export const Dark: Story = {
  args: {
    title: 'Dark Theme Hero',
    subtitle: 'Perfect for modern applications',
    call_to_action: 'Learn More',
    background: 'bg-gradient-to-br from-gray-900 to-gray-800',
    padding: 'lg',
  },
};

export const WithoutCTA: Story = {
  args: {
    title: 'Informational Hero',
    subtitle: 'Sometimes you just need to display information',
    background: 'bg-gradient-radial from-green-50 via-green-50 to-green-100/50',
    padding: 'lg',
  },
};
