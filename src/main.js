import { createApp } from 'vue';
import { createStore } from "vuex";

import App from './App.vue';

const app = createApp(App);

const counterModule = {
    namespaced: true, 
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 10;
        },
        increase(state, payload) {
            console.log(state.counter);
            state.counter = state.counter + payload.value;
        },
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment');
            }, 2000);
        },
         increase(context, payload) {
             console.log(context);
             context.commit('increase', payload);
         },
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
        },
    }
}

const store = createStore({
    modules: {
        numbers: counterModule,
    },
    state() {
        return {
            
            isLoggedIn: false,
        };
    },
    mutations: {
        
        loginUser(state) {
            state.isLoggedIn = true;
        },

        logoutUser(state) {
            state.isLoggedIn = false;
        }
    },
    actions: {
        
         loginUser(context) {
             context.commit('loginUser');
         },
         logoutUser(context) {
             context.commit('logoutUser');
         }
    },
    getters: {
        
        currentStatus(state) {
            return state.isLoggedIn;
        }
    }
});
app.use(store);
app.mount('#app');

