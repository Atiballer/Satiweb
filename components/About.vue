<template>
  <div class="container-fluid about">
    <div class="row"
         style="align-items:center">
      <div class="col-md-8 col-sm-12"
           style="padding-left:1.5rem">
        <h3>Üdvözöllek az oldalon!</h3>
        <h5>Örülök, hogy Neked is fontos, hogy legyen saját weboldalad!</h5>

        <p> Sárik Attila vagyok, 2016-ban indítottam el saját vállalkozásomat, korábbi céljaimnak
          megfelelően az informatika világában. <br>Hiszek abban, hogy a folyamatos
          tanulás, képzés
          elengedhetetlen, hisz ez az a világ, ahol hónapról hónapra változnak a trendek. <br>
          Célom, hogy a
          mai
          modern megjelenést tudjam biztosítani partnereimnek, a számukra leghasznosabb funkciókkal
          együtt, hiszen minden vállalkozás számára létfontosságú a fejlődés.
        </p>

        <h3>Miért a Satiwebtől legyen weboldalad?</h3>

        <p class="list">Mert honlapod 100%-ig a Te elképzelésed szerint készül, hogy úgy jelenj
          meg, ahogy
          Te szeretnéd</p>
        <p class="list">Weboldaladon csak azok a funkciók legyenek amelyekre szükséged van, hogy a
          lehető
          legjobb felhasználói elményt adja a látogatóidnak</p>
        <p class="list">Mielőtt bármihez is hozzáfognánk, szerződésben rögzítjük a részleteket,
          hogy senkit ne érjen kellemetlenség.</p>
        <p class="list"
           style="text-transform: uppercase; color:red">Most három ingyenes ajándékot kapsz
          honlapod mellé!</p>

      </div>
      <div class="col-md-4 col-sm-12"
           style="margin:auto; padding-right: 1.5rem">
        <div style="text-align:center">
          <img src="~/assets/sati2.jpg"
               class="img-fluid rounded img-thumbnail"
               alt="Atiballer weboldalkészíés">

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3,
h5 {
  font-weight: 300;
}

.about {
  padding-top: 3rem;
}
.about p {
  letter-spacing: 1.2px;
  text-align: justify;
  padding-top: 1rem;
  font-weight: 200;
}
.img {
  width: 60%;
}

.list {
  font-weight: 200;
  letter-spacing: 1.2px;
  padding-top: 0.5rem !important;
}
</style>
