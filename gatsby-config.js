require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `North Atlanta Executive Air Service`,
    description: `Specializing in helicopter tours, charters, rotary or fixed wing flight training, and aircraft management in the greater Atlanta, Georgia region. Operating out of Peachtree-Dekalb airport in Buckhead, and offering a variety of aerial tours, winery excursions, and custom charters or events to fit any budget.`,
    author: `Michael Stallings`,
    published: `2021`,
    founded: `2002`,
    owner: `Alister Pereira`,
    location: `Atlanta, Georgia, USA`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`UA-204964303-1`]
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `mh68us9m`,
        dataset: `production`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `./src/data`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `www.atlantaheli.com`,
        short_name: `atlantaheli.com`,
        start_url: `/`,
        background_color: `#81e6d9`,
        theme_color: `#81e6d9`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`
  ]
};
