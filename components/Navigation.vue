<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light">
    <a class="navbar-brand">Satiweb</a>
    <button class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse"
         id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <nuxt-link class="nav-item nav-link active"
                   to="/">Kezdőlap <span class="sr-only">(current)</span></nuxt-link>
        <a class="nav-item nav-link"
           href="#szolgaltatasok">Szolgáltatások</a>
        <a class="nav-item nav-link"
           href="#portfolio">Portfolio</a>
        <a class="nav-item nav-link"
           href="#arak">Árak</a>
        <a class="nav-item nav-link"
           href="#velemeny">Vélemények</a>
        <a class="nav-item nav-link"
           href="#kapcsolat">Kapcsolat</a>

      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>
</style>
