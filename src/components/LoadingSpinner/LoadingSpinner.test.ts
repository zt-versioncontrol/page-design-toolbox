import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner.vue'

describe('Default component', () => {
  it('should be rendered', () => {
    const wrapper = mount(LoadingSpinner, {
      attachTo: document.body
    })

    expect(wrapper.isVisible()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = mount(LoadingSpinner, {})

    expect(wrapper.element).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })
})
