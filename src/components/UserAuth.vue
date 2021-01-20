<template>
    <button v-if="!currentStatus" @click="loginUser">Login</button>
    <button v-else @click="logoutUser">Logout</button>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
    methods: {
        ...mapActions(['loginUser', 'logoutUser']),
    },
    computed: {
        ...mapGetters(['currentStatus']),
    }
}
</script>