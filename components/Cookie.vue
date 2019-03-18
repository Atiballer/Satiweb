<template>
  <div>
    <no-ssr>
      <cookie-law theme="base"
                  buttonText="Elfogadom"
                  buttonLink="/adatvedelem"
                  buttonLinkText="Adatvédelem">
        <div slot="message">
          Az oldal sütiket használ, további infóért

        </div>
      </cookie-law>
    </no-ssr>
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
export default {
  components: {
    CookieLaw
  }
}
</script>

<style>
</style>
