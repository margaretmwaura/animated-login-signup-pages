<template>
    <div class="main_signup_form">
        <h3>Create Account</h3>

        <div class="main_signup_form_icons">
            <i class="fab fa-facebook-f"/>
            <i class="fab fa-google-plus-g"/>
            <i class="fab fa-linkedin-in"/>
        </div>

        <div class="main_signup_form_welcome">
            <p>Hello Pal sign-up for the amazing deals</p>
        </div>

        <input type="text" placeholder="name">

        <input type="text" placeholder="email">

        <input type="text" placeholder="password">

        <button class="main_signup_form_execute">SignUp</button>
    </div>
</template>

<script>
    export default {
        name: "SignupForm"
    }
</script>

<style scoped>

</style>
