<script>
export default {
    props: ['reason']
}
</script>

<template>
    <div class="reason-card">
        <font-awesome-icon class="icon" :icon="reason.icon" />
        <div class="text">
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.text }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.reason-card {
    width: 570px;
    height: 270px;
    display: flex;
    gap: 30px;
    border-left: 6px solid $buttecup;
    padding: 60px 40px 50px;
    box-shadow: 2px 1px 4px #c5c5c5;
    cursor: pointer;

    &:hover {
        background-color: $buttecup;
    }

    .icon {
        color: $buttecup;
        font-size: 3rem;
    }

    &:hover .icon {
        color: #fff;
    }

    h3 {
        font-size: 1.8rem;
        margin-bottom: 25px;
    }

    p {
        color: $silver;
        font-size: 1.1rem;
        line-height: 25px;
    }

    &:hover p {
        color: $cape-cod;
    }
}
</style>