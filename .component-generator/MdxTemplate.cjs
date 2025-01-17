exports.mdxTemplateGenerator = (componentName) => {
  return(
`import { Meta, ArgTypes } from '@storybook/blocks'
import ${componentName} from '@/components/${componentName}/${componentName}.vue'
import * as Stories from './${componentName}.stories.ts'
import {
  ComponentSummary,
  CustomTypes,
  ComponentDependency,
  TestingGuide,
  Examples,
  ExampleGroup
} from '/.storybook/documents/DocBlocks'

<Meta title="${componentName} Document" of={Stories} component={${componentName}} />

<ComponentSummary of={Stories} />

<ArgTypes of={Stories} />

<CustomTypes of={Stories} />

<ComponentDependency of={Stories} />

<TestingGuide of={Stories} />

<Examples>
  # TODO: define example groups
</Examples>
`)
}