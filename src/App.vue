<template>
    <div class="grid-container">
        <div class="grid-x">
            <div class="large-2 medium-2 small-2">

            </div>
            <div class="large-8 medium-8 small-8">
                <Home></Home>
            </div>
            <div class="large-2 medium-2 small-2">

            </div>
        </div>
    </div>
</template>

<script>
    import Home from "./components/Home";

    export default {
        name: "App",
        components: {Home}
    }
</script>

<style scoped>

</style>
