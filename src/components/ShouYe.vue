<template>
    <div id="shouye">
        <Navinput />
        <Navbar />
        <shouyeCarousel />
        <shouyeMain />
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar'
    import Navinput from '@/components/Navinput'
    import shouyeCarousel from '@/components/shouyeCarousel'
    import shouyeMain from '@/components/shouyeMain'

    export default {
        name:"shouye",
        data() {
            return {

            }
        }, components: {
            Navinput,
            Navbar,
            shouyeCarousel,
            shouyeMain
        },
    }
</script>

<style scoped>

</style>