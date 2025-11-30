import type { Meta, StoryObj } from '@storybook/react';
import { CMSContent } from './CMSContent';
import { defaultComponentRegistry } from './registry';
import { defaultTemplateRegistry } from '../templates';

const meta = {
  title: 'CMS/Integration Examples',
  component: CMSContent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CMSContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleComponents: Story = {
  args: {
    content: [
      {
        type: 'Hero',
        title: 'Big Opening',
        background: 'bg-gradient-radial from-blue-50 via-blue-50 to-blue-100/50',
        padding: 'lg',
        subtitle: 'Come join us in the most fantastic opening this season',
        call_to_action: 'Join Us',
      },
      {
        type: 'Footer',
        background: 'bg-gradient-radial from-blue-50 via-blue-50 to-blue-100/50',
        mail: 'contact@example.com',
        text: 'all rights reserved',
      },
    ],
    components: defaultComponentRegistry,
    templates: defaultTemplateRegistry,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic example showing Hero and Footer components instantiated from JSON.',
      },
    },
  },
};

export const NestedComponents: Story = {
  args: {
    content: {
      type: 'Hero',
      title: {
        type: 'Text',
        text: 'Big Opening',
        level: 'h1',
        size: '4xl',
        weight: 'black',
      },
      background: 'bg-gradient-radial from-purple-50 via-purple-50 to-purple-100/50',
      padding: 'lg',
      subtitle: 'Components can be nested anywhere',
      call_to_action: 'Learn More',
    },
    components: defaultComponentRegistry,
    templates: defaultTemplateRegistry,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how any property can be a component instead of a simple value.',
      },
    },
  },
};

export const ContentProperty: Story = {
  args: {
    content: {
      type: 'Container',
      maxWidth: 'xl',
      className: 'py-12',
      content: [
        {
          type: 'Text',
          size: 'xl',
          text: 'This is some content in a container',
          className: 'mb-4',
        },
        {
          type: 'Image',
          image: 'https://via.placeholder.com/600x400',
          className: 'rounded-lg shadow-md',
        },
      ],
    },
    components: defaultComponentRegistry,
    templates: defaultTemplateRegistry,
  },
  parameters: {
    docs: {
      description: {
        story: 'The "content" property is treated as children and can contain multiple components.',
      },
    },
  },
};

export const UsingTemplates: Story = {
  args: {
    content: {
      type: 'Container',
      maxWidth: '6xl',
      className: 'py-12',
      content: [
        {
          type: 'Title',
          text: 'Features',
          level: 'h2',
          size: '3xl',
          className: 'text-center mb-8',
        },
        {
          type: 'Container',
          className: 'grid grid-cols-1 md:grid-cols-3 gap-6',
          content: [
            {
              type: 'featureCard',
              icon: '⚙️',
              title: 'Customizable Elements',
              description: 'Tailor the look and feel to match your vision.',
            },
            {
              type: 'featureCard',
              icon: '🚀',
              title: 'Fast Performance',
              description: 'Built for speed with modern technology.',
            },
            {
              type: 'featureCard',
              icon: '💡',
              title: 'Easy to Use',
              description: 'Simple JSON makes content management easy.',
            },
          ],
        },
      ],
    },
    components: defaultComponentRegistry,
    templates: defaultTemplateRegistry,
  },
  parameters: {
    docs: {
      description: {
        story: 'Templates (lowercase) hide implementation details and provide reusable patterns.',
      },
    },
  },
};

export const ComplexPage: Story = {
  args: {
    content: [
      {
        type: 'hero',
        title: 'Bring your stories to life with AI',
        description:
          'Create stunning animated videos from simple prompts with our advanced AI technology. Watch your imagination come alive — type, create, and share.',
        cta: {
          type: 'Button',
          text: 'Create your free Video',
          href: '/stories/new',
          size: 'lg',
          icon: {
            type: 'Icon',
            icon: '▶️',
          },
        },
      },
      {
        type: 'Container',
        maxWidth: '6xl',
        className: 'py-20',
        content: [
          {
            type: 'Title',
            text: 'Why Choose Us?',
            level: 'h2',
            size: '4xl',
            className: 'text-center mb-16',
          },
          {
            type: 'Container',
            className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8',
            content: [
              {
                type: 'featureCard',
                icon: '🎨',
                title: 'Creative Freedom',
                description: 'Express yourself with unlimited creative possibilities.',
              },
              {
                type: 'featureCard',
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Generate videos in seconds, not hours.',
              },
              {
                type: 'featureCard',
                icon: '🌍',
                title: 'Global Reach',
                description: 'Share your creations with audiences worldwide.',
              },
              {
                type: 'featureCard',
                icon: '🔒',
                title: 'Secure & Private',
                description: 'Your content is protected with enterprise security.',
              },
            ],
          },
        ],
      },
      {
        type: 'Container',
        maxWidth: '4xl',
        className: 'py-16 text-center',
        content: [
          {
            type: 'Title',
            text: 'Ready to get started?',
            level: 'h2',
            size: '3xl',
            className: 'mb-6',
          },
          {
            type: 'Text',
            text: 'Join thousands of creators already using our platform',
            size: 'xl',
            color: 'text-gray-600',
            className: 'mb-8',
          },
          {
            type: 'Button',
            text: 'Start Creating Now',
            variant: 'primary',
            size: 'lg',
          },
        ],
      },
      {
        type: 'Footer',
        mail: 'support@platform.io',
        text: '© 2024 Platform. All rights reserved.',
        background: 'bg-gray-900 text-white',
      },
    ],
    components: defaultComponentRegistry,
    templates: defaultTemplateRegistry,
  },
  parameters: {
    docs: {
      description: {
        story: 'A complete landing page built entirely from JSON configuration.',
      },
    },
  },
};

export const JSONViewer: Story = {
  args: {
    content: {
      type: 'hero',
      title: 'Bring your stories to life',
      description: 'Create stunning content with simple JSON',
      cta: {
        type: 'Button',
        text: 'Get Started',
        icon: {
          type: 'Icon',
          icon: '🚀',
        },
      },
    },
    components: defaultComponentRegistry,
    templates: defaultTemplateRegistry,
  },
  render: (args) => {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">JSON Configuration</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto text-sm">
              {JSON.stringify(args.content, null, 2)}
            </pre>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Rendered Output</h3>
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
              <CMSContent {...args} />
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of JSON configuration and rendered output.',
      },
    },
  },
};
