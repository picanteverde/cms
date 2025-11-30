import { CMSContent } from './components/CMSContent';
import { defaultComponentRegistry } from './components/registry';
import { defaultTemplateRegistry } from './templates';
import { CMSComponentConfig } from './types';

const demoContent1: CMSComponentConfig[] = [
  {
    type: 'Hero',
    title: 'Big Opening',
    background: 'bg-gradient-radial from-blue-50 via-blue-50 to-blue-100/50',
    padding: 'lg',
    subtitle: 'Come join us in the most fantastic opening this season',
    call_to_action: 'Join Us'
  },
  {
    type: 'Footer',
    background: 'bg-gradient-radial from-blue-50 via-blue-50 to-blue-100/50',
    mail: 'picante@picanteverde.com',
    text: 'all rights reserved'
  }
];

const demoContent2: CMSComponentConfig[] = [
  {
    type: 'Hero',
    title: {
      type: 'Text',
      text: 'Big Opening',
      level: 'h1',
      size: '4xl',
      weight: 'black',
    },
    background: 'bg-gradient-radial from-blue-50 via-blue-50 to-blue-100/50',
    padding: 'lg',
    subtitle: 'Come join us in the most fantastic opening this season',
    call_to_action: 'Join Us'
  }
];

const demoContent3: CMSComponentConfig[] = [
  {
    type: 'Container',
    maxWidth: 'xl',
    content: [
      {
        type: 'Text',
        size: 'xl',
        text: 'This is some content'
      },
      {
        type: 'Image',
        image: 'https://via.placeholder.com/400x300',
        className: 'mt-4 rounded-lg'
      }
    ]
  }
];

const demoContent4: CMSComponentConfig[] = [
  {
    type: 'Container',
    maxWidth: '6xl',
    className: 'py-12',
    content: [
      {
        type: 'Title',
        level: 'h2',
        size: '3xl',
        text: 'Our Features',
        className: 'text-center mb-12'
      },
      {
        type: 'Container',
        className: 'grid grid-cols-1 md:grid-cols-3 gap-6',
        content: [
          {
            type: 'featureCard',
            icon: '⚙️',
            title: 'Customizable Elements',
            description: 'Tailor the look and feel of your story to match your vision.'
          },
          {
            type: 'featureCard',
            icon: '🚀',
            title: 'Fast Performance',
            description: 'Built with modern technology for blazing fast load times.'
          },
          {
            type: 'featureCard',
            icon: '💡',
            title: 'Easy to Use',
            description: 'Simple JSON configuration makes content management a breeze.'
          }
        ]
      }
    ]
  }
];

const demoContent5: CMSComponentConfig[] = [
  {
    type: 'hero',
    title: 'Bring your stories to life with AI',
    description: 'Create stunning animated videos from simple prompts with our advanced AI technology. Watch your imagination come alive — type, create, and share.',
    cta: {
      type: 'Button',
      text: 'Create your free Video',
      href: '/stories/new',
      icon: {
        type: 'Icon',
        icon: '▶️'
      }
    }
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="space-y-12">
        <section>
          <div className="bg-gray-800 text-white py-4 px-6 mb-4">
            <h2 className="text-2xl font-bold">Demo 1: Simple Components</h2>
            <p className="text-gray-300">Hero and Footer with basic props</p>
          </div>
          <CMSContent
            content={demoContent1}
            components={defaultComponentRegistry}
            templates={defaultTemplateRegistry}
          />
        </section>

        <section>
          <div className="bg-gray-800 text-white py-4 px-6 mb-4">
            <h2 className="text-2xl font-bold">Demo 2: Nested Components</h2>
            <p className="text-gray-300">Title as a nested Text component</p>
          </div>
          <CMSContent
            content={demoContent2}
            components={defaultComponentRegistry}
            templates={defaultTemplateRegistry}
          />
        </section>

        <section>
          <div className="bg-gray-800 text-white py-4 px-6 mb-4">
            <h2 className="text-2xl font-bold">Demo 3: Content Property</h2>
            <p className="text-gray-300">Container with content array</p>
          </div>
          <CMSContent
            content={demoContent3}
            components={defaultComponentRegistry}
            templates={defaultTemplateRegistry}
          />
        </section>

        <section>
          <div className="bg-gray-800 text-white py-4 px-6 mb-4">
            <h2 className="text-2xl font-bold">Demo 4: Templates</h2>
            <p className="text-gray-300">Using featureCard template</p>
          </div>
          <CMSContent
            content={demoContent4}
            components={defaultComponentRegistry}
            templates={defaultTemplateRegistry}
          />
        </section>

        <section>
          <div className="bg-gray-800 text-white py-4 px-6 mb-4">
            <h2 className="text-2xl font-bold">Demo 5: Hero Template with Button</h2>
            <p className="text-gray-300">Using hero template with nested Button component</p>
          </div>
          <CMSContent
            content={demoContent5}
            components={defaultComponentRegistry}
            templates={defaultTemplateRegistry}
          />
        </section>

        <footer className="bg-gray-800 text-white py-8 text-center mt-12">
          <p>CMS Demo - React + Tailwind Component Library</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
