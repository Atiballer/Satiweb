<template>
  <div>
    <Navigation></Navigation>
    <nuxt/>
    <Footer></Footer>
    <Cookie></Cookie>
  </div>
</template>

<style>
</style>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Cookie from "@/components/Cookie";

export default {
  components: { Navigation, Footer, Cookie }
};
</script>

