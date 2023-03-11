<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#${props.iconClass}`"></use>
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
