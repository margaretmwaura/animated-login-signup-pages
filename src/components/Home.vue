<template>
    <div class="home">
        <div class="grid-x">
            <transition name="slide">
                <div class="large-6 medium-6 small-6" v-if="show">
                    <signup>
                        <h3 slot="heading">Welcome Back!</h3>
                        <p slot="Message">It has become to access content now just create an account and sign-up </p>
                    </signup>
                </div>
            </transition>
            <transition name="opposite">
                <div class="large-6 medium-6 small-6" v-if="show">
                    <signup-form></signup-form>
                </div>
            </transition>
        </div>
        <div class="grid-x">
            <transition name="slide">
                <div class="large-6 medium-6 small-6" v-if="reveal">
                    <signing-form></signing-form>
                </div>
            </transition>
            <transition name="opposite">
                <div class="large-6 medium-6 small-6" v-if="reveal">
                    <signing>
                        <h3 slot="heading">Hello Friend</h3>
                        <p slot="Message">It has been an amazing couple of days knowing you and getting to interact </p>
                    </signing>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import Signup from "./Signup/Signup";
    import SignupForm from "./Signup/SignupForm";
    import SigningForm from "./Signin/SigningForm";
    import Signing from "./Signin/Signing";
    import {mapGetters} from 'vuex';

    export default {
        name: "Home",
        computed: {
            ...mapGetters({
                show: 'show',
                reveal: 'reveal'
            })
        },
        components: {Signing, SigningForm, SignupForm, Signup},
    }
</script>

<style scoped>
</style>
