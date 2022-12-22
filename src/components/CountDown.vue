<script>
export default {
    props: ['end'],
    data() {
        return {
            timeLeft: Number,
            days: Number,
            hours: Number,
            minutes: Number,
            seconds: Number,
            loading: false,
        }
    },
    methods: {
        startInterval: function () {
            const now = new Date();
            this.timeLeft = (this.end - now) / 1000;
        }
    },
    mounted() {
        this.startInterval();
        const _seconds = 1;
        const _minute = 60 * _seconds;
        const _hour = 60 * _minute;
        const _day = 24 * _hour;
        const countdown = setInterval(() => {
            if (this.timeLeft <= 0) {
                this.$emit('endOffer');
                clearInterval(countdown);
            }
            this.days = Math.floor(this.timeLeft / _day);
            this.hours = Math.floor(this.timeLeft % _day / _hour);
            this.minutes = Math.floor(this.timeLeft % _day % _hour / _minute);
            this.seconds = Math.floor(this.timeLeft % _day % _hour % _minute / _seconds);
            this.timeLeft--;
            this.loading = true;
        }, 1000)
    }
}
</script>

<template>
    <div id="countdown" v-if="loading">
        <div class="countdown-element">
            <h3>{{ this.days }}</h3>Days
        </div>
        <div class="countdown-element">
            <h3>{{ this.hours }}</h3>Hours
        </div>
        <div class="countdown-element">
            <h3>{{ this.minutes }}</h3>Minutes
        </div>
        <div class="countdown-element">
            <h3>{{ this.seconds }}</h3>Seconds
        </div>
    </div>
</template>

<style lang="scss" scoped>
#countdown {
    display: flex;
    align-items: center;
    gap: 55px;

    .countdown-element {
        font-size: 1.4rem;
        font-weight: bold;
        text-align: center;
    }

    h3 {
        color: #fff;
        font-size: 5rem;
    }
}
</style>