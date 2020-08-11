require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: `Art-Discontent`,
    siteUrl: `https://discontent.netlify.app`,
    description: `Profiles and Perspectives of Artists`,
    favicon: `https://images.ctfassets.net/6s4jk5jfys8a/33vHyExn2rHD1UK3XYfRy0/01387e7d961d9f314d38228209fe3e35/artdiscontent-logo.png?h=50&q=50`,
    logoLarge: `https://images.ctfassets.net/6s4jk5jfys8a/4AlJvkQOgWnus6xNz61yJL/12e8d23ff8b4395c39978fccf2283116/artdiscontent-small.png?w=400&q=100`
  },
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
  ],
};
