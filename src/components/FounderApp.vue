<script>
export default {
    data() {
        return {
            signature: 'sign.jpg'
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
    <section>
        <div id="left-part">
            <h2>
                Hey there, my name is John Doe. I'm the founder of the Brain Academy.
            </h2>
            <img :src="getImagePath('../assets/images/' + this.signature)" alt="Founder's signature">
        </div>
        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I
            enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for
            the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere
            tranquil existence, that I neglect my talents. When, while the lovely valley
            teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of
            my trees, and but a few stray gleams steal into the inner sanctuary</p>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

section {
    width: 1170px;
    margin: 200px auto 100px;
    display: flex;
    justify-content: space-between;

    #left-part {
        width: 420px;

        h2 {
            font-size: 2.3rem;
        }

        img {
            display: block;
            margin: 60px auto 0;
        }
    }

    p {
        width: 640px;
        color: $cape-cod;
        font-size: 1.15rem;
        line-height: 35px;
    }
}
</style>