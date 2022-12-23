<script>
export default {
    props: ['course'],
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
    }
}
</script>

<template>
    <div class="card" :class="{ special: course.isSpecial }">
        <img :src="getImagePath('../assets/images/' + course.poster)" :alt="course.name">
        <div id="price">&dollar;{{ course.price }}</div>
        <div id="generals-container">
            <h3>{{ course.title }}</h3>
            <h4>{{ course.category }}</h4>
            <div id="info-container">
                <div class="info">
                    <font-awesome-icon class="icon" icon="fa-solid fa-signal" />
                    {{ course.difficulty }}
                </div>
                <div class="info">
                    <font-awesome-icon class="icon" icon="fa-solid fa-list-ul" />
                    {{ course.nLectures }} Lectures
                </div>
                <div class="info">
                    <font-awesome-icon class="icon" icon="fa-regular fa-clock" />
                    {{ course.hours }} hours
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
$special: #f09b23;

.card {
    width: 370px;
    background-color: #fff;
    text-align: center;
    position: relative;
    cursor: pointer;

    // per i corsi con tag 'special'
    &.special::before {
        content: 'SPECIAL';
        color: #fff;
        background-color: $special;
        position: absolute;
        top: 7px;
        right: 7px;
        border-radius: 2px;
        font-weight: bold;
        font-size: .7rem;
        padding: 6px 3px;
    }

    img {
        max-width: 100%;
        height: 245px;
        object-fit: cover;
    }

    #price {
        display: none;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 245px;
        background-color: rgba(#000, .7);
        color: #fff;
        font-size: 1.7rem;
        font-weight: bold;
        position: absolute;
        top: 0;
        z-index: 10;
    }

    &:hover #price {
        display: flex;
    }

    #generals-container {
        padding: 30px 20px 15px;

        h3 {
            font-size: 1.4rem;
        }

        h4 {
            font-size: 1.05rem;
            color: $silver;
            margin: 20px 0;
        }

        #info-container {
            display: flex;
            justify-content: space-around;
            border-top: 1px solid $silver;
            padding-top: 20px;

            .info {
                .icon {
                    color: $special;
                }

                color: $cape-cod;
            }
        }
    }
}
</style>