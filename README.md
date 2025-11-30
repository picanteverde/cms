# CMS Content Library

A React + Tailwind CSS library for building dynamic landing pages from JSON configuration. Create rich, component-based content without writing code.

## Features

- **JSON-driven content**: Define your entire page structure in JSON
- **Nested components**: Components can be nested infinitely deep
- **Template system**: Create reusable templates with placeholder substitution
- **TypeScript support**: Full type safety and IntelliSense
- **Tailwind CSS**: Utility-first styling out of the box
- **Extensible**: Easy to add your own components and templates

## Installation

```bash
npm install
```

## Quick Start

```tsx
import { CMSContent, defaultComponentRegistry, defaultTemplateRegistry } from '@picanteverde/cms';

const content = [
  {
    type: 'Hero',
    title: 'Welcome',
    subtitle: 'Build amazing pages with JSON',
    background: 'bg-gradient-radial from-blue-50 via-blue-50 to-blue-100/50',
    padding: 'lg',
    call_to_action: 'Get Started'
  }
];

function App() {
  return (
    <CMSContent
      content={content}
      components={defaultComponentRegistry}
      templates={defaultTemplateRegistry}
    />
  );
}
```

## Core Concepts

### Components

Components are React components registered in the component registry. Component types start with **uppercase** letters:

```json
{
  "type": "Hero",
  "title": "My Title",
  "subtitle": "My Subtitle"
}
```

### Templates

Templates are reusable component configurations with placeholders. Template types start with **lowercase** letters:

```json
{
  "type": "featureCard",
  "icon": "⚙️",
  "title": "Customizable",
  "description": "Tailor to your needs"
}
```

Template definition (featureCard.json):

```json
{
  "name": "featureCard",
  "content": {
    "type": "Card",
    "className": "text-center",
    "icon": {
      "type": "Icon",
      "icon": "$icon",
      "size": "lg"
    },
    "title": {
      "type": "Title",
      "level": "h3",
      "size": "xl",
      "text": "$title"
    },
    "description": {
      "type": "Text",
      "text": "$description",
      "color": "text-gray-600"
    }
  }
}
```

Placeholders (`$icon`, `$title`, `$description`) are replaced with the values you provide.

### Nested Components

Any property can be a component instead of a simple value:

```json
{
  "type": "Hero",
  "title": {
    "type": "Text",
    "text": "Big Opening",
    "level": "h1",
    "size": "4xl",
    "weight": "black"
  }
}
```

### Content Property

The special `content` property renders as children:

```json
{
  "type": "Container",
  "maxWidth": "xl",
  "content": [
    {
      "type": "Text",
      "text": "Paragraph 1"
    },
    {
      "type": "Text",
      "text": "Paragraph 2"
    }
  ]
}
```

## Built-in Components

### Hero

Large banner section with title, subtitle, and call-to-action.

```json
{
  "type": "Hero",
  "title": "Welcome",
  "subtitle": "Subtitle text",
  "background": "bg-blue-500",
  "padding": "lg",
  "call_to_action": "Click Me"
}
```

### Container

Centered container with max-width.

```json
{
  "type": "Container",
  "maxWidth": "xl",
  "content": []
}
```

### Text

Configurable text element.

```json
{
  "type": "Text",
  "text": "Hello World",
  "level": "p",
  "size": "xl",
  "weight": "bold",
  "color": "text-gray-900"
}
```

### Title

Heading element.

```json
{
  "type": "Title",
  "text": "Section Title",
  "level": "h2",
  "size": "3xl"
}
```

### Button

Interactive button or link.

```json
{
  "type": "Button",
  "text": "Click Me",
  "href": "/page",
  "variant": "primary",
  "size": "md"
}
```

### Card

Card container for grouped content.

```json
{
  "type": "Card",
  "className": "text-center",
  "icon": "🎉",
  "title": "Feature",
  "description": "Description"
}
```

### Image

Image element.

```json
{
  "type": "Image",
  "src": "https://example.com/image.jpg",
  "alt": "Description"
}
```

### Icon

Icon or emoji display.

```json
{
  "type": "Icon",
  "icon": "⚙️",
  "size": "lg"
}
```

### Footer

Footer section.

```json
{
  "type": "Footer",
  "mail": "hello@example.com",
  "text": "All rights reserved",
  "background": "bg-gray-100"
}
```

## Creating Custom Components

```tsx
import { ComponentProps } from '@picanteverde/cms';

interface MyComponentProps extends ComponentProps {
  customProp?: string;
}

export function MyComponent({ customProp, children }: MyComponentProps) {
  return (
    <div className="my-component">
      <p>{customProp}</p>
      {children}
    </div>
  );
}
```

Add to registry:

```tsx
const myRegistry = {
  ...defaultComponentRegistry,
  MyComponent
};
```

## Creating Custom Templates

Create a JSON file:

```json
{
  "name": "myTemplate",
  "content": {
    "type": "Container",
    "content": [
      {
        "type": "Title",
        "text": "$title"
      },
      {
        "type": "Text",
        "text": "$body"
      }
    ]
  }
}
```

Load it:

```tsx
import { createTemplateRegistry } from '@picanteverde/cms';
import myTemplate from './templates/myTemplate.json';

const templates = createTemplateRegistry([myTemplate]);
```

## Development

```bash
# Install dependencies
npm install

# Run Storybook (interactive component showcase)
npm run storybook

# Run dev server
npm run dev

# Build library
npm run build:lib

# Build Storybook for deployment
npm run build-storybook

# Type check
npm run typecheck
```

## Storybook

This project includes a comprehensive Storybook showcase with:

- **Interactive component demos** - Modify props in real-time
- **Complete documentation** - Learn how to use each component
- **Live examples** - See JSON configurations rendered live
- **Template showcase** - Explore pre-built templates
- **Integration examples** - Complete landing page examples

Run `npm run storybook` and open http://localhost:6006 to explore!

## License

MIT
