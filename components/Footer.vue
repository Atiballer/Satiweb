<template>
  <!-- Footer
		============================================= -->
  <footer id="footer"
          class="dark">

    <!-- Copyrights
			============================================= -->
    <div id="copyrights">

      <div class="container clearfix">

        <div class="col_half">

          Copyrights &copy; 2019 Satiweb.
        </div>

        <div class="col_half col_last tright">
          <div class="copyrights-menu copyright-links fright clearfix">
            <a href="#">Kezdőlap</a>/<a href="#szolgaltatasok">Szolgáltatások</a>/<a href="#portfolio">Portfolio</a>/<a
               href="#arak">Árak</a>/<a href="#velemeny">Vélemények</a>/<nuxt-link to="/adatvedelem">Adatvédelem</nuxt-link>
          </div>
          <!-- <div class="fright clearfix">
            <a href="#"
               class="social-icon si-small si-borderless nobottommargin si-facebook">
              <i class="icon-facebook"></i>
              <i class="icon-facebook"></i>
            </a>

            <a href="#"
               class="social-icon si-small si-borderless nobottommargin si-twitter">
              <i class="icon-twitter"></i>
              <i class="icon-twitter"></i>
            </a>

            <a href="#"
               class="social-icon si-small si-borderless nobottommargin si-gplus">
              <i class="icon-gplus"></i>
              <i class="icon-gplus"></i>
            </a>

            <a href="#"
               class="social-icon si-small si-borderless nobottommargin si-pinterest">
              <i class="icon-pinterest"></i>
              <i class="icon-pinterest"></i>
            </a>

            <a href="#"
               class="social-icon si-small si-borderless nobottommargin si-vimeo">
              <i class="icon-vimeo"></i>
              <i class="icon-vimeo"></i>
            </a>

            <a href="#"
               class="social-icon si-small si-borderless nobottommargin si-github">
              <i class="icon-github"></i>
              <i class="icon-github"></i>
            </a>

            <a href="#"
               class="social-icon si-small si-borderless nobottommargin si-yahoo">
              <i class="icon-yahoo"></i>
              <i class="icon-yahoo"></i>
            </a>

            <a href="#"
               class="social-icon si-small si-borderless nobottommargin si-linkedin">
              <i class="icon-linkedin"></i>
              <i class="icon-linkedin"></i>
            </a>
          </div> -->
        </div>

      </div>

    </div><!-- #copyrights end -->

  </footer><!-- #footer end -->

</template>

<script>
export default {}
</script>

<style scoped>
#footer.dark,
.dark #footer {
  background-color: #333;
  color: #ccc;
  border-top-color: rgba(0, 0, 0, 0.2);
}
#footer {
  position: relative;
  background-color: #eee;
  border-top: 5px solid rgba(0, 0, 0, 0.2);
}
.dark #copyrights {
  background-color: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.25);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}
#copyrights {
  padding: 40px 0;
  background-color: #ddd;
  font-size: 14px;
  line-height: 1.8;
}
#copyrights .col_half {
  margin-bottom: 0 !important;
}
.col-half {
  display: block;
  position: relative;
  margin-right: 4%;
  margin-bottom: 50px;
  float: left;
}
.col_half,
.postcontent.bothsidebar {
  width: 48%;
}
.footer-logo {
  display: block;
  margin-bottom: 30px;
}
img {
  max-width: 100%;
}
#copyrights .col_half {
  margin-bottom: 0 !important;
}
.col_last {
  margin-right: 0 !important;
  float: right;
  clear: right;
}
.tright {
  text-align: right !important;
}
.copyrights-menu {
  margin-bottom: 10px;
}
.fright {
  float: right !important;
}
#copyrights a:first-child {
  margin-left: 0;
}
.dark .copyright-links a {
  color: rgba(255, 255, 255, 0.25);
  border-bottom-color: rgba(255, 255, 255, 0.25);
}
.copyrights-menu a {
  font-size: 14px;
  margin: 0 10px;
  border-bottom: 0 !important;
}
.copyright-links a {
  display: inline-block;
  margin: 0 3px;
  color: #333;
  border-bottom: 1px dotted #444;
}
.clearfix::after {
  display: block;
  clear: both;
  content: '';
}
</style>
