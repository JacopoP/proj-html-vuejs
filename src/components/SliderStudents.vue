<script>
import { store } from '../store.js'
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
        changeActive: function (i) {
            store.reviewActive = i;
        },
        nextActive: function () {
            store.reviewActive++;
            if (store.reviewActive >= store.studentsReviews.length) {
                store.reviewActive = 0;
            }
        },
        beforeActive: function () {
            store.reviewActive--;
            if (store.reviewActive < 0) {
                store.reviewActive = store.studentsReviews.length - 1;
            }
        },
    }
}
</script>

<template>
    <div id="image-slider">
        <font-awesome-icon @click="this.beforeActive()" class="arrow" icon="fa-solid fa-arrow-left" />
        <div id="imgs-container">
            <img v-for="(student, index) in store.studentsReviews" :class="{ active: index == store.reviewActive }"
                :key="index" @click="changeActive(index)" :src="getImagePath('../assets/images/' + student.studentImg)"
                alt="">
        </div>
        <font-awesome-icon @click="this.nextActive()" class="arrow" icon="fa-solid fa-arrow-right" />
    </div>
    <h3>{{ store.studentsReviews[store.reviewActive].course }}</h3>
    <div id="vote">
        <font-awesome-icon v-for="index in store.studentsReviews[store.reviewActive].vote" icon="fa-solid fa-star" />
        <font-awesome-icon v-for="index in (5 - store.studentsReviews[store.reviewActive].vote)"
            icon="fa-regular fa-star" />
    </div>
    <p>{{ store.studentsReviews[store.reviewActive].text }}</p>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

#image-slider {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .arrow {
        cursor: pointer;
        font-size: 1.5rem;
    }

    #imgs-container {
        width: 275px;
        gap: 12px;

        img {
            border-radius: 50%;
            width: 75px;
            height: 75px;
            vertical-align: middle;
            cursor: pointer;

            &.active {
                width: 100px;
                height: 100px;
                cursor: auto;
            }
        }
    }
}

h3 {
    font-size: 1.5rem;
    margin: 20px 0 5px;
}

#vote {
    color: $buttecup;
    margin-bottom: 40px;
    font-size: 1.1rem;
}

p {
    color: $cape-cod;
    line-height: 30px;
    font-size: 1.3rem;
}
</style>