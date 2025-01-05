exports.storiesTemplateGenerator = (componentName) => {
  return (
`import type { Meta, StoryObj } from '@storybook/vue3'
import ${componentName} from '@/components/${componentName}/${componentName}.vue'
import { type Documentation, computeComponentName, computeComponentPath } from '@/../.storybook/documents/DocUtilities'
import * as componentTags from '@/../.storybook/documents/ComponentTags'
import * as componentBadges from '@/../.storybook/documents/ComponentBadges'


const meta: Meta<typeof ${componentName}> = {
  // TODO: define components' storybook path using title attribute
  title: '',
  component: ${componentName},
  excludeStories: ['documentation']
}

export default meta

type Story = StoryObj<typeof ${componentName}>

// TODO: fill in the documentation
// TODO: add component tags
// TODO: add component badges
export const documentation: Documentation = {
  badges: [componentBadges.IN_PROGRESS]
}

// TODO: add all necessary stories
export const Story1: Story = {
  args: {
  }
}
`)
}