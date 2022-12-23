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
    ],

    courses: [
        {
            poster: 'photo-1496307042754-b4aa456c4a2d-740x400.jpeg',
            title: 'How to be a DJ? Make Electronic Music',
            category: 'Electronic',
            difficulty: 'Advanced',
            nLectures: 8,
            hours: 6,
            isSpecial: true,
            price: 59,
        },
        {
            poster: '12345-1-740x400.png',
            title: 'Nvidia and UE4 Technologies Practice',
            category: 'Nvidia',
            difficulty: 'advanced',
            nLectures: 8,
            hours: 6,
            isSpecial: true,
            price: 59,
        },
        {
            poster: 'photo-1491897554428-130a60dd4757-740x400.jpeg',
            title: 'Fashion Photography from professional',
            category: 'fashion',
            difficulty: 'advanced',
            nLectures: 6,
            hours: 6,
            isSpecial: true,
            price: 59,
        },
        {
            poster: 'photo-1416339134316-0e91dc9ded92-740x400.jpeg',
            title: 'Design Instruments for Communication',
            category: 'Design',
            difficulty: 'Intermediate',
            nLectures: 6,
            hours: 6,
            isSpecial: false,
            price: 59,
        },
        {
            poster: 'cathryn-lavery-67852-unsplash-740x400.jpg',
            title: 'Make your Concept Right and Beautiful',
            category: 'Art',
            difficulty: 'Intermediate',
            nLectures: 6,
            hours: 6,
            isSpecial: false,
            price: 59,
        },
        {
            poster: 'photo-1475452779376-caebfb988090-740x400.jpeg',
            title: 'Road Bike Manual or How to Be a Champion',
            category: 'Bicycling',
            difficulty: 'Beginner',
            nLectures: 6,
            hours: 6,
            isSpecial: false,
            price: 59,
        },
    ],

    studentsReviews: [
        {
            studentImg: '1-100x100.jpg',
            course: 'Sample course',
            vote: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sint perspiciatis nostrum architecto nam laboriosam temporibus facere ad! Iste voluptatibus sit voluptate quam neque eos, recusandae officia expedita debitis repudiandae?'
        },
        {
            studentImg: '2-100x100.jpg',
            course: 'Paint of the Future',
            vote: 5,
            text: 'The response to your MasterStudy has been really overwhelming! Those who partecipated in the workshop are spreading the word here in campus and the "buzz" is on. The VP of Instruction wants you to come back! Her goal is to have more faculty trained. She also wants to attend a workshop herself. Our President told me Masterstudy needs to be the cornerstone of our success program.'
        },
        {
            studentImg: '4-100x100.jpg',
            course: 'Sample course',
            vote: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sint perspiciatis nostrum architecto nam laboriosam temporibus facere ad! Iste voluptatibus sit voluptate quam neque eos, recusandae officia expedita debitis repudiandae?'
        },
    ],
    reviewActive: 1,

    botNavItems: [
        {
            text: 'Blog',
            link: '#',
        },
        {
            text: 'Courses',
            link: '#',
        },
        {
            text: 'Home',
            link: '#',
        },
        {
            text: 'Membreship A...',
            link: '#',
        },
        {
            text: 'Shortcodes',
            link: '#',
        },
        {
            text: 'Typography',
            link: '#',
        },
    ],

    blogs: [
        {
            img: 'photo-1517520287167-4bbf64a00d66-122x120.jpeg',
            title: 'Our main target is to "Developing Yourself as a Leader"',
            date: '-- August 9, 2018'
        },
        {
            img: 'photo-1490376840453-5f616fbebe5b-129x129.jpeg',
            title: "Those Other College ExpensesYou Aren't Thinking About",
            date: '-- June 3, 2015'
        },
    ]
})