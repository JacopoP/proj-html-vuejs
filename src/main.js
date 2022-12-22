import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSignal } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
library.add(faFacebook, faLinkedin, faTwitter, faInstagram, faSignal, faListUl, faClock)

import App from './App.vue'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
