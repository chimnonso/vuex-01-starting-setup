<template>
  <base-container title="Vuex" v-if="currentStatus">
  <the-counter></the-counter>
  <favorite-value></favorite-value>
  <button @click="addOne">Add from payload</button>
  <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
  <user-auth></user-auth>
  </base-container>
</template>
<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from "./components/FavoriteValue.vue";
import UserAuth from "./components/UserAuth";
import { mapGetters } from "vuex";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  methods: {
    addOne() {
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10
      });
    }
  },
  computed: {
    ...mapGetters(['currentStatus'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>