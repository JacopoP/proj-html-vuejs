<script>
import Header from './components/HeaderApp.vue'
import Jumbo from './components/Jumbotron.vue'
import Founder from './components/FounderApp.vue'
import NewCourses from './components/NewCoursesApp.vue'
import BookApp from './components/BookApp.vue'
import WhyCourse from './components/WhyCoursesApp.vue'
import SlideStats from './components/StatsSlideApp.vue'
import StudentsReview from './components/StudentsReviewApp.vue'
export default {
  components: {
    Header,
    Jumbo,
    Founder,
    NewCourses,
    BookApp,
    WhyCourse,
    SlideStats,
    StudentsReview,
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
    <SlideStats />
    <StudentsReview />
  </main>
</template>

<style lang="scss">
@use './style/myStyle.scss';

header {
  margin-top: 35px;
  margin-bottom: 35px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: #fff;
}
</style>
