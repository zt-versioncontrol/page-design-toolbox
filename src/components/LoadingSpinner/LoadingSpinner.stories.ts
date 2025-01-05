import type { Meta, StoryObj } from '@storybook/vue3'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner.vue'
import { type Documentation } from '@/../.storybook/documents/DocUtilities'
import * as componentTags from '@/../.storybook/documents/ComponentTags'
import * as componentBadges from '@/../.storybook/documents/ComponentBadges'

const meta: Meta<typeof LoadingSpinner> = {
  title: 'Interactivity/LoadingSpinner',
  component: LoadingSpinner,
  excludeStories: ['documentation']
}

export default meta

type Story = StoryObj<typeof LoadingSpinner>

export const documentation: Documentation = {
  title: 'LoadingSpinner',
  summary:
    'Loading Spinner is used to indicate pending operation. Mainly used while waiting for data from a server',
  tags: [componentTags.ICON],
  badges: [componentBadges.RELEASED]
  // TODO: add testing guide
}

export const DefaultSpinner: Story = {
  args: {}
}

export const StyleVariant1: Story = {
  args: {
    spinnerColor: 'red',
    trackColor: '#ff000055'
  }
}

export const StyleVariant2: Story = {
  args: {
    spinnerColor: 'green',
    trackColor: '#00ffff55',
    size: '4rem'
  }
}

export const StyleVariant3: Story = {
  args: {
    spinnerColor: 'blue',
    trackColor: '#ffffff00',
    size: '5rem'
  }
}
