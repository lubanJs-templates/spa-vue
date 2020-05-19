<template>
  <div>
    <Demo />
    this is page1-1
  </div>
</template>

<script>
export default {
  name: 'page1-1Page',
  components: {
    Demo: () => import('./sections/Demo')
  }
}
</script>
