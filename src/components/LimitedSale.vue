<script>
import CountDown from './CountDown.vue';
export default {
    components: {
        CountDown,
    },
    data() {
        return {
            emailIn: '',
            offerUp: true,
            dateEnd: new Date('01/17/2023 10:1 AM'),
        }
    },
    methods: {
        takeEmail: function () {
            this.emailIn = '';
        },
        endOffer: function () {
            this.offerUp = false;
        }
    }
}
</script>

<template>
    <div id="cta" v-if="offerUp">
        <div>
            <h2><span class="white">Limited sale:</span> All courses with 50% off</h2>
            <form>
                <input type="email" placeholder="Enter your Email" v-model="emailIn" @keyup.enter="this.emailIn">
                <input type="submit" @click.prevent="this.takeEmail" value="SUBSCRIBE" class="white">
            </form>
        </div>
        <CountDown @endOffer="endOffer" :end="dateEnd" />
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
$form-height: 60px;

#cta {
    background-color: $buttecup;
    width: 1310px;
    height: 240px;
    border-radius: 10px;
    position: absolute;
    bottom: -75px;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 50px 65px;
    display: flex;
    justify-content: space-between;

    .white {
        color: #fff;
    }

    h2 {
        font-size: 2.3rem;
        margin-bottom: 35px;
    }

    form {
        background-color: #fff;
        width: 570px;
        height: $form-height;
        border-radius: calc($form-height / 2);
        padding-left: calc($form-height / 2);
        padding-top: 0;

        input[type='email'] {
            border: none;
            width: calc(100% - 135px);
            outline: none;
            position: relative;
            bottom: 2px;
        }

        input[type=submit] {
            border: none;
            background-color: $cape-cod;
            width: 135px;
            height: $form-height;
            border-radius: calc($form-height / 2);
            font-size: 1.3rem;
            text-align: center;
        }
    }
}
</style>