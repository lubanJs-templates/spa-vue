<template>
  <div>
    {{ username }}
    <transition name="fade-transform">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'page1Page'
}
</script>
