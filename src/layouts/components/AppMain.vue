<template>
  <!-- <router-view></router-view> -->
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AppMain",
  computed: {},
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
