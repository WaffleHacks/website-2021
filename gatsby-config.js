module.exports = {
  siteMetadata: {
    title: "WaffleHacks",
    description: "We're hackers with hearts.",
    author: "@WaffleHacks",
    siteUrl: "https://2021.wafflehacks.org",
    image: "/images/logo.png",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    /*
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: "https://cms.wafflehacks.org",
        dev: {
          refresh: "5m",
        },
      },
    },
*/
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Waffle Hacks",
        start_url: "/",
        background_color: "#9d6832",
        theme_color: "#f1af49",
        display: "minimal-ui",
        icon: "src/images/logo.png",
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: [
          "src/css/style.css",
          "src/css/global.css",
          "src/css/countdown.css",
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
}
