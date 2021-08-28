import { createApp, VueElement } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin);

const emitter = mitt()
const app = createApp(App)
app.config.globalProperties.emitter = emitter

app.use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
