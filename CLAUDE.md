# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript library for building dynamic landing pages from JSON configuration. The core concept is a JSON-driven CMS system where components are instantiated from configuration objects, supporting infinite nesting and template-based composition.

## Development Commands

```bash
# Type checking (run before committing)
npm run typecheck

# Interactive component development
npm run storybook

# Demo application
npm run dev

# Build publishable library
npm run build:lib

# Build Storybook for deployment
npm run build-storybook
```

## Core Architecture

### Component Registry System

The library uses a **registry pattern** where React components are looked up by string names:

- **ComponentRegistry** (`src/components/registry.ts`): Maps component names to React components
- **TemplateRegistry** (`src/templates/index.ts`): Maps template names to template definitions

Component types MUST start with **uppercase** (e.g., `Hero`, `Container`).
Template types MUST start with **lowercase** (e.g., `hero`, `featureCard`).

This case distinction is critical - it's how the renderer (`src/lib/renderer.tsx`) determines whether to look up a component or expand a template.

### Rendering Pipeline

The rendering flow (all in `src/lib/renderer.tsx`):

1. **renderContent()** - Entry point, handles arrays or single configs
2. **renderComponent()** - Main dispatch logic:
   - Checks if type is lowercase → expand template
   - Checks if type is uppercase → look up component
   - Extracts props and recursively renders nested values
3. **renderValue()** - Recursively processes any value that might contain nested components

Special handling:
- The `content` property is mapped to `children` prop
- Any property value can be a `CMSComponentConfig` (nested component)
- Arrays are recursively processed

### Template System

Templates (`src/lib/templates.ts`) work via placeholder substitution:

1. Template definitions contain `$placeholder` strings (e.g., `$title`, `$icon`)
2. **substitutePlaceholders()** recursively walks the template content
3. Replaces any string starting with `$` with the corresponding prop value
4. Returns expanded component configuration that's then rendered normally

Templates enable composition - a single template type can expand to a complex tree of components.

## Adding New Components

When creating new components:

1. **Define interface** extending `ComponentProps` from `src/types/index.ts`
2. **Component name MUST be PascalCase** (uppercase first letter)
3. **Accept `children` prop** if the component should support content
4. **Add to registry** in `src/components/registry.ts`
5. **Create Storybook story** with file pattern `ComponentName.stories.tsx`
6. **Export from** `src/components/index.ts`

Example structure:
```tsx
interface MyComponentProps extends ComponentProps {
  customProp?: string;
}

export function MyComponent({ customProp, children }: MyComponentProps) {
  return <div className="...">{customProp}{children}</div>;
}
```

## Adding New Templates

Templates are JSON files in `src/templates/`:

1. **Create JSON file** with structure: `{ "name": "templateName", "content": {...} }`
2. **Template name MUST be camelCase** (lowercase first letter)
3. **Use `$variable` syntax** for placeholders
4. **Import in** `src/templates/index.ts`
5. **Add to defaultTemplateRegistry**

## Storybook Development

Each component should have a `.stories.tsx` file with:

- Multiple story variants showing different use cases
- Interactive controls via `argTypes` when needed
- Proper layout parameters (`centered`, `fullscreen`, etc.)
- Documentation in parameters.docs.description

The Storybook serves as both development environment and documentation.

## Type System

Key types in `src/types/index.ts`:

- **CMSValue**: Union type representing any JSON-serializable value or nested component config
- **CMSComponentConfig**: `{ type: string, ...props }` - the fundamental building block
- **RenderContext**: Contains both component and template registries for the renderer

The type system allows infinite nesting because `CMSComponentConfig` values can themselves be `CMSComponentConfig` objects.

## Important Constraints

- **Never import React components directly in JSON** - components must be in the registry
- **Maintain case convention** - uppercase = component, lowercase = template (enforced by `isTemplateType()`)
- **The `content` property is special** - always mapped to `children`, enabling composition
- **Template placeholders** must start with `$` to be recognized
- **All components must accept `ComponentProps`** to ensure `children` is available

## Library vs Demo

- `src/index.ts` - Library exports (what gets published)
- `src/App.tsx` - Demo application (not included in library build)
- `src/main.tsx` - Demo entry point (not included in library build)
- Build configs: `vite.config.ts` (demo) and `vite.config.lib.ts` (library)
