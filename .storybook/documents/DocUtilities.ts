import { type Meta } from "@storybook/vue3";
import { type DefineComponent } from "vue";


// FIXME: relative path is used instead of absolute path vecause of IDE error
type ComponentTagModule = typeof import('./ComponentTags')
type ComponentTag = ComponentTagModule[keyof ComponentTagModule]

type ComponentBadgeModule = typeof import('./ComponentBadges')
type ComponentBadge = ComponentBadgeModule[keyof ComponentBadgeModule]

export interface Documentation {
  title: string;
  summary: string;
  badges: ComponentBadge[]
  tags: ComponentTag[];
  // type `description` uses TypeScript syntax
  customTypes?: {name: string; description: string}[]
  dependencies?: {
    name: string;
    path: string;
    props?: string[];
    slots?: string[];
    emits?: string[];
    exposed?: string[];
    types?: string[]
  }[]
  testingGuide: {
    // details about how the component template is expected to be rendered when put in HTML document
    graphicalDesignSpecifications?: string[];
    // where the component is intended to be used
    context: string;
    // component features that are relevant for testing inside storybook
    features: string[];
    // Component props that are relevant for testing inside storybook
    parameters: {
      name: string;
      description: string;
    }[];
  }
}

/**
 * Extracts storybook path segment from component storybook meta,
 * @param componentTitle
 * @returns string
 */
export const computeComponentPath = (componentMeta: Meta<DefineComponent<any, any, any, any, any, any, any, any, any, any>>) => {
  const title = componentMeta.title
  return title ? './?path=/docs/' + title.
    trim().
    replace(/\s+/g, " ").
    replace(/\//g, '-').
    replace(/\s/g, '-').
    toLowerCase() + '--docs' : ''
}

/**
 * Extract component name from component storybook meta
 * @param componentMeta 
 * @returns string
 */
export const computeComponentName = (componentMeta: Meta<DefineComponent<any, any, any, any, any, any, any, any, any, any>>) => {
  return componentMeta.component?.__name ? componentMeta.component?.__name : ''
}