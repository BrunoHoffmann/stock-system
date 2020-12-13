<template>
  <div>
    <HeaderComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'Dash',
  components: {
    FooterComponent,
    HeaderComponent,
  },
};
</script>

<style lang="scss" src="./dash.scss" scoped />
