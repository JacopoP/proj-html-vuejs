<script>
import Slider from './SliderStudents.vue';
export default {
    components: {
        Slider,
    }
}
</script>

<template>
    <section>
        <h2>What Students Say</h2>
        <div id="slider-container">
            <Slider />
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 100px 0;
    height: 670px;

    h2 {
        font-size: 3rem;
        text-align: center;
    }

    #slider-container {
        width: 760px;
        margin: 50px auto 0;
        text-align: center;
    }
}
</style>