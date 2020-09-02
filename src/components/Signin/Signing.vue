<template>
    <div class="main_signin">
        <div class="main_signin_heading_text">
            <slot name="heading"/>
        </div>
        <div class="main_signin_message">
            <slot name="Message"/>
        </div>
        <button class="main_signin_execute" v-on:click="changing">Signin</button>
    </div>
</template>

<script>
    export default {
        name: "Signing",
        methods: {
            changing() {
                this.$store.commit('SET_APPLICATION_THEME');
            }
        }
    }
</script>

<style scoped>

</style>
