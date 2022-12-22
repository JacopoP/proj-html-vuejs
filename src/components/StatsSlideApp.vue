<script>
export default {
    data() {
        return {
            bgImg: 'counter-1919x1101.jpg',
            statsArray: [
                {
                    icon: 'fa-solid fa-user-group',
                    number: 3195,
                    name: 'Online Learner'
                },
                {
                    icon: 'fa-solid fa-film',
                    number: 23,
                    name: 'Video Courses'
                },
                {
                    icon: 'fa-solid fa-image',
                    number: 437,
                    name: 'Slider & Images'
                },
                {
                    icon: 'fa-solid fa-thumbs-up',
                    number: 1440,
                    name: 'Excellent Reviews'
                },
            ]
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
    <section :style="`background-image: url(${getImagePath('../assets/images/' + bgImg)})`">
        <div id="stats-container">
            <div class="card" v-for="stat in this.statsArray">
                <font-awesome-icon class="icon" :icon="stat.icon" />
                <div class="text">
                    <h3>{{ stat.number }}</h3>
                    {{ stat.name }}
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as *;

section {
    height: 600px;
    background-position: top;
    display: flex;
    align-items: center;
    justify-content: center;

    #stats-container {
        display: flex;
        width: 1170px;
        gap: 80px;
        justify-content: center;

        .card {
            color: #fff;
            display: flex;
            align-items: center;
            gap: 25px;

            .icon {
                font-size: 4rem;
            }

            .text {
                h3 {
                    color: $buttecup;
                    font-size: 2.5rem;
                }

                font-size: 1.3rem;
            }

        }
    }
}
</style>