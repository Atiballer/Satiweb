import Vue from "vue";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("~/assets/loading.gif"),
  loading: require("~/assets/loading.gif"),
  attempt: 1
});
