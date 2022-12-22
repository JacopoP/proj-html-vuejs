import { reactive } from "vue";

export const store = reactive({
    topNavBarItems: [
        {
            text: 'Courses',
            link: '#',
            isNew: false,
            isActive: false,
        },
        {
            text: 'Course Formats',
            link: '#',
            isNew: false,
            isActive: false,
        },
        {
            text: 'Add Course',
            link: '#',
            isNew: true,
            isActive: false,
        },
        {
            text: 'Pages',
            link: '#',
            isNew: false,
            isActive: false,
        },
        {
            text: 'Demos',
            link: '#',
            isNew: false,
            isActive: false,
        },
    ],
    topNavBarActive: 4,

    socials: [
        {
            name: 'LinkedIn',
            link: '#',
            icon: 'fa-brands fa-linkedin'
        },
        {
            name: 'Instagram',
            link: '#',
            icon: 'fa-brands fa-instagram'
        },
        {
            name: 'Facebook',
            link: '#',
            icon: 'fa-brands fa-facebook'
        },
        {
            name: 'Twitter',
            link: '#',
            icon: 'fa-brands fa-twitter'
        }
    ]
})