import type { Meta, StoryObj } from '@storybook/react';
import { CMSContent } from '../components/CMSContent';
import { defaultComponentRegistry } from '../components/registry';
import { defaultTemplateRegistry } from './index';

const meta = {
  title: 'Templates/Interactive',
  component: CMSContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CMSContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeatureCard: Story = {
  args: {
    content: {
      type: 'featureCard',
      icon: '⚙️',
      title: 'Customizable Elements',
      description: 'Tailor the look and feel of your story to match your vision.',
    },
    components: defaultComponentRegistry,
    templates: defaultTemplateRegistry,
  },
  render: (args) => (
    <div className="w-80">
      <CMSContent {...args} />
    </div>
  ),
};

export const FeatureCardCollection: Story = {
  args: {
    content: [
      {
        type: 'featureCard',
        icon: '⚙️',
        title: 'Customizable',
        description: 'Tailor everything to match your brand and vision.',
      },
      {
        type: 'featureCard',
        icon: '🚀',
        title: 'Fast',
        description: 'Optimized performance for the best user experience.',
      },
      {
        type: 'featureCard',
        icon: '💡',
        title: 'Easy',
        description: 'Simple JSON configuration, no coding required.',
      },
    ],
    components: defaultComponentRegistry,
    templates: defaultTemplateRegistry,
  },
  render: (args) => (
    <div className="grid grid-cols-3 gap-6 max-w-4xl">
      <CMSContent {...args} />
    </div>
  ),
};

export const HeroTemplate: Story = {
  args: {
    content: {
      type: 'hero',
      title: 'Bring your stories to life with AI',
      description: 'Create stunning animated videos from simple prompts with our advanced AI technology.',
      cta: {
        type: 'Button',
        text: 'Get Started',
        icon: {
          type: 'Icon',
          icon: '▶️',
        },
      },
    },
    components: defaultComponentRegistry,
    templates: defaultTemplateRegistry,
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => <CMSContent {...args} />,
};

export const TemplateComposition: Story = {
  args: {
    content: [
      {
        type: 'hero',
        title: 'Welcome to Our Platform',
        description: 'Build amazing landing pages with JSON configuration',
        cta: {
          type: 'Button',
          text: 'Explore Features',
          variant: 'primary',
          size: 'lg',
        },
      },
      {
        type: 'Container',
        maxWidth: '6xl',
        className: 'py-16',
        content: [
          {
            type: 'Title',
            text: 'Key Features',
            level: 'h2',
            size: '3xl',
            className: 'text-center mb-12',
          },
          {
            type: 'Container',
            className: 'grid grid-cols-1 md:grid-cols-3 gap-6',
            content: [
              {
                type: 'featureCard',
                icon: '🎨',
                title: 'Beautiful Design',
                description: 'Pre-built components with stunning aesthetics.',
              },
              {
                type: 'featureCard',
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Optimized for performance and speed.',
              },
              {
                type: 'featureCard',
                icon: '🔧',
                title: 'Fully Customizable',
                description: 'Every component can be tailored to your needs.',
              },
            ],
          },
        ],
      },
    ],
    components: defaultComponentRegistry,
    templates: defaultTemplateRegistry,
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => <CMSContent {...args} />,
};
