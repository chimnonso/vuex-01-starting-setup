<template>
    <button @click="addTen">Add Ten</button>
</template>
<script>
export default {
    methods: {
        addTen() {
            this.$store.commit("increment");
        }
    }
}
</script>