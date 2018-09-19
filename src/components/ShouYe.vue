<template>
    <div id="shouye">
        <Navbar />
        <Aside />
        <div>
            <router-view v-if="isRouterAlive" />
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
      isRouterAlive: true
    };
  },
  components: {
    Navbar,
    Footer,
    Aside
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    }
  }
};
</script>

<style scoped>
</style>