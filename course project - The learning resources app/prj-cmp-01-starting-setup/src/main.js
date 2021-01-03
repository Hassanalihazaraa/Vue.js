import {createApp} from 'vue';
import App from "@/App";

// import components
import BaseCard from '@/components/UI/BaseCard'
import BaseButton from "@/components/UI/BaseButton";

const app = createApp(App)

// register components
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)


app.mount('#app');
