<template>
    <footer class="pt-3 text-light bg-dark">
        <div class="container">
            <div class="row py-2">
                <div class="col-12 col-lg-4 my-auto text-center">
                    <p class="atiballer">Atiballer webdesign</p>
                </div>
                <div class="col-12 col-lg-4">
                    <ul class="list-unstyled text-center">
                        <li class="py-2">
                            <nuxt-link to="/adatvedelem">Adatvédelem</nuxt-link>
                        </li>
                        <li class="py-2">
                            <nuxt-link to="/">Főoldal</nuxt-link>
                        </li>
                        <!-- <li class="py-2">
                            <a href="#about">Rólam</a>
                        </li> -->
                    </ul>
                </div>
                <div class="col-12 col-lg-4">
                    <ul class="list-unstyled text-center">
                        <li class="py-2">
                            <p>E-mail:</p>
                        </li>
                        <li class="py-2">
                            <a href="mailto:info@satiweb.hu">info@satiweb.hu</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <p class="line">Atiballer webdesign 2018</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style>
footer a {
  text-decoration: none;
  color: #fff;
}

footer a:hover {
  text-decoration: none;
  color: purple;
}

.line {
  margin: 0 0 1em;
  line-height: 2em;
  padding: 0;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  font-size: 1.5em;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.line:before,
.line:after {
  content: " ";
  position: absolute;
  top: 50%;
  margin-left: -999em;
  height: 2px;
  width: 998em;
  border-top: 1px solid #fff;
  background: rgba(0, 0, 0, 0.2);
}

.line:after {
  left: auto;
  width: 999em;
  margin: 0 0 0 1em;
}

.atiballer {
  font-family: "Galindo", cursive;
  font-size: 2.5rem;
  color: #ffffff;
}

.atiballer:hover {
  color: #ffffff;
}
</style>
