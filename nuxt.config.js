const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: "Atiballer webdesign - Weboldalak tervezése, készítése",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lato"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/fork-awesome@1.1.0/css/fork-awesome.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.4.1/css/all.css"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  }
};

export default {
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  }
};
