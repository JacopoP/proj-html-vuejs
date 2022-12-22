<script>
import Header from './components/HeaderApp.vue'
export default {
  components: {
    Header,
  }
}
</script>

<template>
  <header>
    <Header />
  </header>
  <main>

  </main>
</template>

<style lang="scss">
@use './style/myStyle.scss';

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
</style>
