import { createApp } from 'vue';
import { createStore } from "vuex";

import App from './App.vue';

const app = createApp(App);

const store = createStore({
    state() {
        return {
            counter: 0,
        };
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 10;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
        normalizedCounter(state, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            }

            if (finalCounter > 100) {
                return 100
            }
            return finalCounter;
        }
    }
});
app.use(store);
app.mount('#app');
