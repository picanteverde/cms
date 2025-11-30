import { ComponentType, ReactNode } from 'react';

export type CMSValue =
  | string
  | number
  | boolean
  | null
  | CMSComponentConfig
  | CMSValue[];

export interface CMSComponentConfig {
  type: string;
  [key: string]: CMSValue;
}

export interface CMSTemplate {
  name: string;
  content: CMSComponentConfig | CMSComponentConfig[];
}

export type ComponentProps = {
  [key: string]: any;
  children?: ReactNode;
};

export type CMSComponent = ComponentType<ComponentProps>;

export type ComponentRegistry = {
  [key: string]: CMSComponent;
};

export type TemplateRegistry = {
  [key: string]: CMSTemplate;
};

export interface CMSContentProps {
  content: CMSComponentConfig | CMSComponentConfig[];
  components: ComponentRegistry;
  templates?: TemplateRegistry;
}

export interface RenderContext {
  components: ComponentRegistry;
  templates: TemplateRegistry;
}
