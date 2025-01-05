<script setup lang="ts">
import { LOADING_ANIMATION_CYCLE } from '@/standards/Time'
import { IN_SCRIPT_ICON } from '@/standards/Dimensions'
import { MAIN_TEXT, DISABLED } from '@/standards/Colors'

// TODO: add optional loading message to display below the spinner

export interface Props {
  /**
   * size of spinner, both height and width. May be any valid CSS size value
   */
  size?: string
  /**
   * spinner track color. May be any valid CSS color
   */
  trackColor?: string
  /**
   * spinner color. May be any valid CSS color
   */
  spinnerColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: IN_SCRIPT_ICON,
  trackColor: DISABLED,
  spinnerColor: MAIN_TEXT
})
</script>

<template>
  <div class="spinner"></div>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.spinner {
  /* Font size is used to set border width relative to size using em */
  font-size: v-bind(size);
  border: 0.1em solid v-bind(trackColor);
  border-top: 0.1em solid v-bind(spinnerColor);
  border-radius: 10rem;
  height: v-bind(size);
  width: v-bind(size);
  animation: spin;
  animation-duration: v-bind('LOADING_ANIMATION_CYCLE + "s"');
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
