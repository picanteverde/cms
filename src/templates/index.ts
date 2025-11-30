import { TemplateRegistry, CMSTemplate } from '../types';
import featureCardTemplate from './featureCard.json';
import heroTemplate from './hero.json';

export const defaultTemplateRegistry: TemplateRegistry = {
  [featureCardTemplate.name]: featureCardTemplate as CMSTemplate,
  [heroTemplate.name]: heroTemplate as CMSTemplate,
};

export function createTemplateRegistry(templates: CMSTemplate[]): TemplateRegistry {
  return templates.reduce((registry, template) => {
    registry[template.name] = template;
    return registry;
  }, {} as TemplateRegistry);
}
