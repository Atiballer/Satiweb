<template>
  <div class="pb-5"
       id="szolgaltatasok">
    <h1 class="py-5">Szolgáltatások</h1>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-7"
             style="text-align:center">
          <img src="~/assets/responsive1.jpg"
               class="img-fluid resp"
               alt="Reszponzív megjelenés"
               data-aos="fade-right"
               data-aos-duration="2000"
               data-aos-delay="500"
               data-aos-once="true">
        </div>
        <div class="col-md-5">
          <h2 class="lefth">Reszponzív design</h2>
          <p class="leftp">A weboldal igazodik a képernyő méretéhez, így minden
            eszközön tökéletes megjelenése
            lesz a honlapodnak. Ma már szinte mindent tudunk a mobilunkról intézni, így a
            felhasználók
            szempontjából a legfontosabb, hogy weboldalad átlátható legyen minden kijelzőn</p>
        </div>
      </div>

      <div class="line"></div>

      <div class="row pt-3">
        <div class="col-md-5">
          <h2 class="righth">Hirdetnéd vállalkozásodat?</h2>
          <p class="rightp">Szeretnél hirdetni a közösségi médián, vagy a Google
            AdWords-ben? Viszont nem tudod, hogy fogj hozzá? Vagy nincs időd a mindennapi teendők
            mellett? Akkor a legjobb helyen vagy, hisz ebben is segítek Neked! Az újonnan készített
            weboldalak mellé <strong style="color:red; text-transform:uppercase">ajándék!</strong>
          </p>
        </div>
        <div class="col-md-7"
             style="text-align:center">

          <div class="middle">
            <span class="proba"></span>
            <img src="~/assets/hirdetesek2.jpg"
                 class="img-fluid resp2"
                 alt="Reszponzív megjelenés"
                 data-aos="fade-left"
                 data-aos-duration="2000"
                 data-aos-delay="1500"
                 data-aos-once="true">
          </div>
        </div>
      </div>

      <div class="line"></div>

      <div class="row pt-3">
        <div class="col-md-7"
             style="text-align:center">
          <img src="~/assets/support.jpg"
               class="img-fluid resp"
               alt="Reszponzív megjelenés"
               data-aos="fade-right"
               data-aos-duration="2000"
               data-aos-delay="2000"
               data-aos-once="true">
        </div>
        <div class="col-md-5">
          <h2 class="lefth">Teljeskörű támogatás</h2>
          <p class="leftp">Nem csak egy honlapot kapsz, hanem egy teljes csomagot!
            Közösen megbeszéljük mik az elképzeléseid, és az ehhez szükséges technikai hátteret -
            pl.: tárhely,
            domain név, saját e-mail cím beállítása - biztosítom Neked. <br> <br> Az elkészült
            honlapod átadása után
            sem
            maradsz egyedül! 3 hónapig teljes karbantartást kapsz ajándékba!</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
  font-weight: 200;
  text-align: center;
  letter-spacing: 1.5px;
}

h2,
p {
  font-weight: 200;
  letter-spacing: 1.5px;
}

.lefth {
  text-align: left;
}

.righth {
  text-align: right;
}

.leftp {
  padding-top: 1.5rem;
  padding-right: 2rem;
  text-align: left;
}

.rightp {
  padding-top: 1.5rem;
  padding-left: 2rem;
  text-align: right;
}

@media only screen and (max-width: 500px) {
  .lefth,
  .righth {
    text-align: center;
  }
  .leftp {
    text-align: center;
    padding-right: 0px !important;
  }
  .rightp {
    text-align: center;
    padding-left: 0px !important;
  }
}

/* .resp {
  width: 70%;
} */

.row {
  align-items: center;
}

@media only screen and (max-width: 500px) {
  .resp {
    margin-bottom: 1.5rem;
  }
  .resp2 {
    margin-top: 1.5rem;
  }
}
</style>
