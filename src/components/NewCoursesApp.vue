<script>
import { store } from '../store.js';
import Card from './CourseCard.vue';
export default {
    components: {
        Card,
    },
    data() {
        return {
            // importato per accedere a 'courses'
            store,
        }
    }
}
</script>

<template>
    <section>
        <h2>New Courses</h2>
        <div id="card-container">
            <Card v-for="(cardInfo, index) in store.courses" :key="index" :course="cardInfo" />
        </div>
        <a>LOAD MORE</a>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

section {
    background-color: $black-haze;
    padding: 85px 0 95px;

    h2 {
        text-align: center;
        font-size: 3rem;
    }

    #card-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        margin: 60px 0;
    }

    a {
        width: 140px;
        height: 50px;
        border-radius: 50px;
        color: #fff;
        text-align: center;
        background-color: $buttecup;
        cursor: pointer;
        margin: 0 auto;
        display: block;
        outline: none;
        line-height: 50px;
    }
}
</style>