<template>
  <svg class="icon" aria-hidden="true" @click="handleClick">
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
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
