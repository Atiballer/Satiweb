<template>
  <section id="kapcsolat">
    <div class="container pt-5">
      <h3 class="text-center text-uppercase">Lépj kapcsolatba velem</h3>
      <p class="text-center w-75 m-auto">Keress bátran alábbi elérhetőségeimen! Megbeszéljük mik az
        elképzeléseid, milyen weboldalt szeretnél!</p>
      <div class="row slideanim">
        <div class="col-sm-12 col-md-6 col-lg-3 my-5">
          <div class="card3 border-0">
            <div class="card-body text-center">
              <img class="img"
                   src="../assets/phone-call.svg"
                   alt="Hívj telefon">
              <h4 class="text-uppercase mb-3 pt-3">Telefon</h4>
              <h5>06-30/731-3591</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3 my-5">
          <div class="card3 border-0">
            <div class="card-body text-center">
              <a href="mailto:info@satiweb.hu">
                <img class="img"
                     src="../assets/email.svg"
                     alt="Írj e-mailt">
                <h4 class="text-uppercase mb-3 pt-3">E-mail</h4>

                <h5>info@satiweb.hu</h5>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3 my-5">
          <div class="card3 border-0">
            <div class="card-body text-center">
              <a href="http://fb.me/Atiballer">
                <img class="img"
                     src="../assets/facebook.svg"
                     alt="Keress Facebook-n">
                <h4 class="text-uppercase mb-3 pt-3">Facebook</h4>
                <h5>Keress Facebookon</h5>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3 my-5">
          <div class="card3 border-0">
            <div class="card-body text-center">
              <a href="http://m.me/Atiballer">
                <img class="img"
                     src="../assets/messenger.svg"
                     alt="Írj Messenger-en">

                <h4 class="text-uppercase mb-3 pt-3">Messenger</h4>
                <h5>Írj Messengeren</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
h3,
h4,
h5,
p {
  font-weight: 200;
  letter-spacing: 1.5px;
}

#kapcsolat .card3:hover i,
#kapcsolat .card3:hover h4 {
  color: #007b5e;
}
#kapcsolat .card3 a {
  text-decoration: none !important;
  color: black;
}
#kapcsolat .card3 img {
  width: 100px;
  height: 100px;
}
</style>
