const pkg = require("./package");

const webpack = require("webpack");

const gtmId = "GTM-PBZW7RK";

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
      { hid: "description", name: "description", content: pkg.description },
      {
        property: "og:title",
        content: "Atiballer webdesign - Weboldalak tervezése, készítése"
      },
      { property: "og:description", content: pkg.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.satiweb.hu" },
      {
        property: "og:image",
        content: "https://imgur.com/a/VLat1dK"
      }
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
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      },
      {
        href: "https://fonts.googleapis.com/css?family=Roboto",
        rel: "stylesheet"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/fork-awesome@1.1.0/css/fork-awesome.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.4.1/css/all.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800%7C;Roboto:100,500"
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
  plugins: [{ src: "~/plugins/vue-lazyload", ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ["@nuxtjs/google-tag-manager", { id: "GTM-PBZW7RK" }],
    ["@nuxtjs/google-analytics"],
    "@nuxtjs/sitemap"
  ],

  "google-analytics": {
    id: "UA-86922186-3"
  },

  sitemap: {
    hostname: "https://www.satiweb.hu",
    generate: true
  },

  /*
** Router change
*/
  router: {},

  /*
  ** Build configuration
  */
  build: {
    vendor: ["jquery", "popper.js", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
    /*
      ** Run ESLint on save
      */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
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
