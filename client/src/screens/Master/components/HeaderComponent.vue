<template>
  <div>
    <MenuComponent />
  </div>
</template>

<script>
import MenuComponent from './MenuComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    MenuComponent,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
