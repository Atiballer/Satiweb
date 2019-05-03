

<template>
  <div id="arak"
       class="container pt-5">
    <h2 class="pb-3">Árak</h2>
    <div id="pricing-switch"
         class="pricing row bottommargin-lg clearfix">
      <div class="col-lg-4 col-md-6 pt-2">
        <div class="pricing-box">
          <div class="pricing-title">
            <h3>Bemutatkozó weboldal</h3>
          </div>
          <div class="pricing-price">
            70.000 Ft <span class="price-tenure">Induló ártól</span>
          </div>
          <div class="pricing-features">
            <ul>
              <li>
                <strong>1-5 </strong> aloldal
              </li>
              <li>
                <strong>Egyedi</strong> megjelenés
              </li>
              <li>
                <strong>Saját</strong> e-mail cím
              </li>
            </ul>
          </div>
          <div class="pricing-action">
            <button class="button button-large button-rounded capitalize ls0"
                    style="border-radius: 23px;"
                    @click="openModal()"
                    id="contactButton">Érdekel</button>
            <script type="text/javascript">
            $('#$contactButton').click(function() {
                  fbq('track', 'Contact');
            </script>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 pt-2">
        <div class="pricing-box">
          <div class="pricing-title">
            <h3>Egyedi céges weboldal</h3>
          </div>
          <div class="pricing-price">
            90.000 Ft <span class="price-tenure">Induló ártól</span>
          </div>
          <div class="pricing-features">
            <ul>
              <li>
                <strong>5-10</strong> aloldal
              </li>
              <li>
                <strong>Szerkesztő</strong> felület
              </li>
              <li>
                <strong>Egyedi</strong> funkciók
              </li>
            </ul>
          </div>
          <div class="pricing-action">
            <button class="button button-large button-rounded capitalize ls0"
                    style="border-radius: 23px;"
                    @click="openModal()"
                    id="contactButton">Érdekel</button>
            <script type="text/javascript">
            $('#$contactButton').click(function() {
                  fbq('track', 'Contact');
            </script>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 pt-2 webshop">
        <div class="pricing-box">
          <div class="pricing-title">
            <h3>Webshop készítése</h3>
          </div>
          <div class="pricing-price">
            140.000 Ft <span class="price-tenure">Induló ártól</span>
          </div>
          <div class="pricing-features">
            <ul>
              <li>
                <strong>Korlátlan</strong> aloldal
              </li>
              <li>
                <strong>Több száz</strong> funkció
              </li>
              <li>
                <strong>Egyedi</strong> megjelenés
              </li>
            </ul>
          </div>
          <div class="pricing-action">
            <button class="button button-large button-rounded capitalize ls0"
                    style="border-radius: 23px;"
                    @click="openModal()"
                    id="contactButton">Érdekel</button>
            <script type="text/javascript">
            $('#$contactButton').click(function() {
                  fbq('track', 'Contact');
            </script>
          </div>
        </div>
      </div>
    </div>

    <!-- modal -->
    <div id="wrapper"
         class="container">
      <modal v-if="showModal">

        <div slot="header"
             class="container">
          <div class="row">
            <h5 class="modal-title"
                id="modal-get-startedTitle">Lépj kapcsolatba velem</h5>
            <button class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="closeModal()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>

        <div slot="body">

          <div>
            <p><i class="fa fa-phone "
                 style="padding-right:10px"></i>06-30/731-3591</p>
          </div>

          <div>
            <a href="mailto:info@satiweb.hu"><i class="fa fa-envelope "
                 style="padding-right:10px; margin-bottom:1.3rem"></i>info@satiweb.hu</a>
          </div>

          <div>
            <a href="http://m.me/Atiballer"><i class="fab fa-facebook-messenger"
                 style="padding-right:10px; margin-bottom:1.3rem"></i>Kattints ide és írj
              Messengeren</a>
          </div>

          <form>
            <div class="form-group">
              <label for="inputName">Név</label>
              <input class="form-control"
                     id="inputName"
                     v-model="fields.name">
            </div>

            <div class="form-group">
              <label for="inputEmail">E-mail cím</label>
              <input type="email"
                     class="form-control"
                     id="inputEmail"
                     aria-describedby="emailHelp"
                     v-model="fields.email">
            </div>

            <div class="form-group">
              <label for="inputText">Üzenet</label>
              <textarea class="form-control"
                        id="InputText"
                        rows="3"
                        v-model="fields.message"></textarea>
            </div>

            <div class="form-group form-check">
              <input type="checkbox"
                     class="form-check-input"
                     id="inputCheck"
                     v-model="fields.checkbox">
              <label class="form-check-label"
                     for="inputCheck">Elfogadom az<a style="color:blue"
                   href="https://www.satiweb.hu/adatvedelem">
                  adatvédelmi</a> irányelveket</label>
            </div>
          </form>
        </div>

        <div slot="footer">

          <!-- <button type="button"
                    class="button button-large button-rounded capitalize ls0"
                    style="border-radius: 23px"
                    @click="closeModal()"> Bezárás </button> -->
          <button type="button"
                  class="button button-large button-rounded capitalize ls0"
                  style="border-radius: 23px"
                  data-dismiss="modal"
                  @click="submitForm()">
            Érdekel
          </button>

          <div class="alertek">
            <div class="alert alert-success"
                 role="alert"
                 v-show="postSuccess === true">
              Siker! Hamarosan felveszem Veled a kapcsolatot!
            </div>
            <div class="alert alert-danger"
                 role="alert"
                 v-show="postSuccess === false">
              Valami hiba történt, próbáld újra!
            </div>

            <div v-if="errors.length"
                 class="alert alert-danger"
                 role="alert">
              <p>
                <b>Kérlek javítsd a következőt:</b>
                <ul>
                  <li v-for="error in errors"
                      :key="error">{{ error }}</li>
                </ul>
              </p>
            </div>
          </div>

        </div>

      </modal>
    </div>

  </div>

</template>

<script>
import axios from "axios";
import Modal from "~/components/Modal";

export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      fields: {
        name: "",
        email: "",
        message: "",
        checkbox: false
      },
      postSuccess: null,
      errors: []
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    submitForm() {
      this.errors = [];

      if (!this.fields.name) {
        this.errors.push("Név megadása szükséges.");
      }
      if (!this.fields.email) {
        this.errors.push("E-mail cím megadása szükséges.");
      } else if (!this.validEmail(this.fields.email)) {
        this.errors.push("Valós e-mail címet írj be.");
      }
      if (!this.fields.checkbox) {
        this.errors.push("Az adatvédelmi tájékoztató elfogadása szükséges.");
      }

      if (!this.errors.length) {
        return axios
          .post(
            "https://satiweb.firebaseio.com/contactMessages.json",
            this.fields
          )
          .then(() => {
            this.postSuccess = true;
            this.fields = {};
          })
          .catch(() => {
            this.postSuccess = false;
          });
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>


<style scoped>
h2,
label {
  font-weight: 200;
  text-align: center;
  letter-spacing: 1.5px;
}

@media only screen and (max-width: 1024px) {
  .webshop {
    margin: auto;
  }
}
.pricing {
  position: relative;
}
.bottommargin-lg {
  margin-bottom: 80px !important;
}
.pricing-box {
  margin: 0 20px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.08);
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.075);
  border-radius: 3px;
  text-align: center;
}
.pricing-title {
  padding: 15px 0;
  background-color: transparent;
  border-radius: 3px 3px 0 0;
  text-shadow: 1px 1px 1px #fff;
  border-bottom: 0;
}
.pricing-price {
  position: relative;
  padding: 25px 0;
  color: #333;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
}
.pricing-price span.price-tenure {
  display: block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 10px 0 0 0;
  text-align: center;
  color: #888;
  letter-spacing: 1px;
  vertical-align: baseline;
}
.pricing-price:after {
  content: "";
  position: absolute;
  width: 100px;
  border: 0;
  top: auto;
  bottom: 0;
  left: 50%;
  margin-left: -50px;
}
.pricing-features ul {
  margin: 0;
  padding: 15px 0;
  list-style: none;
}
.pricing-features li {
  padding: 6px 0;
  font-size: 14px;
}
.pricing-action {
  padding: 15px 30px;
}

.button.button-large {
  padding: 0 26px;
  font-size: 16px;
  height: 46px;
  line-height: 46px;
}
.button {
  display: inline-block;
  position: relative;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  margin: 5px;
  padding: 0 22px;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  background-color: #1abc9c;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}
.ls0 {
  letter-spacing: 0px !important;
}
.capitalize {
  text-transform: capitalize !important;
}
a {
  text-decoration: none !important;
}

ul {
  font-weight: 200;
}

.modal-title {
  margin: auto;
}

.modal-body {
  font-weight: 200;
  letter-spacing: 1.5px;
}

.modal-body a,
p {
  color: black;
  font-weight: 200;
  letter-spacing: 1.5px;
}

/* .alertek {
  margin: auto;
} */
</style>
