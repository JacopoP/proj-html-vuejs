<script>
import Header from './components/HeaderApp.vue'
import Jumbo from './components/Jumbotron.vue'
import Founder from './components/FounderApp.vue'
import NewCourses from './components/NewCoursesApp.vue'
import BookApp from './components/BookApp.vue'
import WhyCourse from './components/WhyCoursesApp.vue'
export default {
  components: {
    Header,
    Jumbo,
    Founder,
    NewCourses,
    BookApp,
    WhyCourse,
  }
}
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <Jumbo />
    <Founder />
    <NewCourses />
    <BookApp />
    <WhyCourse />
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
