<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        // cambia l'elemento attivo nell'array
        makeActive: function () {
            const i = store.topNavBarActive;
            store.topNavBarItems.forEach((item, index) => {
                if (i != index) {
                    item.isActive = false;
                }
                else {
                    item.isActive = true;
                }
            })
        },
        // cambia l'indice dell'elemento attivo della navBar al click sull'elemento
        changeActive: function (i) {
            store.topNavBarActive = i;
            this.makeActive();
        }
    },
    mounted() {
        this.makeActive();
    }
}
</script>

<template>
    <ul>
        <!-- stampa degli elementi della navBar -->
        <li v-for="(el, index) in store.topNavBarItems" :key="index" :class="{ active: el.isActive, new: el.isNew }"
            @click="changeActive(index)">
            <a :href="el.link">{{ el.text }}</a>
            <div v-if="el.isActive" class="active-sign"></div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
$li-heigth: 50px;

ul {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    font-weight: bold;
    font-size: 1.3rem;
    color: $cape-cod;

    li {
        height: $li-heigth;
        position: relative;

        a {
            height: $li-heigth;
            line-height: $li-heigth;
        }

        .active-sign {
            position: absolute;
            bottom: 0px;
            height: 3px;
            width: 80%;
            background-color: $buttecup;
            border-radius: 1px;

            &::after {
                content: '';
                position: absolute;
                top: -2px;
                left: 50%;
                width: 4px;
                height: 4px;
                transform: translate(-50%, 0) rotate(45deg);
                background-color: $buttecup;
            }
        }

        &.new::before {
            content: 'NEW';
            color: #fff;
            font-size: .65rem;
            text-align: center;
            line-height: 12px;
            background-color: #dc1346;
            display: block;
            width: fit-content;
            padding: 1px 4px 2px;
            border-radius: 3px 3px 3px 0;
            position: absolute;
            right: -15px;
            top: 0;
        }
    }
}
</style>