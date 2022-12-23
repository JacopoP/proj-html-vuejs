<script>
import Cta from './LimitedSale.vue';
export default {
    components: {
        Cta,
    },
    data() {
        return {
            jumbo: 'slide-1.jpg'
        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
    }
}
</script>

<template>
    <section id="container-jumbo"
        :style="'background-image: url(' + getImagePath('../assets/images/' + this.jumbo) + ')'">
        <!-- jumbotron effettivo -->
        <div id="text-container">
            <h1>
                Start your Human <span>Revolution</span> today
            </h1>
            <p>
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I
                enjoy with my whole heart.
            </p>
        </div>
        <!-- cta ad iscriversi -->
        <Cta />
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

#container-jumbo {
    height: 100vh;
    min-height: 700px;
    max-height: 900px;
    background-size: cover;
    background-position: center;
    position: relative;

    #text-container {
        width: 600px;
        position: absolute;
        top: 220px;
        left: calc(50% - 50px);

        h1 {
            font-size: 4.5rem;
            line-height: 67px;
            margin-bottom: 30px;

            span {
                color: $buttecup;
            }
        }

        p {
            color: $cape-cod;
            font-size: 1.25rem;
            width: 560px;
            line-height: 30px;
        }
    }
}
</style>