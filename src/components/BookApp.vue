<script>
export default {
    data() {
        return {
            bgImg: 'slider_1-1917x607-1914x606.jpg',
            amazonImg: 'amazon.png',
            bookImg: 'book.png',
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
    <section :style="`background-image: url(${getImagePath('../assets/images/' + this.bgImg)})`">
        <div id="text-container">
            <h2>
                Get My Exclusive Investing Book just for &dollar;19.50
            </h2>
            <p>Vestibulum imentum eu urna vel cursus. Aenean vehicula quam quam, vitae pellentesque urna elementum
                cursus.</p>
            <a href="#"><img :src="getImagePath('../assets/images/' + this.amazonImg)" alt=""></a>
        </div>
        <img :src="getImagePath('../assets/images/' + this.bookImg)" alt="">
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

section {
    height: 600px;
    background-position: center;
    position: relative;

    #text-container {
        width: 600px;
        text-align: center;
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translate(-100%, 0);

        h2 {
            color: $buttecup;
            font-size: 3rem;
            margin-bottom: 35px;
        }

        p {
            color: #fff;
            font-style: italic;
            font-size: 1.9rem;
        }

        img {
            margin-top: 40px;
        }
    }

    >img {
        position: absolute;
        bottom: 0;
        left: 50%;
    }
}
</style>