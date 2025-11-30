import { Fragment, ReactNode } from 'react';
import {
  CMSComponentConfig,
  CMSValue,
  RenderContext,
} from '../types';
import { applyTemplate, isTemplateType } from './templates';

function renderValue(value: CMSValue, context: RenderContext): any {
  if (Array.isArray(value)) {
    return value.map((item) =>
      renderValue(item, context)
    );
  }

  if (typeof value === 'object' && value !== null && 'type' in value) {
    return renderComponent(value as CMSComponentConfig, context);
  }

  return value;
}

function renderComponent(
  config: CMSComponentConfig,
  context: RenderContext
): ReactNode {
  const { type, ...rawProps } = config;

  if (isTemplateType(type)) {
    const template = context.templates[type];
    if (!template) {
      console.error(`Template not found: ${type}`);
      return null;
    }

    const expandedContent = applyTemplate(template, rawProps as Record<string, CMSValue>);

    if (Array.isArray(expandedContent)) {
      return (
        <Fragment>
          {expandedContent.map((item, index) => (
            <Fragment key={index}>
              {renderComponent(item, context)}
            </Fragment>
          ))}
        </Fragment>
      );
    }

    return renderComponent(expandedContent, context);
  }

  const Component = context.components[type];
  if (!Component) {
    console.error(`Component not found: ${type}`);
    return null;
  }

  const props: Record<string, any> = {};

  for (const [key, value] of Object.entries(rawProps)) {
    if (key === 'content') {
      props.children = renderValue(value, context);
    } else {
      props[key] = renderValue(value, context);
    }
  }

  return <Component {...props} />;
}

export function renderContent(
  content: CMSComponentConfig | CMSComponentConfig[],
  context: RenderContext
): ReactNode {
  if (Array.isArray(content)) {
    return (
      <Fragment>
        {content.map((item, index) => (
          <Fragment key={index}>
            {renderComponent(item, context)}
          </Fragment>
        ))}
      </Fragment>
    );
  }

  return renderComponent(content, context);
}
