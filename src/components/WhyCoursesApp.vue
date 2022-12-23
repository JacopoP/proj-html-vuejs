<script>
import ReasonCard from './ReasonCourseCard.vue'
export default {
    components: {
        ReasonCard,
    },
    data() {
        return {
            // array qua perché improbabile che venga modificato frequentemente
            reasonsArray: [
                {
                    icon: 'fa-solid fa-suitcase',
                    title: 'Entrepreneurship',
                    text: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate'
                },
                {
                    icon: 'fa-solid fa-rocket',
                    title: 'Accelerated learning',
                    text: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate'
                },
                {
                    icon: 'fa-solid fa-thumbs-up',
                    title: 'Productivity',
                    text: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate'
                },
                {
                    icon: 'fa-solid fa-gear',
                    title: 'Life Coaching',
                    text: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate'
                },
            ],

        }
    }
}
</script>

<template>
    <section>
        <h2>Why my Courses?</h2>
        <div id="card-container">
            <ReasonCard v-for="(reasonEl, index) in this.reasonsArray" :reason="reasonEl" :key="index" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 95px 0;

    h2 {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 70px;
    }

    #card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
    }
}
</style>