<template>
    <button @click="increment">Add 10</button>
    <button @click="increase({value: 11})">Add 99</button>
</template>
<script>
import { mapActions } from "vuex";
export default {
    methods: {
        // addTen() {
        //     this.$store.dispatch("increment");
        // }
        ...mapActions('numbers', ['increment', 'increase']),
    }
}
</script>