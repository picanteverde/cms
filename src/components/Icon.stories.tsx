import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Icon/emoji content',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Icon size',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    icon: '⚙️',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    icon: '🚀',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    icon: '💡',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    icon: '🎯',
    size: 'xl',
  },
};

export const TwoXL: Story = {
  args: {
    icon: '⭐',
    size: '2xl',
  },
};

export const Collection: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Icon icon="⚙️" size="lg" />
      <Icon icon="🚀" size="lg" />
      <Icon icon="💡" size="lg" />
      <Icon icon="🎯" size="lg" />
      <Icon icon="⭐" size="lg" />
      <Icon icon="❤️" size="lg" />
      <Icon icon="🔥" size="lg" />
      <Icon icon="✨" size="lg" />
    </div>
  ),
};
