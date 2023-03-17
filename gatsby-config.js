module.exports = {
  siteMetadata: {
    siteUrl: `https://kemalborabayraktar.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Kemal Bora Bayraktar',
        short_name: 'Kemal Bora Bayraktar',
        start_url: '/',
        background_color: '#f8f8f8',
        theme_color: '#f8f8f8',
        display: 'standalone',
        icon: 'src/images/icon.png',
        theme_color_in_head: false,
      },
    },
  ],
};
