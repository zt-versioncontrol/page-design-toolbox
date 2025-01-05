exports.testingTemplateGenerator = (componentName) => {
  return (
`import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ${componentName} from '@/components/${componentName}/${componentName}.vue'


describe('Default component', () => {
  it('should be rendered', () => {
    const wrapper = mount(${componentName}, {
      global: {
        // TODO: add required plugins
        plugins: []
      },
      attachTo: document.body
    })

    expect(wrapper.isVisible()).toBe(true)
  })

  // TODO: enable this test case when component is ready
  it.todo('should match snapshot', () => {
    const wrapper = mount(${componentName}, {
      global: {
        // TODO: add required plugins
        plugins: []
      }
    })

    expect(wrapper.element).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })
})

// TODO: add test scenarios as necessary
describe('test scenario', () => {
  // TODO: added test cases as necessary
  // TODO:
  it.todo('should pass this test', () => {
  })
  // TODO:
  it.todo('should pass that test', () => {
  })
})
`)
}