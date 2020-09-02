<template>
    <div class="main_signup">
        <div class="main_signup_heading_text">
            <slot name="heading"/>
        </div>
        <div class="main_signup_message">
            <slot name="Message"/>
        </div>

         <button class="main_signup_execute" v-on:click="changing">Signup</button>
    </div>
</template>

<script>
    export default {
        name: "Signup",
        methods: {
            changing() {
                this.$store.commit('SET_APPLICATION_THEME');
            }
        }
    }
</script>

<style scoped>

</style>
