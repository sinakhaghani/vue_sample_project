<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from './components/layouts/Header.vue';

export default {
  name: 'App',
  components : {
    // eslint-disable-next-line vue/no-unused-components
    Header
  }
}
</script>

<style>

</style>
