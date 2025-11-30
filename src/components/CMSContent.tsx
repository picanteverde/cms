import { CMSContentProps } from '../types';
import { renderContent } from '../lib/renderer';

export function CMSContent({ content, components, templates = {} }: CMSContentProps) {
  return <>{renderContent(content, { components, templates })}</>;
}
