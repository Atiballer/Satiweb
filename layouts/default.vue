<template>
  <div>
    <Navigation></Navigation>
    <no-ssr>
      <Parallax></Parallax>
    </no-ssr>
    <nuxt />
    <Footer></Footer>
    <Cookie></Cookie>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Parallax from '@/components/Parallax'
import Footer from '@/components/Footer'
import Cookie from '@/components/Cookie'
export default {
  components: { Navigation, Parallax, Footer, Cookie }
}
</script>


<style>
</style>
