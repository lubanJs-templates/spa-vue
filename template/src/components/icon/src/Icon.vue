<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconHref"></use>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    iconName: {
      type: String,
      require: true
    }
  },
  computed: {
    iconHref() {
      return `#${this.iconName}`
    }
  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
