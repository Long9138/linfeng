<template>
    <div id="Shouye">
        <Navinput />
        <Navbar />
        <Carousel />
        <Shouyemain />
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar'
    import Navinput from '@/components/Navinput'
    import Carousel from '@/components/Carousel'
    import Shouyemain from '@/components/Shouyemain'

    export default {
        name:"Shouye",
        data() {
            return {

            }
        }, components: {
            Navinput,
            Navbar,
            Carousel,
            Shouyemain
        },
    }
</script>

<style scoped>

</style>