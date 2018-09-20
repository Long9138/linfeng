<template>
    <div id="shouye">
        <Navbar />
        <Aside />
        <div>
            <router-view/>
        </div>

        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside";

export default {
  name: "shouye",
  data() {
    return {
      
    };
  },
  components: {
    Navbar,
    Footer,
    Aside
  },
  methods: {
   
  }
};
</script>

<style scoped>
</style>