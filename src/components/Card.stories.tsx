import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>This is a basic card with some content inside.</p>,
  },
};

export const WithIconAndTitle: Story = {
  args: {
    icon: <span className="text-4xl">⚙️</span>,
    title: <h3 className="text-xl font-bold">Settings</h3>,
    description: <p className="text-gray-600">Configure your application settings</p>,
  },
};

export const Centered: Story = {
  args: {
    className: 'text-center',
    icon: <span className="text-4xl">🎯</span>,
    title: <h3 className="text-xl font-bold">Centered Card</h3>,
    description: <p className="text-gray-600">All content is centered</p>,
  },
};

export const Feature: Story = {
  args: {
    className: 'text-center hover:shadow-lg transition-shadow',
    icon: <span className="text-5xl">💡</span>,
    title: <h3 className="text-2xl font-bold mb-2">Innovation</h3>,
    description: (
      <p className="text-gray-600">
        Bring your ideas to life with cutting-edge technology and creative solutions.
      </p>
    ),
  },
};
