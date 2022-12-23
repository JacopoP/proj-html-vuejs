<script>
import { store } from '../store.js'
export default {
    data() {
        return {
            store,
            socialsToShow: ['Facebook', 'Twitter', 'Instagram'],
            socialsArray: Array,
        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
    },
    mounted() {
        // prende dall'array in store le specifiche dei social che si vuole inserire
        const auxArr = [];
        this.socialsToShow.forEach((social) => {
            store.socials.forEach(socialSpecs => {
                if (social == socialSpecs.name) {
                    auxArr.push(socialSpecs);
                }
            });
        })
        this.socialsArray = auxArr;
    }
}
</script>

<template>
    <div id="container-footer">
        <div class="card-footer">
            <h3>ABOUT</h3>
            <p id="about-txt">Masterstudy is Education WordPress theme featured by Learning Management System (LMS) for
                online
                education.<br>Developed by StylemxThemes</p>
            <div id="social-bar">
                <a v-for="(social, index) in this.socialsArray" :href="social.link" :key="index">
                    <font-awesome-icon :icon="social.icon" />
                </a>
            </div>
        </div>

        <div class="card-footer">
            <h3>CONTACT</h3>
            <p>USA, California 20, First Avenue, California<br><br>Tel.: &plus;1 212145830032<br>Fax: &plus;1
                2123752412<br><br><span>info@masterstudy.com</span></p>
        </div>

        <div class="card-footer">
            <h3>PAGES</h3>
            <ul>
                <li v-for="(item, index) in store.botNavItems" :key="index">
                    <a :href="item.link">{{ item.text }}</a>
                </li>
            </ul>
        </div>

        <div class="card-footer">
            <h3>BLOG</h3>
            <div v-for="(blog, index) in store.blogs" :key="index" class="blog-card">
                <img :src="getImagePath('../assets/images/' + blog.img)" alt="">
                <div class="text">
                    <h4>{{ blog.title }}</h4>
                    <div class="date">{{ blog.date }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

#container-footer {
    display: flex;
    max-width: 1170px;
    margin: 0 auto;
    gap: 30px;
    justify-content: center;

    .card-footer {
        width: 265px;

        h3 {
            font-size: 1.4rem;
            margin-bottom: 25px;
        }

        #about-txt {
            line-height: 25px;
        }

        #social-bar {
            font-size: 1.3rem;
            display: flex;
            gap: 20px;
            margin-top: 15px;
        }

        ul {
            list-style: disc;
            display: flex;
            flex-wrap: wrap;
            row-gap: 15px;

            li {
                width: 50%;
            }
        }

        p,
        li {
            font-size: 1.05rem;
        }

        .blog-card {
            display: flex;
            gap: 15px;
            margin-bottom: 25px;
            cursor: pointer;

            img {
                width: 75px;
                height: 75px;
            }

            h4 {
                font-size: 1.1rem;
            }

            .date {
                color: $cape-cod;
                font-size: .9rem;
            }
        }
    }
}
</style>