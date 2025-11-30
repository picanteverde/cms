import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '6xl', 'full'],
      description: 'Maximum width of the container',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
  <div className="bg-blue-100 border-2 border-blue-500 rounded p-8 text-center">
    <h3 className="text-2xl font-bold mb-2">Container Content</h3>
    <p className="text-gray-700">This content is centered with a max-width constraint</p>
  </div>
);

export const Small: Story = {
  args: {
    maxWidth: 'sm',
    children: <DemoContent />,
  },
};

export const Medium: Story = {
  args: {
    maxWidth: 'md',
    children: <DemoContent />,
  },
};

export const Large: Story = {
  args: {
    maxWidth: 'lg',
    children: <DemoContent />,
  },
};

export const ExtraLarge: Story = {
  args: {
    maxWidth: 'xl',
    children: <DemoContent />,
  },
};

export const TwoXL: Story = {
  args: {
    maxWidth: '2xl',
    children: <DemoContent />,
  },
};

export const FourXL: Story = {
  args: {
    maxWidth: '4xl',
    children: <DemoContent />,
  },
};

export const WithPadding: Story = {
  args: {
    maxWidth: 'xl',
    className: 'py-12',
    children: (
      <div className="space-y-4">
        <div className="bg-green-100 border-2 border-green-500 rounded p-4">Block 1</div>
        <div className="bg-green-100 border-2 border-green-500 rounded p-4">Block 2</div>
        <div className="bg-green-100 border-2 border-green-500 rounded p-4">Block 3</div>
      </div>
    ),
  },
};
