import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import LoadingDots from '@/components/LoadingDots/LoadingDots.vue'

describe('Default component', () => {
  it('should be rendered', () => {
    const wrapper = mount(LoadingDots, {
      global: {
        plugins: []
      },
      attachTo: document.body
    })

    expect(wrapper.isVisible()).toBe(true)
  })

  it('Match Snapshot', () => {
    const wrapper = mount(LoadingDots, {
      global: {
        plugins: []
      }
    })

    expect(wrapper.element).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })
})
