<template>
    <div class="main_signin_form">
        <h3>Sign in</h3>

        <div class="main_signin_form_icons">
            <i class="fab fa-facebook-f"/>
            <i class="fab fa-google-plus-g"/>
            <i class="fab fa-linkedin-in"/>
        </div>

        <div class="main_signin_form_welcome">
            <p>Glad to have you back</p>
        </div>

        <input type="text" placeholder="name">

        <input type="text" placeholder="email">

        <button class="main_signin_form_execute">Signin</button>
    </div>
</template>

<script>
    export default {
        name: "SigningForm"
    }
</script>

<style scoped>

</style>
