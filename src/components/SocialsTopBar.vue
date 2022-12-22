<script>
import { store } from '../store.js'
export default {
    data() {
        return {
            store,
            socialsToShow: ['LinkedIn', 'Instagram', 'Facebook', 'Twitter'],
            socialsArray: Array,
        }
    },
    computed: {
        selectSocials: function () {
            return store.socials.filter((social) => this.socialsToShow.includes(social.name));
        }
    },
    mounted() {
        this.socialsArray = this.selectSocials;
        console.log(this.socialsArray);
    }
}
</script>

<template>
    <ul>
        <li v-for="(social, index) in socialsArray" :key="index">
            <a :href="social.link"><font-awesome-icon :icon="social.icon" /></a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    align-items: center;
    margin-left: 55px;
    gap: 15px;

    li {
        font-size: 1.2rem;
    }
}
</style>