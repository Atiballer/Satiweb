const pkg = require("./package");

const webpack = require("webpack");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: "Satiweb - Weboldalak készítése, hirdetéskezelés",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      {
        name: "google-site-verification",
        content: "dO5dSkWXkCuGBjmv0R3bm99UCMHIIbQ_DmZrDLOjpOQ"
      },
      {
        property: "og:title",
        content: "Satiweb - Weboldalak tervezése, készítése"
      },
      { property: "og:description", content: pkg.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.satiweb.hu" },
      {
        property: "og:image",
        content: "https://i.imgur.com/qhg9j2R.jpg"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      },
      {
        href: "https://fonts.googleapis.com/css?family=Work+Sans:200,300,400",
        rel: "stylesheet"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css"
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
  css: ["~/scss/main.scss"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/vue-parallax.js", mode: "client" },
    { src: "~/plugins/aos", mode: "client" },
    { src: "~/plugins/vue-easyslider.js", mode: "client" }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    ["@nuxtjs/google-tag-manager", { id: "GTM-PBZW7RK" }],
    "@nuxtjs/sitemap"
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  sitemap: {
    hostname: "https://www.satiweb.hu",
    generate: true
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        });
      }
    },

    loaders: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        query: {
          limit: 1000,
          name: "img/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        query: {
          limit: 1000,
          name: "fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  }
};
