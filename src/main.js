import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './componants/UI/BaseCard.vue';
import BaseButton from './componants/UI/BaseButton.vue';
import BaseDialog from './componants/UI/BaseDialog.vue';

const app = createApp(App);


app.component('base-card',BaseCard)
app.component('base-button',BaseButton)
app.component('base-dialog',BaseDialog)

app.mount('#app');
