<script>
import NavBar from './NavBarTop.vue';
import SocialsTopBar from './SocialsTopBar.vue';
export default {
    components: {
        NavBar,
        SocialsTopBar,
    },
    data() {
        return {
            logo: 'MasterStudy-1.svg',
        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
    },
}
</script>

<template>
    <div class="container">
        <img :src="getImagePath('../assets/images/' + logo)" alt="Logo MasterStudy">
        <nav>
            <NavBar />
            <SocialsTopBar />
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 1170px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 250px;
    }

    nav {
        width: calc(100% - 465px);
        display: flex;
        justify-content: space-between;
    }
}
</style>