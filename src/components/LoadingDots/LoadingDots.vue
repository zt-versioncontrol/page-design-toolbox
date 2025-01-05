<script setup lang="ts">
import { MAIN_TEXT } from '@/standards/Colors'
import { LOADING_ANIMATION_CYCLE } from '@/standards/Time'
import { INTEGRATED_ICON } from '@/standards/Dimensions'

export interface Props {
  /**
   * Dots size. May be and CSS size value
   */
  size?: string
  /**
   * Dots color. Maybe any CSS color
   */
  color: string
}

// TODO: use standard dimensions

const props = withDefaults(defineProps<Props>(), {
  size: INTEGRATED_ICON,
  color: MAIN_TEXT
})
</script>

<template>
  <div class="dots-container">
    <div class="loading-dot dot-first" data-test="first-dot"></div>
    <div class="loading-dot dot-second" data-test="second-dot"></div>
    <div class="loading-dot dot-third" data-test="third-dot"></div>
  </div>
</template>

<style scoped>
@keyframes flashing {
  0% {
    opacity: 0.5;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.5;
    transform: scale(0.8);
  }
}

.dots-container {
  display: flex;
  gap: 0.5%;
}

.loading-dot {
  height: v-bind(size);
  width: v-bind(size);
  border-radius: 200%;
  background-color: v-bind(color);
}

.dot-first {
  animation-name: flashing;
  animation-duration: v-bind('LOADING_ANIMATION_CYCLE + "s"');
  animation-iteration-count: infinite;
  animation-delay: 0s;
}

.dot-second {
  animation-name: flashing;
  animation-duration: v-bind('LOADING_ANIMATION_CYCLE + "s"');
  animation-iteration-count: infinite;
  /* To synchronize with first and third dots. it should start animation midway between them */
  animation-delay: v-bind('LOADING_ANIMATION_CYCLE / 4 + "s"');
}

.dot-third {
  animation-name: flashing;
  animation-duration: v-bind('LOADING_ANIMATION_CYCLE + "s"');
  animation-iteration-count: infinite;
  /* To synchronize with first dot, third dot should start animation when first dot is halfway through */
  animation-delay: v-bind('LOADING_ANIMATION_CYCLE / 2 + "s"');
}
</style>
