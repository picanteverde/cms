import { CMSComponentConfig, CMSTemplate, CMSValue } from '../types';

function isPlaceholder(value: unknown): value is string {
  return typeof value === 'string' && value.startsWith('$');
}

function substitutePlaceholders(
  value: CMSValue,
  props: Record<string, CMSValue>
): CMSValue {
  if (isPlaceholder(value)) {
    const key = value.slice(1);
    return props[key] ?? value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => substitutePlaceholders(item, props));
  }

  if (typeof value === 'object' && value !== null) {
    const result: Record<string, CMSValue> = {};
    for (const [key, val] of Object.entries(value)) {
      result[key] = substitutePlaceholders(val, props);
    }
    return result as CMSComponentConfig;
  }

  return value;
}

export function applyTemplate(
  template: CMSTemplate,
  props: Record<string, CMSValue>
): CMSComponentConfig | CMSComponentConfig[] {
  return substitutePlaceholders(template.content, props) as
    | CMSComponentConfig
    | CMSComponentConfig[];
}

export function isTemplateType(type: string): boolean {
  return type.length > 0 && type[0] === type[0].toLowerCase();
}
