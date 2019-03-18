<template>
  <div>
    <About></About>
    <Services></Services>
    <Portfolio></Portfolio>
    <Price></Price>
    <Opinion></Opinion>
    <Contact></Contact>

  </div>
</template>

<script>
import Services from '~/components/Services'
import Price from '~/components/Price'
import About from '~/components/About'
import Portfolio from '~/components/Portfolio'
import Opinion from '~/components/Opinion'
import Contact from '~/components/Contact'
export default {
  components: {
    Services,
    Price,
    About,
    Portfolio,
    Opinion,
    Contact
  }
}
</script>

<style>
</style>
