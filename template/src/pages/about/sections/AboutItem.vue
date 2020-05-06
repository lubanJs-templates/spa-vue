<template>
  <p class="about-item">
    <span class="about-item__name"><slot name="name"></slot></span>
    <span class="about-item__discription"><slot></slot></span>
  </p>
</template>

<script>
export default {
  name: 'AboutItem'
}
</script>

<style scoped>
.about-item {
  display: flex;
  align-items: flex-start;
  margin: 10px 0;
  text-align: left;
}
.about-item__name {
  display: inline-block;
  font-weight: bold;
  margin-right: 5px;
  width: 60px;
}
.about-item__discription {
  flex: 1;
}
</style>
