import type { Meta, StoryObj } from '@storybook/vue3'
import LoadingDots from '@/components/LoadingDots/LoadingDots.vue'
import { type Documentation } from '@/../.storybook/documents/DocUtilities'
import * as componentTags from '@/../.storybook/documents/ComponentTags'
import * as componentBadges from '@/../.storybook/documents/ComponentBadges'

const meta: Meta<typeof LoadingDots> = {
  title: 'Interactivity/Loadingdots',
  component: LoadingDots,
  excludeStories: ['documentation']
}

export default meta

type Story = StoryObj<typeof LoadingDots>

export const documentation: Documentation = {
  title: 'Loading Dots',
  summary:
    'Loading dots is used to indicate pending operations. Mainly used while waiting for incoming text',
  tags: [componentTags.ICON],
  badges: [componentBadges.RELEASED]
  // TODO: add testing guide
}

export const Default: Story = {
  args: {}
}

export const Small: Story = {
  args: {
    size: '0.2em'
  }
}

export const Large: Story = {
  args: {
    size: '5em'
  }
}

export const GreenDots: Story = {
  args: {
    color: 'green'
  }
}

export const RedDots: Story = {
  args: {
    color: 'red'
  }
}
