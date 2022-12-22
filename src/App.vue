<script>
import Header from './components/HeaderApp.vue'
import Jumbo from './components/Jumbotron.vue'
export default {
  components: {
    Header,
    Jumbo,
  }
}
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <Jumbo />
  </main>
</template>

<style lang="scss">
@use './style/myStyle.scss';

header {
  // position: fixed;
  // top: 0;
  // width: 100%;
  // z-index: 100;
  // background-color: #fff;
}

main {
  margin-top: 145px;
}
</style>
